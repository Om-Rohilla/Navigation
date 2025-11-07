import React from 'react'
import { PillBase } from '@/components/ui/component'

/**
 * Demo file - Default export is required
 * This is what users and moderators see in preview
 */
export default function Demo() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* Fixed navigation */}
      <div
        style={{
          position: 'fixed',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          filter: `
            drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))
            drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12))
            drop-shadow(0 24px 48px rgba(0, 0, 0, 0.08))
          `,
        }}
      >
        <PillBase />
      </div>

      {/* Scrollable sections */}
      <section 
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
            Home Section
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Welcome to the adaptive navigation demo. Scroll down to see the navigation automatically update.
            Hover over the pill to expand and see all sections.
          </p>
        </div>
      </section>

      <section 
        id="problem"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
          background: '#f8f8f8',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
            Problem Section
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            The navigation pill is now showing "Problem". Notice how it collapsed automatically
            and only shows the current section name.
          </p>
        </div>
      </section>

      <section 
        id="solution"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
            Solution Section
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            The pill updates smoothly as you scroll. Try hovering over it to see all sections
            and click to navigate directly.
          </p>
        </div>
      </section>

      <section 
        id="contact"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
          background: '#f8f8f8',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
            Contact Section
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            You've reached the final section. The navigation automatically detected your scroll position
            and updated to show "Contact".
          </p>
        </div>
      </section>
    </div>
  )
}
