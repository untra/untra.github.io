---
layout: post
title:  "The Bad Mathematics of Psychometrics"
date:   2015-12-28 17:00:00
mathjax: True
---

## Are you Driving, Amiable, Analytical or Expressive?

I do not like psychometrics.

At best they are fun surveys you can take in between clicking through [buzzfeed](http://www.buzzfeed.com/javiermoreno/whats-your-actual-personality-type#.xxgKo2rj9P) articles. At worst, they are kafkaesque personality tests based off of shaky pseudoscience. I learned some job recruiters ask candidates to take these surveys in anticipation of finding the best candidates for a job. To me, that's the equivalent of picking candidates based on their horoscope. *"Cathy, we need more ISFJ in our salesfloor."*

<iframe align="middle" width="560" height="315" src="https://www.youtube.com/embed/Q5pggDCnt5M" frameborder="0" allowfullscreen></iframe>

It's no secret that the Myers-Briggs test is entirely entertainment. Participants are put into one of two states for four separate categories, making $$ 2^4 = 16$$ different types people can fall into. All of the results have mostly positive connotations. This is a small enough pool of different "types" people can get behind. It's like horoscopes for the slightly less gullible.

We took a different psychometric test in our projects class. We took the **[TRACOM Social Style](http://www.tracomcorp.com/solutions/by-element/social-style/model/)**s test, a product of the TRACOM Group, a social sciences company based out of Centennial, Colorado. It was presented to us (the students soon-to-be graduates soon-to-be code monkeys) like something we prepare for when entering the workforce. A personality test!

What got under my skin with this test was how your score were calculated. An example of the test is [here](https://www.cs.colorado.edu/~ksiek/Teaching/GEEN1400/F09/Class-Docs/Week2-SocialStyles.pdf). Basically, you answer 15 questions for two sections: Assertiveness and Responsiveness. Each question you give an integer score from 1 to 4. You then sum up all of your assertiveness scores and all of your responsiveness scores, divide each by 15, and then plot yourself on a 2D graph. If you're curious, I scored a $$(1.5,2.1)$$ on the social styles test.

<img src="http://www.chasewoodford.com/wp-content/themes/v2/images/blog-understandingSocialStyles-001.png">

A bad mathematician will think that plotting these scores on a 2d graph of $$1 \dots 4 \times 1 \dots 4$$ means that a broader typing of people allows for individuals to be compared on two axes, without pigeonholing everyone into only one of sixteen categories, a la Myers-Briggs.

It should be clear why this is bad mathematics. For each axis, there are $$4^{15}$$ or roughly a billion different ways to take the survey for each axis. But there are only so many scores you can get with the test. In fact, before dividing by 15, the maximum score you can get on an axis is a 60, and the minimum is a 15. Thus, there are 46 unique scores on each axis you can get (Remember the scores are inclusive, so counting from 15 to 60, you will count 46 numbers). These 46 different scores are squeezed between 1 and 4 on the scatterplot. On a 2d graph, the Social Styles test gives $$46^2 = 2116$$ unique *types of people*.

This is not exactly every real number between 1 and 4. Remember when I said I scored $$(1.5,2.1)$$? I lied. That score is not even possible with this test. I would need respective undivided scores of $$22.5$$ and $$31.5$$ to get $$(1.5,2.1)$$, which is impossible. It's very easy to be misled by this test. There are only 46 unique points on the axis people can actually score on this test.

A good mathematician will look at this test and immediately see that it is skewed towards participants landing in the middle, and not at the ends of the test. *Most people taking the Social Styles test will wind up in the middle of the quadrant.* Why though?

* To score a 15, you will need to answer 1 for all questions. There is only $$ 1 $$ ways to score a 15.

* To score a 16, you will have to answer 1 for 14 questions, and a 2 for one question. $$ {15 \choose 1} = 15$$ ways to score a 16.

* To score a 17, you will have to answer 1 for 14 questions, and a 3 for one question, or 1 for 13 questions, and 2 for two questions. Then you have $$ {15 \choose 1} + {15 \choose 2} = 120 $$ ways to score 17.

As we get up closer to 30 and 31, there will be more ways to take the test and answer it in a way that will give us that score. The result is most participants will land in the center if you take a random enough sample. And as we aim to score higher, with 58, 59, and 60 scores, we wind up with less ways of taking the test to give us that score.

I think personality tests and psychometrics are pseudoscience. But the Social Styles test has a bell curve baked into it. Trying to analyze large-scale results of this test requires fighting a skew that puts most candidates towards a central score. If the tests participants answered randomly, the results would be exactly the same. Bad mathematics were baked into this test.

What might make the Social Styles test interesting is the quadrants people land in, labeling them as *Driving, Amiable, Analytical or Expressive*. But because a bell curve is baked into the test, the results of the test are skewed. When you try to show a scatterplot of peoples scores, most folks will inadvertently appear skewed into the center. Outliers may stand out, but that doesn't help.

Funadamentally these products are dogshit.

> ### SOCIAL STYLE Navigator is a robust micro-learning application designed to help people APPLY SOCIAL STYLE® program strategies to real-world/real-time workplace scenarios.

This stuff is wacky nonsense. And any business is certainly allowed to purchase and apply such as a dogshit product. And the TRACOM group has (and imho should have) every legal right to sell this dogshit product to idiot consumers.

But I'm not going to work for any business foolish enough to purchase, employ and consult for psychometrics. The psychology science isn't even 100% in this field, but this product is just closer to zero. The TRACOM group Social Styles tests are dogshit, but that they misuse mathematics so nonchalantly is what really upsets me.