import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Logo from "../assets/Logo.png"

const telegramObject = window.Telegram.WebApp;

function Home() {
    if (telegramObject.initData == "") {
        console.log("you cannot access the site")
        console.log(telegramObject.initData);
    } else {

        console.log("access the site")
    }
    return (
        <div className="content">
            <div className='homePage'>
                <img className='homeLogo' src={Logo} alt="Logo"/>
                <h1 className='logoText'>Wall Trek</h1>
                <div className="infoCard">
                    <p>Available Coins</p>
                    <h1>15,200,100</h1>
                    <p>Your attempts 6/6</p>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Home
