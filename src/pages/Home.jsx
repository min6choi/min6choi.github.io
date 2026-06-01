import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects, categories, cap } from '../data/projects'
import { asset } from '../util'

export default function Home() {
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  const visible = projects.filter((p) => filter === 'all' || p.category === filter)

  function openProject(slug) {
    navigate('/project/' + slug)
  }

  function openSkill(skill, e) {
    e.stopPropagation()
    navigate('/skill/' + encodeURIComponent(skill))
  }

  return (
    <div id="homePage">
      <header className="header scroll-fade">
        <div className="header-inner">
          <img className="profile-img" src={asset('img/profile.png')} alt="Minsik Choi" />
          <div className="header-text">
            <h1>Minsik Choi</h1>
            <p className="bio">
              I use digital technologies as an engine for open and ethical knowledge sharing.
            </p>
          </div>
        </div>
      </header>

      <div className="main-container">
        <nav className="categories scroll-fade">
          <span className="label">Categories</span>
          {categories.map((c) => (
            <button
              key={c.filter}
              className={filter === c.filter ? 'active' : ''}
              onClick={() => setFilter(c.filter)}
            >
              {c.label}
            </button>
          ))}
        </nav>

        <div className="card-grid">
          {visible.map((p) => (
            <article
              key={p.idx}
              className="card scroll-fade"
              onClick={() => openProject(p.slug)}
            >
              <div className="card-inner">
                <div className="card-meta">
                  <span className="card-tag">{cap(p.category)}</span>
                </div>
                <img className="img-placeholder" src={asset(p.image)} alt="" />
                <h3>{p.title}</h3>
                <div className="card-date">{p.date}</div>
                <p>{p.shortDesc}</p>
                <span
                  className="card-skill-tag"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => openSkill(p.skills[0], e)}
                >
                  {p.skills[0]}
                </span>
              </div>
            </article>
          ))}
          {visible.length === 0 && (
            <div className="no-results visible">No matching results found.</div>
          )}
        </div>
      </div>
    </div>
  )
}
