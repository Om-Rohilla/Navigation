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
          linear-gradient(145deg, #e8eaed 0%, #dddfe2 20%, #d4d6d9 40%, #cfd1d4 60%, #c8cacd 80%, #d2d4d7 100%)
        `,
        boxShadow: `
          0 8px 20px rgba(0, 0, 0, 0.25),
          0 4px 10px rgba(0, 0, 0, 0.15),
          0 2px 4px rgba(0, 0, 0, 0.12),
          inset 0 -3px 8px rgba(0, 0, 0, 0.2),
          inset 0 -6px 12px rgba(0, 0, 0, 0.12),
          inset 3px 3px 8px rgba(0, 0, 0, 0.15),
          inset -3px 3px 8px rgba(0, 0, 0, 0.12),
          inset 0 1px 1px rgba(255, 255, 255, 0.5)
        `,
        x: pillShift,
        overflow: 'hidden',
      }}
    >
      {/* Top-left light source - primary illumination */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0) 50%)',
        }}
      />
      
      {/* Rim light effect - top edge */}
      <div 
        className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
        style={{
          height: '50%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Polished gloss layer */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)
          `,
        }}
      />
      
      {/* Bottom falloff shadow - natural curvature */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
        style={{
          height: '50%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.12) 30%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Deep inner shadow at bottom edge */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
        style={{
          height: '20%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%)',
          filter: 'blur(3px)',
        }}
      />

      {/* Left illumination gradient */}
      <div 
        className="absolute inset-y-0 left-0 rounded-l-full pointer-events-none"
        style={{
          width: '40%',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Right shadow gradient */}
      <div 
        className="absolute inset-y-0 right-0 rounded-r-full pointer-events-none"
        style={{
          width: '40%',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 40%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Subtle specular reflection */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          left: '20%',
          top: '18%',
          width: '120px',
          height: '14px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 80%)',
          filter: 'blur(5px)',
          transform: 'rotate(-10deg)',
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
              className="relative cursor-pointer transition-all duration-300"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                background: isActive 
                  ? 'linear-gradient(180deg, #d8d8da 0%, #c0c0c3 50%, #b0b0b3 100%)'
                  : 'linear-gradient(180deg, #b5b7ba 0%, #9a9c9f 50%, #888a8d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                letterSpacing: '0.4px',
                border: 'none',
                padding: '10px 20px',
                outline: 'none',
                zIndex: 20,
                whiteSpace: 'nowrap',
                // Deep engraved effect with inner shadows
                filter: isActive 
                  ? 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.6)) drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.5)) drop-shadow(1px 0 1px rgba(0, 0, 0, 0.3)) drop-shadow(-1px 0 1px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 8px rgba(216, 216, 218, 0.4))'
                  : 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.4)) drop-shadow(0.5px 0 0.5px rgba(0, 0, 0, 0.25)) drop-shadow(-0.5px 0 0.5px rgba(255, 255, 255, 0.3))',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'linear-gradient(180deg, #c8cacd 0%, #aaacaf 50%, #9a9c9f 100%)'
                  e.currentTarget.style.filter = 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.55)) drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.45)) drop-shadow(0.5px 0 0.5px rgba(0, 0, 0, 0.28)) drop-shadow(-0.5px 0 0.5px rgba(255, 255, 255, 0.35)) drop-shadow(0 0 6px rgba(200, 202, 205, 0.3))'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'linear-gradient(180deg, #b5b7ba 0%, #9a9c9f 50%, #888a8d 100%)'
                  e.currentTarget.style.filter = 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.4)) drop-shadow(0.5px 0 0.5px rgba(0, 0, 0, 0.25)) drop-shadow(-0.5px 0 0.5px rgba(255, 255, 255, 0.3))'
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

