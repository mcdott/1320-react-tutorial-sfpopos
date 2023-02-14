import React from "react";
import { useState } from "react";

import POPOSSpace from "../POPOSSpace/POPOSSpace";
import "./POPOSList.css";
import data from "../../sfpopos-data.json";

function POPOSList() {
  const [query, setQuery] = useState("");

  const spaces = data
    .filter((obj) => {
      // true if query is in title
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
      // true if query is in address
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
      // return true if either is true
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
        />
      );
    });
  return (
    <div className='POPOSList'>
      <form>
        <input
          value={query}
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {spaces}
    </div>
  );
}

export default POPOSList;

// function POPOSList() {
//   const spaces = data.map(({ title, address, hours, images }, i) => {
//     return (
//       <POPOSSpace
//         id={i}
//         key={title}
//         name={title}
//         address={address}
//         hours={hours}
//         image={images[0]}
//       />
//     );
//   });
//   return <div className='POPOSList'>{spaces}</div>;
// }
