import { ListProducts } from '../shared/components/list-products/list-products';
import { DetailsProduct } from '../shared/components/molecules/details-product/details-product';
import './landing-products.module.scss';

/* eslint-disable-next-line */
export interface LandingProductsProps {}

export function LandingProducts(props: LandingProductsProps) {
  return (
    <div className="container">
      <ListProducts />
      <DetailsProduct />
    </div>
  );
}

export default LandingProducts;
