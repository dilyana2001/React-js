import { Route, Switch } from 'react-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import MyPets from './components/MyPets/MyPets';
import AddPet from './components/AddPet/AddPet';

import Demo from './components/Shared/Demo'

import './App.css';


function App() {

  console.log(process.env.NODE_ENV);
  return (
    <div className="containter">
      <Header />

      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' component={Categories} />
        <Route path='/details/:petId' exact component={PetDetails} />
        <Route path='/details/:petId/edit' component={EditPetDetails} />
        <Route path='/add-pet' component={AddPet} />
        <Route path='/my-pets' component={MyPets} />

        {/* <Route path='/demo' component={Demo} /> */}

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
