// src/utils/fuzzySearch.js
// Lightweight manual fuzzy search — no external dependencies.
// Scores matches across 5 tiers: exact → starts-with → contains → word-level → char-sequential.

/**
 * Score a single phobia against a query string.
 * Returns 0–100 (higher = better match).
 */
export function scorePhobia(phobia, query) {
  const q = query.toLowerCase().trim()
  if (!q) return 0

  const name = phobia.name.toLowerCase()
  const fear = phobia.fear.toLowerCase()
  const keywords = (phobia.keywords || []).map((k) => k.toLowerCase())

  // Tier 1 — Exact match
  if (name === q) return 100
  if (fear === q) return 95
  if (keywords.some((k) => k === q)) return 90

  // Tier 2 — Starts-with
  if (name.startsWith(q)) return 80
  if (fear.startsWith(q)) return 75
  if (keywords.some((k) => k.startsWith(q))) return 70

  // Tier 3 — Contains
  if (name.includes(q)) return 60
  if (fear.includes(q)) return 55
  if (keywords.some((k) => k.includes(q))) return 50

  // Tier 4 — Every query word appears somewhere
  const qWords = q.split(/\s+/).filter(Boolean)
  const haystack = [name, fear, ...keywords].join(' ')
  if (qWords.length > 1 && qWords.every((w) => haystack.includes(w))) return 40

  // Tier 5 — Sequential character fuzzy match
  const fuzzy = fuzzyCharScore(q, haystack)
  if (fuzzy > 0.5) return Math.round(fuzzy * 35)

  return 0
}

/**
 * Returns 0–1: ratio of needle chars found in haystack in order.
 */
function fuzzyCharScore(needle, haystack) {
  let ni = 0
  let matches = 0
  for (let hi = 0; hi < haystack.length && ni < needle.length; hi++) {
    if (haystack[hi] === needle[ni]) { matches++; ni++ }
  }
  return matches / needle.length
}

/**
 * Run search across all phobias. Returns sorted array of { phobia, score }.
 */
export function search(phobias, query, limit = 6) {
  if (!query.trim()) return []
  return phobias
    .map((p) => ({ phobia: p, score: scorePhobia(p, query) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

/**
 * Highlight the matching portion of text with a <mark> element.
 * Returns an array of strings/React-renderable chunks.
 */
export function highlightMatch(text, query) {
  const q = query.trim()
  if (!q) return [{ text, highlight: false }]
  const idx = text.toLowerCase().indexOf(q.toLowerCase())
  if (idx === -1) return [{ text, highlight: false }]
  return [
    { text: text.slice(0, idx), highlight: false },
    { text: text.slice(idx, idx + q.length), highlight: true },
    { text: text.slice(idx + q.length), highlight: false },
  ].filter((c) => c.text)
}
