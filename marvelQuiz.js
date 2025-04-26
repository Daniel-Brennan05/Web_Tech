document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = btn.closest('.question-card');
      const description = card.querySelector('.answer');
      description.classList.toggle('show');
    });
  });
});
