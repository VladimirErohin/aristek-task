import './App.scss';
import Navbar from "./components/app-bar/Navbar";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import React from "react";

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Sidebar/>
        <Main/>
    </div>
  );
}

export default App;
