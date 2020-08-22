import { DomHelper } from './utilities/DomHelper';
import { INavbarAnimationControl } from './interfaces/INavbarAnimationControl';

export class NavbarAnimationControl implements INavbarAnimationControl {

    private readonly navContainer: HTMLElement | null;

    constructor(navContainer: HTMLElement | null) {
      this.navContainer = navContainer;
    }

    triggerNavbarAnimation(): void {
      if (this.navContainer) {
        if (window.scrollY > 0 && this.navContainer.classList.contains('active')) {
          // console.log('not triggering toggle Active');
        } else if (window.scrollY > 0 && !this.navContainer.classList.contains('active')) {
          DomHelper.toggleActive(this.navContainer);
        } else if (window.scrollY === 0 && this.navContainer.classList.contains('active')) {
          DomHelper.toggleActive(this.navContainer);
        }
      }
    }

}
