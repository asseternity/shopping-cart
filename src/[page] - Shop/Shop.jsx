import { useState, useEffect } from 'react';
import NavBar from '../[comp] - NavBar/NavBar';
import Card from '../[comp] - Card/Card';
import NavButton from '../[comp] - Styled Comps/NavButton';
import ProductCard from '../[comp] - Styled Comps/ProductCard';
import banner from '../assets_images/pexels-kseniachernaya-3965545.jpg';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
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
        <NavBar currentTabNameString="shop" />
        <div>
          <NavButton>${price.toFixed(2)} | </NavButton>
          <NavButton>🛒: {cartItems.length} |</NavButton>
          <NavButton>Checkout</NavButton>
        </div>
      </div>
      <div
        style={{
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          marginBottom: '40px',
          marginTop: '40px',
        }}
      >
        <h1 className="shop_banner">Store</h1>
      </div>
      {data && (
        <div
          className="card_container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, 300px)',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <ProductCard>
            <Card product={data[1]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[2]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[3]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[15]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[5]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[6]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[7]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[8]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[9]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[10]} addToCartMethod={addToCart} />
          </ProductCard>
          <ProductCard>
            <Card product={data[11]} addToCartMethod={addToCart} />
          </ProductCard>
        </div>
      )}
    </div>
  );
};

export default Shop;
