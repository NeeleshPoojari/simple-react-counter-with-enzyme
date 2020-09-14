import React from 'react';
import Enzyme, {
  shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

// test('renders learn react link', () => {
//   const wrapper = shallow(<App />);
//   //console.log(wrapper.debug());
//   expect(wrapper).toBeFalsy();
// });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(< App {
    ...props
  }
  />)
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('render without error', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-app');
  expect(button.length).toBe(1);


});
test('renders increment button', () => {
  const wrapper = setup();
  const button1 = findByTestAttr(wrapper, 'increment-button-in');
  expect(button1.length).toBe(1);
  const button2 = findByTestAttr(wrapper, 'increment-button-dec');
  expect(button2.length).toBe(1);
})
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState).toBe(0);
})

test('clicking incriment button increments counter display', () => {
  const counter = 5;
  const wrapper = setup(null, {
    counter
  });
  const button = findByTestAttr(wrapper, 'increment-button-in');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);


})
test('clicking decrement button descrease counter display', () => {
  const counter = 5;
  const wrapper = setup(null, {
    counter
  });
  const button = findByTestAttr(wrapper, 'increment-button-dec');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
})

test('show error message if trying to decrement below zero', () => {
  const counter = 0;
  const wrapper = setup(null, {
    counter
  });
  const button = findByTestAttr(wrapper, 'increment-button-dec');
  button.simulate('click');
  const error = findByTestAttr(wrapper, 'error');
  expect(error.text()).toBe('cannot go minus');
})
