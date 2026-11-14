import { useState } from "react";
import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom"
// const [ipInfo, setipInfo] = useState(map);

export default function Header() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const [input, setInput] = useState("");

    function handleSubmit(e) {
    e.preventDefault();
    geoInfo(searchInfo.value)
    }

     function geoInfo(){
        const { searchTerm } = useParams();
        const { data, loading, error } = useFetch(
            // `https://geo.ipify.org/api/v2/country,city?apiKey=at_wCk2AU75L75m2NLBWqpta6ybD962e${searchTerm}`
        );
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!data.IpInfo) return <p>Not found.</p>;


         map.setView([ipInfo.location.lat,ipInfo.location.lng], 13)
        L.marker([ipInfo.location.lat,ipInfo.location.lng]).addTo(map)
    }

  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>

        <form id="ip-form" onSubmit={handleSubmit}>
          <label for="ip-search">IP-Address or Domain</label>
          <input
            id="ip-search"
            type="text"
            name="ip-search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for any IP address or domain"
            required
          />
          <button type="submit">&#10095;</button>
        </form>
      </header>
    </>
  );
}

