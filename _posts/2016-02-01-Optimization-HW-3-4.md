---
layout: post
title:  "Optimization 5 - Homework 5"
date:   2016-02-01 17:00:00
mathjax: True
keywords: [convex, analysis, homework, andréasson, spina, extreme points, rank, finding extreme points, matrix, polyhedron]
desc:
---
## Homework Problems

##5: Ch 3: 11, 12, 13, 14, 15, 16.

### 11
> Determine whether the function $$f(x) := 2 a^2 - 3 a b + 5 b^2 -2 a + 6b$$ is concave, convex, or neither on $$\mathbb{R}^2$$

* $$f(x)$$ will be either concave or convex if it is twice differentiable with respect to all of it's variables.
  * $$\frac{df}{da} = 4a -3b -2$$
  * $$\frac{df}{db} = 10b -3a +6$$
  * $$\frac{df^2}{da^2} = 4$$
  * $$\frac{df^2}{dab} = -3$$
  * $$\frac{df^2}{db^2} = 10$$
  * $$\frac{df^2}{dba} = -3$$
* Then $$f(x)$$ is either convex or concave. It will be convex if the hessian matrix is postivie definite, or concave if the matrix is negative definite.
* The Hessian matrix $$H$$ is :

$$\begin{align}H=\begin{bmatrix}
\frac{df^2}{da^2}&\frac{df^2}{dab}\\\frac{df^2}{dba}&\frac{df^2}{db^2}
\end{bmatrix}&=
\begin{bmatrix}
4&-3&\\-3&10&
\end{bmatrix}
\end{align}$$

> * The hessian matrix row reduces to the identity, and is therefore nonsingular. Then $$H$$ is positive definite.
> * Then $$f(x)$$ is **Convex**. Done $$\checkmark$$

### 12

> * Is the function $$f(a,b) = a^2 + b^2 + 3 a b + 10 a - 11 b + 5$$ convex?
> * Is the function $$f(x) = \sum_{i=1}^n h_i(x_i)^2$$ convex for $$i = 1 \dots n$$ if $$h_i : \mathbb{R} \rightarrow \mathbb{R}_+$$?
> * if $$h_i : \mathbb{R} \rightarrow \mathbb{R}$$? (give a counterexample)

### 13
> Let $$a > 0$$. Which of the following one-variable functions are convex or strictly convex / concave or strictly concave?

*  $$f(x) := \ln x, \text{ for } x > 0$$
: **Strictly Concave**
<a title="View with the Desmos Graphing Calculator" href="https://www.desmos.com/calculator/z9i2vzw2sj">  <img src="https://s3.amazonaws.com/calc_thumbs/production/z9i2vzw2sj.png" width="200px" height="200px"   style=".left border:1px solid #ccc; border-radius:5px"  /></a>
*  $$f(x) := - \ln x, \text{ for } x > 0$$
: **Strictly Convex**
<a title="View with the Desmos Graphing Calculator" href="https://www.desmos.com/calculator/jqwkddaqv6">  <img src="https://s3.amazonaws.com/calc_thumbs/production/jqwkddaqv6.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>
*  $$f(x) := - \ln (1 - e^{-ax}) \text{ for } x > 0$$
: **Convex**
<a title="View with the Desmos Graphing Calculator" href="https://www.desmos.com/calculator/w0vp8ms5si">  <img src="https://s3.amazonaws.com/calc_thumbs/production/w0vp8ms5si.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>
*  $$f(x) := \ln (1 - e^{-ax}) $$
: **Concave**
<a title="View with the Desmos Graphing Calculator" href="https://www.desmos.com/calculator/bjwhuwwxjo">  <img src="https://s3.amazonaws.com/calc_thumbs/production/bjwhuwwxjo.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>
*  $$f(x) := e^ax$$
: **Convex**
<a title="View with the Desmos Graphing Calculator" href="https://www.desmos.com/calculator/edkcwll91e">  <img src="https://s3.amazonaws.com/calc_thumbs/production/edkcwll91e.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>
*  $$f(x) := x \ln x \text{ for } x > 0$$
: **Strictly Convex**
<a title="View with the Desmos Graphing Calculator" href="https://www.desmos.com/calculator/lcqeparyvm">  <img src="https://s3.amazonaws.com/calc_thumbs/production/lcqeparyvm.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>


### 14
Which of the following functions are convex or strictly convex?

> * $$f(x) := \ln(e^x_1 + e^x_2)$$
> * $$f(x) := \ln \sum_{j=1}^n e^{a_j x_j} $$, where $$a_j = 1 \dots n$$ are constants
> * $$f(x) := \sqrt{\sum_{j=1}^n x_j^2}$$
> * $$f(x) := x_1^2 / x_2 \text{ for } x_2 > 0$$
> * $$f(x) := - \sqrt{x_1 x_2} for x_1, x_2 > 0$$

### 15
> Consider the following function:

> $$f(x,y) := 2x^2 - 2xy + \frac{1}{2}y^2 + 3x - y$$

>* Express the function in matrix-vector form
>* Is the function singular?
>* is the function convex?

### 16
> Let $$f_1 \dots f_k : \mathbb{R}^n \rightarrow \mathbb{R}$$ be convex functions and let f be defined as $$f(x) = \max \{ f_1(x), \dots, f_k(x)\}$$. Show that f is convex. State a similar result for concave functions.
