---
title: "scanning method"
date: 2023-12-23T20:27:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "000s"
---
{{< toc >}}


## intro
The simplest way to find a root of an equation is by scanning it from an intial value, e.g. $x = x_a$, with increment $\Delta x$ until sign of the function change from previously ${\rm sign}(f(x_a))$.


## example
+ Suppose that there is a function
$$\tag{1}
f(x) = x^2 - 104.25x + 425,
$$
whose root is to be find with $\Delta x = 10^{-1}$, and initial values are $0$.

+ Following code is in JavaScript
  ```js
  /*
    scanning_method.js
    Find a root using scanning method
    
    Sparisoma Viridi | https://github.com/dudung
    
    20231223 Create this example.
  */

  console.log("Scanning method");

  // round to n digit
  function roundn(x, n) {
    let mag = Math.pow(10, n);
    let y = Math.round(x * mag) / mag;
    return y;
  }


  // define a Function
  function f(x) {
    let y = x*x - 104.25*x + 425;
    return y;
  }

  // define range and step
  let xa = 0;
  let xb = 10;
  let dx = 0.1;
  let x = xa;
  let sx = Math.sign(f(x));
  let sxnew;

  console.log("x\tf(x)");
  while(x <= xb) {
    sxnew = sx;
    sx = Math.sign(f(x))
    
    let y = f(x);
    
    let xx = roundn(x, 3);
    let yy = roundn(y, 3);
    console.log(xx, '\t', yy);

    if(sx * sxnew <= 0) {
      break;
    }
    
    x += dx;
    sxnew = Math.sign(f(x));
  }
  console.log();

  let x1 = roundn(x-dx, 3);
  let x2 = roundn(x, 3);
  console.log("Root is located between");
  console.log(x1, '\t', x2);
  ```
+ Result
  ```
  $ node scanning_method.js
  x       f(x)
  0        425
  0.1      414.585
  0.2      404.19
  0.3      393.815
  0.4      383.46
  0.5      373.125
  0.6      362.81
  0.7      352.515
  0.8      342.24
  0.9      331.985
  1        321.75
  1.1      311.535
  1.2      301.34
  1.3      291.165
  1.4      281.01
  1.5      270.875
  1.6      260.76
  1.7      250.665
  1.8      240.59
  1.9      230.535
  2        220.5
  2.1      210.485
  2.2      200.49
  2.3      190.515
  2.4      180.56
  2.5      170.625
  2.6      160.71
  2.7      150.815
  2.8      140.94
  2.9      131.085
  3        121.25
  3.1      111.435
  3.2      101.64
  3.3      91.865
  3.4      82.11
  3.5      72.375
  3.6      62.66
  3.7      52.965
  3.8      43.29
  3.9      33.635
  4        24
  4.1      14.385
  4.2      4.79
  4.3      -4.785

  Root is located between
  4.2      4.3
  ```
+ Discussion
  - It finds $4.2 < r_1 < 4.3$, whose value is supposed to be $4.25$.
  - The root can be obtained by averaging the values bracketing it, i.e. $\frac12(4.2 + 4.3) = 4.25$, which is true accidentally for this case.
  - Previous step will not work for general case, e.g. $f(x) = x^2 - 104.125x + 412.5$.
