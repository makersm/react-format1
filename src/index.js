import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';

const rootElement = document.getElementById('root');
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    rootElement)
};

render(App);

if(module.hot) {
  module.hot.accept('./components/App', () => {
    const next = require('./components/App').default;
    render(next);
  })
}
