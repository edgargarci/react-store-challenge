import { Route } from 'react-router-dom';
import ViewDetailsProduct from '../view-details-product/view-details-product';
import './details-product.module.scss';

/* eslint-disable-next-line */
export interface DetailsProductProps {}

export function DetailsProduct(props: DetailsProductProps) {
  return (
    <div className="with-7">

      <Route path={`/product/:id`} exact component={ViewDetailsProduct} />
    </div>
  );
}

export default DetailsProduct;
