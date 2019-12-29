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
We will primarily look at Array, which is what is typically used to showcase this idea in programming.
Hopefully by the end you will understood why the term is used, and will be able to fill in details yourself.
You should understand why an instance of an array isn't really a functor, how it is actually best to conceptualize functors as a type of function, and be able to look at the functor rules on wikipedia and see how they apply.

The key point will be that **Array is a functor**.
This is because Array is a mapping between categories that obeys certain rules. Notice that I did not say array**s** are functors.
I am refering to here the "Generic" that takes a type **T** and returns a new type **Array\<T>**.
Array maps between the **Category of Types** and itself.
This is the main thrust of the article.
So, if you have experience with the subject hopefully this is enough to elucidate the understanding.
If not, we will dive in further in the folowwing paragraphs.

First, we will navigate around the definition of Categories.
This is clearly important for the technical study and understanding of functors, but not really for our purposes so will give a quick sense of what they are.
Wikipedia has the technical definition if you are interested.
The thing to understand is that Categories are incredibly abstract, to the point where even mathematicians call Category Theory "Abstract Nonsense."
The basic idea is that a Category is just a collection of object such that between each pair of objects there is a collection of functions that go between them.
This may sound vague, but that is the point.
Almost anything you can think up is going to be a Category in at least some twisted sense.
There just has to be objects and things that go between those objects that obey the rules for Categories.

The most natural Category is the Category of Sets, which has as its objects Sets and as its functions just simple set functions. (Sets are similar but conceptually slightly different from sets in you may have seen in Programming). The Category we will be talking about the most is the Category of Types. The objects of this Category are the types of your preffered programming language, and the functions are just any pure function.

Now, taking this idea slightly further, we may even envision a Category of Categories (there are some important but nongermane philisophical troubles with this, I encourage you to read about Russel's Paradox).
Here, the objects would be Categories but what would the "functions" be?
This is where functors come in.
They are "functions" between Categories.
They take an object in one Category and give you an object in another Category.
Equally importantly, if you have a function between two objects in your first category, you also get a function between the objects in your new category.

Now, lets examine why Array is a functor. Array takes a type from your Category of types and returns you a new type in the Category of types. 

Taking a break, I will be back to finish soon!
