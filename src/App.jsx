// src/App.jsx
// Root component — manages application state and view routing.
// Views: 'hero' | 'result' | 'no-result'

import { useState, useEffect, useCallback } from 'react'

import phobias          from './data/phobias'
import { useBackground } from './hooks/useBackground'

import Header      from './components/Header'
import HeroSection from './components/HeroSection'
import ResultCard  from './components/ResultCard'
import NoResult    from './components/NoResult'
import InfoModal   from './components/InfoModal'
import Toast       from './components/Toast'

import styles from './App.module.css'

// ── View constants ──────────────────────────────────────────────
const VIEW = { HERO: 'hero', RESULT: 'result', NO_RESULT: 'no-result' }

export default function App() {
  const [view,          setView]          = useState(VIEW.HERO)
  const [currentPhobia, setCurrentPhobia] = useState(null)
  const [noResultQuery, setNoResultQuery] = useState('')
  const [modalOpen,     setModalOpen]     = useState(false)
  const [toast,         setToast]         = useState({ visible: false, message: '' })

  // Apply dynamic background + accent whenever currentPhobia changes
  useBackground(currentPhobia)

  // Update document title on view change
  useEffect(() => {
    if (view === VIEW.RESULT && currentPhobia) {
      document.title = `${currentPhobia.name} — Phobex`
    } else if (view === VIEW.NO_RESULT) {
      document.title = 'No result — Phobex'
    } else {
      document.title = 'Phobex — Phobia Discovery Platform'
    }
  }, [view, currentPhobia])

  // Global keyboard: Escape navigates back
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && !modalOpen) {
        if (view !== VIEW.HERO) handleBack()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [view, modalOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Handlers ── */
  const handleResult = useCallback((phobia) => {
    setCurrentPhobia(phobia)
    setView(VIEW.RESULT)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleNoResult = useCallback((query) => {
    setCurrentPhobia(null)
    setNoResultQuery(query)
    setView(VIEW.NO_RESULT)
  }, [])

  const handleBack = useCallback(() => {
    setCurrentPhobia(null)
    setView(VIEW.HERO)
  }, [])

  const handleRandom = useCallback(() => {
    let pool = phobias
    if (currentPhobia && pool.length > 1) {
      pool = pool.filter((p) => p.id !== currentPhobia.id)
    }
    const pick = pool[Math.floor(Math.random() * pool.length)]
    if (pick) handleResult(pick)
  }, [currentPhobia, handleResult])

  const handleShare = useCallback((phobia) => {
    const text = `${phobia.name} — Fear of ${phobia.fear}. Discovered on Phobex.`
    if (navigator.share) {
      navigator.share({ title: phobia.name, text }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard')
      })
    }
  }, [])

  const showToast = (message) => {
    setToast({ visible: true, message })
  }

  const dismissToast = useCallback(() => {
    setToast((t) => ({ ...t, visible: false }))
  }, [])

  return (
    <>
      {/* ── Static background elements (managed via useBackground hook) ── */}
      <div id="phobex-bg-container" aria-hidden="true">
        <div id="phobex-bg-overlay" />
        <img id="phobex-bg-image" alt="" loading="lazy" />
      </div>

      {/* ── Noise texture overlay ── */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Header ── */}
      <Header
        onLogoClick={handleBack}
        onRandom={handleRandom}
        onInfo={() => setModalOpen(true)}
      />

      {/* ── Main content ── */}
      <main className={styles.main}>
        {view === VIEW.HERO && (
          <HeroSection
            phobias={phobias}
            onResult={handleResult}
            onNoResult={handleNoResult}
          />
        )}

        {view === VIEW.RESULT && (
          <ResultCard
            phobia={currentPhobia}
            onBack={handleBack}
            onShare={handleShare}
          />
        )}

        {view === VIEW.NO_RESULT && (
          <NoResult
            query={noResultQuery}
            phobias={phobias}
            onSelect={handleResult}
          />
        )}
      </main>

      {/* ── Info modal ── */}
      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        phobiaCount={phobias.length}
      />

      {/* ── Toast ── */}
      <Toast
        message={toast.message}
        visible={toast.visible}
        onDismiss={dismissToast}
      />
    </>
  )
}
