const vitrines = document.querySelectorAll('.vitrine-container');

vitrines.forEach(container => {
  const vitrine = container.querySelector('.vitrine');
  const btnLeft = container.querySelector('.scroll-btn.left');
  const btnRight = container.querySelector('.scroll-btn.right');

  btnLeft.addEventListener('click', () => {
    vitrine.scrollBy({ left: -250, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    vitrine.scrollBy({ left: 250, behavior: 'smooth' });
  });
});