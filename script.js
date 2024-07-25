var butn = document.querySelector(".btn");
var btnn = document.querySelector("button");
var icn = document.querySelector(".icon");
var pic = document.querySelector("img");
var f = 0;
butn.addEventListener("click", function () {
  if (f == 0) {
    btnn.innerHTML = "Added";
    btnn.style.backgroundColor = "green";
    butn.style.backgroundColor = "green";
    btnn.style.color = "yellow";
    pic.addEventListener("dblclick", function () {
      icn.style.color = "crimson";
      icn.style.transform = "scale(0)";
      setTimeout(function () {
        icn.style.opacity = 0.9;
        icn.style.transform = "scale(1.1)";
      }, 1000);
      setTimeout(function () {
        icn.style.opacity = 0;
      }, 2000);
    });
    f = 1;
  } else {
    btnn.innerHTML = "Rejected";
    btnn.style.backgroundColor = "red";
    butn.style.backgroundColor = "red";
    btnn.style.color = "cornsilk";
    f = 0;
  }
});
