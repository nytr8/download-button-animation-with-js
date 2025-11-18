let btn = document.querySelector("button");
let prcnt = document.querySelector("#prcnt");
let inner = document.querySelector(".inner");
let h4 = document.querySelector("h4");
let incrment = 0;
btn.addEventListener("click", () => {
  let num = 50 + Math.floor(Math.random() * 50);
  console.log(num);
  let setinvl = setInterval(() => {
    incrment++;
    prcnt.textContent = incrment + "%";
    inner.style.width = incrment + "%";
    btn.disabled = true;
    h4.textContent = `your download will take ${num / 10} second`;
  }, num);

  setTimeout(() => {
    clearInterval(setinvl);
    btn.textContent = "Downloaded";
    h4.textContent = "";
  }, num * 100);
});
