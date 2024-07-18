import { useState } from 'react';

const Card = ({ product, addToCartMethod }) => {
  const [productAmount, setProductAmount] = useState(1);

  const cardStyle = {
    padding: '50px',
    border: '1px solid black',
  };

  const handleInputChange = (e) => {
    setProductAmount(e.target.value);
  };

  return (
    <div style={cardStyle}>
      <p>{product.name}</p>
      <input type="number" value={productAmount} onChange={handleInputChange} />
      <button onClick={() => addToCartMethod(product, productAmount)}>
        Add {product.name} to cart
      </button>
    </div>
  );
};

export default Card;
