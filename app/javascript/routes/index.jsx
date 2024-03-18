import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "../components/Customer"
import Login from "../components/Login"
import Signup from "../components/Signup"
import AddClient from "../components/Customer/Add"
import EditClient from "../components/Customer/Edit"
import AddInteract from "../components/Interaction/Add"
import ListInteract from "../components/Interaction/List"
import AddContact from "../components/Contact/Add"

export default (
  <Routes>
    <Route path="/" element={<Customer />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/addclient" element={<AddClient />} />
    <Route path="/editclient" element={<EditClient />} />
    <Route path="/addinteract" element={<AddInteract />} />
    <Route path="/listinteract" element={<ListInteract />} />
    <Route path="/addcontact" element={<AddContact />} />
  </Routes>
);
