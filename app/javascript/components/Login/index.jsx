import React, { useState } from "react";

import LoginForm from "./Form";
import authApi from "../apis/auth";
import { setAuthHeaders } from "../apis/axios";
import { setToLocalStorage } from "../utils/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await authApi.login({ email, password });
      console.log(response)
      setToLocalStorage({
        authToken: response.data.authentication_token,
        email: email.toLowerCase(),
        userId: response.data.id,
        userName: response.data.username,
        currentOrder: response.data.current_order,
      });
      setAuthHeaders();
      setLoading(false);
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <LoginForm
      setEmail={setEmail}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;