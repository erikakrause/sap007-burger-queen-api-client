import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.textFooter}>
        Desenvolvido por <a className={styles.github} href="https://github.com/erikakrause"> Érika Moreno
        </a>
      </p>
    </footer>
  );
};

export default Footer;
