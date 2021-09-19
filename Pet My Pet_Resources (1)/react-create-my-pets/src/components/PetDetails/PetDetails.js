import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import petsService from "../../service/petsService";

const PetDetails = ({ match, history }) => {

    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [match]);

    const onDeleteHandler = () => {
        petsService.deletePet(match.params.petId)
            .then(() => history.push('/'));
    }

    const onPetPetClick = () => {
        petsService.petPet(match.params.petId, Number(pet.likes) + 1)
        .then(updatedPet=>{
            setPet(state=>({...state, likes: Number(updatedPet.likes)}))
        })
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <button onClick={onPetPetClick}
                className="button"><i className="fas fa-heart"></i>Pet</button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="petOwner-btns">
                <NavLink to={`/details/${pet.id}/edit`}><button
                    className="button">Edit</button></NavLink>
                <NavLink to="#"><button onClick={onDeleteHandler}
                    className="button">Delete</button></NavLink>
            </div>
        </section>
    );
}

export default PetDetails;