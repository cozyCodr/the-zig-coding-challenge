import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './components/Movies';
import Details from './components/Details'
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App ()
{
  return (
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/m/:id/details' element={<Details />} />
    </Routes>
  )
};
