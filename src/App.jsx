import {Routes, Route} from 'react-router'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Walk from './pages/Walk'

import './App.css'

function App() {
    return (
        <>
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/walk" element={<Walk />} />
        </Routes>

        <Footer />
        </>
      )
    }
export default App