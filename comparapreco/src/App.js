import React from 'react'
import './App.css';
import Topo from './componets/header.js';
import Routes from './routes/Routes';
import Footer from './componets/foooter'

function App() {
  return (
    <div>
      <Topo/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
