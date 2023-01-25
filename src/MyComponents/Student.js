import React from 'react'

export const Student = () => {
  return (
    <div>
      <h1><center>Welcome to Student page</center></h1>
      <div className='student'> 
        <div className='registration'>
          <h1> Registration Panel</h1>
          <input type="text" placeholder='Email'></input><br></br><br></br>
          <input type="password" placeholder='Password'></input><br></br><br></br>
          <button>Register</button>
        </div>

        <div className='login'>
          <h1> Login Panel</h1>
          <input type="text" placeholder='Email'></input><br></br><br></br>
          <input type="password" placeholder='Password'></input><br></br><br></br>
          <button>Login</button>
        </div>

      </div>
    </div>
  )
}

//export default Student;
