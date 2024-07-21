import { useState } from 'react';
import CartButton from '../[comp] - Styled Comps/CartButton';

const Card = ({ product, addToCartMethod }) => {
  const [productAmount, setProductAmount] = useState(1);

  const handleInputChange = (e) => {
    setProductAmount(e.target.value);
  };

  const incrementUp = () => {
    setProductAmount(productAmount + 1);
  };

  const incrementDown = () => {
    setProductAmount(productAmount - 1);
  };

  return (
    <div>
      <img
        src={product.image}
        style={{ height: '250px', width: '250px', objectFit: 'contain' }}
      />
      <div style={{ height: '50px' }}>
        <h2>{product.title}</h2>
      </div>
      <div style={{ height: '130px' }}>
        <p>{product.description}</p>
      </div>
      <div style={{ height: '50px' }}>
        <p>${product.price}</p>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CartButton onClick={incrementDown}>{'<'}</CartButton>
          <input
            type="number"
            value={productAmount}
            onChange={handleInputChange}
          />
          <CartButton onClick={incrementUp}>{'>'}</CartButton>
        </div>
        <br />
        <CartButton onClick={() => addToCartMethod(product, productAmount)}>
          Add to cart
        </CartButton>
      </div>
    </div>
  );
};

export default Card;
