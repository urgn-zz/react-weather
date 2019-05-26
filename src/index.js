import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TWEEN from '@tweenjs/tween.js';
import './index.css';
import Layout from './layout/Layout';
import * as serviceWorker from './serviceWorker';
import { store } from './state';

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

function animate() {
  requestAnimationFrame(animate);
  // [...]
  TWEEN.update();
  // [...]
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
animate();
