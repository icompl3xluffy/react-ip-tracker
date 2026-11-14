import { useState } from 'react'
import Header from './components/header';
import Main from './components/mainInfo';
import useFetch from './hooks/useFetch';
import './App.css'

export default function App() {
 

const mapRef = useRef(null);

  // makes the map one time, after the page is drawn
  useEffect(() => {
    mapRef.current = L.map('ip-map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapRef.current);
    return () => mapRef.current.remove();
  }, []);

  // moves the map when the data arrives
  useEffect(() => {
    if (!ipInfo) return;
    mapRef.current.setView([ipInfo.location.lat, ipInfo.location.lng], 13);
    L.marker([ipInfo.location.lat, ipInfo.location.lng]).addTo(mapRef.current);
  }, [ipInfo]);

     const [searchTerm, setSearchTerm] = useState("");
     const { data, loading, error } = useFetch(
            // `https://geo.ipify.org/api/v2/country,city?apiKey=at_wCk2AU75L75m2NLBWqpta6ybD962e${searchTerm}`
        );

  return (
    <>
   
      <Header onSearch={setSearchTerm} />
      <Main ipInfo={ipInfo} />
    
    </>
  )
}


