import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('app render initial text', () => {
  const app = shallow(<App />);
  
  expect(app.text()).toEqual("Edit src/App.js and save to reload.Learn React");
});