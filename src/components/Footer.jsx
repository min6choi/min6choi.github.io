// Site footer, identical across all pages.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="site-footer-copy">© 2026 Minsik Choi</span>
        <div className="site-footer-icons">
          <a href="https://www.linkedin.com/in/minsik-choi/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/min6choi/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:minsik617@gmail.com" aria-label="Email">
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>mail</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
