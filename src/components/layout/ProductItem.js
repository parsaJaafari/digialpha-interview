import styled from 'styled-components';

function ProductItem(props) {
  const ProductItemWrapper = styled.div`
    background-color: rgba(66, 69, 67, 0.95);
    display: flex;
    align-items: center;
    padding: 30px 17px;
    margin-bottom: 15px;
  `;
  const ColorWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${props.color};
    margin-right: 20px;
  `;

  const DateWrapper = styled.p`
    font-weight: 300;
  `;

  return (
    <ProductItemWrapper>
      <ColorWrapper />
      <div>
        <div>{props.name}</div>
        <DateWrapper>year being produced: {props.year}</DateWrapper>
      </div>
    </ProductItemWrapper>
  );
}

export default ProductItem;
