import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store.ts'
import { Provider } from 'react-redux'
import { App } from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import { HomeScreen } from './pages/HomeScreen.tsx'
import { ProductScreen } from './pages/ProductScreen.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
    </Route>  
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
)
