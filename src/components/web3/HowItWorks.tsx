const steps = [
  { n: "01", title: "Connect Wallet", desc: "Plug in MetaMask, Phantom, or any WalletConnect-compatible wallet in seconds." },
  { n: "02", title: "Deploy Contract", desc: "Use our CLI or Hardhat plugin to ship Solidity or Move contracts to mainnet." },
  { n: "03", title: "Scale Globally", desc: "Auto-scaling RPC endpoints across 6 continents, no infra to manage." },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">How it works</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Ship in <span className="text-gradient">three steps</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="glass relative rounded-2xl p-8">
              <div className="font-mono text-sm text-primary">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-primary to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
