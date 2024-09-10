export const createOrder = (userId, token, orderData) => {
    const formData = new FormData();

    // Append each property from orderData to formData
    for (const key in orderData) {
        formData.append(key, orderData[key]);
    }

    // Send a POST request to the backend API endpoint
    return fetch(`http://127.0.0.1:8000/api/order/add/${userId}/${token}/`, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Check if the response is not okay
        if (!response.ok) {
            throw new Error('Failed to create order. Please try again.');
        }
        return response.json();
    })
    .then(data => {
        // Check if the response data contains an error field
        if (data && data.error) {
            throw new Error(data.error);
        }
        // Return the data if successful
        return data;
    })
    .catch(error => {
        // Handle any errors that occur during the fetch operation or error handling process
        console.error('Error creating order:', error);
        throw error;
    });
};
