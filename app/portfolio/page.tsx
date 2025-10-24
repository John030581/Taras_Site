import { AnimatedBackground } from "@/components/animated-background"
import { TextReveal } from "@/components/text-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "DeFi Lending Protocol",
    description:
      "A decentralized lending and borrowing platform with over $50M TVL. Features include collateralized loans, flash loans, and yield farming.",
    tech: ["Solidity", "Hardhat", "React", "Web3.js"],
    github: "https://github.com/John030581/Suilend",
    demo: "https://suilend.fi/",
    highlights: ["$50M+ TVL", "10,000+ users", "Audited by CertiK"],
  },
  {
    title: "NFT Marketplace",
    description:
      "Full-featured NFT marketplace supporting ERC-721 and ERC-1155 tokens. Includes auction system, royalties, and IPFS integration.",
    tech: ["Solidity", "Next.js", "Ethers.js", "IPFS"],
    github: "https://github.com",
    demo: "https://www.bigtime.gg/",
    highlights: ["$10M+ volume", "5,000+ NFTs minted", "Gas optimized"],
  },
  {
    title: "DAO Governance Platform",
    description:
      "Decentralized autonomous organization with on-chain voting, proposal system, and treasury management.",
    tech: ["Solidity", "TypeScript", "The Graph", "React"],
    github: "https://github.com",
    demo: "https://www.jadeprotocol.io/#/",
    highlights: ["1,000+ members", "50+ proposals", "Multi-sig treasury"],
  },
  {
    title: "Token Staking Platform",
    description: "Staking protocol with flexible lock periods, reward distribution, and auto-compounding features.",
    tech: ["Solidity", "Hardhat", "React", "Wagmi"],
    github: "https://github.com/John030581/Token_staking-bsc-",
    demo: "https://token-staking-bsc-seven.vercel.app/",
    highlights: ["$5M+ staked", "APY up to 120%", "Zero downtime"],
  },
  {
    title: "Cross-Chain Bridge",
    description: "Secure bridge for transferring assets between Ethereum and Polygon networks with minimal fees.",
    tech: ["Solidity", "Node.js", "Web3.js", "PostgreSQL"],
    github: "https://github.com/John030581/HonkBridge",
    demo: "https://honkbridge.io/",
    highlights: ["$20M+ bridged", "Sub-minute transfers", "Multi-chain support"],
  },
  {
    title: "Decentralized Exchange",
    description: "AMM-based DEX with liquidity pools, token swaps, and yield farming capabilities.",
    tech: ["Solidity", "React", "Ethers.js", "Uniswap V2"],
    github: "https://github.com/John030581/HonkSwap",
    demo: "https://honkswap.io/",
    highlights: ["$15M+ liquidity", "20+ trading pairs", "Low slippage"],
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-16">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <TextReveal text="Portfolio" className="text-4xl font-bold sm:text-5xl" delay={100} />
            <TextReveal
              text="Showcasing my blockchain development projects"
              className="text-xl text-muted-foreground"
              delay={200}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="opacity-0 animate-fade-in hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Key Achievements:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {/* <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button> */}
                    <Button asChild size="sm" className="gap-2">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card
            className="opacity-0 animate-fade-in bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
            style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
          >
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
