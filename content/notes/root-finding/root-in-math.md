---
title: "root in math"
date: 2023-12-24T16:43:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "000u"
---
{{< toc >}}


## intro
+ In mathematics a solution to an equation, that can be expressed as a number or an algebraic formula, is known as root (Britannica eds, 2023).
+ Roots can be found algebraically as well as graphically, and the number of roots of a polynomial function gives the degree of the polynomial as shown by the fundamental theorem of algebra (Smith et al., 2023).
+ The roots, which are also called zeros, of an equation $f(x) = 0$, are values of $x$ for which the equation is satisfied (Weisstein, 2023).
+ The term root is sometimes also used as a quick way of saying square root, e.g. root 2 means &Sqrt;2 (Pierce, 2023).


## example
+ Suppose there is an equation
$$\tag{1}
f(x) = x^3 - 15x^2 + 59x - 45.
$$
+ Figure 1. Plot of $f(x)$ against $x$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x - 3.45',
          pointRadius: 2,
          pointBackgroundColor: "rgba(0,0,255,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(0,128,255,0.8)",
          lineTension: 0.4,
          data:
          [
{x:0, y:-45},
{x:1, y:0},
{x:2, y:21},
{x:3, y:24},
{x:4, y:15},
{x:5, y:0},
{x:6, y:-15},
{x:7, y:-24},
{x:8, y:-21},
{x:9, y:0},
{x:10, y:45},
          ]
        },
      ]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'x'
          }
        }],
        yAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'f(x)'
          }
        }]    
      }
    }
  }
  {{< /chart >}}
+ It has three roots, $x_1 = 1$, $x_2 = 5$, and $x_3 = 9$. 
+ Table 1. Values of $x$ and $f(x)$.
$x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
$f(x)$ | -45 | 0 | 21 | 24 | 15 | 0 | -15 | -24 | -21 | 0 | 45
+ Code 1. Generate values of $x$ and $f(x)$.
  ```python
  coeff = [-45, 59, -15, 1]

  def f(x):
    y = coeff[-1]
    for c in reversed(coeff[:-1]):
      y = y * x
      y = y + c
    return y

  print("x\tf(x)")
  for x in range(11):
    print(x, f(x), sep='\t')

  ```
  url https://onecompiler.com/python/3zxcb973f


## refs
+ Britannica, T E E, Hosch W L, Lotha G (2023) "root", Encyclopedia Britannica, 12 Oct 2023, url https://www.britannica.com/science/root-mathematics [20231224]
+ Pierce R (2023) "Root Definition (Illustrated Mathematics Dictionary)", Math Is Fun, Ed. Rod Pierce, 8 Sep 2023, url http://www.mathsisfun.com/definitions/root.html [20231224].
+ Smith W, et al. (2023) "Root | Definition & Meaning", Story of Mathematics, 10 Apr 2023, url https://www.storyofmathematics.com/glossary/root/ [20231224].
+ Weisstein, E W (2023) "Root", from MathWorld--A Wolfram Web Resource, 12 Dec 2023, url https://mathworld.wolfram.com/Root.html [20231224].
