import React from 'react'
import "./Home.css";
import banner from './assets/bannerh.png';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img src={banner}
                    alt = "not found"/>
            </div>
        </div>
    )
}

export default Home
