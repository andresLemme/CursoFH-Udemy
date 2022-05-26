import React from "react";
import { shallow } from "enzyme";
import { GifsGridItem } from "../../comonents/GifsGridItem";


describe('Prueba de <GifsGridItem/>', () => {
  const title = 'Un titulo';
  const url = 'htts://localhost/algo.jpug';
  const wrapper = shallow(<GifsGridItem title={title} url={url} alt={title}/>)

  test('debe mostrar el comonente correctamente', () => {
     expect(wrapper).toMatchSnapshot()
  });

  test('debe mostrar un parrafo con el titulo', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  });
  
  test('debe de tener la imagen igual al url y alt de los prop', () => {
    const img = wrapper.find('img');
    // console.log(img.prop('src'))
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title)
  });
  
  test('debe tener animate__bounce', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__bounce')).toBe(true)
  });
  
  
});
