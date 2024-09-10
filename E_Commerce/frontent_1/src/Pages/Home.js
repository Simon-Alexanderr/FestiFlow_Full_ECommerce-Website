import React, { useEffect,useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import "../Assests/styles/all.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from "../Assests/images/slider-01.webp"
import slide2 from "../Assests/images/slider-02.jpg";
import slide3 from "../Assests/images/slider-03.webp";


function Home() {
  const[products, setproducts]=useState([]);
  const [error,setError]=useState(null);
  
  useEffect(() => {
    const fetchData=async()=>{
      try{
        const response = await fetch('http://127.0.0.1:8000/api/product/');
        if (!response.ok)
        {
          throw new Error('failed to fetch');
        }
        const data =await response.json();
        setproducts(data)
      }
      catch(error){
        setError(error.message);
      }
    };
    fetchData();
  },[]);
  return (
    <div>
    <Navbar />
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false" style={{maxWidth:"100%"}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" height="800px" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <div className="box pb-3">
                <h1>A Wedding?</h1>
                <h2>Share the wonderful moment with your loved ones</h2>
                <p>At the most memorable of locations</p>
                <a href="/product" className="btn btn-outline-danger">Plan</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" height="800px" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <div className="box pb-3">
                <h1>A Birthday Party?</h1>
                <h2>Have the most memorable celebration with your friends and family</h2>
                <p>Well Equipped Party Rooms</p>
                <a href="/product" className="btn btn-outline-danger">Plan</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" height="800px" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <div className="box pb-3">
                <h1>A Concert? You got it!</h1>
                <h2>Dont Worry About the space, Everybody can watch you perform!</h2>
                <p>Rock and Roll!</p>
                <a href="/product" className="btn btn-outline-danger">Plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className=" row mt-2 mb-3" >
      <h1 className="text-center my-5" style={{color:"saddlebrown",border:"1px solid slategray",maxWidth:"100%"}}>New Arrivals!</h1>
    {
      products.map((products,index)=>(
        <div className="col-md-4 px-4 pb-4 bg-dark" key={index}>
          <Card products={products}/>
        </div>
      ))
    }
    </div>
    <div className="container mt-5">
      <h2>Subscribe to Our Newsletter</h2>
      <form >
        <div className="form-group">
          <input type="email" className="form-control" id="email" placeholder="Your Email Address" required />
        </div>
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
