---
layout: article
title: Why do I remember non-anti aliased fonts better than they should be?
date: 2021-02-12
tags: present-time
cover: /assets/images/posts/D084914C.png
comments: true
---
When you boot up one copy of Windows 95, 2000 or XP, you'll get greeted with the user interface when ClearType wasn't the default back then.

<!--more-->

[ClearType](https://docs.microsoft.com/en-us/typography/cleartype/) is Microsoft's anti-aliasing technology for screen fonts on LCD screens. Which has seen a decline in their more modern UIs like Windows 8[^1] (as it's more tailored to grayscale text).

![](/assets/images/posts/C3CFBC0E.png)

It's also what you see when you zoom into text produced by Windows, fonts with red/orange and blue outlines.

Ignoring ClearType for a second, what if you're more craving for the text rendering before ClearType was standardized?

Well you can just go to *System Properties > Advanced > Performance* and disable *Smooth edges of screen fonts*.

At the first glance it looks pretty normal, until you start open modern applications like a web browser and start browsing the web.

# New fonts are incompatible without anti-alias

<img src="/assets/images/posts/42c1d263.png" align="right">

As the modern UI style became more popular, we started to see more custom fonts. No more system default fonts like "Arial", "Microsoft Sans Serif". Instead we saw new fonts, not optimized for running in small resolutions or without anti-alias.

Anti-alias became one of the most common assumptions on the web. (Which I am also a poor offender of, and sort of a hypocrite)

| ![](/assets/images/posts/3E8B8157.png)  | ![](/assets/images/posts/9D861800.png)  | ![](/assets/images/posts/5D50C99C.png) |
| :-: | :-: | :-: |
| Anti-alias on, default settings | Anti-alias off, default settings | Anti-alias off, small font size with Arial |

Sadly, you can't do much except enforcing your system font in your browser settings or writing an user style.

With the uprise of Electron-based apps, that effect amplifies, with Discord looking like dogshit with anti-alias disabled. Forcing you to either enable anti-alias or modding Discord to use another font family or font size risking you a ban. 

[^1]: <https://www.istartedsomething.com/20120303/cleartype-takes-a-back-seat-for-windows-8-metro/>