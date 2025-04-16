window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const background = document.body;
  
    // Move o fundo mais devagar que o scroll
    background.style.setProperty('--parallax-offset', `${scrollY * 0.4}px`);
  });
  