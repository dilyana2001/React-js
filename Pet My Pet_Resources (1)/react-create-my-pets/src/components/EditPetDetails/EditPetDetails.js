import { useState, useEffect } from "react";

import petsService from "../../service/petsService";

const EditPetDetails = ({ match, history }) => {


    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(match.params.petId)
        .then(res => setPet(res))
    }, [match])

    const onEditHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        petsService.editPet(match.params.petId, formData)
            .then(()=>history.push(`/details/${match.params.petId}`))
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img
                src={pet.imageURL} /></p>
            <form onSubmit={onEditHandler}>
                <textarea
                    type="text"
                    name="description" placeholder={pet.description}></textarea>
                <button
                    className="button"> Save</button>
            </form>
        </section>
    );
}

export default EditPetDetails;










