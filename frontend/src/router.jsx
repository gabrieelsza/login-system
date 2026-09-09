import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <LoginPage/>,
        errorElement: <h1> Erro </h1>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
])