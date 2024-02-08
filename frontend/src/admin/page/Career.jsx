import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Career = () => {

  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.auth)

  if (!user) {
    navigate("/")
  }

  return (
    <div>
      Karier
    </div>
  )
}

export default Career
