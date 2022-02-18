import { useEffect, useState } from 'react';
import { HelixLoader } from 'react-loaders-kit';
import NumberFormat from 'react-number-format';
import StarRatingComponent from 'react-star-rating-component';
import './view-details-product.module.scss';

export interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  rating?: { rate?: number | undefined } | undefined;
  category?: string;
  image?: string;
}
export function ViewDetailsProduct(props: any) {
  const [product, setProduct] = useState<ProductProps>({});
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(true);

  const loaderProps = {
    loading,
    size: 205,
    duration: 3,
    colors: ['#8bc34a', '#000'],
  };

  useEffect(() => {
    getProduct(props);
  }, [props]);

  const getProduct = async (props: any) => {
    try {
      setLoading(true);
      const id = props.match.params.id;

      const url = `https://fakestoreapi.com/products/${id}`;
      const resp = await fetch(url);
      const dataSend = await resp.json();

      setProduct(dataSend);

      setRate(dataSend.rating.rate);
      console.log(rate);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('termine');

      setLoading(false);
    }
  };
  return (
    <div className="detail-product">
      <HelixLoader {...loaderProps} />
      <h3>{product.category}</h3>
      <section className="image-price-seccion">
        <img src={product.image} alt={product.title}></img>
        <div>
          <StarRatingComponent
            name="rate"
            editing={false}
            renderStarIcon={() => <span>★</span>}
            starCount={5}
            value={rate}
          />
          <h2>
            <NumberFormat
              value={product.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
            />
          </h2>
        </div>
      </section>
      <section>
        <h4>{product.title}</h4>

        <h5>{product.description}</h5>
      </section>
    </div>
  );
}

export default ViewDetailsProduct;
