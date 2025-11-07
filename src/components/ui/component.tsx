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
      className="relative rounded-full overflow-hidden"
      style={{
        width: '580px',
        height: '56px',
        background: `
          linear-gradient(145deg, #fafafa 0%, #f4f4f6 25%, #f0f0f2 50%, #ececee 75%, #f2f2f4 100%)
        `,
        boxShadow: `
          0 1px 2px rgba(0, 0, 0, 0.03),
          0 2px 6px rgba(0, 0, 0, 0.04),
          0 6px 12px rgba(0, 0, 0, 0.06),
          0 12px 24px rgba(0, 0, 0, 0.08),
          0 24px 48px rgba(0, 0, 0, 0.1),
          inset 0 2px 3px rgba(255, 255, 255, 0.95),
          inset 0 -2px 4px rgba(0, 0, 0, 0.06),
          inset 0 0 0 0.5px rgba(255, 255, 255, 0.4)
        `,
        x: pillShift,
      }}
    >
      {/* Glossy top highlight - primary light source */}
      <div 
        className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
        style={{
          height: '55%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Intense top edge shine */}
      <div 
        className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
        style={{
          height: '20%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Bottom shadow for depth */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-full pointer-events-none"
        style={{
          height: '40%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Ambient occlusion shadow at bottom edge */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-full pointer-events-none"
        style={{
          height: '15%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Left-side subtle highlight for dimension */}
      <div 
        className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
        style={{
          width: '30%',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Right-side subtle shadow for dimension */}
      <div 
        className="absolute inset-y-0 right-0 rounded-full pointer-events-none"
        style={{
          width: '30%',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Outer edge definition with subtle border */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.04)',
        }}
      />

      {/* Specular highlight - creates glass-like quality */}
      <div 
        className="absolute left-12 top-2 rounded-full pointer-events-none"
        style={{
          width: '120px',
          height: '12px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(3px)',
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
        {/* Animated selector capsule */}
        <motion.div
          className="absolute rounded-xl pointer-events-none overflow-hidden"
          style={{
            height: '40px',
            width: capsuleWidth,
            x: capsuleX,
            top: '8px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f9f9f9 50%, #f2f2f2 100%)',
            boxShadow: `
              0 2px 4px rgba(0, 0, 0, 0.05),
              0 4px 8px rgba(0, 0, 0, 0.07),
              0 8px 16px rgba(0, 0, 0, 0.09),
              inset 0 1px 2px rgba(255, 255, 255, 1),
              inset 0 -2px 3px rgba(0, 0, 0, 0.06),
              inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)
            `,
          }}
        >
          {/* Capsule top highlight */}
          <div
            className="absolute inset-x-0 top-0 rounded-t-xl"
            style={{
              height: '50%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
          
          {/* Capsule intense top shine */}
          <div
            className="absolute inset-x-0 top-0 rounded-t-xl"
            style={{
              height: '20%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Capsule bottom shadow */}
          <div
            className="absolute inset-x-0 bottom-0 rounded-b-xl"
            style={{
              height: '35%',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
            }}
          />

          {/* Capsule specular highlight */}
          <div
            className="absolute left-6 top-1.5 rounded-full"
            style={{
              width: '50px',
              height: '10px',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(3px)',
            }}
          />
        </motion.div>

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
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.55)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                background: 'transparent',
                border: 'none',
                padding: '10px 20px',
                outline: 'none',
                zIndex: 20,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'rgba(0, 0, 0, 0.75)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'rgba(0, 0, 0, 0.55)'
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

