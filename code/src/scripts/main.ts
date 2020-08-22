// This should be the entry point for any typescript code

// Any namespace should be imported and exported.
import { custom } from './components/test-component';
// We could assign name to the modules
import * as events from './components/EventHandlerInit';

interface IWhNamespace {
  custom: typeof custom;
  events: typeof events;
}

// expose following namespace on wh namespace
export {
  custom,
  events
};

declare global {
  // rollup creates wf namespace
  const wh: IWhNamespace;
}

// Main logic
document.addEventListener('DOMContentLoaded', () => {
  const testComponent = new custom.TestComponent();
  testComponent.init();

  // (1) initialise Nav Animation EventHandler
  const eventHandlerInit = new events.EventHandlerInit();
  eventHandlerInit.init();
});
