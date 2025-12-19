import ModulePage from '@/components/ModulePage';

export const metadata = {
  title: 'Healthcare — TerranAngel',
  description: 'Advanced medical technology, diagnostics and life-extension research.',
};

export default function Page() {
  return (
    <ModulePage
      id="healthcare"
      title="Healthcare"
      description="Advanced medical technology, diagnostics, and life-extension research."
    >
      <p>Example highlights:</p>
      <ul>
        <li>Diagnostics platforms and early detection tools.</li>
        <li>Biotech-assisted therapeutics and prosthetics.</li>
        <li>Data-driven approaches to public health.</li>
      </ul>
    </ModulePage>
  );
}
