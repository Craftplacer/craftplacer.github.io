function fedi_buildAttachmentRow(e){if(null==e)return null;for(var t=document.createElement("p"),n=0;n<e.length;n++){var a=e[n];if("image"==a.type){var i=document.createElement("img");i.classList="fediverse-post__attachment",null==a.description?i.alt="(Attachment without description)":i.alt=a.description,i.src=a.url,t.appendChild(i)}}return t}function fetchStatuses(c){var u=new XMLHttpRequest;u.onload=function(){for(var e=JSON.parse(u.responseText),t=0;t<e.length;t++){var n=e[t],a=document.createElement("tr"),i=document.createElement("td"),r=document.createElement("img");r.src=n.account.avatar,r.alt="",r.classList="fediverse-post__avatar",i.appendChild(r),a.appendChild(i);var d=document.createElement("td"),l=document.createElement("p");l.innerText="@"+n.account.acct,l.classList="fediverse-post__author",d.appendChild(l);var o=document.createElement("span");o.style.marginBottom="8px",o.innerHTML=n.content,d.appendChild(o);var s=fedi_buildAttachmentRow(n.media_attachments);null!=s&&d.appendChild(s),a.appendChild(d),c.appendChild(a)}},u.open("GET","https://pl.craftplacer.moe/api/v1/accounts/A76AJOE9DOMN1gXe8u/statuses?exclude_replies=true&exclude_reblogs=true&pinned=false&limit=5",!0),u.send()}window.addEventListener("load",function(){slot=document.getElementById("fedi-slot"),-1!=navigator.userAgent.indexOf("Google")||-1!=navigator.userAgent.indexOf("Bot")||-1!=navigator.userAgent.indexOf("Chrome-Lighthouse")?slot.innerText="Status fetching disabled.":fetchStatuses(slot)});