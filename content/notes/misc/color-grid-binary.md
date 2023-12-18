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
<script>
function createGrid(rows, cols, parentId, chromosome) {
  let side = 20;
  let parent = document.getElementById(parentId);
  parent.style.width = (cols * side) + "px";
  parent.style.height = (rows * side) + "px";
  parent.style.border = "0px solid #888";
  parent.style.display = "inline-block";
  
  let N = rows * cols;
  for(let i = 0; i < N; i++) {
    let cell = document.createElement("div");
    cell.style.width = side + "px";
    cell.style.height = side + "px";
    cell.style.border = "1px solid #888";
    cell.style.float = "left";
    cell.style.background = getColor(chromosome[i]);
    parent.append(cell);
  }
}

function getColor(gene) {
  let color = "";
  if(gene == 1) {
    color = "#fff";
  } else {
    color = "#000";
  }
  return color;
}
</script>
{{< /html >}}


## script
{{< html >}}
<div id="c00"></div>
<div id="c01"></div>
</div>

<script>
createGrid(2, 2, "c00", "0011");
createGrid(2, 2, "c01", "1010");
</script>
{{< /html >}}



## refs
+  Chakraborty R (2018) "Building a Color Palette Framework", Medium, url 1ttps://medium.com/sketch-app-sources/96dbda541c2e.
+ Hannah J (2023) "An Introduction to Color Theory and Color Palettes", CareerFoundry, url https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-an
-color-palettes/.
