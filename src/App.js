import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import SinglePage from './pages/singlePage/SinglePage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Alert from './components/alertMsg/Alert';
 function App() {
   return (
    <div className="App">

      <Router>
        <Header />
         <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/singlePage/:id">
            <SinglePage />
          </Route>
         </Switch>
          <Alert /> 

       </Router>

    </div>
  );
}

export default App;
