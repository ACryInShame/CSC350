// Louis J D'Agusto
// April 21st 2026
// Week 6 Assignment - Navigation
import { Link } from 'react-router-dom'


export default function NavBar()
{
    return(
    <div>
        <nav className="navbar bg-dark text-white text-center">
            <Link className="nav-link flex-fill" to="/">Home</Link>
            <Link className="nav-link flex-fill" to="/Info">Information</Link>
            <Link className="nav-link flex-fill" to="/Inventor">Inventor</Link>
        </nav>
    </div>
    )
}