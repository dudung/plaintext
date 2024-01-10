/*
  swap_cells_diffusion.js
  Perform diffusion by swapping pair of cells
  
  Sparisoma Viridi | https://github.com/dudung
  
  20240109 Create this example.
  
  Execute: <script src="swap_cells_diffusion.js"></script>
*/

console.log("swap cells diffusion");

let colors = ["none", "red", "blue", "magenta"];

let m = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
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

let ROWS = 20;
let COLS = 20;
let LY = 10;
let LX = 10;

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
  width = "300px";
  height = "270px";
  overflowY = "scroll";
  letterSpacing = "0.7em";
  float = "left";
  fontSize = "11px";
}

let can = document.createElement("canvas");
can.width = 200;
can.height = 200;
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
btn3.addEventListener("click", step);

let btn4 = document.createElement("button");
btn4.style.width = "60px";
btn4.innerHTML = "Draw";
btn4.addEventListener("click", draw);

let btn5 = document.createElement("button");
btn5.style.width = "60px";
btn5.innerHTML = "Start";
btn5.disabled = false;
btn5.addEventListener("click", toggle);

document.body.append(ta);
document.body.append(div);
  div.append(btn1);
  div.append(btn2);
  div.append(btn4);
  div.append(btn3);
  div.append(btn5);
document.body.append(can);

function step() {
  //console.log("Step");
  
  let i = Math.floor(ROWS * Math.random());
  let j = Math.floor(COLS * Math.random());
  let di = Math.floor(3 * Math.random()) - 1;
  let dj = Math.floor(3 * Math.random()) - 1;
  
  let ii = i + di;
  let jj = j + dj;
  
  /*
  console.log(
    "(" + i + "," + j +
    ") <--> (" +
    ii + "," + jj + ")"
  );
  */

  if( (0 <= ii && ii < ROWS) && ( 0 <= jj && jj < COLS) ) {
    [m[i][j], m[ii][jj]] = [m[ii][jj], m[i][j]];
    ta.value = mat2str(m);
    //console.log("Swapped");
  } else {
    //console.log("Not swapped");    
  }
  
}

function draw() {
  let ctx = can.getContext("2d");
  
  let N = 1;
  for(let n = 0; n < N; n++) {
    for(let i = 0; i < ROWS; i++) {
      for(let j = 0; j < COLS; j++) {
        console.log(j*LX);
        ctx.fillStyle = colors[m[i][j]];
        ctx.fillRect(j*LX, i*LY, LX, LY);
        ctx.strokeStyle = "white";
        ctx.strokeRect(j*LX, i*LY, LX, LY);
      }
    }  
  }
}

let cid;
function toggle() {
  if(btn5.innerHTML == "Start") {
    cid = setInterval(simulate, 1);
    btn5.innerHTML = "Stop";
  } else {
    clearInterval(cid);
    btn5.innerHTML = "Start";
  }
}


function simulate() {
  step();
  draw();
}