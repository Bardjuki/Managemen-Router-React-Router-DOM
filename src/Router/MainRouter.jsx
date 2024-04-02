import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomeRouter from './HomeRouter';
import AuthenticationRouter from './AuthenticationRouter';
import UserRouter from './UserRouter';
const MainRouter = () => {
    const allRouter = [
        ...HomeRouter,
        ...AuthenticationRouter,
        ...UserRouter
    ]

  return (
    <Routes>
        {allRouter.map((item, index) => {
            return <Route key={index} path={item.path} element={item.element}></Route>
        })}
    </Routes>
  )
}

export default MainRouter