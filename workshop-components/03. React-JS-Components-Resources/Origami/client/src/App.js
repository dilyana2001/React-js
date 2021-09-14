import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import postService from './services/postService';

import Main from './components/Main';
import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactUs from './components/ContactUs'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState(() => ({ posts }))
            })
    }

    onMenuItemClick(id) {
        this.setState({ selectedPost: id })
    }


    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts;
        } else {
            return [this.state.posts.find(x => x.id == this.state.selectedPost)];
        }
    }

    render() {
        console.log(this.state.posts);
        return (
            <div className="App">
                <Header />
                <div className="app container">
                    <Aside onMenuItemClick={this.onMenuItemClick.bind(this)} posts={this.getPosts()} />
                    <Switch>
                        <Route path="/" exact>
                            <Main posts={this.getPosts()} />
                        </Route>
                        <Route path="/about" component={About} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route render={() => <main className="main"><h1>Error Page</h1></main>} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
