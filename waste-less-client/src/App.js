import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WasteLog from "./pages/WasteLog/WasteLog";
import Header from "./components /Header/Header";
import RecipePage from "./pages/RecipePage/RecipePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waste-log" element={<WasteLog />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;
