---
layout: post
title:  "Optimization 3 - Convex Analysis"
date:   2016-01-24 17:00:00
mathjax: True
---
## Convex Analysis Review Notes
Or, everything you ever needed to know from... Convex analysis?
<img src="{{ site.url }}/img/convex_1.png" align="right">

### Convex Sets
 Let $$S \subseteq \mathbb{R}^n$$. The set $$S$$ is called *Convex* if for any $$x_1, x_2 \in S$$ and $$\lambda \in (0,1) $$, it holds that

$$\lambda x_1 + (1 - \lambda) x_2 \in S$$

 A set is convex if, from everywhere in S, all other points are visible. If two points in $$S$$ are chosen, and a line drawn between them, all points on that line should also be in $$S$$.
<img src="{{ site.url }}/img/convex_2.png" align="left"> If a point $$x` \notin S$$ can be found such that $$x` = \lambda x_1 + (1 - \lambda) x_2$$ for $$x_1, x_2 \in S$$ and $$\lambda \in (0,1) $$, then $$S$$ is not convex.
