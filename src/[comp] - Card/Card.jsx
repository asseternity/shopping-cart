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

  const incrementUp = () => {
    setProductAmount(productAmount + 1);
  };

  const incrementDown = () => {
    setProductAmount(productAmount - 1);
  };

  return (
    <div style={cardStyle}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.image} style={{ width: '250px' }} />
      <br />
      <button onClick={incrementDown}>{'<'}</button>
      <input type="number" value={productAmount} onChange={handleInputChange} />
      <button onClick={incrementUp}>{'>'}</button>
      <br />
      <button onClick={() => addToCartMethod(product, productAmount)}>
        Add {product.title} to cart
      </button>
    </div>
  );
};

export default Card;
