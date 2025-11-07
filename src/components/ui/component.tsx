import React from 'react'

interface NavItem {
  label: string
}

/**
 * 3D Pill Navigation Bar
 * A premium 3D navigation component with clean typography and perfect spacing
 */
export const PillBase: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home' },
    { label: 'Problem' },
    { label: 'Solution' },
    { label: 'Contact' },
  ]

  return (
    <nav
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
        className="relative z-10 h-full flex items-center justify-evenly px-8"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Poppins, sans-serif',
        }}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="relative group cursor-pointer transition-colors duration-200"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(0, 0, 0, 0.65)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.9)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.65)'
            }}
          >
            {item.label}
            
            {/* Subtle hover underline */}
            <span 
              className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)',
                transform: 'translateY(2px)',
              }}
            />
          </a>
        ))}
      </div>
    </nav>
  )
}

