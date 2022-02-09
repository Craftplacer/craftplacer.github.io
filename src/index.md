---
title: Home
include-title: false
allow-indexing: true
---

# Welcome to my site!

<p style="text-align:center"><marquee>The first and only website you wanna visit ヾ(•ω•`)o</marquee></p>
<p style="text-align:center"><i>A new place of what the web used to be and a part of <b>me</b></i></p>

<table class="sections">
    <thead>
        <tr>
            <th><h2>Latest blog posts</h2></th>
            <th><h2>Latest micro blogs</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                {% include latest-posts.html %}
            </td>
            <td>
                {% include latest-microblogs.html %}
            </td>
        </tr>
    </tbody>
</table>