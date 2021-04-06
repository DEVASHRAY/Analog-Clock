const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const time = (hr, min, sec) => {
  let hrP = (hr * 360) / 12 + (min * (360 / 60)) / 12;
  let minP = (min * 360) / 60 + sec * (360 / 60 / 60);
  let secP = (sec * 360) / 60;

  //console.log(`hour ${hrP} min ${minP} sec ${secP}`);

  HOURHAND.style.transform = `rotate(${hrP}deg)`;
  MINUTEHAND.style.transform = `rotate(${minP}deg)`;
  SECONDHAND.style.transform = `rotate(${secP}deg)`;
};
setInterval(() => {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  //console.log(hr, min, sec);

  time(hr, min, sec);
}, 1000);
