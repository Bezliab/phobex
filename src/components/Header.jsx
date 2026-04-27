// src/components/Header.jsx
import styles from './Header.module.css'

/* ── SVG Icons ── */
const LogoIcon = () => (
  <svg className={styles.logoIcon} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" fill="currentColor" opacity="0.15"/>
    <path d="M14 6C9.582 6 6 9.582 6 14s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3a5 5 0 110 10A5 5 0 0114 9z" fill="currentColor" opacity="0.4"/>
    <circle cx="14" cy="14" r="3" fill="currentColor"/>
  </svg>
)

const RandomIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 7h14M3 13h14M7 3l-4 4 4 4M13 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const InfoIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 9v5M10 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function Header({ onLogoClick, onRandom, onInfo }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={onLogoClick} aria-label="Phobex home">
          <LogoIcon />
          <span className={styles.logoText}>Phobex</span>
        </button>

        <nav className={styles.actions}>
          <button className={styles.btnGhost} onClick={onRandom} aria-label="Show a random phobia">
            <RandomIcon />
            <span>Random</span>
          </button>
          <button className={`${styles.btnGhost} ${styles.iconOnly}`} onClick={onInfo} aria-label="About Phobex">
            <InfoIcon />
          </button>
        </nav>
      </div>
    </header>
  )
}
