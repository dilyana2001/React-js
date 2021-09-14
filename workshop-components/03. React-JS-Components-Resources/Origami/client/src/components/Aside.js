import { useState } from 'react';
import MenuItem from './MenuItem';
import { ASIDE_MENU_ITEMS } from '../constants/asideConstants';

const Aside = ({
    onMenuItemClick
}) => {
    const [currentItem, setCurrentItem] = useState();

    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    }

    return (
        <aside className="aside">
            <ul>
                {ASIDE_MENU_ITEMS.map(x =>
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



