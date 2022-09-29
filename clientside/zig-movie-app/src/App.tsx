import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './Movies';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';

export default function App ()
{
  return (
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  )
};
