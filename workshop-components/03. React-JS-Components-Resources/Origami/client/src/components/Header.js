import MenuItem from './MenuItem';
import { HEADER_MENU_ITEMS } from '../constants/headerConstants';
import { Link } from 'react-router-dom';

const Header = (
) => {
    return (
        <header className="navigation">
            <nav>
                <ul>
                    <li className="listItem">
                        <img src="/white-origami-bird.png" alt="white origami" />
                    </li>
                    {HEADER_MENU_ITEMS.map(x =>
                    <Link className="listItem" to={x.goto}>
                    <MenuItem
                            key={x.id}
                            id={x.id}
                        >
                            {x.text}
                        </MenuItem>
                    </Link>
                        
                    )}
                </ul>
            </nav>
        </header>

    );
}

export default Header;



