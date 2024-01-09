/*
  swap_cells_diffusion.js
  Perform diffusion by swapping pair of cells
  
  Sparisoma Viridi | https://github.com/dudung
  
  20240109 Create this example.
  
  Execute: <script src="swap_cells_diffusion.js"></script>
*/

console.log("swap cells diffusion");

let m = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

function mat2str(m) {
  let s = "";
  for(l of m) {
    let si = l.join('');
    s += si + "\n";
  }
  s = s.slice(0, -1);
  return s;
}

let ta = document.createElement("textarea");
with(ta.style) {
  width = "360px";
  height = "330px";
  overflowY = "scroll";
  letterSpacing = "0.7em";
  float = "left";
}

let can = document.createElement("canvas");
with(can.style) {
  border = "1px solid #888";
  height = "200px";
  width = "200px";
  float = "left";
}

let div = document.createElement("div");
with(div.style) {
  border = "0px solid blue";
  width = "60px";
  height = "200px";
  float = "left";
}

let btn1 = document.createElement("button");
btn1.style.width = "60px";
btn1.innerHTML = "Clear";
btn1.addEventListener("click", () => { ta.value = ""});

let btn2 = document.createElement("button");
btn2.style.width = "60px";
btn2.innerHTML = "Load";
btn2.addEventListener("click", () => { ta.value = mat2str(m)});

let btn3 = document.createElement("button");
btn3.style.width = "60px";
btn3.innerHTML = "Step";

document.body.append(ta);
document.body.append(div);
  div.append(btn1);
  div.append(btn2);
  div.append(btn3);
document.body.append(can);

