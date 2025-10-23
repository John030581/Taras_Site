"use client"

import { useEffect, useRef } from "react"

export function BlockchainGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const blocks: Array<{
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      pulsePhase: number
    }> = []

    for (let i = 0; i < 30; i++) {
      blocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number
    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      blocks.forEach((block, i) => {
        block.y -= block.speed
        if (block.y + block.size < 0) {
          block.y = canvas.height + block.size
          block.x = Math.random() * canvas.width
        }

        const pulse = Math.sin(frame * 0.02 + block.pulsePhase) * 0.2 + 0.8
        ctx.strokeStyle = `rgba(139, 92, 246, ${block.opacity * pulse})`
        ctx.lineWidth = 2
        ctx.strokeRect(block.x, block.y, block.size, block.size)

        ctx.strokeStyle = `rgba(59, 130, 246, ${block.opacity * 0.5 * pulse})`
        ctx.lineWidth = 1
        ctx.strokeRect(block.x + 5, block.y + 5, block.size - 10, block.size - 10)

        blocks.forEach((otherBlock, j) => {
          if (i !== j) {
            const dx = block.x - otherBlock.x
            const dy = block.y - otherBlock.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - distance / 150) * 0.1})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(block.x + block.size / 2, block.y + block.size / 2)
              ctx.lineTo(otherBlock.x + otherBlock.size / 2, otherBlock.y + otherBlock.size / 2)
              ctx.stroke()
            }
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" style={{ zIndex: 1 }} />
}
