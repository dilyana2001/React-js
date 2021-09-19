import { Component } from 'react';
import CategoryNavigation from "./CategoryNavigation";
import PetCard from '../PetCard/PetCard'
import petsService from '../../service/petsService';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: ''
        }
    }

    componentDidMount() {
        petsService.getAll()
        .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevState){
        const category = this.props.match.params.category;
        if(prevState.match.params.category == category){
            return;
        }

        petsService.getAll(category)
        .then(res => this.setState({ pets: res, currentCategory:category }))
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <PetCard
                            key={x.id}
                            data={x}
                        />
                    )}
                </ul>
            </section>
        );
    }
}


export default Categories;