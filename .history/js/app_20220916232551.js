const mario = document.querySelector(".mario");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
const loop = setU

document.addEventListener("keydown", jump);
