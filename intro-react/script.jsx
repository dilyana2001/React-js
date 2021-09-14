const domElement = document.getElementById('root');

const reactJsxElement = (
 <header>
   <h1>Hello From React JSX Element</h1>
   <h2>Hello from the best</h2>
</header> );



// const reactElement = React.createElement(
//     'header', {},
//     React.createElement('h1', {}, 'Hello from the other side'),
//     React.createElement('h2', {}, 'The best side evA!'),
// );


ReactDOM.render(reactJsxElement, domElement)



