import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import { Link } from "react-router-dom";
import { either, isEmpty, isNil } from "ramda";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage";

const Contact = ({contact, customer, handleDeleteContact}) => {
  const navigate = useNavigate();
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);

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
        {isLoggedIn && <div className="col">
          <a 
            onClick={(e) => handleDeleteContact(e, customer.id, contact.id)}
            className="px-0 link-danger">
            Delete
          </a>
        </div>}
        {isLoggedIn && <div className="col">
          <Link
            to="addinteract"
            state={{ contact_id: contact.id }}
            className="nav-link align-middle px-0 link-success"
          >
            Add Interact
          </Link>
        </div>}
        {isLoggedIn && <div className="col">
          <Link
            to="listinteract"
            state={{ contact_id: contact.id }}
            className="nav-link align-middle px-0 link-primary"
          >
            View all Interact
          </Link>
        </div>}
        
      </div>
      
    </>
  );
};

export default Contact;
