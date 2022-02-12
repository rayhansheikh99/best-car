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
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Allcar from "./Pages/Allcar/Allcar";

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
           <Allcar/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/signup">
           <Signup/>
         </Route>
    
     
      </Switch>
      <Footer/>
     </Router>
   </div>
  );
}

export default App;
