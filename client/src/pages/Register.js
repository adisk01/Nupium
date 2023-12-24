import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, Select, DatePicker, message } from "antd";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const { Option } = Select;
const Register = () => {
  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const resp = await axios.post("http://localhost:8080/api/v1/user/registereduser", values);
      console.log("Response from server:", resp);
      const { firstname, middlename, lastname, email, password } = values;

      const postData = {
        name: `${firstname} ${middlename ? middlename + ' ' : ''}${lastname}`,
        email,
        password,
      };

      const res = await axios.post("http://localhost:8080/api/v1/user/register", postData);
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="First Name" name="firstname" required>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Middle Name" name="middlename">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastname" required>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email" required>
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password" required>
            <Input type="password" />
          </Form.Item>
          <Form.Item label="Country" name="country">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Contact Number" name="contactNumber">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Program Name" name="programName" required>
            <Select placeholder="Select Program">
              <Option value="Introduction Programme">Introduction Programme [6 Hrs]</Option>
              <Option value="Diploma Programme">Diploma Programme [12 Courses]</Option>
              <Option value="Degree in Web 3">Degree in Web 3 [2 Year Duration]</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Candidate Category" name="candidateCategory" required>
            <Select placeholder="Select Category">
              <Option value="Working Professional">Working Professional</Option>
              <Option value="University Student">University Student</Option>
              <Option value="High School Student">High School Student</Option>
              <Option value="Freelancer">Freelancer</Option>
              <Option value="Graduate">Graduate</Option>
              <Option value="Tech Lover">Tech Lover</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Start Date" name="startDate" required>
            <DatePicker />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already a user? Login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;