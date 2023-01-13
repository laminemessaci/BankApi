import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './navigation'

/**
 * App Page
 * @returns {JSX.Element}
 */
const App: React.FC = (): JSX.Element => {
  return (
    <main>
      <Header />
      <Navigation />
      <Footer />
    </main>
  )
}

export default App
