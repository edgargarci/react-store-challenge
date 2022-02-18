import { useEffect, useState } from 'react';
import { HelixLoader } from 'react-loaders-kit';
import Product from '../molecules/product/product';
import './list-products.module.scss';

export interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  rating?: object;
}

export function ListProducts() {
  const [product, setProduct] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState(true);

  const loaderProps = {
    loading,
    size: 205,
    duration: 3,
    colors: ['#8bc34a', '#000'],
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      setLoading(true);
      const url = 'https://fakestoreapi.com/products';
      const resp = await fetch(url);
      const dataSend = await resp.json();

      setProduct(dataSend);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="with-3">
      <HelixLoader {...loaderProps} />
     
      <ul className="list-prod">
        {product.map((prod) => {
          return <Product key={prod.id} {...prod}></Product>;
        })}
      </ul>
    </div>
  );
}

export default ListProducts;
