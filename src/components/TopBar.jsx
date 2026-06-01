import { Link, useLocation } from 'react-router-dom'

// Top navigation bar
export default function TopBar({ onSearchToggle }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'

  return (
    <nav className="top-bar">
      <div className="top-bar-left">
        <button className="search-toggle" aria-label="Search" onClick={onSearchToggle}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="top-bar-center">
        <Link
          className="top-bar-home"
          to="/"
          style={{ display: isHome ? 'none' : 'block' }}
        >
          Home
        </Link>
      </div>
      <div className="top-bar-right">
        <Link className={'top-bar-about' + (isAbout ? ' active' : '')} to="/about">
          About
        </Link>
      </div>
    </nav>
  )
}
