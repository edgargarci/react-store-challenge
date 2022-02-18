import { render } from '@testing-library/react';

import LandingProducts from './landing-products';

describe('LandingProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandingProducts />);
    expect(baseElement).toBeTruthy();
  });
});
