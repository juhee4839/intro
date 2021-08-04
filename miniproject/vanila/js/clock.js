const clock = document.getElementById("clock");

function getClock() {
  const currentDate = new Date();
  const xMas = new Date("December 24, 2021 00:00:00");

  const dDay = xMas - currentDate.getTime();

  const day = String(Math.ceil(dDay / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(
    Math.ceil((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const min = String(
    Math.ceil((dDay % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const sec = String(Math.ceil((dDay % (1000 * 60)) / 1000)).padStart(2, "0");

  clock.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
