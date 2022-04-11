var commentsButton = null;

function loadCommentsButton() {
	var script = document.getElementById("comments");

	var loadButton = document.createElement("button");
	loadButton.textContent = "Load comments";
	loadButton.onclick = loadComments;

	script.parent.appendChild(loadButton);

	return loadButton;
}

function loadComments() {
	var script = document.getElementById("comments");

	var div1 = document.createElement("div");
	div1.classList = "panel";

	var div2 = document.createElement("div");
	div1.appendChild(div2);

	var telegramScript = document.createElement("script");
	telegramScript.src = "https://comments.app/js/widget.js?3";
	telegramScript.setAttribute("data-comments-app-website", "YTaA8W00");
	telegramScript.setAttribute("data-limit", "3");
	telegramScript.setAttribute("data-color", "E098AC");
	telegramScript.setAttribute("data-dislikes", "1");
	telegramScript.setAttribute("data-colorful", "1");
	div2.appendChild(telegramScript);

	script.parent.appendChild(div1);

	commentsButton.parent.removeChild(commentsButton);
	commentsButton = null;
}

window.addEventListener("load", loadCommentsButton, false);
