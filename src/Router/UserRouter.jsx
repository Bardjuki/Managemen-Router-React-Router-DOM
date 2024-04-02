import React from 'react'
import UserSection from '../Pages/User/UserSection'

const UserRouter = [
    {
        path: '/user/:id',
        element: <UserSection/>
    }
]

export default UserRouter