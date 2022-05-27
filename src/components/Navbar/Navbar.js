import './Navbar.css'

export const Navbar = () => {
    return (
        <header className="header"> 
            <div className="header_container">
                <h1 className="header_logo">Ejemplo de logo</h1>
                <button>apretame</button>
                <nav className="header_navbar">
                    <p className="header_link"></p>
                    <p className="header_link"></p>
                    <p className="header_link"></p>
                    <p className="header_link"></p>
                </nav>
                <hr/>
            </div>
        </header>
    )
}
