import React, { useState } from "react";
import "./Create_Edit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPencilAlt, faTrash, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
function Create_Edit() {
  const [courses, setCourses] = useState([
    {
      name: "Full course on evolution of ancient animals",
      date: "23/3/23 - Ongoing",
      level: "Beginner",
      videos: [],
      materials: []
    },
    {
      name: "Full course on evolution of ancient animals",
      date: "23/3/23 - Ongoing",
      level: "Beginner",
      videos: [],
      materials: []
    },
    {
      name: "Full course on evolution of ancient animals",
      date: "23/3/23 - Ongoing",
      level: "Beginner",
      videos: [],
      materials: []
    },
    {
      name: "Full course on evolution of ancient animals",
      date: "23/3/23 - Ongoing",
      level: "Beginner",
      videos: [],
      materials: []
    }
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    date: "",
    level: "Beginner",
    videos: [],
    materials: []
  });

  const handleInputChange = (event) => {
    setNewCourse({
      ...newCourse,
      [event.target.name]: event.target.value
    });
  };

  const handleCreateCourse = () => {
    setCourses([
      ...courses,
      {
        ...newCourse,
        id: Math.random().toString(36).substring(2, 15)
      }
    ]);
    setNewCourse({
      name: "",
      date: "",
      level: "Beginner",
      videos: [],
      materials: []
    });
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleEditCourse = (id, updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, ...updatedCourse } : course
      )
    );
  };

  return (
    <div className="container">
      <div id="form-container">
        <div className="form-title">
          <h3>Course Name</h3>
          <FontAwesomeIcon icon={faPencilAlt} className="edit-icon" />
        </div>
        <input
          type="text"
          name="name"
          value={newCourse.name}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Full course on evolution of ancient animals"
        />

        <div className="form-row">
          <div className="form-item">
            <h3>Starting Date</h3>
            <FontAwesomeIcon icon={faCalendar} className="icon" />
          </div>
          
          <div className="form-item">
            <h3>Add Videos/ Material</h3>
            <FontAwesomeIcon icon={faBox} className="icon" />
          </div>
        </div>

        <button onClick={handleCreateCourse} className="create-button">
          Create Course
        </button>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <div className="course-title">
              <h3>{course.name}</h3>
              <div className="edit-delete-icons">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="edit-icon"
                  onClick={() => {
                    // handle edit
                  }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete-icon"
                  onClick={() => handleDeleteCourse(course.id)}
                />
              </div>
            </div>
            <p>{course.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Create_Edit;
