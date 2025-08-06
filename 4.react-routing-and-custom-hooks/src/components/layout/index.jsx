import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header';
//common layout through out our application
function LayOut() {
  return (
    <div>
        <Header/>
        <Outlet/> {/* Renders the matching child route of Layout Route 
     i.e recipe lsit and comment slist and recipe with id of a parent route or nothing if no child route matches */}
      
    </div>
  )
}

export default LayOut;