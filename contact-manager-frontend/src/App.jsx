import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import DisplayContacts from './pages/display-contacts';
import Map from './pages/map';
import Form from './pages/contact-form';

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='display' element={<DisplayContacts/>}></Route>
        <Route path='map' element={<Map/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
