const circles = document.querySelectorAll('.circle');
const lifeCards = document.querySelectorAll('.life_card');
circles.forEach((circle, index) => {
  circle.addEventListener('mouseover', () => {
    lifeCards[index].classList.add('show');
    lifeCards[index].style.visibility  = 'visible';
  });

  circle.addEventListener('mouseout', () => {
    lifeCards[index].classList.remove('show');
    lifeCards[index].style.visibility = 'hidden';
  });
});
