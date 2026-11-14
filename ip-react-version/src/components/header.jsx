import { useState } from "react";


export default function Header({ onSearch }) {

const [input, setInput] = useState("");

    function handleSubmit(e) {
    e.preventDefault();
   onSearch(input)
    }

  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>

        <form id="ip-form" onSubmit={handleSubmit}>
          <label htmlFor="ip-search">IP-Address or Domain</label>
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

