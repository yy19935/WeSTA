import React from 'react'
import Nav from './component/Nav'
import Main from './pages/Main';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>

    </div>
  )
}

export function App() {



  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path='main' element={<Main />} />
          <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
