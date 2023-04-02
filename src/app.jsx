import React from 'react';
import './app.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';
import PhoneBar from './components/PhoneBar/PhoneBar';

export function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <h1 className='text-7xl text-purple-600'>Hello from Tailwind</h1> */}
    <PriceList></PriceList>
    <Dashboard></Dashboard>
    <PhoneBar></PhoneBar>
    </>
  )
}
