import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from "./js/pages/recipes.tsx";
import {Fragment} from "react";
import BottomNavigation from "./js/components/bottom-navigation.tsx";
import "./scss/components/bottom-navigation.scss";
import Menu from "./js/components/menu.tsx";
import RecipeDetails from "./js/pages/recipe-details.tsx";
import Liked from "./js/pages/liked.tsx";

function App() {
  return (
      <Fragment>
          <Router>
              <Menu />
              <Routes>
                  <Route path="/" element={<Recipes />} />
                  <Route path="/recipe/:id" element={<RecipeDetails />} />
                  <Route path="/likes" element={<Liked />} />
              </Routes>
              <BottomNavigation />
          </Router>
      </Fragment>
  )
}

export default App
