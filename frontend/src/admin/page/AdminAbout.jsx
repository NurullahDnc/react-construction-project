import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import About from '../components/about/About'

const AdminAbout = () => {

  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.auth)

  if (!user) {
    navigate("/")
  }

  return (
    <div>
      <About />
    </div>
  )
}

export default AdminAbout
