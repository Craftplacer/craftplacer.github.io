---
title: Website Metadata
tags: [ "metadata", "html", "open graph", "oembed" ]
---

## Embed metadata

### Plain HTML

<table>
    <thead>
        <th></th>
        <th>HTML</th>
    </thead>
    <tbody>
        <tr>
            <th>1. Site</th>
            <td>Domain</td>
        </tr>
        <tr>
            <th>2. Title</th>
            <td>
                <details open>
                    <summary><code>&lt;title&gt;</code></summary>
                    <code>&lt;title&gt;<u>Page title</u>&lt;/title&gt;</code>
                </details>
                </td>
        </tr>
        <tr>
            <th>3. <abbr title="Description">Desc.</abbr></th>
            <td>
                <details open>
                    <summary><code>description</code></summary>
                    <code>&lt;meta name="description" content="<u>Page description</u>"/&gt;</code>
                </details>
                </td>
        </tr>
        <tr>
            <th>4. Image</th>
            <td>
                <details open>
                    <summary><code>lang</code></summary>
                    <code>&lt;html lang="<u>en</u>"/&gt;</code>
                </details>
                </td>
        </tr>
        <tr>
            <th>5. Color</th>
            <td>
                <details open>
                    <summary><code>theme-color</code></summary>
                    <code>&lt;meta name="<u>theme-color</u>" content="#FF0000"&gt;</code>
                    <p><a href="https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android">Read more</a></p>
                </details>
            </td>
        </tr>
        <tr>
            <th>Locale</th>
            <td>
                <details open>
                    <summary><code>lang</code></summary>
                    <code>&lt;html lang="<u>en</u>"&gt;</code>
                </details>
                </td>
        </tr>
    </tbody>
</table>


### [Open Graph Protocol](https://ogp.me/)

<table>
    <thead>
        <th></th>
        <th>OGP</th>
    </thead>
    <tbody>
        <tr>
            <th>1. Site</th>
            <td>
                <code>&lt;meta property="og:site_name" content="<u>Example Site</u>"/&gt;</code>
            </td>
        </tr>
        <tr>
            <th>2. Title</th>
            <td>
                <code>&lt;meta property="og:title" content="<u>Page title</u>"/&gt;</code>
            </td>
        </tr>
        <tr>
            <th>3. <abbr title="Description">Desc.</abbr></th>
            <td>
                <code>&lt;meta property="og:description" content="<u>Page description</u>"/&gt;</code>
            </td>
        </tr>
        <tr>
            <th>4. Image</th>
            <td>
                <code>&lt;meta property="og:image" content="<u>https://example.org/example.jpeg</u>"&gt;</code>
                <code>&lt;meta property="og:image:alt" content="<u>An example image</u>"&gt;</code>
            </td>
        </tr>
        <tr>
            <th>Locale</th>
            <td>
                <code>&lt;meta property="og:locale" content="<u>en_US</u>"&gt;</code>
            </td>
        </tr>
    </tbody>
</table>

### [Twitter cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

<table>
    <thead>
        <th></th>
        <th>Twitter</th>
    </thead>
    <tbody>
        <tr>
            <th>1. Site</th>
            <td>
                <details open>
                    <summary><code>twitter:site</code></summary>
                    <code>&lt;meta name="twitter:site" content="<u>@ExampleSite</u>"/&gt;</code>
                    <p><b>Note:</b> Twitter expects a valid account handle</p>
                </details>
            </td>
        </tr>
        <tr>
            <th>2. Title</th>
            <td>
                <details open>
                    <summary><code>twitter:title</code></summary>
                    <code>&lt;meta name="twitter:title" content="<u>Page title</u>"/&gt;</code>
                </details>
            </td>
        </tr>
        <tr>
            <th>3. <abbr title="Description">Desc.</abbr></th>
            <td>
                <details open>
                    <summary><code>twitter:description</code></summary>
                    <code>&lt;meta name="twitter:description" content="<u>Page description</u>"/&gt;</code>
                </details>
            </td>
        </tr>
        <tr>
            <th>4. Image</th>
            <td>
                <details open>
                    <summary><code>twitter:image</code></summary>
                    <code>&lt;meta name="twitter:image" content="<u>https://example.org/example.jpeg</u>"/&gt;</code>
                    <code>&lt;meta name="twitter:image:alt" content="<u>An example image</u>"/&gt;</code>
                </details>
            </td>
        </tr>
    </tbody>
</table>

### Representations

#### Discord

![A picture showing an embed provided by Discord with number annotations showing 1. Kaiteki; 2. Home; 3. The comfy Fediverse client; 4. (The logo); 5. (The color stripe)](/assets/img/blog/web-previews/discord-web-embed-with-legend.png)

#### Pleroma

![A picture showing a website card on Pleroma, with number annotations showing 2. Home; 3. The comfy Fediverse client; 4. (The logo)](/assets/img/blog/web-previews/pleroma-card-with-legend.png)

#### Twitter

![A picture showing a card on Twitter, with number annotations showing 2. Home; 3. The comfy Fediverse client; 4. (The logo)](/assets/img/blog/web-previews/twitter-card-with-legend.png)