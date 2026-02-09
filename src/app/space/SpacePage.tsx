import Link from 'next/link';
import styles from './SpacePage.module.css';

const milestones = [
  {
    title: 'International Space Station (ISS)',
    description: 'A continuously inhabited laboratory in low Earth orbit, serving as a hub for research, technology development, and international cooperation. It represents our permanent foothold in space.',
  },
  {
    title: 'Commercial Crew & Cargo',
    description: 'The rise of private companies like SpaceX and Blue Origin has revolutionized access to space, providing routine transportation for astronauts and supplies, and driving down costs.',
  },
  {
    title: 'Mars Exploration',
    description: 'Robotic emissaries like the Perseverance rover and Ingenuity helicopter are actively searching for signs of ancient life, collecting samples, and testing technologies for future human missions.',
  },
  {
    title: 'The Artemis Program',
    description: 'NASA’s ambitious program to return humans to the Moon, with goals to establish a sustainable presence and prepare for the next giant leap: sending astronauts to Mars.',
  },
];

export default function SpacePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Current Frontier</h1>
        <p className={styles.subtitle}>
          Humanity is in a new golden age of space exploration. Here’s where we stand.
        </p>
      </header>

      <div className={styles.timeline}>
        {milestones.map((milestone, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
              <p className={styles.milestoneDescription}>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/" className={styles.backLink}>
        ← Back to Overview
      </Link>
    </div>
  );
}
