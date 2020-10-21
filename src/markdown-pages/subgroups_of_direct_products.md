---
title: "Subgroups of Direct Products"
date: "2020-10-18"
---

Subgroups of direct products are not so easily characterized as one might expect on first guess. 

If $K \leq G \times H$ then it is not necessarily true that $K = A \times B$ where $A \leq G$ and $B \leq H.$ A counterexamples is given immediately by the subgroup $\{(g,g) \ | \ g \in G\} \leq G \times G.$

Our initial intution for subgroups of direct products does however work for Sylow subgroups of Direct Products. This is taken from an exercise in Abstract Algebra by Dummit and Foote (page 156.)

  Suppose $A,B$ are finite groups and $p$ is a prime. First, we recognize that if $P,Q$ are Sylow $p$-subgroups of $A,B$ respectively, then $P \times Q$ is a Sylow $p$-subgroup of $A \times B.$ To see this we recognize that $|A| = p^{\alpha}m$ and $|B| = p^{\beta}k$ where $p \nmid m$ and $p \nmid k.$ Therefore, $$| A \times B | = |A||B| = p^{\alpha}mp^{\beta}k = p^{\alpha + \beta}mk.$$
  But since we also have $|P \times Q| = p^{\alpha + \beta}$ we can see that $P \times Q$ is a Sylow $p$-subgroup of $A \times B.$

  This fact helps us because now if we assume $H$ is a Sylow $p$-subgroup of $A \times B,$ as long as we can show that it is contained in $P \times Q$ as above, then we are done because they must be of the same order and so equal.

  So, let $H$ be a Sylow $p$-subgroup of $A \times B.$ We can see that $\pi_A(H) \leq A.$ Also, from the first isomorphism theorem we can see that $|\pi_A(H)|$ must divide the order of $H,$ so that the order of $\pi_A(H)$ is the power of a prime and therefore $\pi_A(H)$ is contained in some Sylow $p$-subgroup $P \leq A.$ Similarly, we have that $\pi_B(H)$ is contained in some Sylow $p$-subgroup $Q \in B.$ 
  
  Now, we see that $\pi_A(H) \times \pi_B(H) \leq P \times Q.$ Additionally, if $x \in H$ then $x = (\pi_A(x),\pi_B(x))$ so that $x \in A(H) \times \pi_B(H).$ This shows that $H \leq P \times Q,$ so as reasoned above, we must have that $H = P \times Q.$