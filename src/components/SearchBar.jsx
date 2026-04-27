// src/components/SearchBar.jsx
// Real-time search with debounce, keyboard navigation, and suggestions dropdown.

import { useState, useRef, useCallback, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { search, highlightMatch } from '../utils/fuzzySearch'
import styles from './SearchBar.module.css'

/* ── Icons ── */
const SearchIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const ClearIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

/* ── HighlightedText sub-component ── */
function HighlightedText({ text, query }) {
  const chunks = highlightMatch(text, query)
  return (
    <span>
      {chunks.map((chunk, i) =>
        chunk.highlight
          ? <mark key={i} className={styles.mark}>{chunk.text}</mark>
          : <span key={i}>{chunk.text}</span>
      )}
    </span>
  )
}

/* ── Main SearchBar ── */
export default function SearchBar({ phobias, onResult, onNoResult }) {
  const [query, setQuery]               = useState('')
  const [suggestions, setSuggestions]   = useState([])
  const [activeIndex, setActiveIndex]   = useState(-1)
  const [isFocused, setIsFocused]       = useState(false)

  const inputRef      = useRef(null)
  const listRef       = useRef(null)
  const debouncedQuery = useDebounce(query, 200)

  // Update suggestions on debounced query change
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([])
      setActiveIndex(-1)
      return
    }
    const results = search(phobias, debouncedQuery, 6)
    setSuggestions(results)
    setActiveIndex(-1)
  }, [debouncedQuery, phobias])

  // Focus search with keyboard shortcut: / or Cmd+K
  useEffect(() => {
    const handler = (e) => {
      if (
        (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const showSuggestions = isFocused && suggestions.length > 0

  /* ── Commit a search result ── */
  const commit = useCallback((queryStr) => {
    const results = search(phobias, queryStr, 1)
    setSuggestions([])
    setActiveIndex(-1)
    if (results.length) {
      onResult(results[0].phobia)
    } else {
      onNoResult(queryStr)
    }
  }, [phobias, onResult, onNoResult])

  /* ── Select suggestion by index ── */
  const selectSuggestion = useCallback((idx) => {
    const phobia = suggestions[idx]?.phobia
    if (!phobia) return
    setQuery(phobia.name)
    setSuggestions([])
    setActiveIndex(-1)
    onResult(phobia)
    inputRef.current?.blur()
  }, [suggestions, onResult])

  /* ── Keyboard navigation ── */
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIndex >= 0) {
        selectSuggestion(activeIndex)
      } else {
        commit(query)
      }
    } else if (e.key === 'Escape') {
      setSuggestions([])
      setActiveIndex(-1)
      inputRef.current?.blur()
    }
  }

  /* ── Scroll active item into view ── */
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.children[activeIndex]
      item?.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  const handleClear = () => {
    setQuery('')
    setSuggestions([])
    setActiveIndex(-1)
    inputRef.current?.focus()
  }

  const handleBlur = () => {
    // Delay so mousedown on suggestion fires first
    setTimeout(() => setIsFocused(false), 160)
  }

  return (
    <div className={styles.wrapper} role="search">
      <div className={`${styles.container} ${isFocused ? styles.focused : ''}`}>
        <div className={styles.searchIcon}><SearchIcon /></div>

        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search a fear… snakes, heights, darkness…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          autoComplete="off"
          spellCheck={false}
          aria-label="Search for a phobia"
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls="suggestions-list"
          aria-expanded={showSuggestions}
          aria-activedescendant={activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined}
        />

        {query && (
          <button className={styles.clearBtn} onClick={handleClear} aria-label="Clear search">
            <ClearIcon />
          </button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <ul
          id="suggestions-list"
          ref={listRef}
          className={styles.suggestions}
          role="listbox"
          aria-label="Search suggestions"
        >
          {suggestions.map(({ phobia }, idx) => (
            <li
              key={phobia.id}
              id={`suggestion-${idx}`}
              role="option"
              aria-selected={idx === activeIndex}
              className={`${styles.suggestionItem} ${idx === activeIndex ? styles.active : ''}`}
              onMouseDown={(e) => { e.preventDefault(); selectSuggestion(idx) }}
            >
              <div className={styles.suggestionMain}>
                <span className={styles.suggestionName}>
                  <HighlightedText text={phobia.name} query={query} />
                </span>
                <span className={styles.suggestionFear}>Fear of {phobia.fear}</span>
              </div>
              <span className={styles.suggestionBadge}>{phobia.category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
