import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import { ShowcasePage } from './Pages/ShowcasePage/ShowcasePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ShowcasePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path='*' element={<NotFoundPage />} />
      

    </Routes>
    </BrowserRouter>
  )
}

export default App
