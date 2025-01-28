import { Link } from 'react-router';

import { Paths } from 'AppRouter';
import headerStyles from 'shared/components/Header/Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
        <Link className={headerStyles.navItem} to={Paths.Pokemons}>
          Home
        </Link>
      </nav>
      <div>
        <h1>Pokemon app v1</h1>
      </div>
    </header>
  );
};

export default Header;
