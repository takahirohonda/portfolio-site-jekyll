import { INavbarAnimationControl } from './interfaces/INavbarAnimationControl';
import { NavbarAnimationControl } from './NavbarAnimationControl';
import { IFlyoutAnimationControl } from './interfaces/IFlyoutAnimationControl';
import { FlyoutAnimationControl } from './FlyoutAnimationControl';
import { IEventHandlerInit } from './interfaces/IEventHandlerInit';

export class EventHandlerInit implements IEventHandlerInit {

  // For navbar animation
  private readonly navBar: HTMLElement | null;
  private readonly navbarAnimationControl: INavbarAnimationControl;
  // For flyout animation
  private readonly navBurgerContainer: HTMLElement | null;
  private readonly navBurger: HTMLElement | null;
  private readonly bgDark: HTMLElement | null;
  private readonly flyoutAnimationControl: IFlyoutAnimationControl;

  constructor () {
    this.navBar = document.body.querySelector('.nav-container');
    this.navbarAnimationControl = new NavbarAnimationControl(this.navBar);

    this.navBurgerContainer = document.body.querySelector('.nav-burger-container');
    this.navBurgerContainer !== null
      ? (this.navBurger = this.navBurgerContainer.querySelector('.nav-burger'))
      : this.navBurger = null;
    console.log(this.navBurger);
    this.bgDark = document.body.querySelector('.bg-dark');
    this.flyoutAnimationControl = new FlyoutAnimationControl(this.navBurger, this.bgDark);
  }

  init(): void {
    // (1) Navbar Scroll event
    window.addEventListener('scroll',
    () => this.navbarAnimationControl.triggerNavbarAnimation());

    // (2) Flyout toggle click event
    if (this.navBurgerContainer) {
      this.navBurgerContainer.addEventListener('click',
      () => this.flyoutAnimationControl.clickEvent());
    }
    if (this.bgDark) {
      this.bgDark.addEventListener('click',
      () => this.flyoutAnimationControl.clickEvent());
    }
  }
}
