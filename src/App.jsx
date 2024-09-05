import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col min-h-screen p-2 md:p-10 md:mx-32 lg:mx-72">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
