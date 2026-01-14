import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <Link to="/">
                <button className='btn-home'><p>Home</p></button>
            </Link>
            <Link to="/Projects">
                <button className='btn-home'><p>Projects</p></button>
            </Link>
            <Link to="/About">
                <button className='btn-home'><p>About Me</p></button>
            </Link>
            {/* <div className='float-right'>
                <p>Mode</p>
            </div> */}
        </div>
    )
}