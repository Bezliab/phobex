// src/components/ResultCard.jsx
// Displays a full phobia profile with category, name, fear, description, and actions.

import styles from './ResultCard.module.css'

/* ── Icons ── */
const BackIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="12" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="12" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="4" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M10.5 3.9L5.5 7.1M10.5 12.1L5.5 8.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

export default function ResultCard({ phobia, onBack, onShare }) {
  if (!phobia) return null

  // Capitalize first letter of fear
  const fearDisplay = phobia.fear.charAt(0).toUpperCase() + phobia.fear.slice(1)

  return (
    <section
      className={styles.section}
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Result: ${phobia.name}`}
    >
      <article className={styles.card} key={phobia.id}>
        {/* Meta row */}
        <div className={styles.meta}>
          <span className={styles.category}>{phobia.category}</span>
          {phobia.prevalence && (
            <span className={styles.prevalence}>Affects {phobia.prevalence}</span>
          )}
        </div>

        {/* Main info */}
        <div className={styles.main}>
          <p className={styles.fearLabel}>Fear of</p>
          <h2 className={styles.fear}>{fearDisplay}</h2>
          <h3 className={styles.name}>{phobia.name}</h3>
        </div>

        {/* Description */}
        <p className={styles.description}>{phobia.description}</p>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.btnSecondary} onClick={onBack} aria-label="Back to search">
            <BackIcon />
            Back to Search
          </button>
          <button className={styles.btnPrimary} onClick={() => onShare(phobia)} aria-label="Share this phobia">
            <ShareIcon />
            Share
          </button>
        </div>
      </article>
    </section>
  )
}
