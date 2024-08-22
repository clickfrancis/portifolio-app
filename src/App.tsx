import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/index";
import { AboutPage } from "./pages/about/index";
import { CurriculumPage } from "./pages/curriculum/index";
import { ProjectsPage } from "./pages/projects/index";

const App: React.FC = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/curriculo" element={<CurriculumPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
