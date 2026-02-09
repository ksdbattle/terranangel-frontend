import ModulePage from '@/components/ModulePage';
import AITechTree from '@/components/AITechTree';

export default function AIPage() {
  return (
    <ModulePage
      id="ai"
      title="AI"
      description="Advancing machine learning, autonomy, and safe model deployment."
    >
      <p>Example highlights:</p>
      <ul>
        <li>Model safety research and evaluation.</li>
        <li>Autonomous agent design and simulation.</li>
        <li>Tools for reproducible ML pipelines.</li>
      </ul>

      <AITechTree />
    </ModulePage>
  );
}
