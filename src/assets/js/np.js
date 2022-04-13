// Now playing script

function setNowPlaying(listen, slot) {
    var np = listen.track_metadata;
    var heading = buildTextElement(slot, "h2", null);
    heading.classList = "image-heading";
    heading.innerHTML = '<img src="/assets/img/pink/np-header.gif" alt="Now playing">';

    var paragraph = buildTextElement(slot, "p", null);

    var originUrl = null; //np.additional_info.origin_url;
    console.debug(originUrl); 
    var titleElement = null;
    if (originUrl != null) {
        titleElement = buildTextElement(paragraph, "a", np.track_name + "\n");
        titleElement.href = originUrl;
    } else {
        titleElement = buildTextElement(paragraph, "span", np.track_name + "\n");
    }
    titleElement.style.fontWeight = "bold";
    

    buildTextElement(paragraph, "span", "by " + np.artist_name + "\n");
    
    if (np.release_name != null) {
        buildTextElement(paragraph, "span", "from " + np.release_name);
    }

    fetchCoverArt(np, slot);
}

function fetchCoverArt(track_metadata, slot) {
    var mbRequest = new XMLHttpRequest();

    mbRequest.onload = function () {
        var data = JSON.parse(mbRequest.responseText);
        var img = document.createElement("img");
        img.alt = "";
        img.style.width = "100%";
        img.src = "https://coverartarchive.org/release/" + data.recordings[0].releases[0].id + "/front-250";
        img.onerror = function () { slot.removeChild(img); };
        slot.appendChild(img);
    };

    var query = buildQuery(track_metadata);
    mbRequest.open("GET", "https://musicbrainz.org/ws/2/recording/?fmt=json&query=" + encodeURIComponent(query), true);
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

function fetchNowPlaying(slot) {
    var request = new XMLHttpRequest();

    request.onload = function () {
        var data = JSON.parse(request.responseText);
        if (data.payload.listens.length != 0) {
          setNowPlaying(data.payload.listens[0], slot);
        }
    };

    request.open("GET", "https://api.listenbrainz.org/1/user/craftplacer/playing-now", true);
    request.send();
}

window.addEventListener("load", function () {
  var slot = document.getElementById("np-slot");
  if (slot == null) {
      console.warn("Couldn't find now-playing slot");
  } else {
      fetchNowPlaying(slot);
  }
});