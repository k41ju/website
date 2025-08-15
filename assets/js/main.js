(function () {
  const btn = document.querySelector('.nav-toggle');
  const sidebar = document.querySelector('#sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close sidebar when a link is clicked (mobile)
  sidebar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
