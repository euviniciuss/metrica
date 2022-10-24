import { createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/login'
import { Stock } from './pages/stock'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Stock />
  },
  {
    path: '/login',
    element: <Login />,
  },
])