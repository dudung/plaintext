---
title: "polygon with nodes"
date: 2023-12-12T21:04:00+08:00
authors: ['Sparisoma Viridi']
tags: ['mermaid']
draft: false
math: true
url: "0005"
---
{{< toc >}}


## intro
We can use Mermaid, a simple Markdown-like script language for generating charts from text via JavaScript (Mallin, 2018), to draw polygon, where the diagram element used is circle. But this would not be the appropriate purpose of Mermaid.


## flowchart
{{< mermaid >}}
flowchart TD
  o1 --- o2 --- o3 --- o4
  o1(("1")); o2(("2")); o3(("3")); o4(("4"));
  classDef style1 fill:transparent, color:inherit
  class o1,o2,o3,o4 style1
  linkStyle default stroke:#8a8
{{< /mermaid >}}


## refs
+ Wallin M (2018) "Generating documentation as code with mermaid and PlantUML", Rule of Tech, url https://ruleoftech.com/2018/generating-documentation-as-code-with-mermaid-and-plantuml.
