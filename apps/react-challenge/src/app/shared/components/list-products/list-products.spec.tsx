import { render } from '@testing-library/react';

import ListProducts from './list-products';

describe('ListProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListProducts />);
    expect(baseElement).toBeTruthy();
  });
});
