---
title: "color grid binary"
date: 2023-12-19T03:51:00+08:00
authors: ['Sparisoma Viridi']
tags: ['misc']
draft: false
math: true
url: "000i"
---
{{< toc >}}


## intro
In computer world, one of description about a color palette is a combination of colors used by UI designers when designing an interface (Hannah, 2023). One way to represent the palette in the form of color grid (Chakraborty, 2018). Here we will not make such color grid, but more like combination of only of two colors, i.e. black and white, in a grid for certain proportion of grid in white and black.

{{< html >}}
<style>
.gridcontainer {
  height: 80px;
  width: 80px;
  border: 0px solid blue;
}
.grid {
  border: 1px solid #888;
  width: 20px;
  height: 20px;
  float: left;
</style>
{{< /html >}}


## script
{{< html >}}
<div class="gridcontainer" id="gridcontainer">
<div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div><div class="grid"></div>
</div>
{{< /html >}}



## refs
+  Chakraborty R (2018) "Building a Color Palette Framework", Medium, url https://medium.com/sketch-app-sources/96dbda541c2e.
+ Hannah J (2023) "An Introduction to Color Theory and Color Palettes", CareerFoundry, url https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/.
