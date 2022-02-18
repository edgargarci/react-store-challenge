import { render } from '@testing-library/react';

import PruebaRouting from './prueba-routing';

describe('PruebaRouting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PruebaRouting />);
    expect(baseElement).toBeTruthy();
  });
});
