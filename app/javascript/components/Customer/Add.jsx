import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import Form from "./Form"
import customerApi from "../apis/customer";

const AddClient = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(true)

  const handleSubmit = async event => {
    // debugger
    event.preventDefault();
    // console.log(name, website, country)
    try {
      await customerApi.create({ name, website, country });
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
        <Form setName={setName} setWebsite={setWebsite} setCountry={setCountry} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default AddClient;
