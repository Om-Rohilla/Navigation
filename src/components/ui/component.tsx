import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

interface NavItem {
  label: string
}

/**
 * 3D Pill Navigation Bar
 * A premium 3D navigation component with sliding selector capsule and synchronized motion
 */
export const PillBase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [capsuleProps, setCapsuleProps] = useState({ width: 0, left: 0 })
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  
  const navItems: NavItem[] = [
    { label: 'Home' },
    { label: 'Problem' },
    { label: 'Solution' },
    { label: 'Contact' },
  ]

  // Spring animations for smooth, bouncy motion
  const capsuleX = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })
  const capsuleWidth = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })
  const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })

  // Update capsule position when active item changes or window resizes
  useEffect(() => {
    const updateCapsulePosition = () => {
      const activeElement = itemRefs.current[activeIndex]
      const container = containerRef.current
      
      if (activeElement && container) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = activeElement.getBoundingClientRect()
        
        // Calculate position relative to container
        const left = buttonRect.left - containerRect.left
        const width = buttonRect.width
        
        setCapsuleProps({ width, left })
        capsuleX.set(left)
        capsuleWidth.set(width)
        
        // Calculate subtle pill shift based on direction from center
        const center = (navItems.length - 1) / 2
        const shift = (activeIndex - center) * 1.5 // Subtle 1.5px per item from center
        pillShift.set(shift)
      }
    }

    // Update immediately
    updateCapsulePosition()
    
    // Update on window resize
    window.addEventListener('resize', updateCapsulePosition)
    
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(updateCapsulePosition, 50)
    
    return () => {
      window.removeEventListener('resize', updateCapsulePosition)
      clearTimeout(timer)
    }
  }, [activeIndex, capsuleX, capsuleWidth, pillShift, navItems.length])

  return (
    <motion.nav
      className="relative rounded-full"
      style={{
        width: '580px',
        height: '56px',
        background: `
          linear-gradient(145deg, #f9f9fb 0%, #f3f3f5 25%, #ededef 50%, #e7e8ea 75%, #e1e2e5 100%)
        `,
        boxShadow: `
          0 4px 6px rgba(0, 0, 0, 0.18),
          0 12px 25px rgba(0, 0, 0, 0.10),
          0 1px 2px rgba(0, 0, 0, 0.10),
          inset 0 1px 0 rgba(255, 255, 255, 0.65),
          inset 0 -2px 5px rgba(0, 0, 0, 0.10),
          inset 2px 2px 6px rgba(0, 0, 0, 0.08),
          inset -2px 2px 6px rgba(0, 0, 0, 0.07)
        `,
        x: pillShift,
        overflow: 'hidden',
      }}
    >
      {/* Top edge bright highlight */}
      <div 
        className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.85) 8%, rgba(255, 255, 255, 0.85) 92%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Diffuse top-left light source */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      
      {/* Reflective gloss line */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          left: '20%',
          top: '18%',
          width: '110px',
          height: '11px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 85%)',
          filter: 'blur(3.5px)',
          transform: 'rotate(-10deg)',
        }}
      />
      
      {/* Bottom curvature falloff */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
        style={{
          height: '40%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.04) 40%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Subtle inner radiance */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 25px rgba(255, 255, 255, 0.18)',
          opacity: 0.6,
        }}
      />

      {/* Navigation items container */}
      <div 
        ref={containerRef}
        className="relative z-10 h-full flex items-center justify-evenly px-8"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Poppins, sans-serif',
        }}
      >
        {/* Navigation items */}
        {navItems.map((item, index) => {
          const isActive = activeIndex === index
          
          return (
            <button
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => setActiveIndex(index)}
              className="relative cursor-pointer transition-all duration-200"
              style={{
                fontSize: '15px',
                fontWeight: isActive ? 700 : 600,
                color: '#464646',
                textDecoration: 'none',
                letterSpacing: '0.4px',
                background: 'transparent',
                border: 'none',
                padding: '10px 22px',
                outline: 'none',
                zIndex: 20,
                whiteSpace: 'nowrap',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", Poppins, sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                // Bold, defined engraved effect
                textShadow: isActive 
                  ? `
                    inset 0 1px 1px rgba(0, 0, 0, 0.25),
                    0 -1px 1px rgba(255, 255, 255, 0.7),
                    0 1px 0 rgba(255, 255, 255, 0.5),
                    0 2px 4px rgba(0, 0, 0, 0.16)
                  `
                  : `
                    inset 0 1px 1px rgba(0, 0, 0, 0.22),
                    0 -1px 1px rgba(255, 255, 255, 0.6),
                    0 1px 0 rgba(255, 255, 255, 0.4),
                    0 2px 3px rgba(0, 0, 0, 0.14)
                  `,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.textShadow = `
                    inset 0 1px 1px rgba(0, 0, 0, 0.24),
                    0 -1px 1px rgba(255, 255, 255, 0.65),
                    0 1px 0 rgba(255, 255, 255, 0.45),
                    0 2px 3.5px rgba(0, 0, 0, 0.15)
                  `
                  e.currentTarget.style.filter = 'brightness(1.03)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.textShadow = `
                    inset 0 1px 1px rgba(0, 0, 0, 0.22),
                    0 -1px 1px rgba(255, 255, 255, 0.6),
                    0 1px 0 rgba(255, 255, 255, 0.4),
                    0 2px 3px rgba(0, 0, 0, 0.14)
                  `
                  e.currentTarget.style.filter = 'none'
                }
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}

