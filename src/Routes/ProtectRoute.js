import React from 'react'
import useAuth from '../Styles/customHooks/useAuth'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const ProtectRoute = () => {
    const { currentUser } = useAuth()
    return currentUser ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectRoute