import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from "./js/pages/recipes.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Recipes />} />
          </Routes>
      </Router>
  )
}

export default App
