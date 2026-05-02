// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import { Link } from 'react-router-dom'
import Image from "../components/Image"
import UsedImage from "../assets/Controller.jpg"


export default function NavBar()
{
    return(
    <div>
        <nav className="navbar bg-dark text-white text-center" >
            <Image src={UsedImage} alt="Controller Icon" style={{ height: "1.5em" }}/>
            <Link className="nav-link flex-fill" to="/">History</Link>
            <Link className="nav-link flex-fill" to="/FavoriteGames">Favorite Games</Link>
            <Link className="nav-link flex-fill" to="/RecentGames">Recent Games</Link>
            <Link className="nav-link flex-fill" to="/Projects">My Projects</Link>
        </nav>
    </div>
    )
}