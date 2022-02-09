# Hypocrisy of using services for open source projects

When building your project on GitHub, you'll discover many tools to improve the development of your project.

While you'll find many great features and apps, you'll stumble upon services for your project.

The problem I have with those is:

- You're relying on a **proprietary** service as a tool to develop your software.

- You have to put **money** on the table each month.

- It isn't really compatible with the idea of **FOSS**.

## Example: Localization services

Let's say, you build a website, application, what ever. You want to target non-English-speaking users. But the best free contributions come from people who don't have any idea of coding.

That's a problem for you, you have the translators, but not the onboarding for them.

That's where you use a service, that handles all the fancy frontend things for managing your translations.

Now there are two kinds of solutions:

- **Proprietary services:** [POEditor](https://poeditor.com/), [LingoHub](https://lingohub.com/), [transifex](https://www.transifex.com/), [Crowdin](https://crowdin.com/), [Phrase](https://phrase.com/)

- **Free and open services:** [Weblate](https://github.com/WeblateOrg/weblate), [Pontoon](https://github.com/mozilla/pontoon)

For open source projects, where your main incentive is ***not*** to spend or earn money, using proprietary services is bullshit. You're capped at an arbitary amount of characters or strings, until the point your application has so many strings, that you can't localize it any further. You're bound by the translation service you're using.

While proprietary solutions have their pros and cons; I don't think making people learn to use commercial products for their workflow is a good idea.