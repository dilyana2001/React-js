import { NavLink } from "react-router-dom";


const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/All">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>
            <style jsx>{`
           .active{
                    background-color: rgb(248, 215, 107) !important
                }`}
            </style>
        </nav>
    )
};

export default CategoryNavigation;