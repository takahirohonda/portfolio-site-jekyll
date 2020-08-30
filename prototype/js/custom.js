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

  const toggleNavBurger = () => {
    const navBurger = document.body.querySelector('.nav-burger');
    if (navBurger.classList.contains('animate') && !navBurger.classList.contains('animate-reverse')) {
      navBurger.classList.remove('animate');
      navBurger.classList.add('animate-reverse');
    } else if (!navBurger.classList.contains('animate')) {
      navBurger.classList.add('animate');
      navBurger.classList.remove('animate-reverse');
    }
  }

  // generic function to toggle active 
  const toggleActive = (elem) => {
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
    } else {
      elem.classList.add('active');
    }
  }

  // Initialising scroll event listener for navbar
  const init = thNamespacePublic.initScrollEventListener = () => {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 0) {
        toggleNavBarActive(true);
      } else {
        toggleNavBarActive(false);
      }
    })
  }

  // Initialising navburger change
  const initNav = thNamespacePublic.initNavBurgerClickEventListner = () => {
    const navBurgerContainer = document.body.querySelector('.nav-burger-container');
    const bgDark = document.body.querySelector('.bg-dark');
    const navContainer = document.body.querySelector('.nav-container');
    navBurgerContainer.addEventListener('click', () => {
      console.log('nav burger container clicked')
      toggleNavBurger();
      toggleActive(bgDark);
      toggleActive(navContainer);
    });
    
    bgDark.addEventListener('click', () => {
      toggleActive(bgDark);
      toggleActive(navContainer);
      toggleNavBurger();
    })

    // open and close sub menu for mobile

    const mnuOption2InnerContainer = document.body.querySelector('.menu-option__2-inner-container');
    mnuOption2InnerContainer.addEventListener('click', () => {
      toggleActive(document.body.querySelector('.sub-menu'));
      toggleActive(document.body.querySelector('.down-arrow'));

    });

    // this is for screen size change
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        console.log('resize event');
        document.body.querySelector('.bg-dark').classList.remove('active');
        document.body.querySelector('.nav-container').classList.remove('active');
        document.body.querySelector('.sub-menu').classList.remove('active');
        document.body.querySelector('.down-arrow').classList.remove('active');
        document.body.querySelector('.nav-burger').classList.remove('animate');
      }
    })
  }


})(window.th || (window.th = {}));