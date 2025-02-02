import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/Companies";
import Rooms from "./components/Rooms/Rooms";
const App = () => (
  <div className="App">
    <div>
      <div className="gold-gradient" />
      <Header />
      <Hero />
    </div>
    <Companies />
    <Rooms />
  </div>
);

export default App;
