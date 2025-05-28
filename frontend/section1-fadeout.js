const section1Content = document.querySelector('.section1-content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeStart = 0;
  const fadeUntil = 500; 
  let opacity = 1 - scrollY / fadeUntil;
  let translateY = Math.min(scrollY / 3, 100);

  opacity = Math.max(opacity, 0);
  section1Content.style.opacity = opacity;
  section1Content.style.transform = `translateY(-${translateY}px)`;
});