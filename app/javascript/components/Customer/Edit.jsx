import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import Form from "./Form"
import customerApi from "../apis/customer";
import { useLocation } from 'react-router-dom'

const EditClient = () => {
  const location = useLocation()
  const { customer } = location.state
  const navigate = useNavigate();
  const [name, setName] = useState(customer.name);
  const [website, setWebsite] = useState(customer.website);
  const [country, setCountry] = useState(customer.country)
  const [loading, setLoading] = useState(true)

  // console.log(customer)

  const handleSubmit = async event => {
    // debugger
    event.preventDefault();
    // console.log(name, website)
    try {
      await customerApi.update(customer.id, { name, website, country });
      setLoading(false);
      navigate("/")
      history.push("/");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div>Create form
        <Form name={name} setName={setName} website={website} setWebsite={setWebsite} country={country} setCountry={setCountry} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default EditClient;
