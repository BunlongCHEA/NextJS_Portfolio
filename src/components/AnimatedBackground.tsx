import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  text: string
  opacity: number
  size: number
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const codeElements = [
    '{ }', '[ ]', '</ >', '{ "code": true }', 'function()', 
    '=> {}', 'const', 'let', 'var', 'return', 'if', 'else',
    '{ "tech": "nextjs" }', '{ "skill": "react" }', 'async/await',
    'console.log()', 'npm install', 'git commit', '{ }', '[ ]'
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Particle[] = []
    const particleCount = 25

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        text: codeElements[Math.floor(Math.random() * codeElements.length)],
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 14 + 10
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < -100) particle.x = canvas.width + 100
        if (particle.x > canvas.width + 100) particle.x = -100
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Animate opacity
        particle.opacity += (Math.random() - 0.5) * 0.01
        particle.opacity = Math.max(0.05, Math.min(0.4, particle.opacity))

        // Draw particle
        ctx.font = `${particle.size}px 'Fira Code', monospace`
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.textAlign = 'center'
        ctx.fillText(particle.text, particle.x, particle.y)

        // Add glow effect
        ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'
        ctx.shadowBlur = 10
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * 0.3})`
        ctx.fillText(particle.text, particle.x, particle.y)
        ctx.shadowBlur = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    />
  )
}

export default AnimatedBackground