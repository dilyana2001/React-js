import { NavLink } from "react-router-dom";

const PetCard = ({ data }) => {
    return (
        <li className="otherPet">
            <h3>Name: {data.name}</h3>
            <p>Category: {data.category}</p>
            <p className="img"><img src={data.imageURL} /></p>
            <p className="description">{data.description}</p>
            <div className="pet-info">
                <NavLink to={`/details/${data.id}`}><button className="button"><i className="fas fa-heart"></i> Pet</button></NavLink>
                <span> {data.likes}</span><i className="fas fa-heart"></i>
                <NavLink to={`/details/${data.id}`}><button className="button">Details</button></NavLink>
            </div>
        </li>
    );
}
export default PetCard;