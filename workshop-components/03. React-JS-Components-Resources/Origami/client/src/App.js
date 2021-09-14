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

  render() {
    return (
      <div className="App">
        <Header />
        <Main posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default App;
