import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { BlockchainGrid } from "@/components/blockchain-grid"
import { TextReveal } from "@/components/text-reveal"
import { TypingEffect } from "@/components/typing-effect"
import { ArrowRight, Github, Linkedin, Twitter, Code2, Blocks, Wallet } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground />
      <BlockchainGrid />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-12 py-12 lg:flex-row lg:gap-20">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <TextReveal text="// Blockchain Developer" className="text-sm font-mono text-primary/80" delay={100} />

              <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                <TextReveal text="Taras" delay={200} />
              </h1>

              <div className="h-20 flex items-center justify-center lg:justify-start">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <TypingEffect
                    texts={[
                      "Smart Contract Architect",
                      "DeFi Protocol Builder",
                      "Web3 Innovator",
                      "Solidity Expert",
                      "Blockchain Engineer",
                    ]}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                    delay={300}
                  />
                </div>
              </div>
            </div>

            <TextReveal
              text="Crafting secure, scalable blockchain solutions that power the decentralized economy. From smart contracts to full-stack dApps, I build the infrastructure of tomorrow."
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              delay={500}
            />

            <div
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              <div className="p-4 rounded-lg bg-card/50 border border-primary/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Smart Contracts</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 border border-secondary/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-secondary">$10M+</div>
                <div className="text-xs text-muted-foreground">TVL Secured</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 border border-accent/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
            >
              <Button asChild size="lg" className="gap-2 group">
                <Link href="/portfolio">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <Link href="/contact">
                  <Code2 className="h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div
              className="flex gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground hover:text-secondary transition-colors p-2 rounded-lg hover:bg-secondary/10"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div
            className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[400px] h-[400px] border-2 border-primary/20 rounded-full animate-spin-slow" />
                <div className="absolute w-[450px] h-[450px] border-2 border-secondary/10 rounded-full animate-spin-slower" />
                <div className="absolute w-[500px] h-[500px] border border-accent/10 rounded-full animate-spin-slowest" />
              </div>

              {/* Floating blockchain icons */}
              <div className="absolute -top-8 -left-8 p-3 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 animate-float">
                <Blocks className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-8 -right-8 p-3 rounded-lg bg-secondary/20 backdrop-blur-sm border border-secondary/30 animate-float-delayed">
                <Wallet className="h-6 w-6 text-secondary" />
              </div>
              <div className="absolute top-1/2 -right-12 p-3 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/30 animate-float-slow">
                <Code2 className="h-6 w-6 text-accent" />
              </div>

              {/* Main image with hexagonal mask effect */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-3xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taras-b9pq4OvTh4XpZmhG9FaM25oRwZayiQ.png"
                    alt="Taras - Blockchain Developer"
                    fill
                    className="object-cover scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 border-t border-border/40">
          <TextReveal text="Blockchain Technology Stack" className="text-3xl font-bold text-center mb-4" delay={900} />
          <TextReveal
            text="Building with cutting-edge tools and frameworks"
            className="text-muted-foreground text-center mb-12"
            delay={1000}
          />

          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}
          >
            {[
              { name: "Solidity", color: "primary" },
              { name: "Ethereum", color: "secondary" },
              { name: "Web3.js", color: "accent" },
              { name: "Hardhat", color: "primary" },
              { name: "Foundry", color: "secondary" },
              { name: "React", color: "accent" },
              { name: "Next.js", color: "primary" },
              { name: "TypeScript", color: "secondary" },
              { name: "IPFS", color: "accent" },
              { name: "The Graph", color: "primary" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`group p-6 rounded-lg bg-card/50 border border-${tech.color}/20 backdrop-blur-sm text-center hover:border-${tech.color}/60 hover:bg-${tech.color}/5 transition-all hover:scale-105 cursor-pointer`}
              >
                <p className="font-mono text-sm font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
