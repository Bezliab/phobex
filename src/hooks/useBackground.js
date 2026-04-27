// src/hooks/useBackground.js
// Manages dynamic background image loading and CSS accent variable.
// Smoothly transitions between phobia backgrounds.

import { useEffect, useRef } from 'react'

export function useBackground(phobia) {
  const prevSrcRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const bgEl = document.getElementById('phobex-bg-image')

    if (!phobia) {
      // Reset to default state
      if (bgEl) bgEl.classList.remove('is-loaded')
      root.style.setProperty('--accent', '#e8d5b0')
      root.style.setProperty('--accent-dim', 'rgba(232,213,176,0.15)')
      root.style.setProperty('--accent-glow', 'rgba(232,213,176,0.06)')
      prevSrcRef.current = null
      return
    }

    // Apply accent color
    const accent = phobia.accentColor || '#e8d5b0'
    root.style.setProperty('--accent', accent)
    root.style.setProperty('--accent-dim', accent + '26') // ~15% opacity
    root.style.setProperty('--accent-glow', accent + '10') // ~6% opacity

    // Load background image
    const src = phobia.backgroundImage || ''
    if (!src || src === prevSrcRef.current) return
    prevSrcRef.current = src

    if (bgEl) bgEl.classList.remove('is-loaded')

    const img = new Image()
    img.onload = () => {
      if (bgEl) {
        bgEl.src = src
        requestAnimationFrame(() => {
          requestAnimationFrame(() => bgEl.classList.add('is-loaded'))
        })
      }
    }
    img.src = src
  }, [phobia])
}
