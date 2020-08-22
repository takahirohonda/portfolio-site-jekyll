import { ITestComponent } from './interfaces/ITestComponent';

export namespace custom {
  export class TestComponent implements ITestComponent {

    init(): void {
      console.log('welcome to whosfree!');
    }
  }
}
