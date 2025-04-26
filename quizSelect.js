document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = btn.closest('.quiz-card');
      const description = card.querySelector('.quiz-description');
      description.classList.toggle('show');
    });
  });
});
