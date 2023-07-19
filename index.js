let markWebber = document.querySelector(".mark-webber");
let angelaGray = document.querySelector(".angela");
let jacobThompson = document.querySelector(".jacob");
let dots = document.querySelectorAll(".dot");
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let allRead = document.querySelector(".mark");

allRead.addEventListener("click", () => {
  markWebber.style.backgroundColor = 'white';
  angelaGray.style.backgroundColor = 'white';
  jacobThompson.style.backgroundColor = 'white';
  dots.forEach((dot) => {
    dot.style.display = 'none';
  });
});


markWebber.addEventListener("click", ()=> {
  markWebber.style.backgroundColor = 'white';
  dot1.style.display = 'none';
});

angelaGray.addEventListener("click", ()=> {
  angelaGray.style.backgroundColor = 'white';
  dot2.style.display = 'none';
});

jacobThompson.addEventListener("click", () => {
  jacobThompson.style.backgroundColor = 'white';
  dot3.style.display = 'none';
});
