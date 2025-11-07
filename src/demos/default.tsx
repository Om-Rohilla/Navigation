import React from 'react'
import { PillNav } from '@/components/ui/component'

/**
 * Demo file - Default export is required
 * This is what users and moderators see in preview
 */
export default function Demo() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        background: '#ffffff',
      }}
    >
      {/* Ambient shadow container for floating effect */}
      <div
        style={{
          filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.06))',
        }}
      >
        <PillNav />
      </div>
    </div>
  )
}

