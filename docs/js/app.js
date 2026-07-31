(() => {
  const button = document.querySelector('[data-language-toggle]');
  const languageStorageKey = 'kade-language';
  const initial = localStorage.getItem(languageStorageKey) || 'it';
  const apply = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach((node) => {
      node.hidden = node.dataset.lang !== lang;
    });
    if (button) button.textContent = lang === 'it' ? 'EN' : 'IT';
    localStorage.setItem(languageStorageKey, lang);
  };
  apply(initial);
  if (button) button.addEventListener('click', () => apply(document.documentElement.lang === 'it' ? 'en' : 'it'));
})();
