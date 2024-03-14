const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const Yesbtn = document.querySelector(".yes-btn");
const Nobtn = document.querySelector(".no-btn");

Yesbtn.addEventListener("click", () => {
  question.innerHTML = "Yeehh o som 500!!!";
  gif.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOCw7Q39vt2wjnHRMAhOnSLAWqPLubK_p4u12XiQiC0EqPyvgf0rpSYBVCH9WvMfPBJM&usqp=CAU";
});
Nobtn.addEventListener("mouseover", () => {
  const NobtnRect = Nobtn.getBoundingClientRect();
  const maxX = window.innerWidth - NobtnRect.width;
  const maxY = window.innerHeight - NobtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  Nobtn.style.left = randomX + "px";
  Nobtn.style.top = randomY + "px";
});
