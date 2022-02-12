import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Pages/About/About';
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";

function App() {
  AOS.init();
  return (
   <div>
     <Router>
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/home">
            <Home/>
         </Route>
         <Route path="/about">
            <About/>
         </Route>
         <Route path="/contact">
           <Contact/>
         </Route>
         <Route path="/dashboard">
           <Dashboard/>
         </Route>
         <Route path="/products">
           <Products/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>
    
     
      </Switch>
      <Footer/>
     </Router>
   </div>
  );
}

export default App;
