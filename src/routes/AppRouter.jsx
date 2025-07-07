// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'

// Layouts y componentes comunes
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton'

// Páginas
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import About from '../pages/About'
import Agend from '../pages/Agend'
import Ocult from '../pages/Ocult'

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container flex flex-col min-h-screen">
          <Navbar />

          {/* El contenido debe crecer para ocupar el espacio disponible */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/agend" element={<Agend />} />
              <Route path="/ocult" element={<Ocult />}></Route>
            </Routes>
          </main>
          <WhatsAppFloatingButton></WhatsAppFloatingButton>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default AppRouter
