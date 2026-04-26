import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl glass p-12 text-center md:p-20">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-aurora)] opacity-20" />
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Build the <span className="text-gradient">future</span>, today.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Join 12,000+ developers shipping the next generation of decentralized apps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 hover:scale-105 transition glow-primary">
            Get Started Free <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full glass hover:bg-white/5">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
