function crypt() {
    if (document.getElementById('encrypt').checked) {
        return encrypt();
    } else {
        return fetchDiary();
    }
}

function fetchDiary() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'encrypted-content.html?_=' + new Date().getTime(), true);
    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
    xhr.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
    xhr.setRequestHeader("Pragma", "no-cache");

    var container = document.getElementById('diary-container');
    var password = document.getElementById('password').value;

    xhr.onloadstart = function () { container.innerText = "Loading..."; };
    xhr.onerror = function () { container.innerText = 'Decryption failed.'; };
    
    xhr.onload = function () {
        var decrypted = CryptoJS.AES.decrypt(xhr.responseText, password);
        container.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
    };

    xhr.send(null);
    return false;
}

function encrypt() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'content.html?_=' + new Date().getTime(), true);
    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
    xhr.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
    xhr.setRequestHeader("Pragma", "no-cache");
    
    var password = document.getElementById('password').value;

    xhr.onload = function () {
        var encrypted = CryptoJS.AES.encrypt(xhr.responseText, password);
        navigator.clipboard.writeText(encrypted);
        alert("👌");
    };

    xhr.send(null);
    return false;
}