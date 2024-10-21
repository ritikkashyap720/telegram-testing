import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    let location = useLocation();

    return (
        <div className='navbar'>
            <Link style={{ color: location.pathname == "/" ? "white" : "#9D9F9F" }} to="/" className="navbaricons"><SportsEsportsIcon fontSize="large" /></Link>
            <Link style={{ color: location.pathname == "/walloffame" ? "white" : "#9D9F9F" }} to="/walloffame" className="navbaricons"><LeaderboardIcon fontSize="large" /></Link>
            <Link style={{ color: location.pathname == "/tasks" ? "white" : "#9D9F9F" }} to="/tasks" className="navbaricons"><EmojiEventsIcon fontSize="large" /></Link>
            <Link style={{ color: location.pathname == "/groups" ? "white" : "#9D9F9F" }} to="/groups" className="navbaricons"><Diversity1Icon fontSize="large" /></Link>
        </div>
    )
}

export default Navbar
