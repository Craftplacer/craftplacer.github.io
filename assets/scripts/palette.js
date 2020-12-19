// This scripts adds copy functionality to palette pages.
var elements = document.getElementsByClassName("palette-color__code");

for (var i = 0; i < elements.length; i++) {
	var e = elements[i];

	e.onclick = function (e) {
		copy(e.target);
	}

	e.href = "#";
	e.classList.add("mdi", "mdi-content-copy", "mdi-24px", "palette--copy-icon");
}

function copy(element) {
	navigator.clipboard.writeText(element.innerText);
}