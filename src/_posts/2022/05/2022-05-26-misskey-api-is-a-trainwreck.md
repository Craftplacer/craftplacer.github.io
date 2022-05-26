---
category: "Hating the world"
---

# The Misskey API is a trainwreck

I am developing Kaiteki, my attempt at building the "best" Fediverse (and by far extension, social media) client. Adding support for Misskey was way harder than Mastodon and Pleroma combined. There are multiple issues plaguing it.

## The API breaks several conventions

Normally, developing API is pretty standardized because everyone is using REST. Misskey inherits the design of the [outdated Twitter v1 API](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/overview) and goes beyond that. 'How?' you may ask? **All** requests are made using `POST`.

Compared to 'normal' APIs, you'd send a `GET` request to `/items` to get a list of items, send a `POST` request to `/items` to add an item to the list, and so on.

Misskey on the other hand, uses `POST` for each request, while tacking on an action verb to the end of each endpoint (e.g. `/items/create`), reminiscent of <abbr title="Remote Procedure Call, basically functions that can be called by remote appliactions">RPC</abbr>.

Another convention that is broken is how authorization is handled in APIs. The [`Authorization` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) exists for a reason. It's role is to authorize the request. Misskey instead includes the token in the request body as a field called `i`. This has caused me to commit my Misskey token once due to me not knowing what that omnious `i` stood for. It's like your maths teacher asking you to solve for `x` for the first time.

## Schemas lack organization and are bloated

Taking the [user schema](https://misskey.io/api-doc#operation/users/show) as an example (which apparently uses "one of"s, which also broke ApiToDart, thanks for that) we can see an insane list of fields define when looking at `MeDetailed`.

I don't know why the developers didn't group flags together to another schema, so maybe they could be reused, in a more sensible way. For example, we could've taken `isAdmin`, `isModeartor` and put it inside a schema called something around the lines of `UserStaffFlags`. The same could've been done for `isCat` and `isBot`.

Comparing to Pleroma, Pleroma has [a schema called a relationship](https://api.pleroma.social/#operation/AccountController.relationships).

## The API is poorly documented

Misskey's API documentation and schemas are [generated using an in-house tool](https://github.com/misskey-dev/misskey/blob/develop/packages/backend/src/server/api/openapi/gen-spec.ts), which works for most cases, but not all.

Going back to Kaiteki, I want to future-proof the code as much as possible. That means, things like having to handwrite each <abbr title="class that holds data for use across the application">model class</abbr> is a no-go. This task has been automated by me with a tool call [ApiToDart](https://github.com/Kaiteki-Fedi/ApiToDart), which generates code using the specifications/documentation offered by each backend.

My solution for Kaiteki's longevity falls apart with Misskey. There have been several issues:
- The schemas lying about whether a property is null or not
  - requires me manually specifying it
- The documentation is incomplete, some fields being defined as plain "objects" with no details whatsoever.
- The generated schema always assumes JSON and not other form data like multipart.

  ```json
  // ...
  "reactions": {
      "type": "object",
      "optional": false,
      "nullable": false
  },
  // ...
  ```

## Will something ever change?

While I despise Misskey's userbase, I still try to be fair about it. But the API is, like mentioned above, objectively bad. I am not the single one sharing that opinion, with a1batross (former developer of Husky) saying "at this point it's Misskey \[that\] must be patched to support your client".

It's easy to complain while doing nothing. But at the same time, I don't have 100 copies of myself to contribute to every piece of software I don't like to fix it up to the way I like it (taking Linux software as an example). Except creating an easily forgotten issue on their repository that can be easily dismissed, I don't think there is much hope.