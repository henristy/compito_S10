import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:comune/:lat/:lng" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
