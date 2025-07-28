const nextIcon = document.querySelector(".next");
const prevIcon = document.querySelector(".prev");
const imageContainer = document.querySelector(".imageContainer");
const images = document.querySelectorAll("img");

let currentImg = 1;
let timeout = null;

prevIcon.addEventListener("click", () => {
  currentImg--;
  updateImg();
});

nextIcon.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

function updateImg() {
  if (currentImg > images.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = images.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4000);
}

updateImg();
