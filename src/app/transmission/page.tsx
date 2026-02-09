import ModulePage from '@/components/ModulePage';

export default function TransmissionPage() {
  return (
    <ModulePage
      id="transmission"
      title="Transmission"
      description="Communications, transport, and logistics across networks and physical infrastructure."
    >
      <p>
        Transmission covers the technologies and systems that move information, goods,
        and people reliably and efficiently — from fiber and satellite networks to
        freight, last-mile delivery, and supply-chain coordination.
      </p>

      <h4>Key Areas</h4>
      <ul>
        <li>Telecommunications: fiber, cellular, satellite, and low-latency networks.</li>
        <li>Transport: rail, maritime, air, and logistics planning.</li>
        <li>Data transport: messaging infrastructure, CDN, and real-time streaming.</li>
        <li>Operations: routing, scheduling, and resilience planning for critical delivery.</li>
      </ul>

      <h4>Why it matters</h4>
      <p>
        Efficient and resilient transmission is foundational for modern society — enabling
        commerce, emergency response, remote healthcare, and global collaboration.
      </p>
    </ModulePage>
  );
}
