import React from 'react';
import Sidebar from './Sidebar';
 import Profile from './Profile/Profile.jsx'
import Course from './Content/Course.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css'; 

const App = () => {
  return (
    <>   
  
    <div className="app-containeer">
      <div id='sideBar'>  
      <Sidebar/> 
      </div>
      <div className="main-content">
        <Routes>
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Course' element={<Course />}/>  
         
        </Routes>
      </div>
    </div>
    </>
  );
}            
export default App;
