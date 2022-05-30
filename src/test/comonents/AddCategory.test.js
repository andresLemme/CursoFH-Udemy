import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import { AddCategory } from "../../comonents/AddCategory";


describe('debe de mostrarse en <AddCategory/>', () => {
  
  const setCategories = jest.fn();
  const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  test('debe de mostrarse correctamente', () => {
   expect(wrapper).toMatchSnapshot()
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo'
    input.simulate('change', { target:{value}})
  });
  
  test('NO debe de ostear la info de submit', () => {
    wrapper.find('form').simulate('submit', {preventDefault(){}})
    expect(setCategories).not.toBeCalled()
  });
  
  
});
