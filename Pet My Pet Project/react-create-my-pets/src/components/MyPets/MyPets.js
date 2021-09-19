import { useState, useEffect } from "react";


const MyPets = () => {

    const [pet, setPet] = useState({})

    // useEffect(() => {
    //     return fetch(`localhost:4400/emulators`)
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    // }, [])





    return (
        <section className="detailsMyPet">
            <h3>Koko</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> 6</p>
            <p className="img"><img src="https://www.freepngimg.com/thumb/parrot/2-parrot-png-images-download-thumb.png" /></p>
            <form action="#" method="POST">
                <textarea type="text" name="description">This is my parrot Koko</textarea>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}


export default MyPets;

