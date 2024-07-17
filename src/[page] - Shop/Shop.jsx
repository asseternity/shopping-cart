import { useState } from 'react';
import NavBar from '../[comp] - NavBar/NavBar';
import Card from '../[comp] - Card/Card';

const mockProduct = {
  name: 'test1',
};
const mockProduct2 = {
  name: 'test2',
};
const mockProduct3 = {
  name: 'test3',
};

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const topbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
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
      <Card product={mockProduct} />
      <button onClick={(mockProduct) => addToCart(mockProduct)}>
        Add {mockProduct.name} to cart
      </button>
      <Card product={mockProduct2} />
      <button onClick={(mockProduct2) => addToCart(mockProduct2)}>
        Add {mockProduct2.name} to cart
      </button>
      <Card product={mockProduct3} />
      <button onClick={(mockProduct3) => addToCart(mockProduct3)}>
        Add {mockProduct3.name} to cart
      </button>
    </div>
  );
};

export default Shop;
