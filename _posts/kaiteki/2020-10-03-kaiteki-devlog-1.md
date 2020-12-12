---
layout: article
title: "Kaiteki Devlog #1"
date: 2020-11-29
tags: kaiteki
---

This is the first edition of Kaiteki's devlog, this is intended to be a weekly format showing what changes I've made over the last week to Kaiteki.

These are all recent changes made in the last weeks.

## New changes

<ul style="list-style-type:none;margin:0;padding:0">
    <li>
        <details>
            <summary>Posts now show their counts, age and visibility</summary>
            <p>Those are rather insignificant changes, but probably welcome ones.</p>
            <p>I'm not sure about the design of the counts (especially regarding the layout, padding and so on), but we'll see how it will evolve as the app matures.</p>
            <p><img src="/assets/images/posts/0f56e28a.png"/></p>
        </details>
    </li>
    <li>
        <details>
            <summary>You can now pick instance emojis</summary>
            <p>In Kaiteki, you can now tap the little emoji icon in the toolbar and pick emojis. Compared to Husky, it's tabbed using the provided category information provided by Pleroma and Misskey.</p>
            <p><img src="/assets/images/posts/b810fed4.png"/></p>
            <p>This was some what annoying to implement at first, because the way I did it initially caused to memory leak. (shown below)</p>
            <p><img src="/assets/images/posts/bf191c70.png"/></p>
            <p>I settled on tabbing the emojis per pack so it's more efficient.</p>
        </details>
    </li>
</ul>

## Minor changes

- <details>
    <summary>The login form auto-validates when you start typing</summary>
    <video autoplay loop muted><source src="/assets/videos/9aa5eb6d.webm"></video>
  </details>
- Icon buttons inside the composing form have been commented out.
- I started using Flutter's own widget for panning and zooming into images. (which now fills the entire screen!)
- The username beside the display name of an user's post is now faint, making it look better and easier to distinguish.  

## Internal changes

- Ported a function similar to C# LINQ's `Enumerable<T>.GroupBy(...)` (which I obviously called `Iterable.groupBy(...)`).
- Endpoints for reactions on Pleroma
- Support for `PUT` and `DELETE` added