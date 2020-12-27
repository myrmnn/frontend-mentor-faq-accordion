const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelector(".arrow");

question.forEach((el) =>
  el.addEventListener("click", () => {
    el.classList.toggle("bold");
    el.nextElementSibling.classList.toggle("open");
    el.firstElementChild.classList.toggle("rotate");
  })
);
