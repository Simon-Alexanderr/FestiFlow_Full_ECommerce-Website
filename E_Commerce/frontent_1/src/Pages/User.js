const axios = require('axios');

export const updateUserDetail = async (userId, token, userData) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/customuser/${userId}/${token}/`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user detail:', error);
        return null;
    }
}