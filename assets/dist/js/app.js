let load = document.querySelector(".load");

let bgClass = document.querySelector(".bgClass");

let i = 1;

let int = setInterval(blurLoading, 40);

function blurLoading() {
  i++;
  console.log(i);
  if (i == 100) {
    clearInterval(int);
  }
  load.innerHTML = i + "%";
  load.style.opacity = scale(i, 0, 100, 1, 0);

  bgClass.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
