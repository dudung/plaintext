---
title: "newton-raphson method"
date: 2024-01-08T13:26:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "0014"
---
{{< toc >}}


## intro
The Newton-Raphson method is a method for finding succesively and quickly better approximation for the roots of a real-valued functions (Çapar, 2020). It is one of the most widely used methods for root finding and it can be shown that this technique is quadratically convergent as the root aproached (Smith, 1998). This algorithm is quite versatile with wide-ranging use cases than span many domains, e.g by reframing the function of interest for the value of $x$ that yields a certain value rather than being restricted to $0$ can be searched (Dolphin, 2022). There is a report about historical development of this method (Ypma, 1995), where there are differences between this technique and Newton's technique (Nadhim & Al-Jilawi, 2022).


## formula
+ The Newton-Raphson method has a iterative formula in finding root of $f(x)$ as follow
$$\tag{1}
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$
with $n = 0, 1, 2, 3, \dots$, $x_0$ is the initial guess for the root, and $f'(x)$ is derivative of $f(x)$. 
+ As $n$ increases, the value of $f(x_n)$ is nearer to $0$.


## flowchart
+ The Newton-Raphson method can be represented in following flowchart.
{{< mermaid >}}
flowchart TD
  B --> I --> P1 --> O1a
  P1["n = 0"]
  I[/"f(x), f'(x), &epsilon;"/]
  O1a(("1")); O1b(("1"));
  B(["Begin"])
  E(["End"])
  classDef style1 fill:none, color:inherit
  classDef style2 fill:transparent, color:inherit
  class P1,P2,P3,P4,P5,P6 style1
  class I,B,E style1
  class O1a,O1b style2
  linkStyle default stroke:#8a8
{{< /mermaid >}}



## challenges
+ Explain in brief the background of Newton-Raphson method and how it is formulated until the iterative formula in Equation (1) is obtained.


## refs
+ Çapar Y (2020) "The Newton-Raphson Method", 28 Jul, url https://yasincapar.com/the-newton-raphson-method/ [20240108].
+ Dolphin R (2022) "Newton-Raphson — Explained and Visualised", Towards Data Science -- Medium, 10 Feb, url https://towardsdatascience.com/23f63da21bd5 [20240108].
+ Nadhim A I, Al-Jilawi A S (2022) "The bridge between Newton's method and Newton-Raphson's method in numerical optimization",  International Journal of Health Sciences, vol 6, no S1, pp 5249–5267, url https://doi.org/10.53730/ijhs.v6nS1.6042.
+ Smith M D (1998) "Newton-Raphson Technique", 10.001: Solution of Non-Linear Algebraic Equations, by R. Sureshkumar & G. C. Rutledge, 1 Oct 1998, url https://web.mit.edu/10.001/Web/Course_Notes/NLAE/node6.html [20240108].
+ Ypma T J (1995) "Historical Development of the Newton-Raphson Method", SIAM Review, vol 37, no 4, pp 531-551, Dec, url https://doi.org/10.1137/1037125.