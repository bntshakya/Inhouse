import React from 'react'

export const StudentLogin = () => {
  return (
    <div>
      {/* 1.attendance
      2.courses
      3.submit hw */}
      <h3>select a course</h3>
      <label for="courses"> choose course <select name="courses" id="courses"> 
        <option>Java</option>
        <option>Rust</option>
      </select>
      </label>
      <br></br>

      attendance
      <br>
      </br>

      <label for="upload">upload homework</label><br></br>
      <input type="file" id="upload"></input>



      
    </div>
  )
}


