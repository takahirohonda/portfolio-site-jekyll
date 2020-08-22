import { DomHelper } from '../DomHelper';

describe('DomHelper', () => {

  describe('toggleActive()', () => {
    beforeEach(() => {
      const fixture = `<div id="fixture">
      <div class="test-no-active"></div>
      <div class="test-active active"></div>
      </div>`;
      document.body.insertAdjacentHTML('afterbegin', fixture);
    });


    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLElement);
    });

    it('should add active if no active class', () => {
      // Arrange
      const noActiveElem = document.body.querySelector('.test-no-active') as HTMLElement;
      // Act
      DomHelper.toggleActive(noActiveElem);
      // Assert
      const targetElem = document.body.querySelector('.test-no-active') as HTMLElement;
      const containActive = targetElem.classList.contains('active');
      expect(containActive).toBeTrue();
    });

    it('should remove active if no active class', () => {
      // Arrange
      const noActiveElem = document.body.querySelector('.test-active') as HTMLElement;
      // Act
      DomHelper.toggleActive(noActiveElem);
      // Assert
      const targetElem = document.body.querySelector('.test-active') as HTMLElement;
      const containActive = targetElem.classList.contains('active');
      expect(containActive).toBeFalse();
    });
  });
});
