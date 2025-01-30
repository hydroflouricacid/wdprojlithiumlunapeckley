document.addEventListener('DOMContentLoaded', function () {
      const fadeInOutElements = document.querySelectorAll('.fade-in-out');
      const options = {
        threshold: 0.5
      };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, options);

      fadeInOutElements.forEach(element => {
        observer.observe(element);
      });
    });