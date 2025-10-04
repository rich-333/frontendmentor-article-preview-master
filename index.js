const openShare = document.getElementById("open-share");
const sectionSocial = document.querySelector(".social");
const iconShare = document.querySelector(".icon__share");
const buttoShare = document.querySelector(".profile__share");

openShare.addEventListener("click", () => {
  sectionSocial.classList.toggle("social__active");
  iconShare.classList.toggle("icon__share-active");
  buttoShare.classList.toggle("profile__share-active");
});
