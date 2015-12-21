---
layout: post
title:  "How to Count up to Ten"
date:   2015-12-20 17:00:00
mathjax: True
categories:
---

## It's harder than you think.

You are tasked with properly counting up to ten. You've done that before, right? Yeah, plenty of times.

So go ahead, try it. Count up to ten.

$$ 1, 2, 3, 4, \dots $$

No, see, you've already messed up. Counting starts at zero. You forgot zero (or at least I am implying you forgot zero, but roll with it, okay?) Ask any programmer or computer scientist, and they'll tell you counting starts at zero. This is critical.

Is it though? Any good mathematician will tell you what number you start counting from is severely context-sensitive. For example, the sum

$$ \sum_{n=1}^{\infty} \frac{1}{2^n} = 1 $$

Is only true when $$ n=1 $$ This sum is [Zeno's Dichotomy Paradox](https://www.youtube.com/watch?v=EfqVnj-sgcc), and even though you're counting from $$ n $$ to infinity, starting from zero doubles the sum.

$$ \sum_{n=0}^{\infty} \frac{1}{2^n} = 2 $$

So of course it's context sensitive. And the job was to count up to ten, so who cares what number we start at, right?

$$ 9, 10 $$

No, that's clearly wrong. So it *does* matter what number we start at, because we are *counting*, and counting is different than *summation*. So what number do we start counting from? Is it one, or zero?

An impatient person would have the answer by now. They would say it's either this:

$$ A = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) $$

or this:

$$ B = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) $$

Look carefully at those two *ordered sets*. Set $$A$$ has ten numbers while set $$B$$ has eleven numbers. If we are counting up to ten, we should be counting ten numbers. Clearly, it's set $$A$$, which is what we were going to count to in the first place until I so rudely interrupted you.

But you're still wrong. Let me present the ordered set C:

$$ C = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) $$

Look at that! It doesn't even end with ten! That may have ten elements, but it's not counting up to ten.

*Counting up to ten.*

*Up to.*

*Ten.*

It should be apparent this whole exercise was a trick of semantics disguised as a mathematics lesson. But it serves a critical purpose; for computers that operate on explicit instructions, what number you start counting from must be stated, and all instructions made plain. The good mathematicians were right; what number you start counting from is context-sensitive to your mathematical goals. If I challenge you to count up to $$-4$$, you better ask what number you ought to start with.

Consider the standard C for-loop:
{% highlight c %}
int n;
for(n = 0; n < 10; n++){
 cout << n;
}
{% endhighlight %}

Note the less-than $$<$$ sign. This is going to count *from* zero, *up to* ten, *incrementing* n by one each time.

A good mathematician will note that I forgot to specify that we are counting in the $$\mathbb{Z}$$ Integers. But it is possible to count in the $$\mathbb{Q}$$ rationals as well. They are, after all *countable*. But that's a blog post for another time.
