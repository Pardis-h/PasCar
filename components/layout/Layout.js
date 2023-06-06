import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>PasCar</h1>
          <p>Choose andd Buy your car here</p>
        </Link>
      </header>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        <p>
          <a href="https://github.com/Pardis-h/" target="_blank">
            Pardis Haghdoust
          </a>
          {" "}| Next.js course Project &copy;
        </p>
      </footer>
    </>
  );
}

export default Layout;
