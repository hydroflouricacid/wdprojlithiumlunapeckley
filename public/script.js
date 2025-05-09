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

    document.getElementById('flick-form').addEventListener('submit', async function(event) {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const formObject = Object.fromEntries(formData.entries());
    
      const res = await fetch('/flick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formObject)
      });
    
      const status = document.getElementById('flick-status');
      if (res.ok) {
        status.textContent = 'Score submitted!';
        form.reset();
      } else {
        status.textContent = 'Failed to submit score.';
      }
    });    