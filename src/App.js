import React from 'react'
import FirstHeader from "./header/FirstHeader";
import HeaderTwo from "./header/HeaderTwo";
import SubHeader from "./header/SubHeader";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Men from './pages/Men';
import Women from './pages/Women';
import Sweater from './pages/Sweater';
import NotFound from './pages/NotFound';
import './css-files/page.css'
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
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/sweater' element={<Sweater/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
