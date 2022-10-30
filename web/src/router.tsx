import { createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/login'
import { Stock } from './pages/stock'
import { CreateProduct } from './pages/createProduct'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/product',
    element: <Stock />,
  },
  {
    path: '/product/create',
    element: <CreateProduct />
  }
])