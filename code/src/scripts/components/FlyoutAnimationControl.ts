import { DomHelper } from './utilities/DomHelper';
import { IFlyoutAnimationControl } from './interfaces/IFlyoutAnimationControl';

export class FlyoutAnimationControl implements IFlyoutAnimationControl {

  private readonly navBurger: HTMLElement | null;
  private readonly bgDark: HTMLElement | null;

  constructor(navBurger: HTMLElement | null, bgDark: HTMLElement | null) {
    this.navBurger = navBurger;
    this.bgDark = bgDark;
  }

  clickEvent(): void {
    this.triggerNavBurgerAnimation();
    this.toggleFlyoutAnimation();
    this.toggleBgDark();
  }

  triggerNavBurgerAnimation(): void {
    if (this.navBurger) {
      // Check if it contains animate class
      const containAnimate = this.navBurger.classList.contains('animate');
      const containAnimateReverse = this.navBurger.classList.contains('animate-reverse');

      if (!containAnimate && !containAnimateReverse) {
        // console.log('no animate or animate-reverse classes');
        this.navBurger.classList.add('animate');
        this.navBurger.classList.add('rotate');
      }

      if (!containAnimate && containAnimateReverse) {
        // console.log('animate-reverse, but no animate class');
        this.navBurger.classList.remove('animate-reverse');
        this.navBurger.classList.remove('rotate-reverse');
        this.navBurger.classList.add('animate');
        this.navBurger.classList.add('rotate');
      }

      if ((containAnimate && !containAnimateReverse)) {
        // console.log('animate, but no animate reverse');
        this.navBurger.classList.remove('animate');
        this.navBurger.classList.remove('rotate');
        this.navBurger.classList.add('animate-reverse');
        this.navBurger.classList.add('rotate-reverse');
      }
    }
  }

  toggleFlyoutAnimation(): void {
    const flyout = document.body.querySelector('.nav-flyout') as HTMLElement;
    if (flyout) {
      DomHelper.toggleActive(flyout);
    }
  }

  toggleBgDark(): void {
    if (this.bgDark) {
      DomHelper.toggleActive(this.bgDark);
    }
  }

}
