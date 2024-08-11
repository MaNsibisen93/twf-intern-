import React from 'react'
import './Course.css'
const Course = () => {
  return (
    <div className="app-container">
    <header className="app-header">
      
        <div className='head>'>
        <p>Current Courses</p>
        </div>
        <div className='head>'>
        <p>Create/Edit Courses</p>
        </div>
        <div className='head'>
        <p>Course Materials</p>
        </div>
    
    </header>
    <main className="app-main">
      <div className="course-card">
        <div className="course-image">
          <img src="https://via.placeholder.com/150" alt="Course Image" />
        </div>
        <div className="course-info">
          <h3>Full course on evolution of ancient animals</h3>
          <p>Next Class Schedule: 10:30 AM, Jul 25</p>
          <p>Total assignments: 10</p>
          <p>Enrolled: 37 Student</p>
        </div>
      </div>
      <div className="course-card">
        <div className="course-image">
          <img src="https://via.placeholder.com/150" alt="Course Image" />
        </div>
        <div className="course-info">
          <h3>Full course on evolution of ancient animals</h3>
          <p>Next Class Schedule: 10:30 AM, Jul 25</p>
          <p>Total assignments: 10</p>
          <p>Enrolled: 37 Student</p>
        </div>
      </div>
      <div className="course-card">
        <div className="course-image">
          <img src="https://via.placeholder.com/150" alt="Course Image" />
        </div>
        <div className="course-info">
          <h3>Full course on evolution of ancient animals</h3>
          <p>Next Class Schedule: 10:30 AM, Jul 25</p>
          <p>Total assignments: 10</p>
          <p>Enrolled: 37 Student</p>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Course