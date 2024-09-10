import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileUpdatePage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        dateofbirth: '',
    });
    const userId = sessionStorage.getItem('userId')
    console.log(userId,"at update profile."); 

    useEffect(() => {
        // Fetch the user's current profile data from the backend
        axios.get(`http://127.0.0.1:8000/api/user/${userId}/`)
            .then(response => {
                const userData = response.data;
                setFormData({
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone || '',
                    gender: userData.gender || '',
                    dateofbirth: userData.dateofbirth || '',
                });
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated profile data to the backend
        axios.put(`http://127.0.0.1:8000/api/user/${userId}/`, formData)
            .then(response => {
                console.log('Profile updated successfully:', response.data);
                navigate('/')
                alert("Updated successfully !!!")
                // Optionally, you could redirect the user or show a success message
            })
            .catch(error => {
                console.error('Error updating profile:', error);
                // Optionally, you could show an error message to the user
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{padding:'150px'}}>
    <form onSubmit={handleSubmit} className="bg-secondary bg-gradient p-4" style={{borderRadius:'50px',width:'50%',maxWidth:'700px',minWidth:'500px',border:'3px solid salmon'}}>
        <h2 className="text-center mb-4">Update Profile</h2>
        <div className="mb-3 d-flex align-items-center">
            <label className="me-3 mb-0">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3 d-flex align-items-center">
            <label className="me-3 mb-0">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3 d-flex align-items-center">
            <label className="me-3 mb-0">Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3 d-flex align-items-center">
            <label className="me-3 mb-0">Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
        <div>
        <label>
                    Date of Birth:
                    <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
                </label>
                </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-block">Update Profile</button>
        </div>
    </form>
</div>


    );
};

export default ProfileUpdatePage;
