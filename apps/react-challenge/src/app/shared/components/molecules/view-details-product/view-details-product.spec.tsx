import { render } from '@testing-library/react';

import ViewDetailsProduct from './view-details-product';

describe('ViewDetailsProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewDetailsProduct />);
    expect(baseElement).toBeTruthy();
  });
});
