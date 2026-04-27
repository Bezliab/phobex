// src/components/InfoModal.jsx
// About modal with platform description and stats.
// Accessible: focus trap, Escape to close, backdrop click to close.

import { useEffect, useRef } from 'react'
import styles from './InfoModal.module.css'

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const LogoMark = () => (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" fill="currentColor" opacity="0.15"/>
    <path d="M14 6C9.582 6 6 9.582 6 14s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3a5 5 0 110 10A5 5 0 0114 9z" fill="currentColor" opacity="0.4"/>
    <circle cx="14" cy="14" r="3" fill="currentColor"/>
  </svg>
)

export default function InfoModal({ isOpen, onClose, phobiaCount }) {
  const closeRef  = useRef(null)
  const dialogRef = useRef(null)

  // Focus the close button when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Trap focus within the modal
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return
    const focusable = dialogRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]
    const trap  = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', trap)
    return () => window.removeEventListener('keydown', trap)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal} ref={dialogRef}>
        <button
          ref={closeRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className={styles.body}>
          <div className={styles.logoMark}>
            <LogoMark />
          </div>

          <h2 id="modal-title" className={styles.title}>About Phobex</h2>

          <p className={styles.text}>
            Phobex is an immersive phobia discovery platform. Search any fear — from
            the mundane to the obscure — and uncover its clinical name, psychological
            profile, and fascinating context.
          </p>
          <p className={styles.text}>
            Our database covers documented phobias across seven categories. Descriptions
            are educational and intended to foster understanding for those experiencing
            these conditions.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{phobiaCount}</span>
              <span className={styles.statLabel}>Phobias</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>7</span>
              <span className={styles.statLabel}>Categories</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>∞</span>
              <span className={styles.statLabel}>Curiosity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
