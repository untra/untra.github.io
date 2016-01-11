---
layout: post
title:  "Optimization 1 - Linear Algebra Review"
date:   2016-01-11 17:00:00
mathjax: True
---
## Linear Algebra Review Notes
Or, everything you ever needed to know from linear algebra.

### Vectors

Elements $$\mathbf{v}$$ in $$\mathbb{R}^n$$ are *Vectors*. A vector can be thought of as $$n$$ real numbers stacked on top of each other (column vectors).

$$\mathbf{v} =
                \left(
              \begin{array}{c}
                             v_1\\
                             v_2\\
                             \vdots\\
                             v_n
                      \end{array}
                      \right)
              $$

### Properties of Vectors
Let $$\mathbf{v}, \mathbf{a}, \mathbf{b}$$ be vectors in $$\mathbb{R}^n$$, and $$\gamma$$ a scalar in $$\mathbb{R}$$ . Let $$\theta$$ be the angle between vectors A and B.

![angle]({{ site.url }}/img/fig2-1.jpg)

* $$\mathbf{v}^T = (v_1, v_2, \dots, v_n)$$ is the *Transpose* of a vector.

* *Vector Addition:*

$$\mathbf{a} + \mathbf{b} := (a_1 + b_1, \dots , a_n + b_n)^T \in \mathbb{R}^n$$

* *Scalar Multiplication:*

$$\gamma \mathbf{a} := (\gamma a_1, \dots , \gamma a_n)^T \in \mathbb{R}^n$$

* The scalar product between two vertices, or *Dot Product:*

$$\mathbf{a} \cdot \mathbf{b} := \sum_{i=1}^{n} a_i b_i \in \mathbb{R} $$ .

The scalar product is also written as $$(\mathbf{a},\mathbf{b})$$ or as $$ \mathbf{a}^T\mathbf{b} $$. The scalar product is *Symmetric*. That is, $$\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$$

* The vector *Norm* or length is defined by

$$\| \mathbf{v} \| := \sqrt{\mathbf{v} \cdot \mathbf{v}} = \sum_{i=1}^{n} v_i^2 $$

* *Cauchy-Bunyakowski-Schwarz Inequality:* The following inequality holds:

$$ \mathbf{a} \cdot \mathbf{b} \leq \| \mathbf{a} \| \| \mathbf{b} \|$$

* The cosine of the angle $$ \theta $$ between vectors $$\mathbf{a}$$ and $$\mathbf{b}$$ is $$\cos{\theta} := \frac{\mathbf{a} \cdot \mathbf{b}}{\| \mathbf{a} \| \| \mathbf{b} \|}$$
* $$ \mathbf{a} \perp \mathbf{b}$$ means the vectors $$\mathbf{a}$$ and $$\mathbf{b}$$ are *Orthogonal*. The following is true:

$$ \mathbf{a} \perp \mathbf{b} \Leftrightarrow \mathbf{a} \cdot \mathbf{b} = 0 \Leftrightarrow \cos{\theta}=0 $$
$$ \mathbf{v} \perp \mathbf{v} \Leftrightarrow \mathbf{v} = 0 $$

### Definitions

* A *linear subspace* $$ L \subseteq \mathbb{R}^n$$ is a set enjoying the following properties:
  * For all $$ \mathbf{a}$$, $$ \mathbf{b} \in L$$ it holds that $$ \mathbf{a} + \mathbf{b} \in L$$
  * For all $$ \mathbf{a} \in L$$, $$ \gamma \in \mathbb{R}$$ it holds that $$ \gamma + \mathbf{a} \in L$$
* An *affine subspace* $$ A \subseteq \mathbb{R}^n$$ is any set that can be represented as $$\mathbf{v} + L := \{ \mathbf{v} + \mathbf{x} : \mathbf{x} \in L\}$$, for some vector $$\mathbf{v}$$ in $$\mathbb{R}^n$$ and linear subspace $$ L \subseteq \mathbb{R}^n$$
* A set of vectors $$(\mathbf{v_1}, \mathbf{v_2}, \dots, \mathbf{v_n})$$ is said to be *Linearly Independent* if and only if

$$\sum_{i=1}^{n} \gamma_i \mathbf{v_i} = \mathbf{0} \Rightarrow \gamma_1 = \gamma_2 = \dots = \gamma_n = 0$$

There can be at most $$n$$ linearly independent vectors in $$\mathbb{R}^n$$. Orthogonal vectors are also linearly independent. Linearly independent vectors are not necessarily orthogonal.

* Any collection of $$n$$ linearly independent vectors is called a *Basis*.
  * A basis is said to be *Orthogonal Basis* if $$\mathbf{v_i} \perp \mathbf{v_j}$$ for all vectors in the collection
  * A basis is said to be an *Orthonormal Basis* if $$\| \mathbf{v_i} \| = 1 $$
  * The *Standard Basis* is the collection of orthonormal vectors $$(e_1, e_2, \dots , e_n)$$ such that $$ e_{i_j} = \begin{cases}1 & i = j \\ 0 & \text{otherwise} \end{cases}$$. The vectorspace $$\mathbb{R}^n $$ is equipped with the standard basis.
