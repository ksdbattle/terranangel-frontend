import ModulePage from '@/components/ModulePage';
import styles from './AgriculturePage.module.css';

export default function AgriculturePage() {
  return (
    <ModulePage
      id="agriculture"
      title="Agriculture"
      description="Building resilient, efficient food systems for Earth and beyond — improving crop yields, sustainable practices, and closed-loop food production for long-term missions."
    >
      <section className={styles.overview}>
        <h2>Feeding Today and Tomorrow</h2>
        <p>
          Our agriculture module focuses on scaling sustainable food production using both traditional crop systems and advanced controlled-environment
          agriculture to meet terrestrial needs and support off-world missions.
        </p>
      </section>

      <section className={styles.majorCrops}>
        <h3>Major Crops & Their Roles</h3>
        <ul>
          <li>
            <h4>Wheat</h4>
            <p>Staple cereal used for bread, pasta and many processed foods — high-yield varieties and drought-tolerant strains are essential.</p>
          </li>
          <li>
            <h4>Rice</h4>
            <p>Primary caloric source for half the world; improvements include water-efficient paddy techniques and aerobic rice systems.</p>
          </li>
          <li>
            <h4>Corn (Maize)</h4>
            <p>Versatile for feed, food and bioindustrial uses (starch, ethanol); precision hybrid breeding increases resilience and yield.</p>
          </li>
          <li>
            <h4>Soy</h4>
            <p>High-protein oilseed used for food, feed and industrial proteins — critical for balanced nutrition and nitrogen-fixing rotations.</p>
          </li>
          <li>
            <h4>Potatoes</h4>
            <p>High caloric tuber with efficient land-to-calorie ratio; important for space/controlled agriculture due to compact growth form.</p>
          </li>
          <li>
            <h4>Barley, Sorghum & Millet</h4>
            <p>Climate-resilient cereals suited for arid and marginal lands; useful in crop diversification strategies.</p>
          </li>
        </ul>
      </section>

      <section className={styles.techniques}>
        <h3>Farming Techniques & Technologies</h3>
        <ul>
          <li>
            <h4>Irrigation & Water Management</h4>
            <p>Drip irrigation, deficit irrigation, and water recycling dramatically reduce water footprint while maintaining yields.</p>
          </li>
          <li>
            <h4>Precision Agriculture</h4>
            <p>Sensor networks, drones and AI enable targeted inputs (fertilizer, pesticide) to maximize efficiency and reduce waste.</p>
          </li>
          <li>
            <h4>Controlled-Environment Agriculture</h4>
            <p>Greenhouses, vertical farms, hydroponics and aeroponics allow high-density production with predictable outputs — critical for urban and off-world food supply.</p>
          </li>
          <li>
            <h4>Soil Health & Regenerative Practices</h4>
            <p>Cover cropping, reduced tillage, and microbial amendments restore soil organic matter and long-term productivity.</p>
          </li>
        </ul>
      </section>

      <section className={styles.processing}>
        <h3>Processing, Storage & Supply Chains</h3>
        <p>
          From harvest to table: efficient drying, milling, cold chains, and modular processing facilities reduce post-harvest loss and enable
          regional food security. Integration with local logistics and resilient storage (silos, hermetic bags) is essential.
        </p>
      </section>

      <section className={styles.breeding}>
        <h3>Plant Breeding & Genetics</h3>
        <p>
          Modern plant breeding combines traditional selection with genomic tools to produce varieties that are higher-yielding, more
          climate-resilient and nutrient-dense. Reliable approaches include marker-assisted selection, genomic selection, and
          trait introgression from tolerant lines. Gene-editing (e.g., CRISPR) is promising for specific, well-validated traits, but
          deployment follows strict regulatory and biosafety pathways.
        </p>
        <ul>
          <li><strong>Goals:</strong> drought/salinity tolerance, pest resistance, improved nutrient content, shorter maturation time.</li>
          <li><strong>Methods:</strong> conventional crossing, marker-assisted selection, genomic selection, gene editing (regulated).</li>
          <li><strong>Impact:</strong> stabilizes yields under climate stress and reduces input needs (water, pesticides).</li>
        </ul>
      </section>

      <section className={styles.livestock}>
        <h3>Animal Husbandry & Livestock Systems</h3>
        <p>
          Sustainable livestock systems combine genetics, nutrition, welfare-aware housing and disease management. Selective breeding
          and improved husbandry increase feed efficiency and reduce greenhouse gas intensity per unit of protein produced.
        </p>
        <ul>
          <li><strong>Breeding focus:</strong> feed conversion efficiency, disease resistance, temperament, reproductive performance.</li>
          <li><strong>Systems:</strong> pasture-based regenerative grazing, mixed crop-livestock rotations, and intensive but welfare-focused supply chains.</li>
          <li><strong>Health:</strong> vaccination, biosecurity and integrated animal health monitoring (sensors, diagnostics).</li>
        </ul>
      </section>

      

      <section className={styles.sustainability}>
        <h3>Challenges & Sustainability</h3>
        <ul>
          <li>
            <h4>Water Scarcity & Climate Variability</h4>
            <p>Adaptive cropping systems and drought-tolerant varieties reduce vulnerability.</p>
          </li>
          <li>
            <h4>Pest & Disease Management</h4>
            <p>Integrated pest management (IPM) combining biological controls and targeted chemicals minimizes resistance and environmental impact.</p>
          </li>
          <li>
            <h4>Nutrition Security</h4>
            <p>Crop diversification and fortification programs address micronutrient deficiencies at scale.</p>
          </li>
        </ul>
      </section>

      <section className={styles.future}>
        <h3>Future Directions</h3>
        <p>
          Advances in crop genetics, closed-loop life-support agriculture for long-duration missions, and decentralized micro-farms will
          shape resilient food systems for the coming decades.
        </p>
      </section>

      <section className={styles.offworld}>
        <h3>Off‑World Trials & Deployment</h3>
        <p>
          Technologies for scalable food production must be validated in the environments where they will operate. Near-term testing
          strategies include orbital demonstration platforms, lunar/low‑latitude greenhouse prototypes, and Martian analog habitats on
          Earth. Key considerations are closed‑loop water and nutrient recycling, radiation and thermal control, constrained payload
          mass/volume, and autonomous operation with remote monitoring.
        </p>
        <ul>
          <li><strong>Platforms:</strong> ISS/low‑Earth orbit testbeds, small satellite greenhouses, lunar polar demonstrators, terrestrial analog sites.</li>
          <li><strong>Objectives:</strong> validate growth protocols, test microbial biocontrols, measure yields under reduced gravity or altered light cycles.</li>
          <li><strong>Operational constraints:</strong> limited resupply, strict containment and planetary protection, automated telemetry and fault tolerance.</li>
        </ul>
        <p>
          Successful off‑world agriculture demonstrations de‑risk technologies for permanent bases, inform life‑support integration, and
          provide a roadmap from small pilots to sustained food production systems.
        </p>
      </section>
    </ModulePage>
  );
}
