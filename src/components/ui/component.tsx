import React from 'react'

/**
 * 3D Pill Base
 * A minimal, elegant pill-shaped container with realistic depth and lighting
 */
export const PillBase: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-4xl rounded-full"
      style={{
        height: '64px',
        background: 'linear-gradient(180deg, #f8f8f8 0%, #f5f5f7 50%, #f2f2f4 100%)',
        boxShadow: `
          0 2px 4px rgba(0, 0, 0, 0.04),
          0 8px 16px rgba(0, 0, 0, 0.06),
          0 20px 32px rgba(0, 0, 0, 0.08),
          inset 0 1px 1px rgba(255, 255, 255, 0.9),
          inset 0 -1px 2px rgba(0, 0, 0, 0.04)
        `,
      }}
    >
      {/* Top highlight layer for 3D lighting */}
      <div 
        className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
        style={{
          height: '50%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Bottom shadow layer for depth */}
      <div 
        className="absolute inset-x-0 bottom-0 rounded-full pointer-events-none"
        style={{
          height: '30%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      />

      {/* Outer edge definition */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.03)',
        }}
      />
    </div>
  )
}

