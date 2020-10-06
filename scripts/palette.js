// This scripts adds copy functionality to palette pages.
var elements = document.getElementsByClassName("palette-color__code");

for (var i = 0; i < elements.length; i++) {
	var e = elements[i];

	e.onclick = function (e) {
	copy(e.target);
	}

	e.href = "#";
	e.classList.add("mdi", "mdi-content-copy");
}

function copy(element) {
	var snackbarContainer = document.querySelector('#snackbar');

	navigator.clipboard.writeText(element.innerText).then(function() {
		var data = {message: 'Copied to clipboard'};
		snackbarContainer.MaterialSnackbar.showSnackbar(data);
	}, function() {
		var data = {message: 'Failed to copy'};
		snackbarContainer.MaterialSnackbar.showSnackbar(data);
	});
}