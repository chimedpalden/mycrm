import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import Form from "./Form"
import interactionApi from "../apis/interaction";
import { useLocation } from 'react-router-dom'

const AddInteract = () => {
  const location = useLocation()
  const { contact_id } = location.state
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [interaction_type, setInteractionType] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleSubmit = async event => {
    // debugger
    event.preventDefault();
    console.log(interaction_type, description, contact_id)
    try {
      await interactionApi.create({ interaction_type, description, contact_id });
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
        <Form setDescription={setDescription} setInteractionType={setInteractionType} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default AddInteract;
