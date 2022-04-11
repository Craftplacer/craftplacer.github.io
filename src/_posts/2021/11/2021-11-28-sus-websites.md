---
title: Suspicious websites with Craft
---

My website has been online for more than a year, starting off with `.github.io` until migrating to the `.moe` TLD. One thing I did was to register my website as a property on [Google Search Console](https://search.google.com/search-console). This allows me to see is what sites link to mine, which also exposes websites who actually scape other kinds of data. Let's take a look together:

## [`github-wiki-see.page`](https://github-wiki-see.page/)

This is a (in my opinion: poor) crawler for GitHub wikis (as it says on the tin). The [reference](https://github-wiki-see.page/m/Craftplacer/Kaiteki/wiki/Unable-to-login-using-Kaiteki-Web) to my site was from one of the wiki help pages I wrote for Kaiteki. I find this kind of service highly questionable, but oh well.

## [`stackmuncher.com`](https://stackmuncher.com/)

`stackmuncher.com` is apparently some kind of scraper for GitHub profiles apparently intended for employers. I find this annoying enough, by this **not** being opt-in.

From my past experience, I already got subscribed to a company newsletter and received emails out of nowhere from someone called "Sean Bowley" from a company called "iO Associates", looking for developers based in Germany (for some really weird reason, only Germany, with their emails containing German greetings). I had no prior contact to them, and it seems like they just scraped my profile off GitHub. Even funnier, by German law I'm not allowed to work for them, and they'd knew this if they didn't scraped my contact in a half-assed way and instead contacted me personally, asking me professionally.

I didn't hear back from them after sending a reply saying exactly that.

## [`repoarchive.com`](https://repoarchive.com/)

Yet another GitHub scraper. 

> **About RepoArchive.com**
>
> As the name suggests, RepoArchive.com contains the archive of millions of repositories.
>
> RepoArchive.com does not store any data, but only uses cache data for a period of time. The idea behind RepoArchive.com is simply to give users a better reading experience.
>
> So while surfing RepoArchive.com, enjoy the visuality we created for some boring stuff.

## Fediverse instances

- <https://pl.veryamt.com/>
- <https://bbs.kawa-kun.com/>
- <https://firebird.zone/>

Those domains are all instances that let Google index remote statuses and/or user profiles of mine. I find letting search engines index Fediverse instances highly questionable as it is privacy-invading and makes content removal harder, but that's another topic for another blog post.

## Conclusion

If you want your data to be scraped 10x a day, use GitHub.

If you're on Fediverse, expect your posts and your profile be indexed by Google, ***even if*** your instance disallows it.

But Craft, did you really not expect to be indexed? I did, but obviously *everyone* takes a part of what content they *re-*distribute.