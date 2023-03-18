---
layout: post
title:  "Nondeterministic Time Sucks"
date:   2018-11-22 17:00:00
keywords: [Nondeterminism, Time Suck, Software Engineering, regex, sync folder, vagrant, pricing]
---

This is a record of all of the times software became a drag, sucking up time, resources and energy trying to fix a stupid problem or a silly mistake.

These issues have consumed hours of my life, and the solutions to these monkey puzzles were ultimately trivial. There is a lot of sarcasm and snark in these stories; I was typically pretty pissed and exhausted when I arrived at conclusions to these challenges.

I keep this record to ensure I never make the same mistakes in software engineering again.

#### UTF-8 is not a content encoding

HTTP Headers for the most part should be respected. `Content-Encoding: UTF-8` is not a legal content type, and can cause some web server frameworks to point to make the wrong conclusion handling the response and report 415 `Content-Type: application/json;charset=UTF-8`, [which is misleading fo real](https://stackoverflow.com/questions/9254891/what-does-content-type-application-json-charset-utf-8-really-mean).


#### Opt-in Tutorials and onboarding

Welcoming new users to a multi-user product is exceptionally challenging. Giving them a marketing persona guided tour of how to use your software for maximum success is the best option, but where do you enforce it? on every new user logging into your tool? Does that include samlIdp users? invited users?

A good onboarding flow is something your support should guide new users to, and measure.
Marketing is going to want product to make tweaks and changes to onboarding flows, and close them for maintenance.
Put all your metric tracking and user engagement tools in place while walking the user through our application, in the designated flow that is _not considered at login_.

new user onboarding should be slim and minimal, and available just at the entrance to application login, but not _the entrance_ to the application.

#### The pricing page is it's own page

The hardest part of any meaningful business oriented web application is not the business logic, but the billing and account management tools. Most websites that offer an in-app checkout page have that hosted as it's own _page_. A separate route and part of the app users exit-from-the-gift-shop through. Thats the correct answer.

But screw conventional wisdom if you're really creative and making bad decisions, why not design the checkout page to be a modal that can be activated on any page in the app? That way users can update billing information _anywhere_ and _all the time_?

It can only become a problem if those modal makes a bad api call, or has questionable state management, or is broken in any capacity. Because if that's the case then the _entire application becomes unusable._

#### Regexes have performance concerns
I was using regexes with [Gatling](https://gatling.io/docs/2.3/http/http_check/) in an attempt to check the returned responses of requests across a websocket connection (lesson learned: this is wwaayy too tricky to do with gatling, the tooling for doing exactly this is difficult over websockets, but [artillary](https://artillery.io/) has proven itself to be a high-quality load testing tool.)

Suddenly one day the performance of the system slowed to a crawl. I went mad. We were getting measurable results at first, and then the system would fail to process scanning any incomming messages over the socket.

Suddenly the performance of the application slowed to an impenetrable ttl'ing crawl because of one extra character mistakenly added to the regex parsing the messages.

A regex being applied to each message sent over the wire had a small edit added to it, and the performance concern of the regex wasn't yet understood. It took two days and two developers to find the mistake.

Coding Horror has a good explanation of this [phenomena](https://blog.codinghorror.com/regex-performance/).

Edit: cloudflare experienced a [self-induced outage](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/) on July 2nd 2019 due to poor backtracking regex performance.

#### Vagrant sync_files pointed to /tmp can choke running applications
point your vm config to a folder to sync files here from your host machine to your guest machine:

```
config.vm.synced_folder ".", "/vagrant", type: "virtualbox"
```

but understand that delicate OS folders that are synced may cause performance problems with the guest vm. Folders such as:

* `$HOME` the home directory contains the .ssh key needed to enable sshing into this machine. Syncing this folder may prevent the .ssh key from spawning, preventing the user from actually being able to ssh into the machine.

* `/tmp` this is the junk drawer folder, sure. But multiple applications use it for just that. Expect nondeterminism syncing this folder!

* `/usr/bin` the box may be unable to invoke certain applications syncing this folder. Bad idea!

#### HTTP headers will need to approved by CORS
* https://enable-cors.org/server_nginx.html

I'll edit in this story another time...

#### Python fails to compile due to mixed/missing extra tab/space
* see also: https://unspecified.wordpress.com/2011/10/18/why-pythons-whitespace-rule-is-right/

Mixing tabs and spaces in code is considered bad style, especially today when we have excellent editors that helped ensure consistancy with whichever preference (the answer is spaces you savages).

But when you don't have an editor cleaning up after you, and you're using an older version of python 2.4, and suddenly your code doesn't compile with a cryptic error message (the messages are better now, btw)

you don't think that maybe, _maybe_ the reason the code you compiled is you mixed up whitespaces.

and yet _here we are_.

When invoking the Python command line interpreter with the `-t` option, it issues warnings about code that illegally mixes tabs and spaces. When using `-tt` these warnings become errors. These options are highly recommended!

#### Mutation in the single store of truth
Redux is excellent.

Having a single store of truth and state is an incredibly smart idea.

Heres a bad idea: poisoning that single source of truth by introducing mutations. [The redux guide](https://redux.js.org/introduction/threeprinciples#changes-are-made-with-pure-functions) says so as well:

> Remember to return new state objects, instead of mutating the previous state.

All it takes in ECMAScript2018 javascript to return a new state object:

```js
const objClone = { ...obj };
```

C'mon, thats so slick! but if you introduce any little mutations, especially on a significantly nested `obj`, those may persist on the `objClone`.

And suddenly your single source of truth is _full of lies_.

#### The UTF-8 BOM

[salt file.contains module will throw when attempting to parse utf-8 encoded files with BOM](https://github.com/saltstack/salt/issues/54357)

## Conclusion
Keeping a record of where you have thrashed as a developer helps keep yourself humble. Software can be tricky, and computers are fickle. But the next time you are stuck and confused, reflecting on your past nondeterministic-time-suck-tar-pits becomes a resource you can rely on later.
