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
