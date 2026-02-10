import ModulePage from '@/components/ModulePage';
import AITechTree from '@/components/AITechTree';
import styles from './AIPage.module.css';

export default function AIPage() {
  return (
    <ModulePage
      id="ai"
      title="AI"
      description="Advancing machine learning, autonomy, and safe model deployment."
    >
      <section className={styles.summary}>
        <p>Example highlights:</p>
        <ul>
          <li>Model safety research and evaluation.</li>
          <li>Autonomous agent design and simulation.</li>
          <li>Tools for reproducible ML pipelines.</li>
        </ul>
      </section>

      <section className={styles.modelCompare}>
        <h3>Mainstream Foundation Models (compact comparison)</h3>
        <p className={styles.disclaimer}>Models listed are representative; scores are an internal, relative summary for quick comparison.</p>
        <div className={styles.tableContainer}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Strengths</th>
                <th>Agent Mode</th>
                <th>Score (0–10)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GPT‑5</td>
                <td>General reasoning, multimodal, broad API ecosystem</td>
                <td>Strong</td>
                <td>9.5</td>
                <td>High-quality assistants and integrations; strong agent tooling.</td>
              </tr>
              <tr>
                <td>Gemini‑3</td>
                <td>Multimodal comprehension, tool use, robust instruction following</td>
                <td>Strong</td>
                <td>9.0</td>
                <td>Balanced performance across reasoning and creativity workloads.</td>
              </tr>
              <tr>
                <td>Claude‑4</td>
                <td>Safety-focused, long-context dialogue, compositional prompting</td>
                <td>Good</td>
                <td>8.8</td>
                <td>Often chosen for conservative/high-trust applications.</td>
              </tr>
              <tr>
                <td>Grok‑4</td>
                <td>Fast conversational performance, chat-centric design</td>
                <td>Partial</td>
                <td>8.2</td>
                <td>Optimized for real-time chat; agent feature set evolving.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.agentMode}>
        <h3>Agent‑First Workflows</h3>
        <p>
          Agent mode — tying models to tools, state, and orchestrated reasoning — is a primary way to build useful, autonomous
          assistants. Priorities for agent design include safe tool invocation, robust error handling, capability‑scoped permissions,
          and human‑in‑the‑loop checkpoints for high‑risk actions.
        </p>
      </section>

      <AITechTree />
    </ModulePage>
  );
}
