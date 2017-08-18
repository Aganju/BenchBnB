import React from 'react';
import ReactDOM from 'react-dom';
import * as Actions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.Actions = Actions;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
