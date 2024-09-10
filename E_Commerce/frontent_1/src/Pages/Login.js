import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import "../Assests/styles/all.css"
import Logo from "../Assests/images/FF_Logo.png"
function Login() {

    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        emailError: "",
        passwordError: ""

    });

    const { email, password, error, emailError, passwordError } = values;


    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", emailError: "", passwordError: "" });

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            setValues({
                ...values,
                emailError: "Please enter valid email."
            });
            return;
        }

        if (password.length < 3) {
            setValues({
                ...values,
                passwordError: "Please enter valid password."
            });
            return;
        }



        axios
            .post("http://127.0.0.1:8000/api/user/login/", {
                email,
                password,
            })
            .then((response) => {
                console.log("Login response:", response.data);
                if (response.data.token) {
                    console.log("Login successful");
                    const { token, user } = response.data;
                    // localStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("token", token)
                    console.log("User ID:", user.id);
                    console.log("User Name:", user.name);
                    login(token, user.id, user.name)
                    navigate("/", { state: { userId: user.id, userName: user.name } });
                } else {
                    setValues({ ...values, error: response.data.error });
                }
            })
            .catch((error) => {
                console.error("Login error:", error);
                setValues({
                    ...values,
                    error: "Something went wrong. Please try again."
                });
            });
    };

    return (
        <>

            <div className="p-5 ">
                <h2 style={{fontStyle:"italic",textAlign:"center",color:"darkgray",fontWeight:"300px"}}><big></big></h2>
                <img
                    style={{marginInline:"40%"}}
                    src={Logo}
                    alt=""
                    height="100px"
                    className="d-inline-block align-text-top"
                />
                <div className="row mx-auto mt-4 mx-5 ">
                    
                    <div className="col-6 px-4 mx-auto">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <h1 className="text-center my-5 font-italic">LOGIN</h1>
                                </div>
                                <div className="mb-3">
                                    
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={handleChange("email")}
                                        placeholder="E-mail Address"
                                    />
                                    {emailError ? (
                                        <div className="text-danger form-text">{emailError}</div>
                                    ) : (
                                        <div id="emailHelp" className="form-text">
                                            
                                        </div>
                                    )}
                                </div>



                                <div className="mb-3">
                                   
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        value={password}
                                        onChange={handleChange("password")}
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    {passwordError && <p className="text-danger">{passwordError}</p>}
                                </div>
                               
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-outline-danger w-50">
                                        Log In
                                    </button>
                                </div>
                            </form>
                            <div className="py-3">
                                <p className="text-center">New here ? <a href="/signup" className="text-danger">Sign in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;