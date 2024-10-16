import React, { useContext } from 'react'

const telegramObject = window.Telegram.WebApp;

function Home() {    
    if(telegramObject.initData==""){
        console.log("you cannot access the site")
    }else{
        
        console.log("access the site")
    }
    return (
        <div>
            <pre>
                {JSON.stringify(telegramObject)}
            </pre>
            {telegramObject.initData==""?<p>you cannot access the site</p>:"Access the site"}
        </div>
    )
}

export default Home
