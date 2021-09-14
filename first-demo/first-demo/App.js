import Header from './component/Header'
import Footer from './component/Footer';
import Lorem , {someValue} from './component/Lorem';
// import './App.css';


function App() {
  return (
    <div className="site-wrapper">
         <Header> Hello From Props-children! </Header>
         <main>
             <Lorem/>
             <Lorem/>
             <Lorem/>
         </main>
         <Footer />
    </div>
 
   );
}

export default App;
