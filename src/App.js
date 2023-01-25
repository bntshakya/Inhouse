import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { Admin } from "./MyComponents/Admin";
import { Student } from "./MyComponents/Student";
import { StudentLogin } from "./MyComponents/studentlogin";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {        
  return ( 
    <> 
    <Router>
      <Header title="IN-HOUSE TRAINING MANAGEMENT SYSTEM" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            </>)
          }}> 
          </Route>

          <Route exact path="/about">
            <About />
          </Route> 

          <Route exact path="/admin">
            <Admin />
          </Route> 

          <Route exact path="/student">
            <Student/>
          </Route>

          <Route exact path="/studentlogin">
            <StudentLogin/>
          </Route>

        </Switch> 
      <Footer />
    </Router>
    </>
  );
}


export default App;

//<Route exact path="/student">
//<Student/>
//</Route>