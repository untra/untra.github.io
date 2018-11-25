---
layout: post
title:  "Nondeterministic Time Sucks"
date:   2018-11-22 17:00:00
keywords: [Nondeterminism, Time Suck, Software Engineering, regex, sync folder, vagarant]
---

This is a record of all of the times software became a drag, sucking up time, resources and energy trying to fix a stupid problem or a silly mistake.

These issues have consumed hours of my life, and the solutions to these monkey puzzles were ultimately trivial.

I keep this record to ensure I never make the same mistakes in software engineering again.

#### Regexes have performance concerns
I was using regexes with [Gatling](https://gatling.io/docs/2.3/http/http_check/) in an attempt to check the returned responses of requests across a websocket connection (lesson learned: this is wwaayy too tricky to do with gatling, the tooling for doing exactly this is difficult over websockets, but [artillary](https://artillery.io/) has proven itself to be a high-quality load testing tool.)

Suddenly one day the performance of the system slowed to a crawl. I went mad. We were getting measurable results at first, and then the system would fail to process scanning any incomming messages over the socket.

Suddenly the performance of the application slowed to an impenetrable ttl'ing crawl because of one extra character mistakenly added to the regex parsing the messages.

A regex being applied to each message sent over the wire had a small edit added to it, and the performance concern of the regex wasn't yet understood. It took two days and two developers to find the mistake.

Coding Horror has a good explanation of this [phenomena](https://blog.codinghorror.com/regex-performance/).

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

Mixing tabs and spaces in code is considered bad style, especially today when we have excellent editors that helped ensure consistancy if whichever style we prefer (the answer is spaces you savages).

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

C'mon, thats so slick! but if you introduce any little mutations, especially on a signficiantly nested `obj`, those may persist on the `objClone`.

And suddenly your single source of truth is _full of lies_.

#### Conclusion
Keeping a record of where you have thrashed as a developer helps keep yourself humble. Software can be tricky, and computers are fickle. But the next time you are stuck and confused, reflecting on your past nondeterministic-time-suck-tar-pits becomes a resource you can rely on later.