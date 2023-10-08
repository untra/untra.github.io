---
layout: post
title:  A self-replicating FACTORIO factory
date:   2023-03-26 17:00:00
keywords: [factorio, recursive, blueprints, city block, aai, trains, mod, roundabout]
desc: Designing a self-building Factorio factory
published: False
---

# Designing a self-everything factory

* Self-Building: expanding rail network (DONE) (6) (5) (9)
* Self-Sustaining: extracts raw resources and connects water and oil to the dedicated fluid network (10) (0) (0)
* Self-Energized: energy supply must be measured and maintained, as a power outage requires intervention (10) (10) (5)
* Self-Planning: aware of deficiencies in supply, and building to demand 
* Self-Defending: capable of fighting back against the locals
* Self-Researching: aware of what to research and when to expand science demand
* Self-Upgrading: capable of upgrading and repairing the existing factory
* Self-Winning: factory proceeds to reach victory conditions (launch a rocket) alongside meeting production demands
* Self-Contained: final solution is simple for anyone to understand and deploy
* Self-Controlled: no centralized control. (1) (1) (10)

_all of this should be able to run in parallel and without centralized coordination_

## Preface; what is Factorio?

Factorio is a somewhat boring factory simulation game that a small portion of people (typically those on the spectrum) will become infatuated with, forgetting to call family and friends and eat, dedicating all spare brainpower to the neverending chessgame of factory expansion. Factorio's interconnected quilt of automation madness and creative puzzle solving is catnip for someone on the spectrum. It positions the player as a survivor on a planet of factory-hating aliens, and with but a few resources to mine the resource, the player must create the machines to forge the metal plates, assemble the intermediates and juggle five other tasks all while enticing the player with the final node in the DAG of launching a rocket to escape Nauvis and win.

The developers of Factorio have announced an expansion by next year to make that the first tenth of the actual game.

Factorio has a multiplayer component that is mostly unused.

## What are recursive blueprints?

Recursive blueprints is a mod for Factorio that allows a self-contained factory 

## Using recursive blueprints to make the factory build itself

A professional software engineer that plays Factorio thinks about it. dreams about it. The infinite regress of self-directed assured and automated victory. The self-building factory calls to me like a young supple kurt godel, grasping my loins with a firm but confident grip while whispering into my ear: _nondeterministic_.

It's so goddamn enticing it has made other Factorio addicts pursue this very goal before, and I wanted to learn about them.
Some of these self-expanding factories are quite unique.

#### Judging self expanding factories:



### Josef

https://www.youtube.com/watch?v=l1DhWQtYLIs

Alright, so the josef bot is cool as it can extract resources and dedicate cells to resource extraction.
It expands it's rail framework linearly from all sides, and then uses a spiral cell targeter to decide if each cell is one of:

1. raw resources extraction
2. fluid extraction
3. a self contained

which is pretty simple and also pretty boring

However the cells are huge to accommodate it's expansion (5 chunks). It even makes an effort at defense. and it's centralized in it's growth and development.

### Nilaus

https://www.youtube.com/watch?v=UEAhqPV0xug

nilaus made a point about his design: trains in blueprints at producer stations:

https://youtu.be/dpLrnf1jWK8?si=2i6GLaCcPloRVfPK&t=2040

> If I have more requester stations than provider stations I will wound up with more trains, and those trains would then try to go to some provider stations, and would get stuck. I want them idle at the provider stations.





