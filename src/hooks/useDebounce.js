// src/hooks/useDebounce.js
// Debounces a value by the given delay (ms).
// Prevents excessive search calls on every keystroke.

import { useState, useEffect } from 'react'

export function useDebounce(value, delay = 220) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
