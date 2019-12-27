---
title: "Array as a Functor"
date: "2019-12-27"
---

### A better explanation for functors in programming

It may seem unecassary to write yet another article on functors in functional programming when there are so many already written.
I have to disagree though.
I believe that most of these articles miss or obscure the insight gained from porting over the notion of functor from pure math.
These writers can't be blamed however, since the confusion seems baked into the programming world's understanding of functors.

If one were to hope to find an understanding of how the functor concept is used in the context of functional programming by searching the internet, they would come away with a million equally obscure,unhelpful, or incorrect phrases such as:

> "A functor is a thing that can be mapped over"

> "it's a thing you apply a function to, not a function itself"

> "This means an array is a functor!"

Mostly though, you will just find explanations of the map function,
with no hope of tying the concept back to it's mathematical roots.

I hope to elucidate how to come to terms with both the mathematical idea of functors and the programming idea of functors.
Hopefully by the end you will understood why the term is used. Additionally, you should understand why an instance of an array is'nt really a functor, why a functor is not just a thing that can be mapped over, and how it actually is best to coceptualize functors as a type of function.

The key point will be that **Array is a functor**.
This is because Array is a mapping between categories that obeys certain rules. Notice that I did not say array**s** are functors.
I am refering to here the "Generic" that takes a type T and returns a new type Array\<T>.
Array maps between the Category of Types and itself.
This is the main thrust of the article.
So, if you have experience with the subject hopefully this is enough to elucidate the understanding.
If not, we will dive in further in the folowwing paragraphs.

First, we will dive into the deep end of pure math to discover how mathematicians think of functors.

Taking a break, I will be back to finish soon!
