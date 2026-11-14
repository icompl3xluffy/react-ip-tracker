import { useState } from 'react'
import Header from './components/header';
import Main from './components/main';

import './App.css'

function App() {
  // const [ipInfo, setipInfo] = useState()
  const map = L.map('ip-map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 
  return (
    <>
      <Header/>
      <Main/>
    
    </>
  )
}

export default App
