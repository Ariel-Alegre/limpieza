import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Redirigir a la ruta deseada
    window.location.href = '/Sofa & Carpet Cleaning.html';
  }, []);

  return (
    <Router>
      <Routes>
        {/* Ruta de inicio */}
        <Route path='/' element={<Navigate to='/Sofa & Carpet Cleaning.html' />} />
      </Routes>
    </Router>
  );
}

export default App;
