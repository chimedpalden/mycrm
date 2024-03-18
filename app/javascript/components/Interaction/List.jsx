import React, { useState, useEffect } from "react";
import * as _ from 'lodash';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import interactionApi from "../apis/interaction";

const Contact = () => {
  const location = useLocation()
  const { contact_id } = location.state
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    const url = `/api/interactions/${contact_id}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => {
        console.log("response", res)
        setInteractions(res)
        // setLoading(false)
      })
      .catch(() => navigate("/"));
  }, []);

  return (
    <>
      <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <main class="py-6 bg-surface-secondary">
          <div class="container-fluid">
            <div class="card shadow border-0 mb-7">
                <div class="card-header">
                    <h5 class="mb-0">Customer List</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item pt-4 pb-4">
                    <div className="row">
                      <div className="col">
                        <b>Type</b>
                      </div>
                      <div className="col">
                        <b>Description</b>
                      </div>
                      <div className="col">
                        <b>Recording</b>
                      </div>
                    </div>
                  </li>
                  {interactions.map(interaction => {
                    return <div className="row">
                      <div className="col">
                        {interaction.interaction_type}
                      </div>
                      <div className="col">
                        {interaction.description}
                      </div>
                      <div className="col">
                        {interaction.recording}
                      </div>
                    </div>
                  })}
                </ul>
            </div>
          </div>
        </main>
      </div>



                  
        
      
    </>
  );
};

export default Contact;
