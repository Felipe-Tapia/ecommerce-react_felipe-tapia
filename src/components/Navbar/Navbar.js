import './Navbar.css'
import {CartWidget } from './CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="header"> 
            <div className="header_container">
                <CartWidget/>
                <button>apretame</button>
                <nav className="header_navbar">
                    <p className="header_link">1</p>
                    <p className="header_link">2</p>
                    <p className="header_link">3</p>
                    <p className="header_link">4</p>
                </nav>
            </div>
        </header>
    )
}
