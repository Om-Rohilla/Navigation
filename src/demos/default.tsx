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
      }}
    >
      {/* Ambient shadow wrapper for floating effect */}
      <div
        className="w-full max-w-lg"
        style={{
          filter: 'drop-shadow(0 24px 48px rgba(0, 0, 0, 0.1)) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.08))',
        }}
      >
        <PillBase />
      </div>
    </div>
  )
}

