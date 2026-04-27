// src/components/NoResult.jsx
// Shown when a search query yields no matching phobia.
// Offers fallback suggestions from the dataset.

import { useMemo } from 'react'
import styles from './NoResult.module.css'

const EmptyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.8" opacity="0.25"/>
    <path d="M15 24h18M24 15v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" transform="rotate(45 24 24)" opacity="0.45"/>
    <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.35"/>
  </svg>
)

export default function NoResult({ query, phobias, onSelect }) {
  // Pick 4 random phobias as suggestions (different each render)
  const suggestions = useMemo(() => {
    const shuffled = [...phobias].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  }, [phobias, query]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className={styles.section}
      aria-live="polite"
      aria-label="No results found"
    >
      <div className={styles.card}>
        <div className={styles.icon}><EmptyIcon /></div>

        <h2 className={styles.title}>No phobia found</h2>

        <p className={styles.text}>
          We couldn't match <em>"{query}"</em> to any known phobia.
        </p>
        <p className={styles.hint}>
          Try a specific fear like <em>snakes</em>, <em>fire</em>, or <em>darkness</em>.
        </p>

        <div className={styles.suggestions}>
          <p className={styles.suggestionsLabel}>You might be looking for:</p>
          <div className={styles.chips}>
            {suggestions.map((p) => (
              <button
                key={p.id}
                className={styles.chip}
                onClick={() => onSelect(p)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
