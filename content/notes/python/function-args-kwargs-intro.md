---
title: "function args kwargs intro"
date: 2023-12-30T12:24:00+08:00
authors: ['Sparisoma Viridi']
tags: ['python']
draft: false
math: true
url: "000x"
---
{{< toc >}}


## intro
+ When writing a function in Python it is often required to pass values to the function, where this values are called function arguments, which can be in fixed or dynamic numbers (Krishna, 2022).
+ There two types of argument passed to function in Python, which are positional and keyword arguments (Wilkinson, 2023).
+ One of the reason Python programming languange, which is known for being simple and readable, is its way of handling parameters in very easy and dynamics way using `*args` and `*kwargs` (Bolanle, 2023).
+ Due tue not aware of all possible use cases of a code, and to offer more options for future programmers working with the module or for users interacting with the code, passing a variable number of arguments to a function can be accomodate using `*args` and `**kwargs` (Tagliaferri, 2021).
+ In the Python documentation about its functions it is common to see `*args` and `**args` defined as parameters in some functions, which is a major cause of confusion for most Python programmers (Pykes, 2022).
+ There are some combinations of normal positional arguments and normal keyword arguments that are working, which can be easier to understand by trying them yourself (Gruppeta, 2022).


## using \*args
+ Here a problem is presented, where one of the solutions is the use of `*args`.


### problem
+ Suppose we have to add two numbers using user-defined function `add` with following code, but we try to give unmatched number of arguments.
  ```python
  def add(x, y):
    z = x + y
    return z

  a = 100
  b = 1
  c = add(a, b)
  print(a, "+", b, "=", c)

  print()

  a = 100
  b = 10
  c = 1
  d = add(a, b, c)
  print(a, "+", b, "+", c, "=", d)
  ```
  url https://onecompiler.com/python/3zxwxjvam [20231230].
+ Output
  ```
  100 + 1 = 101


  Traceback (most recent call last):
    File "main.py", line 15, in <module>
      d = add(a, b, c)
  TypeError: add() takes 2 positional arguments
  but 3 were given
  ```
+ Notice that 3 positional arguments are given, while it requires only 2.

### solution
+ One way to solve previous problem is by using `*args` as follow.
  ```python
  def add(*args):
    nums = list(args)
    return sum(nums)

  a = 100
  b = 1
  c = add(a, b)
  print(a, "+", b, "=", c)

  print()

  a = 100
  b = 10
  c = 1
  d = add(a, b, c)
  print(a, "+", b, "+", c, "=", d)

  print()

  a = 10
  b = add(a)
  print(a, "=", b)

  ```
  url https://onecompiler.com/python/3zxwxvqru
+ Output
  ```
  100 + 1 = 101

  100 + 10 + 1 = 111

  10 = 10
  ```
+ Notice that now the function works with arbitrary number of arguments, 1, 2, or 3.
+ There might be also some problems arise with current version, e.g. if the arguments are not integer or float.


## challenges
+ Test previous `add` function for 4, 8, and 20 arguments. Prove that it always works.
+ Create similar function for calculate multiplication of numbers and name it as `mul` function, that can receive arbitrary number of arguments.


## refs
+ Bolanle F (2023) "How To Use \*args and \*\*kwargs In Python", DEV Community, 10 Aug, url https://dev.to/faithbolanle/understand-args-and-kwargs-use-it-the-right-way-2d45 [20231230].
+ Gruppetta S (2022) "Argh! What are args and kwargs in Python? \[Intermediate Python Functions Series #4\]", The Python Coding Book, 30 Nov, url https://thepythoncodingbook.com/2022/11/30/what-are-args-and-kwargs-in-python/ [20231230].
+ Krishna A (2022) "How to Use \*args and \*\*kwargs in Python", freeCodeCamp, 23 Mar, url https://www.freecodecamp.org/news/args-and-kwargs-in-python/ [20231230].
+ Pykes K (2022) "Python \*args & \*\*kwargs", Geek Culture, Medium, 16 Mar, url https://medium.com/geekculture/1c5c0ec9121 [20231230].
+ Wilkinson P (2023) "\*args, \*\*kwargs, and Everything in Between", Towards Data Science, Medium, 18 Jul, url https://towardsdatascience.com/ff7d9b536494 [20231230].
+ Tagliaferri L (2021) "How To Use \*args and \*\*kwargs in Python 3", DigitalOcean, 21 Aug, url https://www.digitalocean.com/community/tutorials/how-to-use-args-and-kwargs-in-python-3 [20231230].