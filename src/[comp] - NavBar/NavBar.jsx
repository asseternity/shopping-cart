import { Link } from 'react-router-dom';

const NavBar = ({ currentTabNameString }) => {
  const currentStyle = {
    color: 'red',
  };

  let homeButtonStyle = {};
  let shopButtonStyle = {};

  switch (currentTabNameString) {
    case 'home':
      homeButtonStyle = currentStyle;
      break;
    case 'shop':
      shopButtonStyle = currentStyle;
      break;
    default:
      break;
  }

  return (
    <div>
      <Link to="/">
        <button style={homeButtonStyle}>Home</button>
      </Link>
      <Link to="/shop">
        <button style={shopButtonStyle}>Shop</button>
      </Link>
    </div>
  );
};

export default NavBar;
