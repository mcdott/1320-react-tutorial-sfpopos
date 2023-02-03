import React from "react";
import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";
import data from "./sfpopos-data.json";

function POPOSList() {
  const spaces = data.map(({ title, address, hours, images }, i) => {
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
  return <div className='POPOSList'>{spaces}</div>;
}

export default POPOSList;
