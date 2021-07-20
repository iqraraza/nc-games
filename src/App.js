import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import AllReviews from "./Components/Reviews";
import AllCategories from "./Components/Categories";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Body />
        <Switch>
          <Route exact path="/categories">
            <AllCategories />
          </Route>
          <Route exact path="/reviews">
            <AllReviews />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
