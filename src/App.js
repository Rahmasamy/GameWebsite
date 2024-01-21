
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {ContainerPage } from './components/index';
import {Header,Footer} from './sections/index';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Profile,Streams,Details,Browse } from './Pages/index';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <ContainerPage>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/profile" element={ <Profile/>}/>
        <Route path="/streams" element={ <Streams/>}/>
        <Route path="/details" element={ <Details/>}/>
        <Route path="/browse" element={ <Browse/>}/>

      </Routes>
   
    </ContainerPage>
    <Footer/>
    </Router>
   
   </>
  );
}

export default App;
