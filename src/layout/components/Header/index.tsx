import { Heading } from '@radix-ui/themes';
import { Navbar } from './NavBar';
import * as styles from './styles.css';

export const Header = () => {
  return (
    <header className={styles.heroHeader}>
      <div className={styles.headerContent}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Heading as='h1' className={styles.title}>
            DR. ROCK
          </Heading>
          <p className={styles.description}>Desde 1980 · A Lenda Continua</p>
        </div>
        <div className={styles.headerActions}>
          <a href='#' className={styles.link}>
            🎸 Buscar
          </a>
          <a href='#' className={styles.link}>
            🛒 Carrinho (0)
          </a>
        </div>
      </div>

      <Navbar />
    </header>
  );
};
