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
        <p className={styles.slogan}>Angel on Earth, guarding dreams and creativity.</p>
        <p className={styles.slogan}>The messenger connecting humanity and the future.</p>
      </div>

      <p className={styles.subIntro}>
        Expanding civilization beyond the solar system to safeguard the precious fruits of nature, while advancing with the times.
      </p>

      <ModuleGrid />
    </main>
  );
}