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
          linear-gradient(135deg, #f8f8f8 0%, #f5f5f7 25%, #f1f1f3 50%, #ececee 75%, #e9e9ea 100%)
        `,
        boxShadow: `
          0 4px 8px rgba(0, 0, 0, 0.15),
          0 10px 40px rgba(0, 0, 0, 0.05),
          0 1px 2px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.9),
          inset 0 2px 4px rgba(255, 255, 255, 0.6),
          inset 0 -1px 3px rgba(0, 0, 0, 0.08),
          inset 0 -2px 6px rgba(0, 0, 0, 0.04)
        `,
        x: pillShift,
        overflow: 'hidden',
      }}
    >
      {/* Primary top light reflection - simulates top-left light source */}
      <div 
        className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
        style={{
          height: '60%',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Intense top edge shine - crisp highlight */}
      <div 
        className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.95) 85%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Semi-matte glass overlay */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.02) 100%)',
        }}
      />
      
      {/* Bottom curvature shadow */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-full pointer-events-none"
        style={{
          height: '45%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 40%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Contact shadow at bottom edge */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
        style={{
          height: '12%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 100%)',
          filter: 'blur(2px)',
        }}
      />

      {/* Left-side illumination from light source */}
      <div 
        className="absolute inset-y-0 left-0 rounded-l-full pointer-events-none"
        style={{
          width: '35%',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Right-side shadow for depth */}
      <div 
        className="absolute inset-y-0 right-0 rounded-r-full pointer-events-none"
        style={{
          width: '35%',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.015) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Specular highlight - glass reflection */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          left: '18%',
          top: '15%',
          width: '140px',
          height: '16px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(4px)',
          transform: 'rotate(-8deg)',
        }}
      />
      
      {/* Secondary smaller specular */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          right: '25%',
          top: '20%',
          width: '60px',
          height: '10px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(3px)',
        }}
      />

      {/* Subtle outer rim shadow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 0.5px rgba(0, 0, 0, 0.06)',
        }}
      />
      
      {/* Inner edge glow for curvature emphasis */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.15)',
          opacity: 0.4,
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
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#3b3b3b' : '#5a5a5a',
                textDecoration: 'none',
                letterSpacing: '0.5px',
                background: 'transparent',
                border: 'none',
                padding: '10px 20px',
                outline: 'none',
                zIndex: 20,
                whiteSpace: 'nowrap',
                // Engraved/embossed effect - light from top-left
                textShadow: isActive 
                  ? `
                    0 1px 0 rgba(255, 255, 255, 0.9),
                    0 2px 3px rgba(0, 0, 0, 0.25),
                    0 -1px 1px rgba(0, 0, 0, 0.15),
                    1px 0 1px rgba(0, 0, 0, 0.1),
                    -1px 0 1px rgba(255, 255, 255, 0.5)
                  `
                  : `
                    0 1px 0 rgba(255, 255, 255, 0.7),
                    0 2px 2px rgba(0, 0, 0, 0.18),
                    0 -0.5px 0.5px rgba(0, 0, 0, 0.12),
                    0.5px 0 0.5px rgba(0, 0, 0, 0.08),
                    -0.5px 0 0.5px rgba(255, 255, 255, 0.4)
                  `,
                filter: isActive ? 'contrast(1.1)' : 'contrast(1)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#454545'
                  e.currentTarget.style.textShadow = `
                    0 1px 0 rgba(255, 255, 255, 0.85),
                    0 2px 2.5px rgba(0, 0, 0, 0.22),
                    0 -0.5px 0.5px rgba(0, 0, 0, 0.14),
                    0.5px 0 0.5px rgba(0, 0, 0, 0.09),
                    -0.5px 0 0.5px rgba(255, 255, 255, 0.45)
                  `
                  e.currentTarget.style.filter = 'contrast(1.05) brightness(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#5a5a5a'
                  e.currentTarget.style.textShadow = `
                    0 1px 0 rgba(255, 255, 255, 0.7),
                    0 2px 2px rgba(0, 0, 0, 0.18),
                    0 -0.5px 0.5px rgba(0, 0, 0, 0.12),
                    0.5px 0 0.5px rgba(0, 0, 0, 0.08),
                    -0.5px 0 0.5px rgba(255, 255, 255, 0.4)
                  `
                  e.currentTarget.style.filter = 'contrast(1)'
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

