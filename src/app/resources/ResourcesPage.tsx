import ModulePage from '@/components/ModulePage';
import styles from './ResourcesPage.module.css';

export default function ResourcesPage() {
  return (
    <ModulePage
      id="resources"
      title="Resources"
      description="Sustainable energy, materials sourcing, and circular-economy strategies."
    >
      <section className={styles.intro}>
        <p>
          Resources power societies and enable exploration. Below we summarize Earth&apos;s major resource categories (minerals,
          soils, oceans and fossil fuels) with approximate proportions and plain-language notes, then compare these with what we
          can reasonably expect to access on the Moon, Mars and Venus.
        </p>
      </section>

      <section className={styles.tableSection}>
        <h3>Earth — Crustal Element Composition (approx.)</h3>
        <div className={styles.tableContainer}>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Element / Resource</th>
                <th>Approx. % of Earth&apos;s Continental Crust</th>
                <th>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oxygen (as oxides)</td>
                <td>~46%</td>
                <td>Primary component of silicate minerals and source of oxygen for life-support and metal oxides.</td>
              </tr>
              <tr>
                <td>Silicon</td>
                <td>~28%</td>
                <td>Key for glass, ceramics, electronics (silicon).</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>~8%</td>
                <td>Lightweight metal used in construction, aerospace and packaging.</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>~5%</td>
                <td>Foundation of steel industry — construction, transport, heavy industry.</td>
              </tr>
              <tr>
                <td>Calcium</td>
                <td>~3.6%</td>
                <td>Cement, concrete, and several industrial minerals.</td>
              </tr>
              <tr>
                <td>Sodium & Potassium</td>
                <td>~5%</td>
                <td>Important for chemicals, glass, fertilizers and biological systems.</td>
              </tr>
              <tr>
                <td>Magnesium & Others</td>
                <td>~2–3%</td>
                <td>Alloying, refractories, and niche industrial uses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.soilsSection}>
        <h3>Soils, Land Use & Arability (simple view)</h3>
        <p>
          Not all land is equally productive. &quot;Arable&quot; land suitable for annual crops is a minority of global land area; other land
          supports pastures, forests, or is desert/mountain where farming is difficult.
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Rough Share of Land Area</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arable & permanent cropland</td>
                <td>~10–15% (of land area)</td>
                <td>Where most food crops are grown; quality depends on soil type, irrigation and management.</td>
              </tr>
              <tr>
                <td>Forest</td>
                <td>~25–35%</td>
                <td>Crucial for biodiversity, timber and carbon storage; some forests are managed for production.</td>
              </tr>
              <tr>
                <td>Pasture/Grassland</td>
                <td>~20–30%</td>
                <td>Used for livestock; can be productive or degraded depending on management.</td>
              </tr>
              <tr>
                <td>Desert, tundra, ice, mountains</td>
                <td>~25–40%</td>
                <td>Low natural arability; some desert areas can support specific crops with irrigation/technology.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.oceanSection}>
        <h3>Oceans & Marine Resources</h3>
        <p>
          Oceans cover ~71% of Earth&apos;s surface and hold the vast majority of Earth&apos;s water. Major extractable resources include fish,
          algae (for food and bioindustrial feedstocks), dissolved minerals and hydrocarbons (petroleum concentrated in sediments).
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Resource</th>
                <th>Characteristic / Approx.</th>
                <th>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seawater (major ions)</td>
                <td>Cl⁻, Na⁺, SO₄²⁻, Mg²⁺, Ca²⁺, K⁺ (chloride and sodium dominant)</td>
                <td>Desalination and mineral extraction (e.g., magnesium, bromine) support industry and water supply.</td>
              </tr>
              <tr>
                <td>Marine biomass (algae)</td>
                <td>Extensive and renewable; high productivity per area in many systems</td>
                <td>Food, feed, biofuels and carbon capture potential — scalable with aquaculture tech.</td>
              </tr>
              <tr>
                <td>Petroleum (offshore)</td>
                <td>Concentrated in sediments; finite reserves concentrated in basins</td>
                <td>Major energy source today; extraction has environmental impacts and is regionally concentrated.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.extrasolar}>
        <h3>Moon, Mars, Venus — What We Can Expect</h3>
        <div className={styles.bodyGrid}>
          <div className={styles.card}>
            <h4>The Moon</h4>
            <p>
              Regolith rich in oxygen-bearing minerals (silicates, ilmenite). Key resources: oxygen (in oxides), silicon, iron,
              titanium (in some maria), aluminum and small amounts of rare metals. Water ice exists in permanently shaded polar craters —
              small volumes but strategically crucial for life-support and propellant (electrolysis).
            </p>
          </div>
          <div className={styles.card}>
            <h4>Mars</h4>
            <p>
              Iron-rich surface (iron oxides give the red color), abundant silicates, significant subsurface/ polar water ice, and a CO₂-rich
              atmosphere usable for fuel/greenhouse inputs. Regolith contains perchlorates that complicate agriculture without treatment.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Venus</h4>
            <p>
              Extremely challenging environment. Surface is rocky silicate crust; atmosphere is CO₂ with clouds of sulfuric acid and very
              high pressure/temperature. Direct resource extraction on the surface is currently impractical; atmospheric chemistry could
              offer some chemical feedstocks if high-altitude platforms are used.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.conclusion}>
        <h3>Putting It Together</h3>
        <p>
          Resources are unevenly distributed — some are abundant in the crust (oxygen, silicon), others (metals like copper, platinum,
          rare earths) are concentrated and economically valuable. Oceans and marine life provide vast renewable potential, while
          extraterrestrial bodies offer high strategic value for space operations rather than immediate bulk resource replacement.
        </p>
      </section>
    </ModulePage>
  );
}

