import { FlyoutAnimationControl } from '../FlyoutAnimationControl';
import { DomHelper } from '../utilities/DomHelper';

describe('FlyoutAnimationControl', () => {

  describe('triggerNavBurgerAnimation()', () => {
    beforeEach(() => {
      const fixture = `<div id="fixture">
      <div class="first"></div>
      <div class="second animate-reverse rotate-reverse"></div>
      <div class="third animate rotate"></div>
      <div class="bg-dark"></div>
      </div>`;
      document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLElement);
    });

    it('should add animate & rotate class when neither exists', () => {
      // Arrange
      const navBurger = document.body.querySelector('.first') as HTMLElement;
      const bgDark = document.body.querySelector('.bg-dark') as HTMLElement;
      const flyoutAnimationControl = new FlyoutAnimationControl(navBurger, bgDark);

      // Act
      flyoutAnimationControl.triggerNavBurgerAnimation();

      const navBurgerAfterChange = document.body.querySelector('.first') as HTMLElement;
      const containAnimate = navBurgerAfterChange.classList.contains('animate');
      const containRotate = navBurgerAfterChange.classList.contains('rotate');
      const containAnimateReverse = navBurgerAfterChange.classList.contains('animate-reverse');
      const containRotateReverse = navBurgerAfterChange.classList.contains('rotate-reverse');

      // Assert
      expect(containAnimate).toBeTrue();
      expect(containRotate).toBeTrue();
      expect(containAnimateReverse).toBeFalse();
      expect(containRotateReverse).toBeFalse();
    });

    it('should remove reverse classes & add animate and rotate when reverse classes exist', () => {
      // Arrange
      const navBurger = document.body.querySelector('.second') as HTMLElement;
      const bgDark = document.body.querySelector('.bg-dark') as HTMLElement;
      const flyoutAnimationControl = new FlyoutAnimationControl(navBurger, bgDark);
      // Act
      flyoutAnimationControl.triggerNavBurgerAnimation();

      const navBurgerAfterChange = document.body.querySelector('.second') as HTMLElement;
      const containAnimate = navBurgerAfterChange.classList.contains('animate');
      const containRotate = navBurgerAfterChange.classList.contains('rotate');
      const containAnimateReverse = navBurgerAfterChange.classList.contains('animate-reverse');
      const containRotateReverse = navBurgerAfterChange.classList.contains('rotate-reverse');

      // Assert
      expect(containAnimate).toBeTrue();
      expect(containRotate).toBeTrue();
      expect(containAnimateReverse).toBeFalse();
      expect(containRotateReverse).toBeFalse();
    });

    it('should add reverse classes and remove animate and rotate when animate & rotate exist', () => {
      // Arrange
      const navBurger = document.body.querySelector('.third') as HTMLElement;
      const bgDark = document.body.querySelector('.bg-dark') as HTMLElement;
      const flyoutAnimationControl = new FlyoutAnimationControl(navBurger, bgDark);
      // Act
      flyoutAnimationControl.triggerNavBurgerAnimation();

      const navBurgerAfterChange = document.body.querySelector('.third') as HTMLElement;
      const containAnimate = navBurgerAfterChange.classList.contains('animate');
      const containRotate = navBurgerAfterChange.classList.contains('rotate');
      const containAnimateReverse = navBurgerAfterChange.classList.contains('animate-reverse');
      const containRotateReverse = navBurgerAfterChange.classList.contains('rotate-reverse');

      // Assert
      expect(containAnimate).toBeFalse();
      expect(containRotate).toBeFalse();
      expect(containAnimateReverse).toBeTrue();
      expect(containRotateReverse).toBeTrue();
    });
  });

  describe('toggleFlyoutAnimation()', () => {
    beforeEach(() => {
      const fixture = `<div id="fixture">
      <div class="first"></div>
      <div class="nav-flyout"></div>
      <div class="bg-dark"></div>
      </div>`;
      document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLElement);
    });

    it('Should call DomHelper.toggleActive method', () => {
      // Arrange
      const navBurger = document.body.querySelector('.first') as HTMLElement;
      const bgDark = document.body.querySelector('.bg-dark') as HTMLElement;
      const flyoutAnimationControl = new FlyoutAnimationControl(navBurger, bgDark);
      const spy = spyOn(DomHelper, 'toggleActive').and.callThrough();

      // Act
      flyoutAnimationControl.toggleFlyoutAnimation();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('toggleFlyoutAnimtoggleBgDarkation()', () => {
    beforeEach(() => {
      const fixture = `<div id="fixture">
      <div class="first"></div>
      <div class="bg-dark"></div>
      </div>`;
      document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLElement);
    });

    it('Should call DomHelper.toggleActive method', () => {
      // Arrange
      const navBurger = document.body.querySelector('.first') as HTMLElement;
      const bgDark = document.body.querySelector('.bg-dark') as HTMLElement;
      const flyoutAnimationControl = new FlyoutAnimationControl(navBurger, bgDark);
      const spy = spyOn(DomHelper, 'toggleActive').and.callThrough();

      // Act
      flyoutAnimationControl.toggleBgDark();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
