import styles from './AILanguages.module.css';

const LANGUAGES: { name: string; meta: string }[] = [
  { name: 'Python', meta: 'Data science, ML, scripting, backend' },
  { name: 'Java', meta: 'Enterprise apps, Android, strong typing' },
  { name: 'JavaScript', meta: 'Web, Node.js, scripting' },
  { name: 'TypeScript', meta: 'Typed JS for large codebases' },
  { name: 'C#', meta: '.NET apps, game dev with Unity' },
  { name: 'C++', meta: 'Systems, high-performance code' },
  { name: 'Go', meta: 'Cloud services, concurrency' },
  { name: 'Rust', meta: 'Safe systems, performance' },
  { name: 'Ruby', meta: 'Web apps with Rails' },
  { name: 'PHP', meta: 'Web backends, legacy systems' },
  { name: 'Swift', meta: 'iOS / macOS apps' },
  { name: 'Kotlin', meta: 'Android, modern JVM apps' },
  { name: 'SQL', meta: 'Queries, schema design' },
  { name: 'Shell', meta: 'Scripting, automation' },
  { name: 'HTML & CSS', meta: 'Markup and styling for web' },
];

const FRAMEWORKS: { name: string; meta: string }[] = [
  { name: 'React', meta: 'Component-based UI' },
  { name: 'Next.js', meta: 'Fullstack React framework' },
  { name: 'Node.js / Express', meta: 'Server-side JS' },
  { name: 'Django', meta: 'Python fullstack framework' },
  { name: 'Flask', meta: 'Lightweight Python web' },
  { name: 'Spring', meta: 'Java enterprise framework' },
  { name: '.NET / ASP.NET', meta: 'Microsoft stack' },
  { name: 'Angular', meta: 'Opinionated frontend framework' },
  { name: 'Vue', meta: 'Progressive frontend framework' },
  { name: 'TensorFlow', meta: 'ML models and training' },
  { name: 'PyTorch', meta: 'Research and model building' },
  { name: 'FastAPI', meta: 'Modern Python APIs' },
  { name: 'Rails', meta: 'Ruby web framework' },
  { name: 'Laravel', meta: 'PHP web framework' },
];

export default function AILanguages() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.sectionTitle}>Languages AI Commonly Writes</h3>
        <div className={styles.grid}>
          {LANGUAGES.map((l) => (
            <div key={l.name} className={styles.card}>
              <div className={styles.name}>{l.name}</div>
              <div className={styles.meta}>{l.meta}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className={styles.sectionTitle}>Frameworks & Libraries</h3>
        <div className={styles.grid}>
          {FRAMEWORKS.map((f) => (
            <div key={f.name} className={styles.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.name}>{f.name}</div>
                <div className={styles.pill}>AI-ready</div>
              </div>
              <div className={styles.meta}>{f.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
