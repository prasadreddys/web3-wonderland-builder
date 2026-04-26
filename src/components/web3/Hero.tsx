import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-web3.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px] animate-pulse-glow" />
        <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
          <Sparkles className="h-3.5 w-3.5 text-neon" />
          <span className="text-muted-foreground">Mainnet v2.0 is live</span>
          <span className="text-neon">→</span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          The decentralized layer
          <br />
          for the <span className="text-gradient">next internet</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Build, deploy, and scale Web3 applications on a lightning-fast, modular blockchain
          designed for developers and creators.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 hover:scale-105 transition glow-primary">
            Start Building <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full glass border-border hover:bg-white/5">
            Read Docs
          </Button>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-aurora)] opacity-40 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-3xl">
            <img
              src={heroImage}
              alt="Web3 blockchain visualization"
              className="w-full animate-float"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
