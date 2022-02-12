import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Topbar from '../../components/layout/Topbar';
import Main from '../../components/Main';
import { getProductAction, getUserAction } from '../../actions/index';

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products: product } = useSelector((state) => ({ products: state.products.product }));

  useEffect(() => {
    dispatch(getProductAction(productId));
  }, [productId, dispatch]);

  console.log(product);

  const productDetail = (
    <>
      <h1>{product.name}</h1>
      <p>Year being produced: {product.year}</p>
    </>
  );

  return (
    <Container>
      <Topbar />
      <Main>{productDetail}</Main>
    </Container>
  );
}

export default ProductDetailPage;
