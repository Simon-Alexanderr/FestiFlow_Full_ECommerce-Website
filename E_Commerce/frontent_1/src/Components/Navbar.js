import React from "react";
import "../Assests/styles/all.css"
import Logo from "../Assests/images/FF_Logo.png"
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import ProfileUpdatePage from "../Pages/Profile";
function Navbar() {
    const { cartItemCount, userName, userId } = useContext(AuthContext);
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [userId, setUserId] = useState(null);
    // const [userName, setUserName] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const cartItemCount = sessionStorage.getItem("cartItemCount");
        const stateUserId = location.state && location.state.userId;
        const stateUserName = location.state && location.state.userName;
        if (token) {
            setIsLoggedIn(true);
          
        }
    }, [location.state]);

    const handleLogout = () => {
        if (userId) {
            axios
                .get(`http://127.0.0.1:8000/api/user/logout/${userId}/`)
                .then(() => {
                    console.log("Logout successful");
                    
                    setIsLoggedIn(false);
                })
                .catch((error) => {
                    console.error("Error logging out:", error);
                });
        }
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("userName");
        setIsLoggedIn(false);
    };


    const handleSearchInputChange = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.trim() !== "") {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product/`);
                const filteredProducts = response.data.filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                );
                setSearchResults(filteredProducts);
            } catch (error) {
                console.error("Error searching:", error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    return (
        <>
        <header className="top-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={Logo}
                            alt=""
                            height="100px"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="/product"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                {isLoggedIn && (
                                    <Link
                                        to="/cart"
                                        className="nav-link"
                                        tabIndex="-1"
                                        aria-disabled="true"
                                    >
                                        Cart
                                    </Link>
                                )}
                            </li>

                            <li className="nav-item">
                                {isLoggedIn && (
                                    <Link
                                        to="/cart"
                                        className="nav-link"
                                        tabIndex="-1"
                                        aria-disabled="true"
                                    >
                                        <img src='' alt="" style={{ height: "20px" }} />
                                    </Link>
                                )}
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                            />
                        </form>
                        {searchResults.length > 0 && searchQuery.trim() !== "" && (
                            <div className="search-results rs">
                                <ul className=" list-group">
                                    {searchResults.map((result) => (
                                        <li key={result.id} className="list-group-item" style={{padding:"-20px"}}>
                                            <Link to={`/dummy/${result.id}`}>
                                                <img
                                                    src={result.image}
                                                    alt=""
                                                    height={30}
                                                    className="px-2"
                                                />
                                                {result.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="p-1"></div>
                        <div className="d-flex gap-2">
                            {isLoggedIn ? (
                                <>
                                <div className="d-flex flex-column justify-content-center" style={{borderRadius:"10px",padding:"7px",border:"2px dashed darkslategray"}}>
                                <span className=" fw-bold">Welcome 
                                <a href="/user"><strong className="logInfo"> {userName}</strong></a>
                                </span>
                                </div>
                                    
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline-danger fw-bold "
                                        style={{border:"none"}}
                                    >
                                        Logout
                                    </button>
                                    <br></br>
                                    <Link to="/order" className="btn btn-outline-danger fw-bold">
                                        View Orders
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="btn btn-outline-danger fw-bold " style={{border:"none"}}>
                                        Login
                                    </Link>
                                    <Link to="/signup" className="btn btn-danger fw-bold">
                                        Sign In
                                    </Link>
                                   
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Navbar;
