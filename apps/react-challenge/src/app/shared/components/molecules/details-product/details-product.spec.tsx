import { render } from '@testing-library/react';

import DetailsProduct from './details-product';

describe('DetailsProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsProduct />);
    expect(baseElement).toBeTruthy();
  });
});
