import React, { useState } from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import data from "../../sfpopos-data.json";
import "./POPOSList.css";

function POPOSList() {
  const [query, setQuery] = useState("");

  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
      return inTitle || inAddress;
    })
    .map(({ title, address, hours, images }, i) => {
      return (
        <POPOSSpace
          id={i}
          key={title}
          name={title}
          address={address}
          hours={hours}
          image={images[0]}
          className='space'
        />
      );
    });

  return (
    <div className='POPOSList'>
      <div className='search-container'>
        <form>
          <label htmlFor='search-input' className='visually-hidden'>
            Search POPOS:
          </label>
          <input
            id='search-input'
            value={query}
            placeholder='search'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' aria-label='Submit search'>
            Submit
          </button>
        </form>
      </div>
      <section className='spaces-container' aria-labelledby='search-input'>
        {spaces}
      </section>
    </div>
  );
}

export default POPOSList;
