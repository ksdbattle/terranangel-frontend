import ModulePage from '@/components/ModulePage';

export default function CentralizedBlockchainPage() {
  return (
    <ModulePage
      id="blockchain/centralized"
      title="Centralized / Permissioned"
      description="Permissioned ledgers and enterprise blockchain deployments where access and governance are centrally controlled."
    >
      <p>Centralized or permissioned blockchains are often used by enterprises and consortia where identity, access control, and governance are managed centrally.</p>

      <h4>Highlights</h4>
      <ul>
        <li>Controlled membership and permissioned nodes.</li>
        <li>Focus on privacy, auditability, and regulatory compliance.</li>
        <li>Common platforms: Hyperledger Fabric, R3 Corda, Quorum.</li>
      </ul>

      <h4>Considerations</h4>
      <ul>
        <li>Trade-offs between decentralization and governance.</li>
        <li>Integration with existing enterprise systems.</li>
        <li>Operational costs, backups, and disaster recovery.</li>
      </ul>
    </ModulePage>
  );
}
