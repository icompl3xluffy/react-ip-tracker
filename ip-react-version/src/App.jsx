import { useState } from 'react'
import Header from './components/header';
import Main from './components/mainInfo';
import useFetch from './hooks/useFetch';
import './App.css'

export default function App() {
 

const mapRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
    const { data:ipInfo, loading, error } = useFetch(
            // `https://geo.ipify.org/api/v2/country,city?apiKey=at_wCk2AU75L75m2NLBWqpta6ybD962e${searchTerm}`
        );

  useEffect(() => {
  if (!ipInfo) return;   

  const map = L.map('ip-map').setView([ipInfo.location.lat, ipInfo.location.lng], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  L.marker([ipInfo.location.lat, ipInfo.location.lng]).addTo(map);

  return () => map.remove();  
}, [ipInfo]);

   
  return (
    <>
   
      <Header onSearch={setSearchTerm} />
      <Main ipInfo={ipInfo} />
    
    </>
  )
}


