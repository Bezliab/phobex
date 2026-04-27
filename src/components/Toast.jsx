// src/components/Toast.jsx
// Lightweight status toast — appears at bottom, auto-dismisses.
// Controlled entirely via props from App.jsx state.

import { useEffect } from 'react'
import styles from './Toast.module.css'

export default function Toast({ message, visible, onDismiss, duration = 3000 }) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onDismiss, duration)
    return () => clearTimeout(t)
  }, [visible, message, duration, onDismiss])

  return (
    <div
      className={`${styles.toast} ${visible ? styles.visible : ''}`}
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
    >
      {message}
    </div>
  )
}
