import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {logo} from './assets'
import { Home, CreatePost } from './pages'
import { Header } from './components'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header></Header>
      <main className='w-full sm:p-8 px-4 py-8 bg-[#f9fafe] min-h-[calc(100vh-73px)] mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='create-post' element={<CreatePost/>}/>
        </Routes>
      </main>
     </BrowserRouter>      
    </div>
  )
}

export default App
