const slidersPlugin = (activeSlide = 2) => {
    const slides = document.querySelectorAll('.slide');
  
    slides[activeSlide].classList.add('active');
  
    slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        cleareActiveClasses();
        slide.classList.add('active');
      });
    });
  
    const cleareActiveClasses = () => {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    };
  };
  
  const getRandomIntInclusive = (min = 0, max = 4) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    slidersPlugin(Math.floor(Math.random() * (max - min + 1)) + min);
  };
  
  getRandomIntInclusive();