import ModulePage from '@/components/ModulePage';
import styles from './IndustryPage.module.css'; // Import new styles

export default function IndustryPage() {
  return (
    <ModulePage
      id="industry"
      title="Industry"
      description="Pioneering space industrialization: developing advanced systems for extraterrestrial resource extraction, refining, power generation, and robotic automation to build sustainable bases on the Moon, Mars, and asteroid belts."
    >
      <section className={styles.overview}>
        <h2>Advancing Extraterrestrial Industry</h2>
        <p>Our industry module focuses on enabling self-sufficiency and expansion across the solar system through advanced resource utilization and automation.</p>
      </section>

      <section className={styles.resourceHubs}>
        <h3>Resource Hubs Across the Solar System</h3>
        <div className={styles.tableContainer}> {/* For responsiveness */} 
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th data-label="Celestial Body">Celestial Body</th>
                <th data-label="Key Resources">Key Resources</th>
                <th data-label="Processes">Primary Extraction/Refining Processes</th>
                <th data-label="Applications">Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Celestial Body">The Moon</td>
                <td data-label="Key Resources">Helium-3, Titanium, Aluminum, Rare Earth Elements, Water Ice</td>
                <td data-label="Processes">Regolith mining, advanced material separation, in-situ manufacturing, ISRU (In-Situ Resource Utilization)</td>
                <td data-label="Applications">Fusion power (Helium-3), construction materials, life support, propellant production</td>
              </tr>
              <tr>
                <td data-label="Celestial Body">Mars</td>
                <td data-label="Key Resources">Iron Oxides, Water Ice, Carbon Dioxide, Silicates, Perchlorates</td>
                <td data-label="Processes">Smelting iron oxides for steel, electrolysis of water (O2/H2), atmospheric CO2 capture (fuel/atmosphere), silicate processing, perchlorate reduction</td>
                <td data-label="Applications">Habitat construction, breathable atmospheres, rocket fuel, water supply, agriculture</td>
              </tr>
              <tr>
                <td data-label="Celestial Body">Asteroid Belt</td>
                <td data-label="Key Resources">Nickel-Iron Alloys, Platinum Group Metals, Water Ice, Carbonaceous Chondrites</td>
                <td data-label="Processes">Robotic prospecting & mining (e.g., anchor-bots, magnetic rakes), orbital processing facilities, water harvesting</td>
                <td data-label="Applications">High-value metal extraction, fuel depots, construction of orbital infrastructure, raw material feedstock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.industrialProcesses}>
        <h3>Key Industrial Processes</h3>
        <ul>
          <li>
            <h4>Advanced Refining & Manufacturing</h4>
            <p>Developing efficient refining techniques for extraterrestrial materials and utilizing additive manufacturing (3D printing) for complex structures and components.</p>
          </li>
          <li>
            <h4>Sustainable Power Generation</h4>
            <p>Reliable energy is crucial. We focus on advanced solar power arrays optimized for alien environments and compact, safe nuclear fission reactors for consistent base power.</p>
          </li>
          <li>
            <h4>Autonomous Robotics & Automation</h4>
            <p>Intelligent, resilient robotic systems designed for mining, construction, maintenance, and hazardous material handling, ensuring safety and efficiency in remote operations.</p>
          </li>
        </ul>
      </section>
    </ModulePage>
  );
}
