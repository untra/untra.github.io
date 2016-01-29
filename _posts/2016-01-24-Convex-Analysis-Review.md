---
layout: post
title:  "Optimization 3 - Convex Analysis"
date:   2016-01-24 17:00:00
mathjax: True
keywords: [convex analysis, convex, analysis, extreme points, polytope, polyhedra, polyhedron, andréasson]
desc: The convex analysis review you never knew you needed.
---
## Convex Analysis Review Notes
Or, everything you ever needed to know from... Convex analysis?
<img src="{{ site.url }}/img/convex_1.png" align="right">

### Convex Sets
 Let $$S \subseteq \mathbb{R}^n$$. The set $$S$$ is called *Convex* if for any $$x_1, x_2 \in S$$ and $$\lambda \in (0,1) $$, it holds that

$$\lambda x_1 + (1 - \lambda) x_2 \in S$$

 A set is convex if, from everywhere in S, all other points are visible. If two points in $$S$$ are chosen, and a line drawn between them, all points on that line should also be in $$S$$.

 If a point $$x^* \notin S$$ can be found such that $$x^* = \lambda x_1 + (1 - \lambda) x_2$$, then $$S$$ is *not* convex.
<img src="{{ site.url }}/img/convex_2.png" align="left">

### Properties of Convex Sets

* The set $$\mathbb{R}^n$$ is a convex set
* The empty set is a convex set
* The set $$\{ x \in \mathbb{R}^n : \|a\| \geq a \}$$ is convex for every value of $$a \in \mathbb{R}$$
* The set $$\{ x \in \mathbb{R}^n : \|a\| = a \}$$ is non-convex for $$a > 0$$
* Finite sets are non-convex *(why?)*
* The *intersection* of two convex sets is also a convex set.
<br/>
<br/>
<br/>

### Convex and Affine Hulls and Combinations
Let $$V \subseteq \mathbb{R}^n$$.

* An *Affine Combination* of the points $$\{ v_1, v_2, \dots v_k \}$$ is a vector $$v$$ satisfying:

$$ v = \sum_{i=1}^k \lambda_i v_i \text{ and }\sum_{i=1}^k \lambda_i = 1$$

If the weights additionally satisfy $$\lambda_i \geq 0$$ for all $$i = 1 \dots k$$, then $$v$$ is called a *Convex Combination*

* The *Affine Hull*, denoted by $$\text{aff } V$$, is the smallest affine subspace of $$\mathbb{R}^n$$ that includes $$V$$
  * $$\text{aff } V$$ is the set of all convex combinations of points in $$V$$
* The *Convex Hull*, denoted by $$\text{conv } V$$, is the smallest convex set that includes $$V$$
  * $$\text{conv } V$$ is the set of all convex combinations of points in $$V$$
* *Carathéodory's Theorem:* Let $$x \in \text{conv }V$$, where $$V \subseteq \mathbb{R}^n $$. Then $$x$$ can be expressed as a convex combination of $$n+1$$ or fewer elements.
* Simmilarly, let $$x \in \text{aff }V$$, where $$V \subseteq \mathbb{R}^n $$. Then $$x$$ can be expressed as a affine combination of $$n+1$$ or fewer elements.

### Properties thereof
* The affine hull of three or more points in $$\mathbb{R}^2$$ not all lying in the same line is $$\mathbb{R}^2$$ itself
* The affine hull of three or more points in $$\mathbb{R}^3$$ not all lying in the same line is the plane in $$\mathbb{R}^3$$ intersecting those points.
* The affine hull of an affine space is the space itself.
* The convex hull of a convex space is the space itself.

### Polytopes and Polyhedron

* A subset $$P$$ of $$\mathbb{R}^n$$ is a *Polytope* if it is the convex hull of finitely many points in $$\mathbb{R}^n$$

> In layman's terms, a Polytope is the geometric structure in $$\mathbb{R}^n$$ created by the convex hull $$P$$. That's still kinda confusing, so consider these examples:
>
> * Any polygon in $$\mathbb{R}^2$$ is a polytope
> * A cube, a tetrahedron, and pyramids are all polytopes in $$\mathbb{R}^3$$
> * circles are *not* polytopes in $$\mathbb{R}^2$$
> * Simmilarly spheres are *not* polytopes in $$\mathbb{R}^3$$

A point $$v$$ of a convex set $$P$$ is called an *Extreme Point* if $$v = \lambda x_1 + (1 - \lambda ) x_2$$ for $$x_1, x_2 \in P$$, $$\lambda \in (0,1)$$, it follows that $$v = x_1 = x_2$$
In other words, an extreme point is a point that is not an interior point of any line segment lying entirely in the polytope P

This section *really* needs pictures, unfortunately.

* Let $$V \subset \mathbb{R}^n$$ and let $$P$$ be the polytope $$\text{conv }V$$. Then $$P$$ is equal to the convex hull of the extreme points of $$V$$

* A subset $$P$$ of $$\mathbb{R}^n$$ is called a *Polyhedron* if there exists a matrix $$A \in \mathbb{R}^{m \times n}$$ and a vector $$b \in \mathbb{R}^m$$ such that $$P = \{ x \in \mathbb{R}^n: A x \leq b\}$$

* *Algebraic Characterization of Extreme Points:* Let $$\hat{x} \in P = \{ x \in \mathbb{R}^n: A x \leq b\}$$, where $$A \in \mathbb{R}^{m \times n}$$ has $$\text{rank }A = n$$ and $$b \in \mathbb{R}^m$$. Furthermore let $$\hat{A} \hat{x} = \hat{b} $$ be the equality subsystem of $$A \hat{x} = b$$. Then $$\hat{x}$$ is an extreme point of $$P$$ if and only if $$\text{rank }\hat{A} = n$$

* Let $$P$$ be a polyhedron. The number of points in $$P$$ is uncountably infinite *(why?)*. The number of extreme points of a polyhedron is finite *(why?)*
* The convex hull of the extreme points of a polyhedron is a polytope.


### Sources

{% highlight text %}
@book{andréasson2005introduction,
  title={An Introduction to Continuous Optimization},
  author={Andr{\'e}asson, N. and Evgrafov, A. and Patriksson, M.},
  isbn={9789144044552},
  url={https://books.google.com/books?id=dxdCHAAACAAJ},
  year={2005},
  publisher={Professional Publishing Svc.}
}
@misc{ wiki:xxx,
  author = "Wikipedia",
  title = "Convex set --- Wikipedia{,} The Free Encyclopedia",
  year = "2015",
  url = "https://en.wikipedia.org/w/index.php?title=Convex_set&oldid=686390268",
  note = "[Online; accessed 25-January-2016]"
}
@misc{ wiki:xxx,
   author = "Wikipedia",
   title = "Carathéodory's theorem (convex hull) --- Wikipedia{,} The Free Encyclopedia",
   year = "2016",
   url = "https://en.wikipedia.org/w/index.php?title=Carath%C3%A9odory%27s_theorem_(convex_hull)&oldid=698633316",
   note = "[Online; accessed 25-January-2016]"
 }
 http://math.caltech.edu/Simon_Chp8.pdf
{% endhighlight %}
