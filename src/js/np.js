// Now playing script

var slot = document.getElementById("np-slot");
    

function setNowPlaying(listen) {
    var np = listen.track_metadata;
    buildTextElement(slot, "h2", "Now Playing");
    
    var paragraph = buildTextElement(slot, "p", null);

    var titleElement = buildTextElement(paragraph, "span", np.track_name + "\n");
    titleElement.style.fontWeight = "bold";

    buildTextElement(paragraph, "span", "by " + np.artist_name + "\n");
    buildTextElement(paragraph, "span", "from " + np.release_name);

    fetchCoverArt(np);
}

function fetchCoverArt(track_metadata) {
    var mbRequest = new XMLHttpRequest();

    mbRequest.onload = function () {
        var data = JSON.parse(mbRequest.responseText);
        var img = document.createElement("img");
        img.src = "https://coverartarchive.org/release/" + data.recordings[0].releases[0].id + "/front-250";
        slot.appendChild(img);
    };
    
    var query = buildQuery(track_metadata);
    mbRequest.open("GET", "http://musicbrainz.org/ws/2/recording/?fmt=json&query=" + encodeURIComponent(query), true);
    mbRequest.send();
}

function buildQuery(track_metadata) {
    var query = "";
    query += "artist:\"" + track_metadata.artist_name + "\" AND";
    query += "release:\"" + track_metadata.release_name + "\" AND";
    query += "recording:\"" + track_metadata.track_name + "\"";
    return query;
}

function buildTextElement(parent, type, text) {
    var element = document.createElement(type);
    element.innerText = text;
    parent.appendChild(element);
    return element;
}

function fetchNowPlaying() {
    var request = new XMLHttpRequest();
    
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        console.debug(data);
        setNowPlaying(data.payload.listens[0]);
    };
    
    request.open("GET", "https://api.listenbrainz.org/1/user/craftplacer/playing-now", true);
    request.send();
}

if (slot === null) {
    console.warn("Couldn't find now-playing slot");
} else {
    fetchNowPlaying();
}