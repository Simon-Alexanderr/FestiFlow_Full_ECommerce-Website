
import React, { useState, useEffect } from "react";
import { removeItemFromCart, loadCart } from "./helper/Carthelper";
// import "../assets/styles/Cart.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import del from '../assets/asset_images/delete.png'

import { addItemToCart } from "./helper/Carthelper";
// import {Count,ProductCountChange} from "../Components/Count"
// import Payment from "./Payment";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import  PaymentB from "./Payment";


function Cart() {
    const { cartItemCount, updateCartItemCount } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    
    const [forceRender, setForceRender] = useState(false);
   

    useEffect(() => {
        const items = loadCart();
        setCartItems(items);
    }, [forceRender]);

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
        if (cartItemCount !== 0) {
            updateCartItemCount(cartItemCount - 1);
        }

        setForceRender(!forceRender)
    };
    console.log("cart item count ", cartItemCount);

    const handleAddToCart = (item) => {
        addItemToCart(item);
        updateCartItemCount(cartItemCount + 1);
        setForceRender(!forceRender);
    };
    
    const countchanger = () =>{
        
    }

    return (
        <>
            <Navbar  />
            <div className="container my-5">
                <h2 className="mb-4">Cart Items</h2>
                
                    <div className="row">

                        <div className="col-lg-6">
                        {cartItems.map((item, index) => (
                            <div key={index} className="col-lg-6">
                                
                                <div key={index} className="d-flex flex-wrap">
                                <div className="card mb-3" style={{ width: "18rem" }}>
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text fw-bold text-muted">RS.{item.price}</p>
                                        {/* <p className="card-text fw-bold text-muted">Qty - {item.quantity}</p><span><input type="number" className="input_number" id="productcount" value="1" style={{ width: "45px", height: "35px", paddingLeft: "10px" }} /></span> */}
                                        <div className="d-flex justify-content-center align-item-center">
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="btn btn-danger d-flex align-item-center py-3"
                                        >
                                            remove
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                        <div className="col-lg-6">
                            {cartItems.length>0?
                            (
                                <PaymentB cartItems={cartItems} />
                            ):
                            (
                                <h3>Please log in</h3>
                            )}
                        </div>
                    </div>
              
            </div>
            
                    
            <Footer />
        </>
    );
}

export default Cart;