
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* <Link to="/users">User</Link> */}
                {/* <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> */}

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
            </nav>
        </div>
    );
};

export default Header;