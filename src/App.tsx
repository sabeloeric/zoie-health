import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from "./js/pages/recipes.tsx";
import {Fragment} from "react";
import BottomNavigation from "./js/components/bottom-navigation.tsx";
import "./scss/components/bottom-navigation.scss";

function App() {
  return (
      <Fragment>
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
