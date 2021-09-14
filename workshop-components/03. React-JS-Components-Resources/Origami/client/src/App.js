import { Component } from 'react';
import postService from './services/postService';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

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
    return (
      <div className="App">
        <Header />
        <Main posts={this.getPosts()} onMenuItemClick={this.onMenuItemClick.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
