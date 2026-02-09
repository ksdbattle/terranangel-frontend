import ModulePage from '@/components/ModulePage';

export default function DecentralizedBlockchainPage() {
  return (
    <ModulePage
      id="blockchain/decentralized"
      title="Decentralized / Public"
      description="Public blockchains that emphasize open participation, censorship resistance, and decentralized consensus."
    >
      <p>Public blockchains enable permissionless participation, programmable assets, and decentralized applications.</p>

      <h4>Highlights</h4>
      <ul>
        <li>Open networks and public consensus (e.g., Ethereum, Bitcoin).</li>
        <li>Smart contracts, tokens, DeFi, and NFTs.</li>
        <li>Trust assumptions are distributed across many participants.</li>
      </ul>

      <h4>Considerations</h4>
      <ul>
        <li>Scalability, gas/fee economics, and UX challenges.</li>
        <li>Smart contract security and formal verification.</li>
        <li>Privacy-preserving techniques (zk, mixers) and regulator interactions.</li>
      </ul>
    </ModulePage>
  );
}
