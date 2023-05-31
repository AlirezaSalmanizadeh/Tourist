import './App.css';
import { Navbar } from './components/navbar/navbar'
import { Navroute } from './components/navroute/navroute'
import { Footer } from './components/footer/footer';
import image1 from "./asset/image/arrow-right-svgrepo-com (1).svg"



function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <div className='ManiBar'>
                <Navroute />
            </div>
            <Footer/>
            <a className='Top' href='#'><img src={image1} alt='Not Load'/></a>
        </div>
    );
}

export default App;