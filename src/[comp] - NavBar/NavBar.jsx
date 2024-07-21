import { Link } from 'react-router-dom';
import NavButton from '../[comp] - Styled Comps/NavButton';

const NavBar = ({ currentTabNameString }) => {
  const currentStyle = {
    color: 'var(--beige)',
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
        <NavButton className="underlineable" style={homeButtonStyle}>
          Home
        </NavButton>
      </Link>
      <Link to="/shop">
        <NavButton className="underlineable" style={shopButtonStyle}>
          Shop
        </NavButton>
      </Link>
    </div>
  );
};

export default NavBar;
