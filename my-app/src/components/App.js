import React from 'react';
import '../scss/App.scss';
import Header from './Header'
import Navbar from './Navbar'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <div className="app">
    <Header />
    <Navbar />
    </div>
  );
}

export default App;
