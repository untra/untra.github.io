---
layout: post
title:  "Optimization 2 - Homework 2"
date:   2016-01-17 17:00:00
mathjax: True
---
## Homework Problems

### #2
> Let $$A \in \mathbb{R}^{n \times n}$$ be an arbitrary matrix, and let $$A^S = (1/2)(A + A^T)$$ be it's symmetric counterpart. Show $$x^TAx > 0$$ for all $$x \neq 0$$ if and only if $$A^S$$ is positive definite.

* WTS $$A^S$$ is positive definite $$\Leftrightarrow$$ $$x^T A x > 0$$
* $$\Rightarrow$$ Suppose $$A^S$$ is positive definite
  * Then for all $$x \in \mathbb{R}^n, x^T A^S x > 0$$ (defn of positive definite)
  * Then $$x^T \mathbf{(1/2) (A + A^T)} x > 0 $$ (rewrite $$A^S$$)
  * Because $$A^S \succ 0$$, eigenvalues of $$A^S$$ are positive (property of positive definite)
  * Then the eigenvalues of either $$A$$ or $$A^T$$ are positive
  * Eigenvalues of $$A$$ are the eigenvalues of $$A^T$$ (property of eigenvalues)
  * Then the eigenvalues of $$A$$ and $$A^T$$ must both be positive
  * Because the eigenvalues of $$A$$ are positive, $$A \succ 0$$ (property of positive definite)
  * Then $$x^T A x > 0$$ (definition of positive definite)
  * Done $$\checkmark$$
* $$\Leftarrow$$ suppose $$x^T A x > 0$$
  * Then $$A$$ is positive definite
  * Then the eigenvalues of $$A$$ (and simmilarly $$A^T$$) are positive (property of positive definite)
  * Then the eigenvalues of $$(1/2) A$$ and $$(1/2) A^T$$ are positive (property of eigenvalues)
  * Then the eigenvalues of $$(1/2)(A + A^T)$$ are positive (property of eigenvalues)
  * Then the eigenvalues of $$\mathbf{A^S}$$ are positive (rewrite $$(1/2)(A + A^T)$$)
  * Then $$A^S$$ is positive definite (property of positive definite)
  * Done $$\checkmark$$
* Then $$A^S$$ is positive definite $$\Leftrightarrow$$ $$x^T A x > 0$$
* Done $$\checkmark$$

### #3
> Let $$A \in \mathbb{R}^{n \times n}$$ be a symmetric matrix. Assume that there exist a matrix $$B \in \mathbb{m \times n}$$ such that $$A = B^T B$$.

> Show that $$A$$ is positive semidefinite.

* The eigenvalues $$\lambda_k$$ of $$A = B^T B$$ are non-negative, as $$\lambda_k = \beta_k^2$$ for each eigenvalue $$\beta_k \in B $$
* Non-negative eigenvalues implies $$A \succeq 0$$ (property of positive semidefinite)
* Done $$\checkmark$$

> Show that if $$B$$ has full column-rank, then $$A$$ is positive definite.

* Suppose $$B$$ has full column-rank
* Then the columns of $$B$$ are linearly independent (defn of full column-rank)
* Then $$A = B^T B$$ is nonsingular (property of symmetric matrices)
* Then $$A$$ has nonzero eigenvalues (property of nonsingular matrices)
* Because $$A$$ is positive semi-definite, it has non-negative eigenvalues.
* Then the eigenvalues of $$A$$ must be strictly positive.
* Then $$A$$ is positive definite (property of positive definite)
* Done $$\checkmark$$

### #4
> Let $$A \in \mathbb{R}^{n \times n}$$ be a symmetric matrix. If $$\{ \lambda_i \}^{n}_{i=1}$$ are the $$n$$ (real) eigenvalues of $$A$$, show that the Rayleigh Quotient satisfies
$$ \frac{x^T A x}{\| x \|^2} \geq \min \{ \lambda_i \}$$
for $$x \in \mathbb{R}^n$$ and $$x \neq 0$$

* Eigenvectors corresponding to distinct eigenvalues of A are orthogonal to each other (property of symmetric matrices)
* Write $$x = \alpha_1 v_1 + \alpha_2 v_2 + \dots \alpha_n v_n $$
* Write $$A x = \sum_{i=1}^{n} \lambda_i \alpha_i v_i$$
* Write $$\| x \|^2 = x \cdot x = (\sum_{i=1}^{n} \alpha_i v_i) \cdot (\sum_{j=1}^{n} \alpha_j v_j) = \sum_{i=1}^{n} \alpha_i^2 $$
* Write $$x^T A x = (\sum_{i=1}^{n} \alpha_i v_i) \cdot (\sum_{j=1}^{n} \alpha_j \lambda_j v_j) = \sum_{i=1}^{n} \alpha_{i}^{2} \lambda_i$$
* Then

$$\frac{x^T A x}{\| x \|^2} = \frac{\sum_{i=1}^{n} \alpha_i^2 \lambda_i}{\sum_{j=1}^{n} \alpha_{j}^{2}} = \sum_{i=1}^{n} \frac{\alpha_i^2}{\sum_{j=1}^n \alpha_j^2} \lambda_i$$

> Show that the quadratic form $$x^T A x$$ is *coercive* if and only if A is positive definite.

* A quadratic form $$x^T A x$$ is coercive if there exists a constant $$c > 0$$ such that $$x^T A x \geq c \| x \|^2$$ for all $$x \in \mathbb{R}^n$$
* WTS $$A^S$$ is positive definite $$\Leftrightarrow$$ $$x^T A x$$ is coercive
* $$\Rightarrow$$ Suppose $$A^S$$ is coercive
  * Then there exists $$c > 0$$ such that $$x^T A x \geq c \| x \|^2$$ for all $$x \in \mathbb{R}^n$$
  * Then $$\frac{x^T A x}{\| x \|^2} \geq c $$ for all $$x \in \mathbb{R}^n$$ (divide both sides by $$\| x \|^2$$)
  * From before, we know $$\frac{x^T A x}{\| x \|^2}$$ is greater than or equal to the smallest eigenvalue of $$A$$.
  * Then the smallest eigenvalue of $$A$$ must be positive
  * Then all eigenvalues of $$A$$ must be positive
  * Then $$A$$ is positive definite
* $$\Leftarrow$$ Suppose $$A^S$$ is positive definite
  * Then the eigenvalues of $$A$$ are positive
  * From before, we know $$\frac{x^T A x}{\| x \|^2}$$ is greater than or equal to the smallest eigenvalue of $$A$$.
  * let $$\lambda_k$$ represent the smallest eigenvalue of $$A$$
  * Then $$x^T A x \geq \lambda_k \| x \|^2$$ for all $$x \in \mathbb{R}^n$$ (multiply both sides by $$\| x \|^2$$)
  * Because $$A$$ is positive definite, $$\lambda_k$$ is positive
  * Then $$A$$ is coercive with positive $$c = \lambda_k$$

> Show that if $$a \in \mathbb{R}$$ and $$b \in \mathbb{R}^n$$, then the quadratic function
$$f(x) = a + b^T x + \frac{1}{2} x^T A x$$
is coercive if and only if $$A$$ is positive definite.

* A scalar function $$f(x)$$ is coercive if $$\lim_{\|x\| \rightarrow \infty} \frac{f(x)}{\|x\|} = \infty$$

### #5
>To approximate a function $$g$$ over an interval $$[0, 1]$$ by a polynomial of degree n we minimize the integral $$f(c) = \int_0^1 [g(x)-p_n(x)]^2 dx$$ where $$p_n(x) = c_0 + c_1 x + c_2 x^2 + \dots c_n x^n$$. Find the equations satisfied by the optimal coefficients $$\mathbf{c} = (c_0, c_1, c_2, \dots c_n)$$ to minimize $$f(x)$$. Write your answer in terms of matrix $$A \in \mathbb{R}^{n \times n}$$, vector $$b \in \mathbb{R}^n$$, and scalar $$\alpha$$ given by

> $$A_ij = \int_0^1 x^{i+j} dx = \frac{1}{1+i+j}$$,
$$b_i =  \int_0^1 g(x)x^i dx $$,
$$\alpha = \int_0^1 g^2(x) dx $$

* WTS a system of equations to solve for $$\mathbf{c}$$ involving $$A$$, $$b$$ and $$\alpha$$
* The optimal $$\mathbf{c}$$ is such that
$$f(c) = f(c_0, c_1, \dots c_n) = \int_0^1  [g(x) - (c_0 + c_1 x + c_2 x^2 + \dots c_n) ]^2 dx$$
* Then the optimal derivatives of the $$n^{th}$$ value of $$f(c)$$ with respect to $$c_n$$ is
  * $$\frac{\delta f}{\delta c_0} = 0 = \int_0^1 2 [g(x) - p_n(x)] (-1)$$
  * $$\frac{\delta f}{\delta c_1} = 0 = \int_0^1 2 [g(x) - p_n(x)] (-x)$$
  * $$\dots$$
  * $$\frac{\delta f}{\delta c_n} = 0 = \int_0^1 2 [g(x) - p_n(x)] (-x)^n$$
* Note that $$\frac{\delta f}{\delta c_i} = \int_0^1 2 [g(x) - p_n(x)] (-x)^i = 0 \Rightarrow $$

$$b_i = \int_0^1 g(x) (x)^i dx = \int_0^1 p_n(x) (x)^i dx $$

$$\int_0^1 p_n(x) (x)^i dx = \int_0^1 [c_0 + c_1 x + c_2 x^2 + \dots + c_j x^j + \dots + c_n x^n ] x^i dx = $$

$$\int_0^1 c_0 x^i dx + \int_0^1 c_1 x^{i+1} dx + \int_0^1 c_2 x^{i+2} dx + \dots + \int_0^1 c_j x^{i+j} dx + \dots + \int_0^1 c_n x^{i+n} dx = $$

* Then we have $$\int_0^1 c_j x^{i+j} dx = A_{ij} c_j$$
* Note that $$ \sum_{j=0}^n (\int_0^1 x^{i+j} dx) c_j = b_i $$
* Then $$\sum_{j=0}^n A_{i j} c_j = b_i$$
* Then  Ac = b
* done $$\checkmark$$
