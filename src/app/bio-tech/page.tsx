import ModulePage from '@/components/ModulePage';

export const metadata = {
  title: 'Bio‑Tech — TerranAngel',
  description: 'Synthetic biology, genetic engineering and biotech applications.',
};

export default function Page() {
  return (
    <ModulePage
      id="bio-tech"
      title="Bio‑Tech"
      description="Synthetic biology, genetic engineering, and biotechnology applications."
    >
      <p>Example highlights:</p>
      <ul>
        <li>Design tools for synthetic circuits and organisms.</li>
        <li>Ethics and safety frameworks for biological design.</li>
        <li>Applied biotech workflows and prototypes.</li>
      </ul>
    </ModulePage>
  );
}
