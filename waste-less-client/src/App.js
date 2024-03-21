import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import WasteLog from './pages/WasteLog/WasteLog';
import Header from './components /Header/Header';




function App() {
  return (
    <div className = "app">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/waste-log" element={<WasteLog />}/>
      </Routes>
    </BrowserRouter>
    <div>
    </div>
    </div>
  );
}

export default App;
