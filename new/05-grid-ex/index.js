const ham = document.querySelector(".ham");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobNav = document.querySelector(".mob-nav");

ham.addEventListener("click", () => {
  bar1.classList.toggle("bar1Anim");
  bar2.classList.toggle("bar2Anim");
  bar3.classList.toggle("bar3Anim");
  mobNav.classList.toggle("showSide");
});
