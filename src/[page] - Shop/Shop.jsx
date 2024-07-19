import { useState, useEffect } from 'react';
import NavBar from '../[comp] - NavBar/NavBar';
import Card from '../[comp] - Card/Card';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const topbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const addToCart = (product, productAmount) => {
    let cartAdditions = [];
    let newTotalPrice = price;
    for (let i = 0; i < productAmount; i++) {
      cartAdditions.push(product);
      newTotalPrice += product.price;
    }
    setCartItems([...cartItems, ...cartAdditions]);
    setPrice(newTotalPrice);
  };

  if (error)
    return (
      <div>
        <h1>A network error was encountered</h1>
      </div>
    );
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <div style={topbarStyle}>
        <NavBar currentTabNameString="home" />
        <div>
          <button>${price}</button>
          <button>{cartItems.length}</button>
          <button>Checkout</button>
        </div>
      </div>
      <p>I am shop</p>
      {data && (
        <div>
          <Card product={data} addToCartMethod={addToCart} />
          <Card product={data} addToCartMethod={addToCart} />
          <Card product={data} addToCartMethod={addToCart} />
        </div>
      )}
    </div>
  );
};

export default Shop;
