const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const dimd = coverWrap.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight+ "px";
contentWrap.style.marginTop = coverHeight + "px";

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;

  per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";

  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = -scrollNum / 10 + "px";
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 5}px`;
    dimd.style.backgroundColor = `rgba(0,0,0, ${0.4 + scrollNum / 2500})`;
  }
});

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};
