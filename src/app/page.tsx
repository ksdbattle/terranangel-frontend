import ModuleGrid from '../components/ModuleGrid';
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image
          src="/logo/logo.png"
          alt="TerranAngel Logo"
          width={200}
          height={200}
          className={styles.logo}
        />
        <h1 className={styles.title}>TerranAngel™</h1>
        <p className={styles.slogan}>Pioneering the future, safeguarding innovation and humanity's dreams.</p>
        <p className={styles.slogan}>Connecting technological frontiers across the cosmos.</p>
      </div>

      <p className={styles.subIntro}>
        Advancing civilization through innovation, from securing digital realms to exploring the vastness of space.
      </p>

      <ModuleGrid />
    </main>
  );
}