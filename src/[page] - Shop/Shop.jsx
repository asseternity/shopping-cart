import { useState } from 'react';
import NavBar from '../[comp] - NavBar/NavBar';
import Card from '../[comp] - Card/Card';

const mockProduct = {
  name: 'test1',
  price: 10,
};
const mockProduct2 = {
  name: 'test2',
  price: 20,
};
const mockProduct3 = {
  name: 'test3',
  price: 30,
};

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const topbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const addToCart = (product, productAmount) => {
    let cartAdditions = [];
    for (let i = 0; i < productAmount; i++) {
      cartAdditions.push(product);
    }
    setCartItems([...cartItems, ...cartAdditions]);
  };

  return (
    <div>
      <div style={topbarStyle}>
        <NavBar currentTabNameString="home" />
        <div>
          <button>{cartItems.length}</button>
          <button>Checkout</button>
        </div>
      </div>
      <p>I am shop</p>
      <Card product={mockProduct} addToCartMethod={addToCart} />
      <Card product={mockProduct2} addToCartMethod={addToCart} />
      <Card product={mockProduct3} addToCartMethod={addToCart} />
    </div>
  );
};

export default Shop;
