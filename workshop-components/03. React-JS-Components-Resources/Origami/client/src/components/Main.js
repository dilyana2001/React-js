import Post from './Post';
import Aside from './Aside';


const Main = ({
    posts
}) => {
    console.log(posts);
    return (
        <div className="app container">
            <Aside />
            <main className="main">
                <h1>Soooooooome Heading</h1>
                <div className="posts">
                    {posts.map(x =>
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

export default Main;
