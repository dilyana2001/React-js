import { useState } from 'react';
import MenuItem from './MenuItem';
import { NAVIGATION_MENU } from '../constants';

const Aside = ({
    onMenuItemClick}
) => {
    const [currentItem, setCurrentItem] = useState();

    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    }

    return (
        <aside className="aside">
            <ul>
                {NAVIGATION_MENU.map(x =>
                    <MenuItem
                        key={x.id}
                        id={x.id}
                        isSelected={x.id == currentItem}
                        onClick={menuItemClickHandler}
                    >
                        {x.text}
                    </MenuItem>
                )}
            </ul>
        </aside>
    );
}

export default Aside;



