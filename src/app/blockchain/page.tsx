import ModulePage from '@/components/ModulePage';
import Link from 'next/link';

export default function BlockchainPage() {
  return (
    <ModulePage
      id="blockchain"
      title="Blockchain"
      description="Exploring centralized and decentralized solar system public ledgers."
    >
      <p>Blockchain technologies span a range from enterprise permissioned ledgers to public decentralized networks. Example subtopics:</p>
      <ul>
        <li>Permissioned ledgers and consortium governance.</li>
        <li>Public chains, consensus, and smart contracts.</li>
        <li>Interoperability, wallets, and privacy techniques.</li>
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Submodules</h4>
        <ul>
          <li>
            <Link href="/blockchain/centralized">Centralized (Permissioned)</Link>
          </li>
          <li>
            <Link href="/blockchain/decentralized">Decentralized (Public)</Link>
          </li>
        </ul>
      </div>
    </ModulePage>
  );
}
