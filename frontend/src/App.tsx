import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './navigation'

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Navigation />
      <Footer />
    </main>
  )
}

export default App
