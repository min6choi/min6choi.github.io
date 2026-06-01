import { asset } from '../util'

const iconLinkStyle = {
  color: 'var(--text-primary)',
  textDecoration: 'none',
  transition: 'color .2s',
  display: 'flex',
  alignItems: 'center',
}

function hoverYellow(e) {
  e.currentTarget.style.color = 'var(--yellow-color)'
}
function hoverReset(e) {
  e.currentTarget.style.color = 'var(--text-primary)'
}

export default function About() {
  return (
    <div style={{ display: 'block', paddingTop: '52px', animation: 'fadeIn .4s ease' }}>
      <div className="about-wrapper">
        <div className="about-header">
          <img className="about-profile-img" src={asset('img/profile.png')} alt="Minsik Choi" />
          <div className="about-header-text">
            <h2>Minsik Choi</h2>
            <p>
              I spend most of my time in mountains, libraries and lakes, creating my digital
              archives of these moments.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px', marginLeft: '5px' }}>
              <a href="mailto:minsik617@gmail.com" style={iconLinkStyle} onMouseOver={hoverYellow} onMouseOut={hoverReset}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'wght' 500" }}>mail</span>
              </a>
              <a href="https://github.com/min6choi" target="_blank" rel="noreferrer" style={iconLinkStyle} onMouseOver={hoverYellow} onMouseOut={hoverReset}>
                <i className="fab fa-github" style={{ fontSize: '15px' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/minsik617/" target="_blank" rel="noreferrer" style={iconLinkStyle} onMouseOver={hoverYellow} onMouseOut={hoverReset}>
                <i className="fab fa-linkedin-in" style={{ fontSize: '15px' }}></i>
              </a>
              <a href="https://www.instagram.com/min6choi/" target="_blank" rel="noreferrer" style={iconLinkStyle} onMouseOver={hoverYellow} onMouseOut={hoverReset}>
                <i className="fab fa-instagram" style={{ fontSize: '15px' }}></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="about-divider" />

        <div className="cv-section">
          <div className="cv-section-title">Experience</div>
          <div className="cv-item">
            <div className="cv-item-date">Apr 2025 — Sep 2025<span className="cv-item-org">UN Human Rights Office</span></div>
            <div className="cv-item-content">
              <div className="cv-item-title"></div>
              <div className="cv-item-sub">Contributed to the digital transformation of library systems by implementing workflows automation and conducting an analysis for an AI-assisted topic indexing tool. Designed the Knowledge Gateway UI/UX with a user-centric, accessibility-compliant design.</div>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-date">Jul 2024 — Aug 2024<span className="cv-item-org">Beckett Digital Manuscript Project</span></div>
            <div className="cv-item-content">
              <div className="cv-item-title"></div>
              <div className="cv-item-sub">Assisted with digital archiving by structuring multilingual manuscript data through layout analysis, XML-based text integration, and standardized metadata tagging to enhance research accessibility.</div>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-date">Sep 2022 — Oct 2022<span className="cv-item-org">Il Liutaio Nel Bazaar</span></div>
            <div className="cv-item-content">
              <div className="cv-item-title"></div>
              <div className="cv-item-sub">Wrote an academic essay and reformatted it as digital knowledge-sharing content with multimedia and data visualization for publication on WordPress.</div>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <div className="cv-section-title">Education</div>
          <div className="cv-item">
            <div className="cv-item-date">2022 — 2025<span className="cv-item-org">Ca'Foscari University</span></div>
            <div className="cv-item-content">
              <div className="cv-item-title"></div>
              <div className="cv-item-sub">M.A. Digital and Public Humanities <br />110/110 cum laude</div>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-date">2017 — 2021<span className="cv-item-org">University of Seoul</span></div>
            <div className="cv-item-content">
              <div className="cv-item-title"></div>
              <div className="cv-item-sub">B.A. Philosophy</div>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <div className="cv-section-title">Skills</div>
          <div className="cv-skills-list">
            <span className="cv-skill-chip">Machine Learning</span>
            <span className="cv-skill-chip">Data Science</span>
            <span className="cv-skill-chip">UI/UX Design</span>
          </div>
        </div>
      </div>
    </div>
  )
}
