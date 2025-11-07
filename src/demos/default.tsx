import React from 'react'
import { PillBase } from '@/components/ui/component'

/**
 * Demo file - Default export is required
 * This is what users and moderators see in preview
 */
export default function Demo() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-8"
      style={{
        background: '#ffffff',
      }}k
    >
      {/* Ambient shadow wrapper for realistic floating effect */}
      <div
        className="flex items-center justify-center"
        style={{
          filter: `
            drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))
            drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08))
            drop-shadow(0 20px 48px rgba(0, 0, 0, 0.04))
          `,
        }}
      >
        <PillBase />
      </div>
    </div>
  )
}

