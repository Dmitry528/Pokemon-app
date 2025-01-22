import { Link } from 'react-router';

import './header.css';
import { Paths } from 'AppRouter';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Pokemon app v1</h1>
      </div>
      <nav>
        <Link className="nav-item" to={Paths.Pokemons}>
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
