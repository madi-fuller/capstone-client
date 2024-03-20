import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className = "app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    <div>
    </div>
    </div>
  );
}

export default App;
