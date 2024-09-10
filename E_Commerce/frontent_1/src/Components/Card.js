import React from 'react';
import "../Assests/styles/Card.css";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { addItemToCart } from '../Pages/helper/Carthelper';
import { removeItemFromCart } from '../Pages/helper/Carthelper';

function Card({ products, addtoCart = true, removefromcart = false }) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { isAuthenticated, userId, cartItemCount, updateCartItemCount } = useContext(AuthContext);

    const addToCartHandler = () => {
        if (isAuthenticated) {
            addItemToCart(products, () => { });
            updateCartItemCount(cartItemCount + 1);
            console.log("Added to cart");
            setIsAddedToCart(true);
        } else {
            alert("Please login");
            console.log("Please login");
        }
    };

    const removeFromCartHandler = () => {
        removeItemFromCart(products.id);
        if (cartItemCount !== 0) {
            updateCartItemCount(cartItemCount - 1);
        }
        console.log("Product removed from cart");
        setIsAddedToCart(false);
    };

    return (
        <div className='cards'>
            <div className="card" style={{ width: "15rem", height: "400px" }}>
                <img className='p-2' src={products.image} height={150} />
                <div className="card-body">
                    <h5 className="card-title text-center">{products.name}</h5>
                    <p className="card-text">
                        {products.description}
                    </p>
                    {products.stock == 0 ? (
                        <p className="card-text text-danger">Out of Stock</p>
                    ) : (
                        <>
                            <p className="card-text">In Stock</p>
                            {!isAddedToCart && !removefromcart && (
                                <button onClick={addToCartHandler} className="btn btn-outline-danger w-100">AddToCart</button>
                            )}
                        </>
                    )}
                    {(isAddedToCart || removefromcart) && (
                        <button onClick={removeFromCartHandler} className="btn btn-outline-danger w-100">RemoveItem</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
