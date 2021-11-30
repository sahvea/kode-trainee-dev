import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation app__section">
      <Link to="/" className="app__button navigation__link" />
    </nav>
  );
}

export default Navigation;