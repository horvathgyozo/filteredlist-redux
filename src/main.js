import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import reducer from './reducers/';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let store = finalCreateStore(reducer);

ReactDOM.render(
  <div>
	  <Provider store={store}>
	    <App />
	  </Provider>
	  <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('container')
);
