document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector(".close-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      body.classList.add("menu-active");
    });
  
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      body.classList.remove("menu-active");
    });
  
    // Contact Form Handling
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formStatus.textContent = "Sending...";
  
      setTimeout(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "#4caf50";
  
        contactForm.reset(); // Clear form after submission
      }, 1500);
    });
  });

  document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
  
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObject)
    });
  
    const status = document.getElementById('form-status');
    if (res.ok) {
      status.textContent = 'Message sent successfully!';
      form.reset();
    } else {
      status.textContent = 'Failed to send message.';
    }
  });