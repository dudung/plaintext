---
title: "quick note 1"
date: 2023-12-11T06:03:00+08:00
authors: ['Sparisoma Viridi']
tags: ['tmp']
draft: false
math: false
url: "0003"
---
{{< toc >}}


## 11-mon
+ `0609` SVG for drawing nodes
{{< html >}}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  viewBox="0 0 200 200"
  style="background:none; border:1px solid #888;">
  <g fill="rgba(125, 200, 255, 0.5)" stroke="none" stroke-width="0.5">
    <circle id="c00" /> <circle id="c01" />
    <circle id="c02" /> <circle id="c03" />
    <circle id="c04" /> <circle id="c05" />
    <circle id="c06" /> <circle id="c07" />
    <circle id="c08" /> <circle id="c09" />
    <circle id="c10" /> <circle id="c11" />
    <circle id="c12" /> <circle id="c13" />
    <circle id="c14" /> <circle id="c15" />
  </g>
  
  <rect x='95' y='95' width='10' height='10' stroke='red' />
  
  <script>
    let c = document
      .getElementsByTagNameNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
    let ox = 100;
    let oy = 100;
    let R = 80;
    for(let i = 0; i <= c.length; i++) {
      let cx = ox + R * Math.cos(i * Math.PI / 8);
      let cy = oy + R * Math.sin(i * Math.PI / 8);
      c[i].setAttribute('cx', cx);
      c[i].setAttribute('cy', cy);
      c[i].setAttribute('r', 10);
      let rr = i * 17;
      let bb = i * 17;
      let gg = i * 17;
      let color = 'rgb(' + rr + ',' + gg + ',' + bb + ')';
      c[i].setAttribute('fill', color);
    }
  </script>
  
</svg>
{{< /html >}}
  - It can not be shown online, but ok while offline with Hugo.
+ `0603` Start this as tempate.
