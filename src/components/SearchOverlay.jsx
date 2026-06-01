import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects, cap } from '../data/projects'

// Fullscreen search overlay — mirrors the original search behaviour.
export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  // Lock body scroll while open and focus the input.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const t = setTimeout(() => {
        const el = document.getElementById('searchInput')
        if (el) el.focus()
      }, 250)
      return () => clearTimeout(t)
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const q = query.trim().toLowerCase()
  const matches = !q
    ? []
    : projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.skills.some((s) => s.toLowerCase().includes(q))
      )

  function go(slug) {
    onClose()
    navigate('/project/' + slug)
  }

  return (
    <div className={'search-overlay' + (open ? ' open' : '')}>
      <button className="search-close" aria-label="Close" onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="search-input-area">
        <div className="search-field">
          <input
            type="text"
            id="searchInput"
            placeholder="Search..."
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
      <div className="search-results-list">
        {q && matches.length === 0 && (
          <div className="search-no-results">No matching results.</div>
        )}
        {matches.map((m) => (
          <div className="search-result-item" key={m.idx} onClick={() => go(m.slug)}>
            <div className="search-result-title">{m.title}</div>
            <div className="search-result-meta">
              {cap(m.category)} · {m.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
