import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/web3/Navbar";
import { Hero } from "@/components/web3/Hero";
import { Stats } from "@/components/web3/Stats";
import { Features } from "@/components/web3/Features";
import { HowItWorks } from "@/components/web3/HowItWorks";
import { CTA } from "@/components/web3/CTA";
import { Footer } from "@/components/web3/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaChain — The Decentralized Layer for the Next Internet" },
      { name: "description", content: "Build, deploy, and scale Web3 apps on a lightning-fast modular blockchain. 100k+ TPS, sub-second finality, near-zero fees." },
      { property: "og:title", content: "NovaChain — Web3 Infrastructure" },
      { property: "og:description", content: "The decentralized layer powering the next generation of on-chain applications." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
