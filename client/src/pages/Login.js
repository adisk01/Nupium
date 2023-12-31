import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/login", values);
      console.log("Response from server:", res.data); // Log the response for debugging

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error); // Log the error for debugging
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <img

        src="./images/nupiumlogo.jpeg"  // Replace with the path to your photo
        alt="Profile Photo"
        style={{ height: '80px', width: '80px' }}
      />
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h3 className="text-center">Login From</h3>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;

