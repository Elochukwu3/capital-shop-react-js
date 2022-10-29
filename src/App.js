import React from 'react'
import FirstHeader from "./header/FirstHeader";
import HeaderTwo from "./header/HeaderTwo";
import SubHeader from "./header/SubHeader";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {

  return (
    <div className="App">
      <section>
        <FirstHeader />
        <HeaderTwo />
        <SubHeader />
      </section>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
