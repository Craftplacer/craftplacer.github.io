var button = document.getElementById('comments-button');

if (button == null) {
    console.warn('No comments button found -- disabling opt-in script');
} else {
    button.onclick = function () {
        var script = document.getElementById('comments-script');
        script.nodeName = 'script';

        button.parentNode.removeChild(button);
    }

    button.disabled = false;
}
