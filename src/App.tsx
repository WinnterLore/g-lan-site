import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/layout/PageTransition'
import { RouteProgressBar } from '@/components/layout/RouteProgressBar'
import { Home } from '@/pages/Home'
import { Editions } from '@/pages/Editions'
import { Sponsors } from '@/pages/Sponsors'
import { Contact } from '@/pages/Contact'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <RouteProgressBar />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/editions"
              element={
                <PageTransition>
                  <Editions />
                </PageTransition>
              }
            />
            <Route
              path="/sponsors"
              element={
                <PageTransition>
                  <Sponsors />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
