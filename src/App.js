import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './common/Header/Header';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';
import Home from './pages/Home/Home';
import PageCategory from './pages/Category/PageCategory';

function App() {

  return (
    <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<PageCategory />} />
          </Routes>
          <div className='mobile_item'>
            <MobileNav  />
          </div>
          <Footer />
    </Router>
  );
}

export default App;
