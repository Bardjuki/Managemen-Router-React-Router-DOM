import React from 'react'
import LoginPage from '../Pages/Authentication/LoginPage'
import NoAccessPage from '../Pages/Authentication/NoAccessPage'

const AuthenticationRouter = [
    {
        path: '/login',
        element: <LoginPage/>
      },
    
      {
        path: '/no-access',
        element: <NoAccessPage/>
      },
]

export default AuthenticationRouter