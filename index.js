const openShare = document.getElementById('open-share');
const sectionSocial =  document.querySelector('.social');

openShare.addEventListener('click', () => {
  sectionSocial.classList.toggle('social__active')
})