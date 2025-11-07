import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

interface NavItem {
  label: string
  id: string
}

/**
 * 3D Adaptive Navigation Pill
 * Smart navigation with scroll detection and hover expansion
 */
export const PillBase: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [expanded, setExpanded] = useState(false)
  const [hovering, setHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'Problem', id: 'problem' },
    { label: 'Solution', id: 'solution' },
    { label: 'Contact', id: 'contact' },
  ]

  // Spring animations for smooth motion
  const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 })
  const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })

  // Scroll detection - track which section is visible
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  // Handle hover expansion
  useEffect(() => {
    if (hovering) {
      setExpanded(true)
      pillWidth.set(580)
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false)
        pillWidth.set(140)
      }, 600)
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [hovering, pillWidth])

  const handleMouseEnter = () => {
    setHovering(true)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const activeItem = navItems.find(item => item.id === activeSection)

  return (
    <motion.nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-full"
      style={{
        width: pillWidth,
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
        className="relative z-10 h-full flex items-center justify-center px-6"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", Poppins, sans-serif',
        }}
      >
        {/* Collapsed state - show only active section */}
        {!expanded && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <span
              style={{
                fontSize: '15.5px',
                fontWeight: 650,
                color: '#2a2a2a',
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", Poppins, sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textShadow: `
                  inset 0 1px 1px rgba(0, 0, 0, 0.28),
                  0 -1px 1px rgba(255, 255, 255, 0.7),
                  0 1px 0 rgba(255, 255, 255, 0.5),
                  0 2px 4px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              {activeItem.label}
            </span>
          </motion.div>
        )}

        {/* Expanded state - show all sections with stagger */}
        {expanded && (
          <div className="flex items-center justify-evenly w-full">
            {navItems.map((item, index) => {
              const isActive = item.id === activeSection
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ 
                    delay: index * 0.08,
                    duration: 0.25,
                    ease: 'easeOut'
                  }}
                  onClick={() => handleSectionClick(item.id)}
                  className="relative cursor-pointer transition-all duration-200"
                  style={{
                    fontSize: isActive ? '15.5px' : '15px',
                    fontWeight: isActive ? 650 : 500,
                    color: isActive ? '#2a2a2a' : '#5a5a5a',
                    textDecoration: 'none',
                    letterSpacing: '0.4px',
                    background: 'transparent',
                    border: 'none',
                    padding: '10px 16px',
                    outline: 'none',
                    whiteSpace: 'nowrap',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", Poppins, sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                    textShadow: isActive 
                      ? `
                        inset 0 1px 1px rgba(0, 0, 0, 0.28),
                        0 -1px 1px rgba(255, 255, 255, 0.7),
                        0 1px 0 rgba(255, 255, 255, 0.5),
                        0 2px 4px rgba(0, 0, 0, 0.18)
                      `
                      : `
                        inset 0 1px 1px rgba(0, 0, 0, 0.20),
                        0 -1px 1px rgba(255, 255, 255, 0.6),
                        0 1px 0 rgba(255, 255, 255, 0.4),
                        0 2px 3px rgba(0, 0, 0, 0.12)
                      `,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#484848'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#5a5a5a'
                    }
                  }}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </div>
        )}
      </div>
    </motion.nav>
  )
}
