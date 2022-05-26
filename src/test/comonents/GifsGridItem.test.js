import React from "react";
import { shallow } from "enzyme";
import { GifsGridItem } from "../../comonents/GifsGridItem";


describe('Prueba de <GifsGridItem/>', () => {
  const title = 'Un titulo';
  const url = 'htts://localhost/algo.jg';

  test('debe mostrar el comonente correctamente', () => {
     const wrapper = shallow(<GifsGridItem title={title} url={url}/>)
     expect(wrapper).toMatchSnapshot()
  });
  
});
