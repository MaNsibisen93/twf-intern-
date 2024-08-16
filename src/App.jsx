import React from 'react';
import Sidebar from './Sidebar';
 import Profile from './Profile/Profile.jsx'
import Course from './Content/Course.jsx';
import Student from './Student.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css'; 

const App = () => {
  return (
    <>   
  
    <div className="app-containeer">
      <div id='sideeBar'>  
      <Sidebar/> 
      </div>
      <div className="main-content">
        <Routes>
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Course' element={<Course />}/>  
          <Route path='/Student' element={<Student />}/>  
         
        </Routes>
      </div>
    </div>
    </>
  );
}            
export default App;
