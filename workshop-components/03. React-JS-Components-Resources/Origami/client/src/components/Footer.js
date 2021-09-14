import MenuItem from './MenuItem';
import { FOOTER_MENU_ITEMS } from '../constants/footerConstants';
    
const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                {FOOTER_MENU_ITEMS.map(x =>
                    <MenuItem
                        key={x.id}
                        id={x.id}
                    >
                        {x.text}
                    </MenuItem>
                )}
                <li className="listItem">
                    <img src="/blue-origami-bird-flipped.png" alt="blue origami" />
                </li>
            </ul>
            <p> Software University &copy; 20201</p>
        </footer>
    );
}

export default Footer;



