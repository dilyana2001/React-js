import { useState } from 'react';
import MenuItem from './MenuItem';
import { NAVIGATION_MENU } from '../constants';

const Aside = () => {
        const [currentItem, setCurrentItem] = useState();
        return (
            <aside className="aside">
                <ul>
                    {NAVIGATION_MENU.map(x =>
                        <MenuItem key={x.id} id={x.id} onClick={setCurrentItem}>{x.text}</MenuItem>
                    )}
                </ul>
            </aside>
        );
}

export default Aside;



