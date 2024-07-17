const Card = ({ product }) => {
  const cardStyle = {
    padding: '50px',
    border: '1px solid black',
  };

  return (
    <div style={cardStyle}>
      <p>{product.name}</p>
    </div>
  );
};

export default Card;
