import { useState } from 'react';
import MenuItem from './MenuItem';
import { NAVIGATION_MENU } from '../constants';

const Header = () => {
    const [currentItem, setCurrentItem] = useState();
    return (
        <header className="navigation">
            <nav>
                <ul>
                    <li className="listItem">
                        <img src="/white-origami-bird.png" alt="white origami" />
                    </li>
                    {NAVIGATION_MENU.map(x =>
                        <MenuItem key={x.id} id={x.id} onClick={setCurrentItem}>{x.text}</MenuItem>
                    )}
                </ul>
            </nav>
        </header>

    );
}

export default Header;



