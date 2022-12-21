import{
    NavLink
}from 'react-router-dom';

import "./styles.css";

export const Navbar = () => {
    return (
        <div>
            <div className='header'>
                <NavLink exact={true} to="/">
                    <h2 className='logo'>Dealerz.</h2>
                </NavLink>
            
                <p className='callcenter'>Call Center</p>
                <p className='shipping'>Shipping & Returns</p>
            </div>
        
            <div className='searchBar'>
                <p className='searchtext'>Search what you need</p>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>
                        <NavLink  to="/shop">
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        Promo
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}