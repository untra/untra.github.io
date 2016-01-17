---
layout: post
title:  "Optimization 2 - Homework 1"
date:   2016-01-17 17:00:00
mathjax: True
---
## Homework Problems

### #2
Let $$A \in \mathbb{n \times n}$$ be an arbitrary matrix, and let $$A^S = (1/2)(A + A^T)$$ be it's symmetric counterpart. Show $$x^TAx > 0$$ for all $$x \neq 0$$ if and only if $$A^S$$ is positive definite.

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
Let $$A \in \mathbb{n \times n}$$ be a symmetric matrix. Assume that there exist a matrix $$B \in \mathbb{m \times n}$$ such that $$A = B^T B$$.

1. Show that $$A$$ is positive semidefinite.

* The eigenvalues $$\lambda_k$$ of $$A = B^T B$$ are non-negative (property of symmetric matrices)
* Non-negative eigenvalues implies $$A \succeq 0$$ (property of positive semidefinite)
* Done $$\checkmark$$

2. Show that if $$B$$ has full column-rank, then $$A$$ is positive definite.

* Suppose $$B$$ has full column-rank
* Then the columns of $$B$$ are linearly independent (defn of full column-rank)
* Then $$A = B^T B$$ is nonsingular (property of symmetric matrices)
* Then $$A$$ has nonzero eigenvalues (property of nonsingular matrices)
* Because $$A$$ is positive semi-definite, it has non-negative eigenvalues.
* Then the eigenvalues of $$A$$ must be strictly positive.
* Then $$A$$ is positive definite (property of positive definite)
* Done $$\checkmark$$
