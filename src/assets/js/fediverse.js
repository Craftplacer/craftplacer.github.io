function fedi_buildAttachmentRow(attachments) {
  if (attachments == null) {
    return null;
  }

  var attachP = document.createElement("p");
  for (var j = 0; j < attachments.length; j++) {
    var attachment = attachments[j];
    if (attachment.type == "image") {
      var img = document.createElement("img");
      img.classList = "fediverse-post__attachment";
      if (attachment.description == null) {
        img.alt = "(Attachment without description)";
      } else {
        img.alt = attachment.description;
      }
      img.src = attachment.url;
      attachP.appendChild(img);
    }
  }
  return attachP;
}

function fetchStatuses(slot) {
    var request = new XMLHttpRequest();

    request.onload = function () {
        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.length; i++) {
          var status = data[i];

          var row = document.createElement('tr');
          var leftCell = document.createElement('td');
          var avi = document.createElement('img');
          avi.src = status.account.avatar;
          avi.alt = "";
          avi.classList = "fediverse-post__avatar";
          leftCell.appendChild(avi);
          row.appendChild(leftCell);

          var rightCell = document.createElement('td');
          var displayName = document.createElement('p');
          displayName.innerText = "@" + status.account.acct;
          displayName.classList = "fediverse-post__author";
          rightCell.appendChild(displayName);

          var content = document.createElement('span');
          content.style.marginBottom = "8px";
          content.innerHTML = status.content;
          rightCell.appendChild(content);

          var attachmentRow = fedi_buildAttachmentRow(status.media_attachments);
          if (attachmentRow != null) {
            rightCell.appendChild(attachmentRow);
          }

          row.appendChild(rightCell);
          slot.appendChild(row);
        }
    };

    request.open("GET", "https://pl.craftplacer.moe/api/v1/accounts/A76AJOE9DOMN1gXe8u/statuses?exclude_replies=true&exclude_reblogs=true&pinned=false&limit=5", true);
    request.send();
}

function loadFediverseFeed() {
  slot = document.getElementById("fedi-slot");
  if (navigator.userAgent.indexOf("Google") != -1 ||
      navigator.userAgent.indexOf("Bot") != -1 ||
      navigator.userAgent.indexOf("Chrome-Lighthouse") != -1) {
    slot.innerText = "Status fetching disabled.";
  } else {
    fetchStatuses(slot);
  }
}

if (window.attachEvent) {
  window.attachEvent("load", loadFediverseFeed);
} else {
  window.addEventListener("load", loadFediverseFeed);
}