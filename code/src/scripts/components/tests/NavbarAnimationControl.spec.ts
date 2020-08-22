import { NavbarAnimationControl } from '../NavbarAnimationControl';
import { DomHelper } from '../utilities/DomHelper';

describe('NavbarAnimationContorl', () => {
  describe('triggerNavbarAnimation()', () => {
    beforeEach(() => {
      const fixture = `<div id="fixture">
      <div class="first"></div>
      <div class="second active"></div>
      </div>`;
      document.body.insertAdjacentHTML('afterbegin', fixture);
      // Adding width and height for scrolling behaviour
      document.body.style.minHeight = '9000px';
      document.body.style.minWidth = '9000px';
    });

    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLElement);
    });

    it('should trigger toggleActive() when scrolled down first time', () => {
      // Arrange
      window.scrollTo(0, 10);
      const navContainer = document.body.querySelector('.first') as HTMLElement;
      const navbarAnimationControl = new NavbarAnimationControl(navContainer);
      const spy = spyOn(DomHelper, 'toggleActive').and.callThrough();
      // Act
      console.log(window.scrollY + 'checking window.scrollY');
      navbarAnimationControl.triggerNavbarAnimation();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should not trigger toggleActive() when scrolled down with active', () => {
      // Arrange
      window.scrollTo(0, 10);
      const navContainer = document.body.querySelector('.second') as HTMLElement;
      const navbarAnimationControl = new NavbarAnimationControl(navContainer);
      const spy = spyOn(DomHelper, 'toggleActive').and.callThrough();
      // Act
      navbarAnimationControl.triggerNavbarAnimation();

      // Assert
      expect(spy).toHaveBeenCalledTimes(0);
    });

    it('should trigger toggleActive() when scrolled down and then scrolled to the top', () => {
      // Arrange
      window.scrollTo(0, 10);
      window.scrollTo(0, 0);
      const navContainer = document.body.querySelector('.second') as HTMLElement;
      const navbarAnimationControl = new NavbarAnimationControl(navContainer);
      const spy = spyOn(DomHelper, 'toggleActive').and.callThrough();
      // Act
      navbarAnimationControl.triggerNavbarAnimation();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
