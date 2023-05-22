document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector('.content');

      target.classList.add('fade-out');

      setTimeout(function() {
        window.location = href;
      }, 500); // Adjust the duration (in milliseconds) for the fade-out effect
    });
  }
});
