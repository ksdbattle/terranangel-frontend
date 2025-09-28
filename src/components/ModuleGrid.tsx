import styles from './ModuleGrid.module.css';

const modules = [
  {
    id: 'space',
    title: 'Space',
    description: 'Exploring the cosmos, from orbital mechanics to interstellar travel.',
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Advancing machine intelligence, learning, and autonomous systems.',
  },
  {
    id: 'bio-tech',
    title: 'Bio-Tech',
    description: 'Engineering life itself, from genetic modification to synthetic organisms.',
  },
  {
    id: 'industry',
    title: 'Industry',
    description: 'Revolutionizing manufacturing, logistics, and industrial automation.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Extending life and well-being through advanced medical technology.',
  },
  {
    id: 'resources',
    title: 'Resources',
    description: 'Sustainable management and acquisition of global energy and materials.',
  },
];

export default function ModuleGrid() {
  return (
    <div className={styles.grid}>
      {modules.map((module) => (
        <div key={module.id} className={styles.card}>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
        </div>
      ))}
    </div>
  );
}
