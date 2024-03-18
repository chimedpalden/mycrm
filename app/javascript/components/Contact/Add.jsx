import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import Form from "./Form"
import contactApi from "../apis/contact";
import { useLocation } from 'react-router-dom'

const AddContact = () => {
  const location = useLocation()
  const { customer_id } = location.state
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true)

  const handleSubmit = async event => {
    // debugger
    event.preventDefault();
    console.log(email, phone, customer_id)
    try {
      await contactApi.create({ email, phone, position, address, customer_id });
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
        <Form setEmail={setEmail} setPhone={setPhone} setPosition={setPosition} setAddress={setAddress} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default AddContact;
