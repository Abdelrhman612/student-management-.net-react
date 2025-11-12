import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import StudentsPage from './pages/Student/StudentsPage.js'


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Student" element={<StudentsPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
