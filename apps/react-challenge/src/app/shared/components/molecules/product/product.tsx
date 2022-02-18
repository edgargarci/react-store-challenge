import './product.module.scss';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

export interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  rating?: object;
}

export function Product(product: ProductProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <li>
        <div className="img-prod">
          <img src={product.image} alt={product.description}></img>
          <NumberFormat
            value={product.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$ '}
            decimalScale={2}
          />
        </div>

        <h1>{product.title}</h1>
      </li>
    </Link>
  );
}

export default Product;
