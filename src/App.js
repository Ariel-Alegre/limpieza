import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';




function App() {


  return (
    <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/Sofa & Carpet Cleaning.html' />} />
         


  
      </Routes>

    </Router>
  )
}

export default App;
