import React from "react"
import POPOSSpace from "./POPOSSpace"
import './POPOSList.css'

function POPOSList() {
    return (
      <div className="POPOSList">
        <POPOSSpace
        name="California Street"
        address="50 California St."
        image="50-california-st.jpg"
        />
        <POPOSSpace 
        name="Pine Place"
        address="100 Pine St."
        image="100-pine.jpg"
        />
        <POPOSSpace 
        name="California Steps"
        address="101 California St."
        image="101-california.jpg"
        />
        <POPOSSpace 
        name="Sansome Roof Garden"
        address="343 Sansome Ave."
        image="343-sansome-roof-garden.jpg"
        />
       <POPOSSpace
        name="Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="Citigroup Center"
        address="1 Sansome St."
        image="citigroup-center.jpg"
      />
      </div>
    )
  }
  
  export default POPOSList