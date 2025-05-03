// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from  "./components/pages/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;
