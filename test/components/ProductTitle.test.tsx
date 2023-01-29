import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../../src';
import { product1, product2 } from '../data/products';

describe('pruebas en <ProductTitle/>', () => {
  test('debe de mostrar el componenete con el titutlo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componenete con el titulo de producto 1', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componenete con el titulo de producto 2', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
