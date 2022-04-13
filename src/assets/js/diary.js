function crypt() {
    if (document.getElementById('encrypt').checked) {
        encrypt();
    } else {
        fetchDiary();
    }
}

function fetchDiary() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'encrypted-content.html?_=' + new Date().getTime(), true);
    uncache(xhr);

    xhr.onloadstart = function () { container.innerText = "Loading..."; };
    xhr.onerror = function () { alert('Failed fetching encrypted diary.'); };
    xhr.onload = function () {
        var container = document.getElementById('diary-container');
        var password = document.getElementById('password').value;
        var decrypted = CryptoJS.AES.decrypt(xhr.responseText, password);
        container.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
    };

    xhr.send(null);
}

function encrypt() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'content.html?_=' + new Date().getTime(), true);
    uncache(xhr);
    
    xhr.onerror = function () { alert('Failed fetching diary.'); };
    xhr.onload = function () {
        var password = document.getElementById('password').value;
        var encrypted = CryptoJS.AES.encrypt(xhr.responseText, password);
        navigator.clipboard.writeText(encrypted);
        alert("👌");
    };

    xhr.send(null);
}

function uncache(xhr) {
    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
    xhr.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
    xhr.setRequestHeader("Pragma", "no-cache");
}