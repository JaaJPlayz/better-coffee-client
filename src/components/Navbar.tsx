import styles from './styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <section className={styles.siteLogo}>
        <img src='coffee-mug-logo.png'></img>
        <h1>Better Coffee</h1>
      </section>
    </nav>
  )
}

export default Navbar;
