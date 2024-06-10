import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
// import {useState} from "react";
function App() {


  return (
    <div className=" bg-cover  h-screen w-screen bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
