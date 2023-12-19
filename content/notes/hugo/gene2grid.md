---
title: "gene2grid"
date: 2023-12-20T05:31:00+08:00
authors: ['Sparisoma Viridi']
tags: ['hugo']
draft: false
math: false
url: "000k"
---
{{< toc >}}


## intro
+ It converts characters including spaces in line to grid. 
+ Required parameter is `id` that must be unique.
+ Optional parameter is `display` with value inline-block for arrange several grids in a line.
+ Current version has only two colors, #000 and #fff with border #888.


## results
{{< gene2grid id="c00" display="inline-block" >}}
11111
00100
00100
00100
00100
{{< /gene2grid >}}

{{< gene2grid id="c01" display="inline-block" >}}
11110
10000
11100
10000
11110
{{< /gene2grid >}}

{{< gene2grid id="c02" display="inline-block" >}}
10001
01010
00100
01010
10001
{{< /gene2grid >}}

{{< gene2grid id="c03" display="inline-block" >}}
11111
00100
00100
00100
00100
{{< /gene2grid >}}


## code
```
{{< gene2grid id="c04" display="inline-block" >}}
11111
00100
00100
00100
00100
{{< /gene2grid >}}
```


## refs
+  "Create your own shortcodes", Hugo, url https://gohugo.io/templates/shortcode-templates/.