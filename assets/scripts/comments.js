var button = document.getElementById('comments-button');

if (button == null) {
    console.warn('No comments button found -- disabling opt-in script');
} else {
    button.onclick = function () {
        var script = document.getElementById('comments-script');

        var newScript = document.createElement("script");
        newScript.async = true;
        newScript.src = "https://comments.app/js/widget.js?2";
        newScript.setAttribute("data-comments-app-website", "YTaA8W00");
        newScript.setAttribute("data-limit", 5);
        newScript.setAttribute("data-color", "FF809E");
        newScript.setAttribute("data-dark", "1");
        newScript.setAttribute("data-dislikes", 1);

        script.parentNode.append(newScript);
        button.parentNode.removeChild(button);

        console.log('Successfully added Telegram widget');
    }

    button.disabled = false;
}
