import HomePage from './components/HomePage/HomePage';
import Categories from "./components/Categories"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (<>
    
    <Router>
      <Routes>
        {/* HomePage route */}
              
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        
      </Routes>
    </Router>
</>);
}

export default App;
