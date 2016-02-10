---
layout: post
title:  "Optimization 4 - Homework 3"
date:   2016-01-25 17:00:00
mathjax: True
keywords: [convex, analysis, homework, andréasson, spina, extreme points, rank, finding extreme points, matrix, polyhedron]
desc:
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
>
> * $$S := \{ y_1 a + y_2 b : y_1, y_2 \in (-1,1) \}$$, where $$a,b \in \mathbb{R}^2$$ are fixed.

$$S$$ is a polyhedron. It is a parallelogram such that $$s = \text{conv }\{ a_1 + a_2, a_1 - a_2, -a_1 + a_2, -a_1 - a_2 \}$$, which is a polytope, and hence a polyhedron.

> * $$S := \{ x \in \mathbb{R}^n : x \geq o^n ; x^T 1^n = 1; \sum_{i=1}^n x_i a_i = b_1 ; \sum_{i=1}^n x_i a_i^2 = b_2  \}$$, where $$a_i \in \mathbb{R}$$ for $$i = 1, \dots , n$$, and $$b_1, b_2 \in  \mathbb{R}$$ are fixed.

$$S$$ is a polyhedron.

> * $$S := \{ x \in \mathbb{R}^n : x \geq 0^n ; x^T y \leq 1 $$ for all $$y$$ such that $$\|y\|_2 = 1\}$$

$$S$$ is not a polyhedron. Note that although S is defined as an intersection of halfspaces it is not a polyhedron, as it requires an infinite number of halfspaces.

> * $$S := \{ x \in \mathbb{R}^n : x^T y \leq 1 $$ for all $$y$$ such that $$\sum_{i=1}^n \vert y_i \vert = 1 \}$$

$$S = \{ x \in \mathbb{R}^n : -1^n \leq 1^n \}$$, that is, a polyhedron

> * $$S := \{ x \in \mathbb{R}^n : \| x - x_0 \|_2 \leq \| x - x_0 \|_2 \}$$, where $$x_0, x_1 \in \mathbb{R}^n$$ are fixed

$$S$$ is a polyhedron. By squaring both sides of the inequality, it follows that -2(x_0 - x_1)^T x \leq \| x_1 \|_2^2 - \|x_0\|_2^2.$$ So $$S$$ is in fact a halfspace.

> * $$S := \{ x \in \mathbb{R}^n : \| x - x_0 \|_2 \leq \| x - x_i \|_2, i = 1, \dots, k \}$$, where $$x_0, \dots, x_k \in \mathbb{R}^n$$ are fixed.

S is a polyhedron, and is the intersection of k halfspaces.





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
> a) is $$\hat{x}_1 := (1,1,0)^T$$ an extreme point of $$P$$?

* $$\hat{x}_1$$ is an extreme point of $$P$$ iff $$\text{rank }\hat{A} = n = 3$$
* Recall $$\hat{A}$$ is the matrix such that $$\hat{A} \hat{x}_1 = \hat{b} $$
* $$x_1 + x_2 = 2 \checkmark$$
* $$x_2 = 1 \checkmark$$
* $$x_3 \neq 2 \mathbf{X}$$
* $$x_2 + x_3 \neq 2 \mathbf{X}$$
* Then $$\hat{A} \hat{x}_1 = \hat{b}$$ with

$$\begin{align}
&\begin{bmatrix}
1&1&0\\0&1&0\\
\end{bmatrix}
\begin{bmatrix}
1\\1\\0
\end{bmatrix}&=
\begin{bmatrix}
2\\1\end{bmatrix}
\end{align}$$

* Then $$\text{rank }\hat{A} = 2 \neq n$$
* Therefore $$\hat{x}_1$$ is not an extreme point of $$P$$.

> b) is $$\hat{x}_2 := (1,1,1)^T$$ an extreme point of $$P$$?

* $$\hat{x}_2$$ is an extreme point of $$P$$ iff $$\text{rank }\hat{A} = n = 3$$
* Recall $$\hat{A}$$ is the matrix such that $$\hat{A} \hat{x}_2 = \hat{b} $$
* $$x_1 + x_2 = 2 \checkmark$$
* $$x_2 = 1 \checkmark$$
* $$x_3 \neq 2 \mathbf{X}$$
* $$x_2 + x_3 = 2 \checkmark$$
* Then $$\hat{A} \hat{x}_2 = \hat{b}$$ with

$$\begin{align}
&\begin{bmatrix}
1&1&0\\0&1&0\\0&1&1
\end{bmatrix}
\begin{bmatrix}
1\\1\\1
\end{bmatrix}&=
\begin{bmatrix}
2\\1\\2\end{bmatrix}
\end{align}$$

* Then $$\text{rank }\hat{A} = 3 = n$$
* Therefore $$\hat{x}_2$$ is an extreme point of $$P$$.

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
> a) is $$\hat{x}_1 := (1,1)$$ an extreme point of $$P$$?

* $$\hat{x}_1$$ is an extreme point of $$P$$ iff $$\text{rank }\hat{A} = n = 2$$
* Recall $$\hat{A}$$ is the matrix such that $$\hat{A} \hat{x}_1 = \hat{b} $$
* $$x_1 + x_2 = 2 \checkmark$$
* $$2x_1 + x_2 \neq 2 \mathbf{X}$$
* $$x_1 - x_2 \neq 1 \mathbf{X}$$
* Then $$\hat{A} \hat{x}_1 = \hat{b}$$ with

$$\begin{align}
&\begin{bmatrix}
1&1\\
\end{bmatrix}
\begin{bmatrix}
1\\1
\end{bmatrix}&=
\begin{bmatrix}
2\end{bmatrix}
\end{align}$$

* Then $$\text{rank }\hat{A} = 1 \neq n$$
* Therefore $$\hat{x}_1$$ is not an extreme point of $$P$$.

> b) is $$\hat{x}_2 := (\frac{3}{2},\frac{1}{2})$$ an extreme point of $$P$$?

* $$\hat{x}_2$$ is an extreme point of $$P$$ iff $$\text{rank }\hat{A} = n = 2$$
* Recall $$\hat{A}$$ is the matrix such that $$\hat{A} \hat{x}_2 = \hat{b} $$
* $$x_1 + x_2 = \checkmark$$
* $$2x_1 + x_2 \neq 2 \mathbf{X}$$
* $$x_1 - x_2 = 1 \checkmark$$
* Then $$\hat{A} \hat{x}_2 = \hat{b}$$ with

$$\begin{align}
&\begin{bmatrix}
1&1\\1&-1\\
\end{bmatrix}
\begin{bmatrix}
\frac{3}{2}\\\frac{1}{2}
\end{bmatrix}&=
\begin{bmatrix}
2\\1\end{bmatrix}
\end{align}$$

* Then $$\text{rank }\hat{A} = 2 = n$$
* Therefore $$\hat{x}_2$$ is not an extreme point of $$P$$.
