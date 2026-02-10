import ModulePage from '@/components/ModulePage';
import styles from './BioTechPage.module.css';

export default function BioTechPage() {
  return (
    <ModulePage
      id="bio-tech"
      title="Bio‑Tech"
      description="Synthetic biology, genetic engineering, and biotechnology applications."
    >
      <section className={styles.overview}>
        <p>
          Bio‑tech combines biology, engineering and computation to create new therapies, diagnostics and sustainable
          production platforms. Below are current, practical directions with clear development paths and real-world impact.
        </p>
      </section>

      <section className={styles.directions}>
        <h3>Near-term (1–5 years)</h3>
        <ul>
          <li>
            <h4>mRNA Therapeutics & Vaccines</h4>
            <p>
              mRNA platforms enable rapid development of vaccines and protein-replacement therapies; improvements focus on
              stability, targeted delivery and broader clinical indications.
            </p>
          </li>
          <li>
            <h4>AI-driven Drug Discovery</h4>
            <p>
              Machine learning accelerates small-molecule and biologic discovery by predicting targets, structures and
              synthesis routes, reducing early-stage timelines.
            </p>
          </li>
          <li>
            <h4>Next‑gen Cell Therapies</h4>
            <p>
              Advances in CAR‑T and other engineered cell therapies expand to solid tumors and autoimmune diseases, with safer
              control systems and off-the-shelf manufacturing approaches.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.directions}>
        <h3>Mid-term (5–10 years)</h3>
        <ul>
          <li>
            <h4>Precision Gene Editing Therapies</h4>
            <p>
              Delivery and safety improvements for CRISPR and related technologies will make curative treatments for some
              monogenic diseases clinically practical.
            </p>
          </li>
          <li>
            <h4>Microbiome and Ecological Therapies</h4>
            <p>
              Tailored microbiome interventions for gut, skin and environmental health — including engineered probiotics and
              targeted microbial consortia — to treat disease and restore ecosystems.
            </p>
          </li>
          <li>
            <h4>Advanced Biomanufacturing</h4>
            <p>
              Scalable fermentation and cell-free systems for producing therapeutics, sustainable materials and food ingredients
              with lower environmental impact than petrochemical routes.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.directions}>
        <h3>High‑impact Areas & Emerging Platforms</h3>
        <ul>
          <li>
            <h4>Brain–Computer Interfaces (BCI)</h4>
            <p>
              Practical advances focus on medical applications: restoring motor control, prosthetic control and treating specific
              neurological disorders. Both non‑invasive and carefully engineered implantable systems are being developed with
              clinical safety as a priority.
            </p>
          </li>
          <li>
            <h4>Longevity & Geroscience Interventions</h4>
            <p>
              Research into senolytics, metabolic modulators and robust biomarkers of aging aims to extend healthspan through
              targeted clinical trials rather than speculative immortality claims.
            </p>
          </li>
          <li>
            <h4>Precision Delivery & Nanomedicine</h4>
            <p>
              Improved nanoparticle carriers and targeted delivery systems reduce side effects and enable new classes of drugs.
            </p>
          </li>
          <li>
            <h4>Protein Design & Synthetic Enzymes</h4>
            <p>
              Computational protein engineering enables bespoke enzymes for industrial chemistry, therapeutics and diagnostics.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.aiDesign}>
        <h3>AI‑Assisted Molecular Design & Platform Integration</h3>
        <p>
          A growing vertical combines machine learning, high‑throughput experiments and automated workflows to accelerate
          discovery of small molecules, biologics and functional proteins. These approaches are pragmatic and near-term when
          paired with rigorous validation pipelines and translational planning.
        </p>
        <ul>
          <li>
            <h4>Generative Models for Molecules and Proteins</h4>
            <p>
              Deep generative models and structure‑aware networks propose candidate small molecules, peptides and protein backbones
              optimized for target engagement, stability and manufacturability. Successful programs couple in silico proposals with
              prioritized wet‑lab testing.
            </p>
          </li>
          <li>
            <h4>In Silico ADMET & Predictive Safety</h4>
            <p>
              Predictive models for absorption, distribution, metabolism, excretion and toxicity reduce downstream failure rates by
              identifying liabilities early, enabling selection of safer lead candidates prior to costly clinical work.
            </p>
          </li>
          <li>
            <h4>Automated Design–Build–Test Loops</h4>
            <p>
              Integration of ML with laboratory automation (liquid handlers, plate readers, and sequencing) establishes iterative cycles
              where models are retrained on experimental feedback, improving hit rates and shortening development timelines.
            </p>
          </li>
          <li>
            <h4>Synthesis Planning & Feasibility</h4>
            <p>
              Retrosynthesis planners and route‑scoring systems prioritize candidates that are not only potent but also synthetically
              tractable at scale, bridging computational design with real‑world chemical manufacturing constraints.
            </p>
          </li>
          <li>
            <h4>Data Strategies & Federated Learning</h4>
            <p>
              Secure data sharing, federated learning and standardized assay ontologies allow models to benefit from distributed datasets
              while respecting privacy and IP constraints — critical for clinical translation and cross‑organizational collaboration.
            </p>
          </li>
          <li>
            <h4>Clinical Translation & Regulatory Pathways</h4>
            <p>
              Practical AI‑driven programs build regulatory evidence early (robust validation, interpretability, and reproducibility) to
              facilitate predictable paths through preclinical and clinical evaluation.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.offworld}>
        <h3>Off‑World Research & Platform Considerations</h3>
        <p>
          Translating biotech advances to space environments requires dedicated research platforms and strict operational controls.
          Early experiments in microgravity and high‑radiation environments reveal different cell behaviors, altered diffusion and
          protein folding dynamics — all of which can impact biologics production and cellular therapies.
        </p>
        <ul>
          <li><strong>Testbeds:</strong> orbital labs, autonomous small modules, and analog habitats for iterative experiments and process validation.</li>
          <li><strong>Biomanufacturing:</strong> investigations into cell‑free synthesis and microgravity‑enabled processes that may offer
            productivity or novel product properties; work requires containment, redundancy and robust remote operation.</li>
          <li><strong>Safety and containment:</strong> strict biosafety, planetary protection and data integrity practices must be part of any
            off‑world program.</li>
          <li><strong>Data & automation:</strong> closed‑loop design–build–test cycles rely heavily on remote automation, real‑time telemetry
            and ML models retrained with in‑situ data to accelerate iteration.</li>
        </ul>
        <p>
          Well‑designed off‑world research programs provide essential evidence for whether specific biotech approaches are suitable for
          long‑duration missions and permanent bases, and they help prioritize technologies for in‑situ manufacturing versus Earth supply.
        </p>
      </section>

      <section className={styles.ethics}>
        <h3>Safety, Regulation & Ethics</h3>
        <p>
          Progress in biotechnology requires robust regulatory pathways, reproducible science, and ethical frameworks to manage
          risks (biosafety, dual‑use concerns, equitable access). Practical development emphasizes transparency, clinical
          evidence and scalable manufacturing practices.
        </p>
      </section>

    </ModulePage>
  );
}

