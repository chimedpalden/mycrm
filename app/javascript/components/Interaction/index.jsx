import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import { Link } from "react-router-dom";

const ListInteract = ({contact}) => {
  const navigate = useNavigate();
  console.log(contact)

  return (
    <>
      <div className="row">
        <div className="col">
          {contact.email}
        </div>
        <div className="col">
          {contact.phone}
        </div>
        <div className="col">
          {contact.position}
        </div>
        <div className="col">
          <Link
            to="addinteract"
            state={{ contact_id: contact.id }}
            className="nav-link align-middle px-0"
          >
            Add Interact
          </Link>
        </div>
        
      </div>
      
    </>
  );
};

export default ListInteract;
