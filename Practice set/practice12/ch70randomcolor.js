document.querySelectorAll(".box").forEach(e => {
  let r = Math.floor(Math.random() * 255); // 0-255
let g = Math.floor(Math.random() * 255); // 0-255
let b = Math.floor(Math.random() * 255); // 0-255
  let r1 = Math.floor(Math.random() * 255); // 0-255
let g1 = Math.floor(Math.random() * 255); // 0-255
let b1 = Math.floor(Math.random() * 255); // 0-255

e.style.color = `rgb(${r}, ${g}, ${b})`;
e.style.backgroundColor = `rgb(${r1}, ${g1}, ${b1})`;
});