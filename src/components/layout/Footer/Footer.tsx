import Container from "../Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          © {new Date().getFullYear()} Compile. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
