import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to='/'>Dashboard</Link>
                        <Link className="button" to="/my-pets">My Pets</Link>
                        <Link className="button" to="/add-pet">Add Pet</Link>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li>Welcome, username!</li>
                            <li><Link to="#"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                        </ul>
                    </div>
                </section>
                <section className="navbar-anonymous">
                    <ul>
                        <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}


export default Header;

