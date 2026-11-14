import { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Main from "./components/mainInfo";
import useFetch from "./hooks/useFetch";
import "./App.css";
import { API_KEY } from "./config";



export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: ipInfo,
    loading,
    error,
  } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchTerm}`,
  );
  const mapRef = useRef(null);
  const markerRef = useRef(null); 
  useEffect(() => {
    mapRef.current = L.map("ip-map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRef.current);
    return () => mapRef.current.remove();
  }, []);

  useEffect(() => {
    if (!ipInfo) return;
    const { lat, lng } = ipInfo.location;
    mapRef.current.setView([lat, lng], 13);
    if (markerRef.current) markerRef.current.remove(); // removes the old pin
    markerRef.current = L.marker([lat, lng]).addTo(mapRef.current);
  }, [ipInfo]);
  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Main ipInfo={ipInfo} />
    </>
  );
}
