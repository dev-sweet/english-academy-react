import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
             <About></About>
          </Route>
          <Route exact path="/contact">
             <Contact></Contact>
          </Route>
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        {/* footer */}
      </Router>
    </div>
  );
}

export default App;
