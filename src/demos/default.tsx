import React from 'react'
import { PillBase } from '@/components/ui/component'

/**
 * Demo file - Default export is required
 * This is what users and moderators see in preview
 */
export default function Demo() {
  return (
    <div 
      style={{ 
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Centered navigation pill */}
      <div
        style={{
          filter: `
            drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))
            drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12))
            drop-shadow(0 24px 48px rgba(0, 0, 0, 0.08))
          `,
        }}
      >
        <PillBase />
      </div>

      {/* Hidden scrollable sections for navigation functionality */}
      <section id="home" style={{ position: 'absolute', top: '0', height: '25vh', width: '100%' }} />
      <section id="problem" style={{ position: 'absolute', top: '25vh', height: '25vh', width: '100%' }} />
      <section id="solution" style={{ position: 'absolute', top: '50vh', height: '25vh', width: '100%' }} />
      <section id="contact" style={{ position: 'absolute', top: '75vh', height: '25vh', width: '100%' }} />
    </div>
  )
}
