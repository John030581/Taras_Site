"use client"

import type React from "react"

import { AnimatedBackground } from "@/components/animated-background"
import { TextReveal } from "@/components/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen pt-16">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <TextReveal text="Get In Touch" className="text-4xl font-bold sm:text-5xl" delay={100} />
            <TextReveal
              text="Let's discuss your next blockchain project"
              className="text-xl text-muted-foreground"
              delay={200}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold">Contact Information</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href="mailto:taras@blockchain.dev"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          havurataras@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a
                          href="tel:+1234567890"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (+380) 68 557 8670
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">
                          Kyiv, Ukraine
                          <br />
                          Ukraine
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Follow Me</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/John030581"
                      target="_blank"
                      className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    {/* <Link
                      href="https://linkedin.com"
                      target="_blank"
                      className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link> */}
                    <Link
                      href="https://t.me/@STE31STE"
                      target="_blank"
                      className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="sr-only">Telegram</span>
                    </Link>
                    {/* <Link
                      href="https://twitter.com"
                      target="_blank"
                      className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link> */}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="opacity-0 animate-fade-in bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
                style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
              >
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold">Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently available for freelance projects and consulting opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card
              className="lg:col-span-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
          >
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold">Let's Build Something Amazing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you need a DeFi protocol, NFT marketplace, DAO platform, or any other blockchain solution, I'm
                here to help bring your vision to life. I typically respond within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
