---
title: "bisection method"
date: 2023-12-12T09:07:00+08:00
authors: ['Sparisoma Viridi']
tags: ['misc']
draft: false
math: true
url: "0004"
---
{{< toc >}}


## root
+ Root $x = r_n$ of a function $f(x)$ is when it makes
$$\tag{1}
f(r_n) = 0.
$$
+ It can also be a root when
$$\tag{2}
g(r_n) = h(r_n),
$$
since it can be defined that
$$\tag{3}
f(x) = g(x) - h(x).
$$


## range
+ A single root $x = r_n$ exists for $x \in [x_1, x_2]$ if
$$\tag{4}
f(x_1) f(x_2) < 0.
$$
+ It also holds for odd number of roots.
+ If the requirement is not satisfied there might be even number of roots or there is not any root.
+ From now on only case with one root is considered here.


## method
+ Even that $x_1 < r_n < x_2$, but the value of $r_n$ is still unknown.
+ Find the midpoint between $x_1$ and $x_2$ is a way to approach the $r_n$
$$\tag{5}
x_3 = \tfrac12 (x_1 + x_2),
$$
where the name comes from, bisection, divide the range into two equal parts.
+ Next step is to find where the root exists with two possibilities, which are $x_1 < r_n < x_3$ or $x_3 < r_n < x_2$ by calculating which one from $f(x_1)f(x_3)$ and $f(x_2)f(x_3)$ is negative.
+ If $x_1 < r_n < x_3$ then swap $x_2$ and $x_1$.
+ Then calculate next midpoint using equation similar to the last one
$$\tag{6}
x_4 = \tfrac12 (x_2 + x_3).
$$
+ Repeat the step until $|f(x_n)| > \varepsilon$, where $\varepsilon$ is small value regarding as zero.


## js
+ Code
  ```js
  function f(x) {
    let y = x - 3.45;
    return y
  }

  let eps = 1E-5;
  let fxn = 100;
  let x = [];
  let y = [];

  console.log('n', 'xn', 'f(xn)');

  let n = 0;
  x[n] = 0;
  y[n] = f(x[n]);
  console.log(n, x[n], y[n]);

  n++;
  x[n] = 20;
  y[n] = f(x[n]);
  console.log(n, x[n], y[n]);
  n++;

  while(Math.abs(fxn) > eps) {
    x[n] = 0.5 * (x[n-1] + x[n-2]);
    y[n] = f(x[n]) 
    fxn = y[n];
    
    if(f(x[n]) * f(x[n-2]) < 0) {
      [x[n-1], x[n-2]] = [x[n-2], x[n-1]];
      [y[n-1], y[n-2]] = [y[n-2], y[n-1]];
    }
    
    console.log(n, x[n], y[n]);
    
    n++;
  }
  ```
  + Result
  ```
  n xn f(xn)
  0 0 -3.45
  1 20 16.55
  2 10 6.55
  3 5 1.5499999999999998
  4 2.5 -0.9500000000000002
  5 3.75 0.2999999999999998
  6 3.125 -0.3250000000000002
  7 3.4375 -0.012500000000000178
  8 3.59375 0.14374999999999982
  9 3.515625 0.06562499999999982
  10 3.4765625 0.026562499999999822
  11 3.45703125 0.007031249999999822
  12 3.447265625 -0.0027343750000001776
  13 3.4521484375 0.0021484374999998224
  14 3.44970703125 -0.00029296875000017764
  15 3.450927734375 0.0009277343749998224
  16 3.4503173828125 0.00031738281249982236
  17 3.45001220703125 0.000012207031249822364
  18 3.449859619140625 -0.00014038085937517764
  19 3.4499359130859375 -0.00006408691406267764
  20 3.4499740600585938 -0.000025939941406427636
  21 3.449993133544922 -0.000006866455078302636
  ```
+ url https://onecompiler.com/javascript/3zw6fwzav
