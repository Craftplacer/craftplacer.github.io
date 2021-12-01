---
title: Principles of *proper* web development
---

When you publish something on the web there are many options, but most people are sometimes met with frustration visiting websites. Those range from the website slowly building up, interactive elements that interrupt the user, and countless others. This guide will show you the best tips towards writing a modern and lightweight site.

**Note:** This is not a complete HTML beginner guide, only a guide as orientation what to aim for.

## Don't blindly use templates or tools

Understand what the user receives on their end, in terms of HTML, CSS and JS.

Using a random JS powered framework for a simple site means yours going into ***trash***.

*"Why?"*, you may ask?

It could've been avoided by taking a different approach and actually save load times, improve client-side performance ~~and make some nerds who get angry over the bloated internet of today a bit more happy~~.

## Build on HTML5, improve with CSS and enhance with JS

HTML5 is the greatest standardized version of HTML as of yet and brings many useful features. With this, CSS should be seen as supplemental and JavaScript as optional.

### Writing for HTML first

A simple web page with a blog article can be done with this structure:

```html
<html>
    <head>
        <title>My great blog post - MySite.com</title>
    </head>
    <body>
        <nav>
            <!-- Add navigation here -->
        </nav>
        <main>   
            <article>
                <h1>My great blog post</h1>
                <p>Great paragraph isn't it?</p>
            </article>
        </main>
        <footer>
            <!-- Add some uninteresting footer here -->
        </footer>
    </body>
</html>
```

Structuring your site is using easy-to-understand tags like [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav), [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) and [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer).

Using [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) tag can improve machine-readability and for example help the reader mode of your web browser recognize what part of the page is actually the blog post.

Accessibility and machine-readability can be also improved by "perfecting" the HTML source code of your pages.

### Styling with CSS second

You now reached your point where you have content, but a really ugly default browser styles with Times New Roman. Congratulations. But don't be afraid, you can change this now:

A simple trick to get rid of the ugly font is first of all to tell our browser to use a different one with the snippet down below:

```css
html {
    font-family: 'Arial', sans-serif;
}
```

And ✨ magic ✨ ensues and now your page has nice sans serif text. But what does the snippet actually do? In short, it tells that the browser should use the "Arial" font on the HTML tag, that is, basically our entire page. What if we don't have "Arial"? Our browser now sees `sans-serif` which instructs it to use the next available sans serif font.

#### Centered-layout

Ok, alright, we got ugly font gone now, but what about layout? We don't like reading text spanning over our entire screen. That's also no problem, here's a simple fix to that, a fixed-width layout:

```css
body {
    max-width: 900px;
    margin: 0 auto;
}
```

This tells our browser to constrain the `<body>` of our page to `900px` max or lower, while using the available whitespace distributed to the left and right sides, making the `<body>` *centered*.

#### Turning an `ul` tag into a navigation bar

[This article from the **Mozilla Developer Network** about **"Split Navigation"**](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Split_Navigation), explains everything you need to know. 

#### Keeping it plain HTML compatible

Don't forget to check how your site looks **without** your CSS styling. Yes I'm serious. If it looks okay, go on. If it's all over the place, you need some reworking to do.

At this point, it's recommended that you read more into CSS itself. Like hinted at before, I'm against frameworks, and write things yourself if you want/can. But don't hesitate to use CSS pre-processors like [Sass](https://sass-lang.com/).

### Making it interactive with JS third

**TLDR:** Have strong reasons why you want to include JavaScript in your page before you do it, e.g. your site is a web-app or it makes functionality better than over old HTML form submissions.

Now static websites are boring somewhat, but if you think about it:

Do you really need JavaScript in most cases?

It really depends on what your needs are: if you'd like to have fluid webpage updates because the user interacts with for example a comments section a lot, then maybe JavaScript is really the best.

But can some work be alleviated by your backend? If the answer is yes, then you should try avoiding JavaScript at first and only use it when necessary.

On this site, JavaScript is only loaded conditionally on some pages, like the [diary page](/diary) or the comments like on [the guestbook](/guestbook).

## Informing machines about your content

One term used throughout this guide was **machine-readability**. This is where we don't want to make our source code overly complicated for machines and humans understand, and even more want to provide extra machines information about our site.

### Adding metadata to make previews on communication platforms more appealing

![A picture showing an embed provided by Discord with number annotations showing 1. Kaiteki; 2. Home; 3. The comfy Fediverse client; 4. (The logo); 5. (The color stripe)](/img/blog/web-previews/discord-web-embed-with-legend.png)

1. **Site name**

   Provided by `<meta property="og:site_name" content="Kaiteki"/>`.

2. **Page title**

   Provided by `<meta property="og:title" content="Home"/>`.

3. **Page description**

   Provided by:
   - `<meta name="description" content="The comfy Fediverse client"/>`
   - `<meta property="og:description" content="The comfy Fediverse client">`

4. **Additional image**

   Provided by `<meta property="og:image" content="https://craftplacer.moe/projects/kaiteki/img/kaiteki.png"/>`.

5. **Website color**

   Provided by `<meta name="theme-color" content="#FF7890">`, [read more on this here](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android).

[Continue reading on this subject on the cookbook recipe "Website Metadata"]({% link _cookbook/website-metadata.md %})

## But I don't want to copy & paste everything written in HTML!

Seems you never heard of templating frameworks or site generators, especially static ones.

This site is built using [Jekyll](https://jekyllrb.com/) the most widespread solution for this sorta thing. It uses the [Liquid](https://github.com/Shopify/liquid) templating language by Shopify. GitHub is deploying this site using their [Pages](https://pages.github.com/) offering, with automatic "source-to-site" deployment.

The advantages of <abbr title="static site generators">SSGs</abbr> are the following:

- They get generated **only once** on the server or development/build pipeline and can be cached forever for everyone until updated.

- Visitors don't need to run ***any*** JavaScript to make your site render, making it already one of the faster ones compared to most others.

## Check up with Lighthouse for additional improvement tips.

Chromium ships with a powerful webpage analyser called [Lighthouse](https://developers.google.com/web/tools/lighthouse/) which can find several issues in categories: Performance, accessibility, SEO and so forth.

## Conclusion

Don't be lazy, put some effort in minimizing your page and use all the tools at your disposal.

It benefits search engine ranking and mobile visitors, making your page preferred by visitors over others.