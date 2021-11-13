import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation app__section">
      <Link to="/" className="app__button navigation__link" />
    </nav>
  );
}

export default Navigation;