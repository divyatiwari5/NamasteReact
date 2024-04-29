import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                 className="logo"
                 src="https://img.freepik.com/premium-vector/click-food-logo-design-template_145155-4164.jpg?size=626&ext=jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;