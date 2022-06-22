(() => {
  const refs = {
    mobileMenuBtn: document.querySelector('[data-mobile-menu-button]'),
    mobileMenuBackdrop: document.querySelector('[data-mobile-menu-backdrop]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
  };

  refs.mobileMenuBtn.addEventListener('click', () => {
    const expanded =
      refs.mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.mobileMenuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenuBtn.classList.toggle('is-open');
    refs.mobileMenu.classList.toggle('is-open');
    refs.mobileMenuBackdrop.classList.toggle('is-open');

    document.body.classList.toggle('mobile-menu-is-open');
  });
})();
