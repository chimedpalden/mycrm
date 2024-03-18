import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import { Link } from "react-router-dom";
import Contact from "../Contact"
import customerApi from "../apis/customer";
import contactApi from "../apis/contact";
import { either, isEmpty, isNil } from "ramda";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage";

const Customer = () => {
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const url = "/api/customers";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => {
        // console.log(res)
        setCustomers(res)
        // setLoading(false)
      })
      .catch(() => navigate("/"));
  }, []);

  const handleDelete = async (event, id) => {
    event.preventDefault();
    // setLoading(true);
    try {
      const response = await customerApi.destroy(id);
      setCustomers(oldCustomers => {
        return oldCustomers.filter(t => t.id !== id)
      })
      // console.log(response)
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
    }
  }

  const handleDeleteContact = async (event, customer_id, contact_id) => {
    event.preventDefault();
    console.log(customer_id, contact_id)
    // setLoading(true);
    try {
      const response = await contactApi.destroy(contact_id);
      setCustomers(oldCustomers => {
        const idx =  oldCustomers.findIndex(c => c.id == customer_id)
        console.log(idx)
        const items = customers[idx].contacts.filter(cnt => cnt.id !== contact_id)
        console.log(items)
        const newState = oldCustomers;
        newState[idx].contacts = items
        return [...newState]
      })
      setLoading(false);
    } catch (error) {
      // setLoading(false);
    }
  }

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
                      <div className="col-3">
                        <b>Name</b>
                      </div>
                      <div className="col-3">
                        <b>Website</b>
                      </div>
                      <div className="col-2">
                        <b>Country</b>
                      </div>
                    </div>
                  </li>
                  {customers.map((customer, index) => {
                    return <li key={index} className="list-group-item pt-4 pb-4">
                      <div className="row">
                        <div className="col-3">
                          {customer.name}
                        </div>
                        <div className="col-3">
                          {customer.website}
                        </div>
                        <div className="col-2">
                          {customer.country}
                        </div>
                        <div className="col-2">
                          {isLoggedIn && <Link
                            to="editclient"
                            state={{ customer: customer }}
                            className="nav-link align-middle px-0 link-primary"
                          >
                            Edit
                          </Link>}
                        </div>
                        <div className="col-2">
                          {isLoggedIn && <button 
                            onClick={(e) => handleDelete(e, customer.id)}
                            data-modal-hide="popup-modal" 
                            type="button" 
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Delete
                          </button>}
                        </div>
                      </div>

                      <div className="row pt-4">
                        <div className="col-2">
                          <span className="pt-4"><b>Contacts</b></span>
                        </div>
                        <div className="col-2">
                          {isLoggedIn && <Link
                            to="addcontact"
                            state={{ customer_id: customer.id }}
                            className="nav-link align-middle link-primary"
                          >
                            Add New Contact
                          </Link>}
                        </div>
                      </div>
                        
                      <div className="col-8">
                        {customer.contacts.map(contact => {
                          return <Contact contact = {contact} customer = {customer} handleDeleteContact={handleDeleteContact} />
                        })}
                      </div>
                    </li>
                  })}
                </ul>

                <div class="card-footer border-0 py-5">
                    <span class="text-muted text-sm">Showing all customer</span>
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Customer;
