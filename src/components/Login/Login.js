import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Container } from "react-bootstrap";
import validation from "./Validatiom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ Validation }) {
  const notify = () =>
    toast.success("Login successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values));
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.name !== "" &&
      values.password !== ""
    ) {
      // alert("Form Submitted");
      notify();
    }
  }, [errors, values.name, values.password]);
  //setValues();
  return (
    <div className="wrap text-center">
      <Container className="all-login mt-5 mb-5">
        <div>
          <img
            className="img-login"
            src="https://media.giphy.com/media/jqAqG0kwZpTHUIqRJq/giphy.gif"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-3 ms-5 form-login">
          <div>
            <h2 className="fw-bold">LOGIN FORM</h2>
          </div>
          <div className="content-login">
            <div className="content-user mt-2">
              <label className=" label-content">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="login-input"
              />
              {errors.name && (
                <p style={{ color: "red", fontSize: "16px" }}>{errors.name}</p>
              )}
            </div>
            <div className="content-user mt-2">
              <label className=" label-content">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="login-input"
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "16px" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <button className="button1" type="submit">
              Login
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />

            <div>
              <input type="checkbox" /> Remember me
            </div>
          </div>

          <div className="content-login-bottom">
            <span className="pass">Forgot Password?</span>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;
