export class DomHelper {

  static toggleActive (elem: HTMLElement): void {
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
    } else {
      elem.classList.add('active');
    }
  }
}
