import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import SearchOverlay from './components/SearchOverlay'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import SkillPage from './pages/SkillPage'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <TopBar onSearchToggle={() => setSearchOpen((o) => !o)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:slug" element={<Detail />} />
        <Route path="/skill/:name" element={<SkillPage />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}
