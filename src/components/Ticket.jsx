import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return(
    <div>
      <h3>{props.location} - {props.name}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  locaiton: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
