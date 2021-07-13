import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import AllReviews from "./Components/Reviews";
import AllCategories from "./Components/Categories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
        <Switch>
          <Route exact path="/categories">
            <AllCategories />
          </Route>
          <Route exact path="/reviews">
            <AllReviews />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

// Navbar.jsx file created before but deleted
// import { useEffect, useState } from "react";
// import { getGenres } from "../utils/api";

// const Nav = () => {
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     getGenres().then((genresFromApi) => {
//       console.log(genresFromApi);
//     });
//   }, []);
//   return <nav className="Nav">Nav bar</nav>;
// };

// export default Nav;
