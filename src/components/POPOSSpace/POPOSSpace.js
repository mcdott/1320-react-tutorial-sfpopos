import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./POPOSSpace.css";

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <article className='POPOSSpace'>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width='300'
          height='300'
          alt={`The ${name} space`}
        />
      </Link>
      <h1 className='POPOSName'>
        <Link className='POPOSSpace-title' to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='POPOSSpace-info'>
        <div className='Address'>{address}</div>
        <div className='hours'>{hours}</div>
      </div>
    </article>
  );
}

// Define the prop types for the component
POPOSSpace.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default POPOSSpace;
