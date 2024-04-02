/* eslint-disable no-restricted-globals */
import React from 'react'
import {  useNavigate, useSearchParams, useLocation } from 'react-router-dom';
const UserSection = () => {
    const navigate = useNavigate()
    const Location = useLocation()
    console.log(location.href)
  return (
    <>
    <div>UserSection</div>
    <div onClick={() => navigate('/')}>
        link 
    </div>
    </>
  )
}

export default UserSection