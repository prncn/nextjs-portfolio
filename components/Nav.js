import styles from '../styles/Nav.module.css';
import Link from 'next/Link'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <p><strong>Princen Kumar</strong> Portfolio</p>
      <ul className="container">
        <li className={styles.underline}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.underline}>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;