import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  )
}