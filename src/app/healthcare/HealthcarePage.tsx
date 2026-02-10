import ModulePage from '@/components/ModulePage';
import styles from './HealthcarePage.module.css';

export default function HealthcarePage() {
  return (
    <ModulePage
      id="healthcare"
      title="Healthcare"
      description="Advanced medical technology, diagnostics, and life-extension research."
    >
      <section className={styles.overview}>
        <p>
          Practical, near-term healthcare innovations combine better diagnostics, safer therapeutics and smarter assistive
          technologies to improve population health, extend healthy lifespan and give clinicians earlier, actionable insights.
        </p>
      </section>

      <section className={styles.pediatrics}>
        <h3>Healthy Growth & Preventive Care</h3>
        <p>
          Improving maternal and child health, routine vaccination, nutrition, and early developmental screening are foundational.
          Scalable primary care and public-health measures prevent disease and promote healthy growth trajectories.
        </p>
      </section>

      <section className={styles.wearables}>
        <h3>Wearables, Smart Textiles & Continuous Monitoring</h3>
        <p>
          Sensor-rich garments and skin patches can non-invasively monitor vital signs (HR, respiration, temperature), activity,
          sleep and metabolic markers. Integrated nanofabrics enable comfortable long-term monitoring and targeted micro-delivery
          (e.g., heating/cooling, transdermal patches) for personalized care.
        </p>
      </section>

      <section className={styles.diagnostics}>
        <h3>Early Detection & Diagnostics</h3>
        <p>
          Advances in biomarkers, liquid biopsy (circulating tumor DNA), portable imaging and AI-assisted pattern recognition make
          earlier, more accurate detection of disease possible — enabling interventions when they are most effective.
        </p>
      </section>

      <section className={styles.therapeutics}>
        <h3>Anti‑Aging & Therapeutic Modalities</h3>
        <p>
          Translational research focuses on evidence-based interventions that extend healthspan: senolytics, metabolic modulators
          (NAD+ precursors), mTOR pathway modulators and improved delivery systems. Clinical validation and safety are essential before
          broad use.
        </p>
      </section>

      <section className={styles.lifestyle}>
        <h3>Exercise, Nutrition & Lifestyle Interventions</h3>
        <p>
          Validated exercise regimens (combined aerobic and resistance training), personalized nutrition and sleep hygiene remain
          among the most impactful, low-cost ways to reduce disease burden and improve metabolism at population scale.
        </p>
      </section>

      <section className={styles.assistive}>
        <h3>Cybernetic & Assistive Technologies</h3>
        <p>
          Practical assistive tech includes advanced prosthetics, powered exoskeletons for rehabilitation and augmentative devices for
          mobility. Medical-grade brain–computer interfaces are being developed for restoring function after injury; focus is on
          clinical indications and safety.
        </p>
      </section>

      <section className={styles.devices}>
        <h3>Point‑of‑Care & Home Diagnostics</h3>
        <p>
          Rapid antigen/antibody tests, portable ultrasound, and compact multiplexed analyzers empower clinicians and patients to
          make faster decisions outside the hospital. These devices reduce time-to-treatment and lower costs when paired with
          telemedicine platforms.
        </p>
      </section>

      <section className={styles.ethics}>
        <h3>Regulation, Safety & Ethics</h3>
        <p>
          All clinical and biotechnological work must follow ethical guidelines, evidence-based evaluation and regulatory approval.
          I will not create content that promotes eugenics or coercive reproductive policies; instead, responsible approaches
          emphasize consent, equity and clinical benefit.
        </p>
      </section>

    </ModulePage>
  );
}

