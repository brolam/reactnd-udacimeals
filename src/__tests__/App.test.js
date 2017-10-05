import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { createStore } from 'redux'
import reducer from '../reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
});
