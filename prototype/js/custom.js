(function(thNamespace){

  const thNamespacePublic = thNamespace.public || (thNamespace.public = {});

  const toggleNavBarActive = (addActive) => {
    const navContainer = document.body.querySelector('.top-header');
    if (addActive && !navContainer.classList.contains('active')) {
      navContainer.classList.add('active');
    } else if (!addActive && navContainer.classList.contains('active')) {
      navContainer.classList.remove('active')
    }
  }
  const init = thNamespacePublic.initScrollEventListener = () => {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 0) {
        toggleNavBarActive(true);
      } else {
        toggleNavBarActive(false);
      }
    })
  }


})(window.th || (window.th = {}));