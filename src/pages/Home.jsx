import React, { useContext } from 'react'
import Navbar from '../components/Navbar';

const telegramObject = window.Telegram.WebApp;

function Home() {    
    if(telegramObject.initData==""){
        console.log("you cannot access the site")
    }else{
        
        console.log("access the site")
    }
    return (
        <div className='parent'>
            <div className="appBody">
            <Navbar/>
            </div>
        </div>
    )
}

export default Home
