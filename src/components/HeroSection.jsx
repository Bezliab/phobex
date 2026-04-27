// src/components/HeroSection.jsx
// Main landing view: title, search, and quick-tag pills.

import SearchBar from './SearchBar'
import styles from './HeroSection.module.css'

const QUICK_TAGS = [
  { label: 'spiders',    query: 'spiders' },
  { label: 'heights',    query: 'heights' },
  { label: 'darkness',   query: 'darkness' },
  { label: 'deep water', query: 'deep water' },
  { label: 'clowns',     query: 'clowns' },
  { label: 'fire',       query: 'fire' },
]

export default function HeroSection({ phobias, onResult, onNoResult }) {
  const handleTag = (query) => {
    const results = phobias.filter((p) =>
      p.fear.toLowerCase().includes(query.toLowerCase()) ||
      (p.keywords || []).some((k) => k.toLowerCase().includes(query.toLowerCase()))
    )
    if (results.length) onResult(results[0])
    else onNoResult(query)
  }

  return (
    <section className={styles.hero} aria-label="Search for a phobia">
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} aria-hidden="true" />
        <span>Phobia Discovery Platform</span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.titleLine}>Name your</span>
        <span className={`${styles.titleLine} ${styles.titleItalic}`}>deepest fear.</span>
      </h1>

      <p className={styles.subtitle}>
        Search any fear or phobia name to discover its origin, prevalence, and psychological profile.
      </p>

      <SearchBar
        phobias={phobias}
        onResult={onResult}
        onNoResult={onNoResult}
      />

      <div className={styles.quickTags} aria-label="Quick search suggestions">
        <span className={styles.tagsLabel}>Try:</span>
        {QUICK_TAGS.map((tag) => (
          <button
            key={tag.query}
            className={styles.tag}
            onClick={() => handleTag(tag.query)}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </section>
  )
}
