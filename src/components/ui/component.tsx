import React from 'react'
import { motion } from 'framer-motion'

interface PillNavProps {
  items?: string[]
}

/**
 * 3D Pill Navigation Bar
 * A modern, tactile navigation component with premium lighting and depth
 */
export const PillNav: React.FC<PillNavProps> = ({ 
  items = ['Home', 'Problem', 'Solution', 'Contact'] 
}) => {
  return (
    <motion.nav
      className="relative px-8 py-4 rounded-full"
      style={{
        background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 50%, #f0f0f2 100%)',
        boxShadow: `
          0 1px 2px rgba(0, 0, 0, 0.04),
          0 4px 12px rgba(0, 0, 0, 0.06),
          0 16px 32px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          inset 0 -1px 2px rgba(0, 0, 0, 0.05)
        `,
      }}
    >
      {/* Top highlight for 3D effect */}
      <div 
        className="absolute inset-x-0 top-0 h-1/2 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Bottom shadow for depth */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1/3 rounded-full opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Navigation items */}
      <ul className="relative flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="relative px-6 py-2.5 rounded-full text-sm font-medium tracking-tight transition-all duration-200"
              style={{
                color: '#52525b',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              {/* Button text */}
              <span className="relative z-10">{item}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Subtle outer glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.04)',
        }}
      />
    </motion.nav>
  )
}

