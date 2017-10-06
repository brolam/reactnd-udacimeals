import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { createStore } from 'redux'
import reducer from '../reducers'
import { Provider } from 'react-redux'
import { mount } from 'enzyme';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let app;
beforeEach(() => {
  app = mount(
  <Provider store={store}>
    <App />
  </Provider>);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
   div);
});

test('There is a calendar props', () => {
  expect(app.instance().props).not.toEqual({});
});