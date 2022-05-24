import React from "react";
import { shallow } from "enzyme";
import { GifsGridItem } from "../../comonents/GifsGridItem";


describe('Prueba de <GifsGridItem/>', () => {
  test('debe mostrar el comonente correctamente', () => {
     const wrapper = shallow(<GifsGridItem/>)
     expect(wrapper).toMatchSnapshot()
  });
  
});
