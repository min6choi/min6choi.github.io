import { useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { projects, cap } from '../data/projects'
import { asset } from '../util'

export default function Detail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  return (
    <div style={{ paddingTop: '52px' }}>
      <div style={{ animation: 'fadeIn .4s ease' }}>
        <div className="detail-wrapper">
          <div className="detail-layout">
            <img className="detail-image" src={asset(project.detailImage)} alt="" />
            <h2 className="detail-title">{project.title}</h2>
            <div className="detail-quote">{project.date}</div>
            <div className="detail-body">
              {project.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="detail-links">
              {project.links.map((l, i) => (
                <a key={i} className="detail-link-btn" href={l.url} target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="detail-info">
              <div className="info-row">
                <div className="info-label">
                  <span className="material-symbols-outlined">grid_view</span>Category
                </div>
                <div className="info-value">{cap(project.category)}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <span className="material-symbols-outlined">group</span>Type
                </div>
                <div className="info-value">{project.type}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <span className="material-symbols-outlined">build</span>Technical Skills
                </div>
                <div className="info-value">
                  <div className="skill-links">
                    {project.skills.map((s) => (
                      <a
                        key={s}
                        className="skill-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          navigate('/skill/' + encodeURIComponent(s))
                        }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
