import { DomHelper } from './utilities/DomHelper';


export class Navigation {

  toggleNavBarActive = (addActive: boolean) => {
    const navContainer = document.body.querySelector('.top-header') as HTMLElement;
    if (addActive && !navContainer.classList.contains('active')) {
      navContainer.classList.add('active');
    } else if (!addActive && navContainer.classList.contains('active')) {
      navContainer.classList.remove('active');
    }
  }

  toggleNavBurger = () => {
    const navBurger = document.body.querySelector('.nav-burger') as HTMLElement;
    if (navBurger.classList.contains('animate') && !navBurger.classList.contains('animate-reverse')) {
      navBurger.classList.remove('animate');
      navBurger.classList.add('animate-reverse');
    } else if (!navBurger.classList.contains('animate')) {
      navBurger.classList.add('animate');
      navBurger.classList.remove('animate-reverse');
    }
  }

  // Initialising scroll event listener for navbar
  initScrollEventListener = () => {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 0) {
        this.toggleNavBarActive(true);
      } else {
        this.toggleNavBarActive(false);
      }
    });
  }

  // Initialising navburger change
  initNavBurgerClickEventListner = () => {
    const navBurgerContainer = document.body.querySelector('.nav-burger-container') as HTMLElement;
    const bgDark = document.body.querySelector('.bg-dark') as HTMLElement;
    const navContainer = document.body.querySelector('.nav-container') as HTMLElement;
    navBurgerContainer.addEventListener('click', () => {
      console.log('nav burger container clicked');
      this.toggleNavBurger();
      DomHelper.toggleActive(bgDark);
      DomHelper.toggleActive(navContainer);
    });

    bgDark.addEventListener('click', () => {
      DomHelper.toggleActive(bgDark);
      DomHelper.toggleActive(navContainer);
      this.toggleNavBurger();
    });

    // open and close sub menu for mobile

    const mnuOption2InnerContainer = document.body.querySelector('.menu-option__2-inner-container') as HTMLElement;
    mnuOption2InnerContainer.addEventListener('mouseover', () => {
      if (window.innerWidth < 992) {
      DomHelper.toggleActive(document.body.querySelector('.sub-menu') as HTMLElement);
      DomHelper.toggleActive(document.body.querySelector('.down-arrow') as HTMLElement);
      }

    });
  }
}
