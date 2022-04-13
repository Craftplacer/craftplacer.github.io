function getSoftware() {
    var dict = {};
    var items = navigator.userAgent.split(" ");
    for (var i = 0; i < items.length; i++) {
        var kv = items[i].split("/");
        if (kv.length == 2) {
            dict[kv[0]] = kv[1];
        }
    }
    return dict;
}

function needsCompatibility() {
    var software = getSoftware();
    
    if (software["Firefox"] != null && software["Firefox"].split(".")[0] < 3) {
        return true;
    }
    
    if (software["Gecko"] != null && software["Gecko"] < 20070309) {
        return true;
    }

    if (navigator.userAgent.indexOf("MSIE ") != -1) {
        return true;
    }
    
    return false;
}

function applyCompatibilityStylesheet() {
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "/assets/css/compat.css";

    var head = document.getElementsByTagName("head")[0];
    head.appendChild(stylesheet);
}

if (needsCompatibility()) {
    applyCompatibilityStylesheet();
}
