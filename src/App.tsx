import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "./pages/ListPage/ListPage";
import { CVFormPage } from "./pages/CVFormPage/CVFormPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { GoalsPage } from "./pages/GoalsPage/GoalsPage";
import { ToDoPage } from "./pages/ToDoPage/ToDoPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/cv" element={<CVFormPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/todos" element={<ToDoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
