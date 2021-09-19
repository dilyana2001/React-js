import { Component } from "react";

import petsService from "../../service/petsService";

class AddPet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Black',
            description: 'This Black cat is my best friend!',
            imageURL: 'https://kittenrescue.org/wp-content/uploads/2021/08/KittenRescue_Cat_FurBall2021-scaled.jpg',
            category: ''
        }
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        petsService.addPet(formData);
        this.props.history.push('/');
    }

    render() {
        const options = [
            { label: 'Cat', value: 'Cat' },
            { label: 'Dog', value: 'Dog' },
            { label: 'Parrot', value: 'Parrot' },
            { label: 'Reptile', value: 'Reptile' },
            { label: 'Other', value: 'Other' },
        ]

        return (
            <section className="create">
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <fieldset>
                        <legend>Add new Pet</legend>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text"
                                    name="name" id="name"
                                    value={this.state.name}
                                    onChange={this.onChangeHandler.bind(this)} />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea rows="4" cols="45" type="text"
                                    name="description"
                                    id="description"
                                    value={this.state.description}
                                    onChange={this.onChangeHandler.bind(this)} >
                                </textarea>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text"
                                    name="imageURL" id="image"
                                    value={this.state.imageURL}
                                    onChange={this.onChangeHandler.bind(this)} />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="category">Category</label>
                            <span className="input">
                                <select
                                    id="category"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.onChangeHandler.bind(this)} >
                                    {options.map(x =>
                                        <option
                                            key={x.value}
                                            value={x.value}>
                                            {x.label}
                                        </option>)}
                                </select>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <input
                            className="button"
                            type="submit"
                            value="Add Pet" />
                    </fieldset>
                </form>
            </section>
        );
    }

}

export default AddPet;