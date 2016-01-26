---
layout: post
title:  "Optimization 4 - Homework 2"
date:   2016-01-25 17:00:00
mathjax: True
---
## Homework Problems

### #3.1 (Convexity of Polyhedra)
> Let $$A \in \mathbb{R}^{m \times n}$$ and $$B \in \mathbb{R}^m$$. Show that the polyhedron
>
> $$P := \{ x \in \mathbb{R}^n : Ax \leq b \}$$
>
> is a convex set

* Consider a polyhedron $$P = \{ x \in \mathbb{R}^n: A x \leq b\}$$ . Let $$x_1, x_2 \in P$$ and $$0 \leq \lambda \leq 1$$. Then

$$A(\lambda x_1 + (1-\lambda) x_2) = \lambda A x_1 + (1 - \lambda) A x_2 \leq  b (\lambda + (1 - \lambda) ) = b$$

* Then $$( \lambda x_1 + (1 - \lambda ) x_2) \in P$$
* Then by the definition of convexity, it follows that $$P$$ is convex
* Done $$\checkmark$$

### #3.2 (Polyhedra)
> Which of the following sets are polyhedra?


### #3.3 (Extreme Points)
> Consider the polyhedron $$P$$ defined by
>
> $$x_1 + x_2 \leq 2$$
>
> $$x_2 \leq 1$$
>
> $$x_3 \leq 2$$
>
> $$x_2 + x_3\leq 2$$
>
> a) is $$x^*_1 := (1,1,0)^T$$ an extreme point of $$P$$?

> b) is $$x^*_2 := (1,1,1)^T$$ an extreme point of $$P$$?

### #3.4 (Extreme Points)
> Consider the polytope defined by
>
> $$x_1 + x_2 \leq 2$$
>
> $$2x_1 + x_2 \geq 2$$
>
> $$x_1 - x_2 \leq 1$$
>
> Use both algebraic and graphical models to answer the following questions.
>
> a) is $$x^*_1 := (1,1)$$ an extreme point of $$P$$?

> a) is $$x^*_2 := \frac{1}{2}(3,2)$$ an extreme point of $$P$$?

### #3.5 (Existance of extreme points in LP's)
> Let $$A \in \mathbb{R}^{m \times n}$$ be such that $$rank A = m$$, and let $$B \in \mathbb{R}^m$$. Show that if the polyhedron
>
> $$P := \{ x \in \mathbb{R}^n : Ax = b ; x > 0^n \}$$
>
> has a solution, then it has an extreme point.
