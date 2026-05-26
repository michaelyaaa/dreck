(() => {
  const toggle = document.getElementById('navToggle');
  const close = document.getElementById('navClose');
  const overlay = document.getElementById('mobileNav');

  if (!toggle || !overlay) return;

  const open = () => {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const shut = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', open);
  close?.addEventListener('click', shut);

  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) shut();
  });
})();
