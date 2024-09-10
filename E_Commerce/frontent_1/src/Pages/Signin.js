import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Assests/styles/all.css"
const RegistrationForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/user/',
                {
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    gender: gender,
                    date_of_birth: dateOfBirth,
                }
            );
            navigate('/login');
            console.log(response.data);

            // Redirect user to dashboard or do something else with response.data
        } catch (err) {
            console.error('Error registering user: ', err);
            setError('Error registering user. Please try again later.');
        }
    };

    return (
        <div style={{backgroundColor: "lightslategray", marginBlock: "-50px", padding: "100px",height:"600px"}}>
        <form onSubmit={handleSubmit} style={{height : "600px"}}>
            <div className='mx-auto mt-5 p-5' style={{border: "2px solid orange", backgroundColor: "whitesmoke", width: "400px", borderRadius: "50px"}}>
                <h3 className='text-center'>SignUp</h3>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
                    <div className="col-sm-9">
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
                    <div className="col-sm-9">
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-3 col-form-label">Phone:</label>
                    <div className="col-sm-9">
                        <input
                            id="phone"
                            type="text"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-3 col-form-label">Gender:</label>
                    <div className="col-sm-9">
                        <input
                            id="gender"
                            type="text"
                            className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dateOfBirth" className="col-sm-3 col-form-label">Date of Birth:</label>
                    <div className="col-sm-9">
                        <input
                            id="dateOfBirth"
                            type="text"
                            className="form-control"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>
                </div>
                {error && <div style={{color: "red"}}>{error}</div>}
                <div className="text-center">
                    <button type="submit" className="btn btn-success">Register</button>
                </div>
            </div>
        </form>
    </div>
    

    );
};

export default RegistrationForm;
