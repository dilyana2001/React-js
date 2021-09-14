import { useState } from 'react';
import MenuItem from '../src/components/MenuItem';
import { NAVIGATION_MENU } from '../src/constants';

const Menu = () => {
        const [currentItem, setCurrentItem] = useState();
        return (
            <aside className="navigation">
                <ul>
                    {NAVIGATION_MENU.map(x =>
                        <MenuItem key={x.id} id={x.id} onClick={setCurrentItem}>{x.text}</MenuItem>
                    )}
                </ul>
            </aside>
        );
}

export default Menu;



