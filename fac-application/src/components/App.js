import React from 'react'
import '../scss/App.scss'
import Header from './Header'
import Navbar from './Navbar'
import Container from './Container'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App () {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Container />
      <Footer />
    </div>
  )
}

export default App
