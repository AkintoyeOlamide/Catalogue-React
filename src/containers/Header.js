import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Search from './Search';
import styles from '../styles/Header.module.css';

const cx = classNames;

const Header = () => (
  <nav className={cx(styles.nav)}>
    <ul className={cx(styles.menus)}>
      <li className={cx(styles.menu__item)}>
        <Link className={cx(styles.menu__link)} to="/">Richies recipies</Link>
      </li>
      <li className={cx(styles.menu__item)}>
        <Link className={cx(styles.menu__link)} to="/">Home</Link>
      </li>
      <li className={cx(styles.menu__item)}>
        <Link className={cx(styles.menu__link)} to="/categories">Categories</Link>
      </li>
    </ul>

    <div className={cx(styles.menu__search)}>
      <Search />
    </div>
  </nav>
);

export default Header;
