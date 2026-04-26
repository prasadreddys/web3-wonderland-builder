import { Zap, Shield, Layers, Globe, Code2, Coins } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "100,000+ TPS with sub-second finality powered by parallel execution." },
  { icon: Shield, title: "Battle-tested Security", desc: "Audited smart contracts and a $50M bug bounty program." },
  { icon: Layers, title: "Modular Architecture", desc: "Compose execution, settlement, and data availability layers." },
  { icon: Globe, title: "Truly Decentralized", desc: "10,000+ validator nodes spread across 80 countries." },
  { icon: Code2, title: "Developer First", desc: "EVM-compatible with SDKs in Rust, TypeScript, Python and Go." },
  { icon: Coins, title: "Low Fees", desc: "Transactions cost less than $0.001 — predictable and stable." },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Why NovaChain</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Infrastructure for the <span className="text-gradient">on-chain economy</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--gradient-primary)] opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
