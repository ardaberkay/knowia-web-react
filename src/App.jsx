import {  } from 'react'
import './App.css'
import './index.css';
import AppRouter from './navigation/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
      <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
