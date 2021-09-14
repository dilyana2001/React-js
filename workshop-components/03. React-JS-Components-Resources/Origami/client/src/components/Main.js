import { Component } from 'react';
import Post from './Post';
import Aside from './Aside';


class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return  (
        <div className="app container">
            <Aside onMenuItemClick={this.props.onMenuItemClick.bind(this)} />
            <main className="main">
                <h1>Soooooooome Heading</h1>

                <div className="posts">
                    {this.props.posts.map(x =>
                        <Post
                            key={x.id}
                            content={x.content}
                            author={x.author}
                        />
                    )}
                </div>
            </main>
        </div>
    );
    }
}
export default Main;
