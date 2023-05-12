import './App.css';
import { Navbar } from './components/navbar/navbar'
import { Navroute } from './components/navroute/navroute'




function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <div className='ManiBar'>
                <Navroute />
            </div>
           

        </div>
    );
}

export default App;