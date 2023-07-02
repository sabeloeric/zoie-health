import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from "./js/pages/recipes.tsx";
import {Fragment} from "react";
import BottomNavigation from "./js/components/bottom-navigation.tsx";
import "./scss/components/bottom-navigation.scss";
import Menu from "./js/components/menu.tsx";

function App() {
  return (
      <Fragment>
          <Menu />
          <Router>
              <Routes>
                  <Route path="/" element={<Recipes />} />
              </Routes>
          </Router>
          <BottomNavigation />
      </Fragment>
  )
}

export default App
