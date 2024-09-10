import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar";

const OrderDetailsPage = () => {
    const [orders, setOrders] = useState([]);
    const userId = sessionStorage.getItem('userId'); // Assuming you store userId in sessionStorage after login

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/order/');
                const userOrders = response.data.filter(order => order.user === parseInt(userId));
                setOrders(userOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    return (
        <div>
            <Navbar />
            <h1 className='text-center'>Order Details</h1>
            <div className='bg-light w-100 mt-5 d-flex justify-between' style={{"width":'400px'}}>
            <ul style={{"listStyle":'none',display:"grid"}}>
                <li className='text-center'><h5>Your Orders :</h5></li>
                {orders.map(order => (
                    <li key={order.id} className='mt-3 justify-center bg-white p-4' style={{borderRadius:"30px",border:"2px solid salmon"}}>
                        <strong>Transaction ID:</strong> {order.transaction_id}<br />
                        <br/>
                        <strong>Products:</strong> {order.total_products}<br />
                        <strong>Total Products:</strong> {order.total_products}<br />
                        
                        <strong>Total Amount:</strong> {order.total_amount} USD<br />
                        <strong>Purchased on:</strong> {order.updated_at}<br />
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
