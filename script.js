let btn = document.querySelector("button");
let prcnt = document.querySelector("#prcnt");
let inner = document.querySelector(".inner");
let incrment = 0;
btn.addEventListener("click", () => {
  let num = 50 + Math.floor(Math.random() * 10);
  console.log(num);
  let setinvl = setInterval(() => {
    incrment++;
    prcnt.textContent = incrment + "%";
    inner.style.width = incrment + "%";
    btn.disabled = true;
  }, num);

  setTimeout(() => {
    clearInterval(setinvl);
    btn.textContent = "Downloaded";
  }, num * 100);

  console.log(num / 10);
});
