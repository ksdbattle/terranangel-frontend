import ModulePage from '@/components/ModulePage';

export const metadata = {
  title: 'AI — TerranAngel',
  description: 'Research directions in machine learning, autonomy and safe deployment.',
};

export default function Page() {
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
    </ModulePage>
  );
}
