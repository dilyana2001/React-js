import { Component } from 'react';
import Post from './Post';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
                <h1>Soooooooome Heading</h1>

                <div className="posts">
                    {this.props.posts.map(x =>
                        <Post
                            key={x.id}
                            title={x.title}
                            content={x.content}
                            author={x.author}
                        />
                    )}
                </div>
            </main>
        );
    }
}
export default Main;
