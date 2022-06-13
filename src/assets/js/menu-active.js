window.addEventListener('hashchange', () => {
  menuActive();
});

window.addEventListener('load', () => {
  menuActive();
});

function menuActive () {
  const links = [...document.querySelectorAll('#categories a')];
  const currentHash = window.location.hash;

  links.forEach(link => {
    link.classList.remove('active');
    
    if (currentHash === link.attributes.href.value) {
      link.classList.add('active');
    }
  });
}