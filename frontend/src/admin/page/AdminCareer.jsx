import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Career from '../components/career/Career'

const AdminCareer = () => {

  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.auth)

  if (!user) {
    navigate("/")
  }

  return (
    <div>
      <Career />
      
    </div>
  )
}

export default AdminCareer
