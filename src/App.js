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
import MyOrders from "./Pages/Myorders/MyOrders";
import Givereview from "./Pages/Givereview/Givereview";
import Payment from "./Pages/Payment/Payment";
import AuthProvider from "./Contexts/AuthProvider";
import CarDetails from './Pages/CarDetails/CarDetails';
import Checkout from "./Pages/Checkout/Checkout";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from "./Pages/AddProduct/AddProduct";
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';

function App() {
  AOS.init();
  return (
   <div>
     <AuthProvider>
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
         <PrivateRoute path="/cardetails/:Id">
           <CarDetails/>
         </PrivateRoute>
         <Route path="/checkout/:Id">
           <Checkout/>
         </Route>
         <Route path="/dashboard">
           <Dashboard/>
         </Route>
         <Route path="/myorders">
           <MyOrders/>
         </Route>
         <Route path="/givereview">
           <Givereview/>
         </Route>
         <Route path="/payment">
           <Payment/>
         </Route>
         <Route path="/products">
           <Allcar/>
         </Route>
         <Route path="/addproduct">
           <AddProduct/>
         </Route>
         <Route path="/manageorders">
           <ManageOrders/>
         </Route>
         <Route path="/manageproducts">
           <ManageProducts/>
         </Route>
         <Route path="/makeadmin">
           <MakeAdmin/>
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
    </AuthProvider>
   </div>
  );
}

export default App;
