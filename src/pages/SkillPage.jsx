import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { asset } from '../util'

export default function SkillPage() {
  const { name } = useParams()
  const navigate = useNavigate()
  const skillName = decodeURIComponent(name)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [skillName])

  const matches = projects.filter((p) => p.skills.includes(skillName))

  return (
    <div id="skillPage" style={{ display: 'block' }}>
      <div className="skill-header">
        <h1>{skillName}</h1>
      </div>
      <div className="skill-grid">
        {matches.map((p) => (
          <div
            key={p.idx}
            className="skill-card"
            onClick={() => navigate('/project/' + p.slug)}
          >
            <div className="skill-card-inner">
              <div className="sk-meta">
                <span className="sk-tag">{p.category}</span>
              </div>
              <img className="sk-img" src={asset(p.image)} alt={p.title} />
              <h3>{p.title}</h3>
              <div className="sk-date">{p.date}</div>
              <p>{p.shortDesc}</p>
              <span className="card-skill-tag">{p.skills[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
