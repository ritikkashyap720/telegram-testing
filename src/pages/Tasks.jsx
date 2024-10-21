import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';

function Tasks() {
    let location = useLocation();
    const [walltrek, setWalltrek] = useState(true);
    const [promo, setPromo] = useState(false);
    const [special, setSpecial] = useState(false);


    return (
        <div className="content">
            <div className='tasks'>
                <h1>15,200,100</h1>
                <div>
                    <p>More you collect coin, more you unlock</p>
                    <p> new tech, more you earn airdrop.</p>
                </div>
                <div className="taskbox">
                    <div className="taskTopNavigation">
                        <button className= {walltrek?"button":"inactive"} onClick={()=>{setWalltrek(true),setPromo(false),setSpecial(false)}}>WallTrek</button>
                        <button className={promo?"button":"inactive"} onClick={()=>{setWalltrek(false),setPromo(true),setSpecial(false)}}>Promo</button>
                        <button className={special?"button":"inactive"} onClick={()=>{setWalltrek(false),setPromo(false),setSpecial(true)}}>Special</button>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Tasks
