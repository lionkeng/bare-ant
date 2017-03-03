import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
  </AppContainer>,
    document.getElementById('root')
  );
};

render(RootApp);

module.hot.accept('./RootApp', () => {
  render(RootApp)
});


