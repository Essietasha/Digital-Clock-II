import React from 'react'
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Welcome from './Pages/Welcome';
import LoginPage from './components/LoginPage';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<LoginPage />} /> 
      <Route path='/welcome' element={<Welcome />} /> 
    </Route>)
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;