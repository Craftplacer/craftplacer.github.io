var darkModeToggle = null;
var darkMode = null;

function applyDarkMode(enable) {
    console.debug("Setting dark mode to " + enable);

    if (enable) {
        darkModeToggle.classList.add("mdi-brightness-4");
        darkModeToggle.classList.remove("mdi-brightness-7");

        document.body.classList.remove("light");
    } else {
        darkModeToggle.classList.remove("mdi-brightness-4");
        darkModeToggle.classList.add("mdi-brightness-7");

        document.body.classList.add("light");
    }

    darkMode = enable;
    Cookies.set("dark-mode", darkMode);
}

function initDarkMode() {
    var savedValue = Cookies.get("dark-mode");

    if (savedValue == null) {
        savedValue = true;
        console.warning("No cookie found for dark mode");
    }

    applyDarkMode(savedValue);

    darkModeToggle.onclick = function () {
        applyDarkMode(!darkMode);
    };
}

window.onload = () => {
    darkModeToggle = document.getElementById("darkmode-toggle");
    initDarkMode();
};