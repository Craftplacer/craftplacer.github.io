function fedi_buildAttachmentRow(e){if(null==e)return null;for(var t=document.createElement("p"),n=0;n<e.length;n++){var a=e[n];if("image"==a.type){var d=document.createElement("img");d.classList="fediverse-post__attachment",null==a.description?d.alt="(Attachment without description)":d.alt=a.description,d.src=a.url,t.appendChild(d)}}return t}function fetchStatuses(c){var u=new XMLHttpRequest;u.onload=function(){for(var e=JSON.parse(u.responseText),t=0;t<e.length;t++){var n=e[t],a=document.createElement("tr"),d=document.createElement("td"),i=document.createElement("img");i.src=n.account.avatar,i.alt="",i.classList="fediverse-post__avatar",d.appendChild(i),a.appendChild(d);var r=document.createElement("td"),l=document.createElement("p");l.innerText="@"+n.account.acct,l.classList="fediverse-post__author",r.appendChild(l);var o=document.createElement("span");o.style.marginBottom="8px",o.innerHTML=n.content,r.appendChild(o);var s=fedi_buildAttachmentRow(n.media_attachments);null!=s&&r.appendChild(s),a.appendChild(r),c.appendChild(a)}},u.open("GET","https://pl.craftplacer.moe/api/v1/accounts/A76AJOE9DOMN1gXe8u/statuses?exclude_replies=true&exclude_reblogs=true&pinned=false&limit=5",!0),u.send()}function loadFediverseFeed(){slot=document.getElementById("fedi-slot"),-1!=navigator.userAgent.indexOf("Google")||-1!=navigator.userAgent.indexOf("Bot")||-1!=navigator.userAgent.indexOf("Chrome-Lighthouse")?slot.innerText="Status fetching disabled.":fetchStatuses(slot)}window.attachEvent?window.attachEvent("load",loadFediverseFeed):window.addEventListener("load",loadFediverseFeed);