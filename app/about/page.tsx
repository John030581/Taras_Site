import { AnimatedBackground } from "@/components/animated-background"
import { TextReveal } from "@/components/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <TextReveal text="About Me" className="text-4xl font-bold sm:text-5xl" delay={100} />
            <TextReveal
              text="Passionate about building the decentralized web"
              className="text-xl text-muted-foreground"
              delay={200}
            />
          </div>

          {/* Bio */}
          <Card
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold text-primary">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a blockchain developer with 5+ years of experience building decentralized applications and smart
                contracts. My expertise spans across Ethereum, Solidity, Web3.js, and modern frontend frameworks. I'm
                passionate about creating secure, scalable, and user-friendly blockchain solutions that push the
                boundaries of what's possible in the Web3 space.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in DeFi protocols, NFT marketplaces, and DAO governance systems. My approach combines deep
                technical knowledge with a focus on security best practices and gas optimization.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Experience
            </h2>

            <div className="space-y-6">
              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">Senior Blockchain Developer</h3>
                      <p className="text-primary">DeFi Protocol Labs</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2022 - Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Led development of a $50M+ TVL DeFi lending protocol</li>
                    <li>Architected and deployed 15+ smart contracts on Ethereum mainnet</li>
                    <li>Reduced gas costs by 40% through optimization techniques</li>
                    <li>Conducted security audits and implemented best practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">Blockchain Engineer</h3>
                      <p className="text-primary">NFT Marketplace Inc</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2020 - 2022</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built NFT marketplace with $10M+ in trading volume</li>
                    <li>Implemented ERC-721 and ERC-1155 token standards</li>
                    <li>Integrated IPFS for decentralized storage</li>
                    <li>Developed Web3 frontend with React and ethers.js</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">Smart Contract Developer</h3>
                      <p className="text-primary">Crypto Ventures</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2019 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Developed and deployed 20+ smart contracts</li>
                    <li>Created automated testing suites with Hardhat</li>
                    <li>Participated in multiple successful token launches</li>
                    <li>Collaborated with cross-functional teams</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-secondary" />
              Education
            </h2>

            <Card
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
            >
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                    <p className="text-secondary">Technical University</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2017 - 2019</span>
                </div>
                <p className="text-muted-foreground">Specialized in Distributed Systems and Cryptography</p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Code2 className="h-8 w-8 text-accent" />
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Blockchain</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Solidity", "Ethereum", "Web3.js", "Ethers.js", "Hardhat", "Truffle", "Ganache"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-secondary">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Wagmi", "RainbowKit"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-accent">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "AWS", "IPFS", "The Graph", "Alchemy"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Award className="h-8 w-8 text-accent" />
              Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Certified Blockchain Developer - Ethereum",
                "Smart Contract Security Auditor",
                "AWS Certified Solutions Architect",
                "Certified Solidity Developer",
              ].map((cert, index) => (
                <Card
                  key={cert}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${1200 + index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
