// This should be the entry point for any typescript code
// We could assign name to the modules
import * as navigation from './components/Navigation';

interface IThNamespace {
  navigation: typeof navigation;
}

// expose following namespace on wh namespace
export {
  navigation
};

declare global {
  // rollup creates wf namespace
  const th: IThNamespace;
}

// Main logic
document.addEventListener('DOMContentLoaded', () => {
  const nav = new navigation.Navigation();
  nav.initNavBurgerClickEventListner();
  nav.initScrollEventListener();
});
