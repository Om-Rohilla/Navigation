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
          linear-gradient(135deg, #f5f6f7 0%, #eeeff0 30%, #e8e9ea 60%, #e2e3e4 100%)
        `,
        boxShadow: `
          0 4px 8px rgba(0, 0, 0, 0.15),
          0 12px 30px rgba(0, 0, 0, 0.1),
          0 1px 2px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          inset 0 -2px 4px rgba(0, 0, 0, 0.08),
          inset 2px 2px 4px rgba(0, 0, 0, 0.06),
          inset -2px 2px 4px rgba(0, 0, 0, 0.05)
        `,
        x: pillShift,
        overflow: 'hidden',
      }}
    >
      {/* Top highlight ridge */}
      <div 
        className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 90%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Top-left light source gradient */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 60%)',
        }}
      />
      
      {/* Subtle gloss reflection */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          left: '22%',
          top: '20%',
          width: '100px',
          height: '12px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(4px)',
          transform: 'rotate(-8deg)',
        }}
      />
      
      {/* Bottom curvature shadow */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
        style={{
          height: '35%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Inner diffuse glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.15)',
          opacity: 0.5,
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
              className="relative cursor-pointer transition-all duration-250"
              style={{
                fontSize: '15px',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#5a5a5c' : '#6a6a6c',
                textDecoration: 'none',
                letterSpacing: '0.4px',
                background: 'transparent',
                border: 'none',
                padding: '10px 20px',
                outline: 'none',
                zIndex: 20,
                whiteSpace: 'nowrap',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", Poppins, sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                // Crisp engraved effect - carved into surface
                textShadow: isActive 
                  ? `
                    inset 0px 1px 1px rgba(0, 0, 0, 0.25),
                    0px -1px 1px rgba(255, 255, 255, 0.6),
                    0px 1px 0px rgba(255, 255, 255, 0.4),
                    0px 2px 3px rgba(0, 0, 0, 0.15)
                  `
                  : `
                    inset 0px 1px 1px rgba(0, 0, 0, 0.2),
                    0px -1px 1px rgba(255, 255, 255, 0.5),
                    0px 1px 0px rgba(255, 255, 255, 0.3),
                    0px 2px 2px rgba(0, 0, 0, 0.12)
                  `,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#4a4a4c'
                  e.currentTarget.style.textShadow = `
                    inset 0px 1px 1px rgba(0, 0, 0, 0.22),
                    0px -1px 1px rgba(255, 255, 255, 0.55),
                    0px 1px 0px rgba(255, 255, 255, 0.35),
                    0px 2px 2.5px rgba(0, 0, 0, 0.14)
                  `
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#6a6a6c'
                  e.currentTarget.style.textShadow = `
                    inset 0px 1px 1px rgba(0, 0, 0, 0.2),
                    0px -1px 1px rgba(255, 255, 255, 0.5),
                    0px 1px 0px rgba(255, 255, 255, 0.3),
                    0px 2px 2px rgba(0, 0, 0, 0.12)
                  `
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

