import Link from 'next/link';
import styles from './ModulePage.module.css';
import type { ReactNode } from 'react';

interface ModulePageProps {
  id: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function ModulePage({ id, title, description, children }: ModulePageProps) {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link href="/" className={styles.back}>
            ← Back to Home
          </Link>
          <Link href={`/${id}/learn`} className={styles.cta}>
            Learn More
          </Link>
        </div>
      </div>

      <section className={styles.content}>
        {children ?? <p>This section will host module-specific content.</p>}
      </section>
    </main>
  );
}
