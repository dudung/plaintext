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
function formGrid(id) {
  let N = id.length;
  let rows = Math.floor(Math.sqrt(N));
  let cols = rows;
  createGrid(rows, cols, id, id);
}

function createGrid(rows, cols, parentId, chromosome) {
  let side = 20;
  let parent = document.getElementById(parentId);
  parent.style.width = (cols * side) + "px";
  parent.style.height = (rows * side) + "px";
  parent.style.border = "0px solid #888";
  parent.style.display = "inline-block";
  parent.style.marginLeft = "0.5em";
  
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


## 1&times;1
{{< html >}}
<div id="0"></div>
<div id="1"></div>
<script>
formGrid("0");
formGrid("1");
</script>
{{< /html >}}


## 2&times;2
{{< html >}}
<div id="0000"></div>
<script>
formGrid("0000");
</script>
{{< /html >}}

{{< html >}}
<div id="1000"></div>
<div id="0100"></div>
<div id="0010"></div>
<div id="0001"></div>
<script>
formGrid("1000");
formGrid("0100");
formGrid("0010");
formGrid("0001");
</script>
{{< /html >}}

{{< html >}}
<div id="1100"></div>
<div id="0101"></div>
<div id="0011"></div>
<div id="1010"></div>
<div id="1001"></div>
<div id="0110"></div>
<script>
formGrid("1100");
formGrid("0101");
formGrid("0011");
formGrid("1010");
formGrid("1001");
formGrid("0110");
</script>
{{< /html >}}

{{< html >}}
<div id="1110"></div>
<div id="1101"></div>
<div id="0111"></div>
<div id="1011"></div>
<script>
formGrid("1110");
formGrid("1101");
formGrid("0111");
formGrid("1011");
</script>
{{< /html >}}

{{< html >}}
<div id="1111"></div>
<script>
formGrid("1111");
</script>
{{< /html >}}


## 3&times;3
{{< html >}}
<div id="000000000"></div>
<script>
formGrid("000000000");
</script>
{{< /html >}}

{{< html >}}
<div id="100000000"></div>
<div id="010000000"></div>
<div id="001000000"></div>
<div id="000100000"></div>
<div id="000010000"></div>
<div id="000001000"></div>
<div id="000000100"></div>
<div id="000000010"></div>
<div id="000000001"></div>
<script>
formGrid("100000000");
formGrid("010000000");
formGrid("001000000");
formGrid("000100000");
formGrid("000010000");
formGrid("000001000");
formGrid("000000100");
formGrid("000000010");
formGrid("000000001");
</script>
{{< /html >}}


## refs
+  Chakraborty R (2018) "Building a Color Palette Framework", Medium, url 1ttps://medium.com/sketch-app-sources/96dbda541c2e.
+ Hannah J (2023) "An Introduction to Color Theory and Color Palettes", CareerFoundry, url https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-an
-color-palettes/.
