import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterOldProductsAction, getProductsAction } from '../../actions/index';
import Container from '../../components/Container';
import ProductItem from '../../components/layout/ProductItem';
import Topbar from '../../components/layout/Topbar';
import WrappedLink from '../../components/Link';
import Main from '../../components/Main';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ProductsListPage() {
  const getProductsDispatch = useDispatch();
  const filterProductDispatch = useDispatch();

  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const getProducts = () => {
      getProductsDispatch(getProductsAction());
    };

    getProducts();
  }, []);

  useEffect(() => {
    filterProductDispatch(filterOldProductsAction(filter));
  }, [filter]);

  const { products } = useSelector((state) => ({ products: state.products.products }));

  const productsList = products?.map((product) => {
    return (
      <WrappedLink to={`/products/${product.id}`}>
        <ProductItem name={product.name} color={product.color} year={product.year} />
      </WrappedLink>
    );
  });

  return (
    <Container>
      <Topbar />
      <Main>
        <TitleWrapper>
          <h1>List Of Products</h1>
          <div>
            <input
              type="checkbox"
              name="filter"
              id="filter-year"
              checked={filter}
              onChange={() => setFilter((current) => !current)}
            />
            <label htmlFor="filter-year">filter products older than 2004</label>
          </div>
        </TitleWrapper>
        {productsList}
      </Main>
    </Container>
  );
}

export default ProductsListPage;
