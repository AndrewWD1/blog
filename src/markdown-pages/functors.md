---
title: "Array is a Functor"
date: "2019-12-28"
---

### The Generic Type Array is the functor, not instances of arrays

It may seem unecassary to write yet another article on functors in functional programming when there are so many already written.
I have to disagree though.
I believe that most of these articles miss or obscure the insight gained from porting over the notion of functor from pure math.
Mostly though, you will just find explanations of the map function, with no hope of tying the concept back to it's mathematical roots.
Hopefully, I can add to that small subset of articles that clarify the picture and increase the probabilty that newcomers stumble accross helpful posts.

I hope to elucidate how to come to terms with both the mathematical idea of functors and the programming idea of functors, without actually filling in most of the details.
Hopefully by the end you will understood why the term is used, and will be able to fill in details yourself.
You should understand why an instance of an array isn't really a functor, how it is actually best to conceptualize functors as a type of function, and be able to look at the functor rules on wikipedia and see how they apply.

The key point will be that **Array is a functor**.
This is because Array is a mapping between categories that obeys certain rules. Notice that I did not say array**s** are functors.
I am refering to here the "Generic" that takes a type **T** and returns a new type **Array\<T>**.
Array maps between the **Category of Types** and itself.
This is the main thrust of the article.
So, if you have experience with the subject hopefully this is enough to elucidate the understanding.
If not, we will dive in further in the folowwing paragraphs.

First, we will dive into the deep end of pure math to discover how mathematicians think of functors.

Taking a break, I will be back to finish soon!
