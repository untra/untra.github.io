---
layout: page
title: Philosophy
permalink: /philosophy
sitemap:
    priority: 1.0
    changefreq: weekly
    lastmod: 2019-08-16T16:31:30+05:30
---
# Philosophy

These are the lessons of computer science, software engineering, life and philosophy I have come to recognize as very much real and significant. This is not trite wisdom, but forces of the cosmos that have influenced my life significantly.

> ## Laws

### Moore's Law
The observation that the number of transistors in integrated circuits would double every two-five years. This prediction has held true since its inception in 1965 to around 2015; computers kept becoming faster and their performance and durability increased as well.

Moore's law has significantly declined. While computers have gotten exponentially faster over the years, the serious improvements in computing will now have to be made by better and more advanced software.

### Eroom's Law

The observation that cost advances in biotechnology and drug discovery has doubled approximately every nine years. The high fixed cost of serious pharmaceutical drug discovery has increased significantly. This phenomena was identified in the 1980's, and is named as the reciprocal to Moore's law. The causes of Eroom's Law are multiple (regulation, extraneous resources, no low-hanging fruit, etc.) but, like Moore's law, is exponential in its force.

Exponential Forces Like Moore's and Eroom's significantly influence the shape of any market. Be cognizant of these forces, and they can be utilized effectively or avoided entirely.

### Law of Diminishing Returns

At a certain point, no amount of additional expended effort into any productive process will result in some yield lower than other incremental per-unit returns.

Eventually, its not worth it to expend additional energy to capture the remainder of the market or demand.

This is rarely a problem for software, but can often be a problem for businesses with limited resources such as time or capital or people.

### Conway's Law

Conway's Law says that the shape of the software will resemble the communication structure of the teams that built it. Named after computer programmer Melvin Conway in 1967:

> _organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations._

This law then suggests the following is true: Composing teams into individual segments that do not communicate with each other will be result in software composed of modules that does not communicate with each other. This can be a good or a bad thing depending on your design, but when I find teams are "throwing their code over the fence to _the other guys_" I recognize that there is a lack of communication happening between these groups.

Complex software may require multiple teams to effectively manufacture

### Brooks' Law
The observation in project management that the incremental addition of people to a project eventually yields an individual who makes the project arrive later or have a lower quality because of their addition.

This observation emerges as a result of contributors needing to be onboarded and requiring time to ramp up. Each new worker will need to be integrated into the team, and that the communication overhead results in this process becoming greater for each additional contributor.

In general, smaller teams working on a cohesive project will produce results more efficiently; a team should really be no bigger than 12 individuals, but I enjoy a size of around 4-8 individuals (I've also heard "no more than 2 pizzas to feed the team")

> ## Software Engineering

### The Two Hard Problems
There are two hard problems in computer science:

* _naming things_

* _off by one errors_

* _cache invalidation_

### Single Responsibility Principle
The S in SOLID states the importance of classes and modules remaining focused in their intent and application. Code that does one thing, and does it well, becomes trusted and employed by other developers.

Complex software must be built on trust, and code with additional side-effects and trapdoors will not be reused. Code that is explicit, simple, and responsible for explicitly doing that one simple thing will be trusted and reused.

### Software Engineering is a Team Sport
Do not forget this; writing software means collaboration and communication. Like all great human works, its creation is rarely done by one tenacious individual in a long sitting. The myth of the lone programmer hacking out legendary code through the sheer autistic will of his own programming expertise is exactly that; a myth. Software is built by at least one team of people, and great software is written by a team of friends.

### Assume Reasonable Defaults
When you go to a restaurant, are you typically asked if you would like forks and knives? Customization and configuration is a necessity for any software, and for most of our daily life experiences, but some things are just _expected_.

Understand what your customers expect, and ensure the default experience and configuration is everything they will expect as well. Customization fatigue is a threat to any product made too configurable.

### Explicit is better than Implicit
Computers tend to do exactly what you tell them to do. So when software makes an assumption, the user will usually only notice the assumption if it is dead wrong. Wherever possible, assume nothing or everything. Combined with reasonable defaults you can still provide a "batteries included" experience without assuming too much configuration debt.

### Favor code over documentation
All the Field Procedures, Technical Publications, and Hyper-Linked-Cross-Referenced documentation is not a substitute for working software.

This is not to say documentation is optional; it is entirely expected of most complex software to provide a manual for installation and usage by more than one roles (administrator, operator, technician, etc...)

Documentation is absolutely one-half of any deliverable software package, but shortcomings in the software _cannot be permanently patched_ with addendum in the documentation.

### The dirty little secret: its all state mutation
Every interesting thing a computer does is mutations of existing state; the changing of colors on the monitor, the shifting of storage on hard drives, the communication across networks, the opening and closing of file handles, _all of it_ is a variation of mutating state.

The purely functional world of software programming lives in its walled garden assuming infinite RAM and no external forces that could interact with it.

But the `stdin`, the `stdout`, the accessing of time and entropy are all outside unstable forces that make software really interesting, and will have to be utilized to build sufficiently useful software.

### Simple and Dumb is preferable to Complex and Smart

The hammer has not evolved much over the years. The heavy dual-sided ends with a long solid handle is a big step up from the trusty rock, which still has its uses but just doesn't accurately and effectively pound nails in as nicely as the hammer.

And yeah, the nail gun is cool and all, but they typically require some form of electricity, and special nails, and a little bit of practice. An improvement, but still not quite irreplaceable to a dumb hammer.

The tools that humans adopt tend to have the lowest barrier of entry. They should even feel like toys! When it comes to building software, a simple product with multiple uses will take greater advantage of any complex piece of technology that fails to work as effectively.

### CAP Theorem
Cap theorem states that any distributed store of state cannot provide more than two of the following guarantees:

* **Consistency**: Every read request receives the most recent write (but maybe an error)
* **Availability**: Every request receives a response (but never an error)
* **Partition Tolerance**: The system continues to operate despite a physical split or replication of the storage.

CAP theorem applies to just about every database, document store or at-rest state. This ties into _there is no right way to do software engineering_; the tools you decide to use cannot always be golden hammers, and a good software engineer will know to study the resources and problem.

### Sorting takes O(n log n) , sorted search takes O (log n)
This nuance is important to remember. It means that caching and pre-processed data structures can improve algorithm performance when fed clean data. If you have a sorted list or a binary search tree, you can have very efficient log n access if you perform reasonable maintenance to keep your index sorted. This is a phenomena in real life; Becoming organized takes a lot of effort, but staying organized takes far less.

Clean data and organization is the recipe for high-performing software.

### Garbage in, garbage out
If you are performing statistics or machine learning or any general variety of linear regression, make sure that your training data is clean and consistent and conducive to the modeling you intend to perform. Bad Data will give bad results from which bad conclusions will be derived. Bad data models will turn into bad robots which will turrn into bad robot conclusions. And those bad conclusions will turn into bad judgements against good people.

Make sure the feedback you are receiving is the intended feedback you want from your input. Measure your models. Give them good inputs and expect good results. Give them garbage inputs and train the models to indicate "unknown" as a viable conclusion.

It also helps to constrain the scope of the input data. Machine learning to detect credit card fraud is very reasonable; credit card transactions, while being complex and PII sensitive data structures, have finite and bounded shapes that will plot nicely to a convex N-space.

### You cannot change what you cannot first measure.
Performance should always take second fiddle to function. Working at all is a prerequisite to working efficiently. But improvement first requires measurement. That's why every great training montage starts with a weigh-in on a scale: there is no victory in progress without first seeing how much effort it takes to achieve that progress.

### _"Premature optimization is the root of all evil."_
\- Donald Knuth

### _"First make it work, then make it beautiful. And then, if you have to, make it fast."_
\- Joe Armstrong

> ## Good Life Advice

### _"Do not declare victory until the party has started."_
\- Sam Volin

### Transitions are hard; Change is good.
\- Shelly

### _"Can a man still be brave if he's afraid?" "That is the only time a man can be brave."_
\- Bran Stark to Eddard Stark

### _"Its not about how hard you fall, but about how quickly you get back up."_
\- AB

### _"Favor Multitaskers to Unitaskers"_
\- Alton Brown

### _"In writing, you must kill all your darlings."_
\- William Faulkner

### _"Sometimes it may feel like the world is ending, but it is not. Remember the world has never ended before, and if it does you'll just have fewer problems."_
\- Jonathon Myers

### _"Never agree to go on an offshore fishing trip with your investors."_
\- Frank Hassanabad

#### Deals
* Time kills all Deals
* Not just what you sell, but who you sell it to
* Sales is not a zero-sum game. It is not necesarilly a win-loose relationship. Done correctly, a good deal is a win-win-win for all parties.

#### Zen
\- There is no right way. There is no wrong way. There is.
\- There is physics, and there is fairness. Do not confuse these, they are different; one is real, and one is collectively acknowledged as real but isn't really.
