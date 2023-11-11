import React, { useState } from 'react'
import axios from 'axios';

export default function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup', values)
    .then(res => console.log("Sikeres Regisztráció!"))
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'> 
      <div className='bg-white p-3 rounded w-25'>
          <h2>Regisztrálj!</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                 <label htmlFor='name'><strong>Név</strong></label>
                 <input type='text' placeholder='Kérem írja be a nevét' name='name' className='form-control rounded-0' onChange={handleChange}></input>
            </div>
            <div className='mb-3'>
                 <label htmlFor='name'><strong>Email</strong></label>
                 <input type='email' placeholder='Kérem írja be az email címét' name='email' className='form-control rounded-0' onChange={handleChange}></input>
            </div>
            <div className='mb-3'>
                 <label htmlFor='name'><strong>Jelszó</strong></label>
                 <input type='password' placeholder='Kérem írja be a jelszavát' name='password' className='form-control rounded-0' onChange={handleChange}></input>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> Regisztráció </button>
            <p>Ön elfogadja feltételeinket és irányelveinket</p>
            <a to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Bejelentkezés</a>
          </form>
      </div>
    </div>
  )
}
