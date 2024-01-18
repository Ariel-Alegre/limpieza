import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CalendarReserved from './components/Calendar/CalendarReserved';
import PanelReserved from './components/Panel/PanelReserved';
import NumberCard from './components/Panel/Card';
import Test from './components/test';
import Reserved from './components/Reserved/Reserved';

function App() {
  useEffect(() => {
    window.location.reload();
    
  }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Sofa & Carpet Cleaning.html" />} />

 {/*        <Route path="/book" element={<PanelReserved />}>
          <Route index element={<Reserved />} />
        


        </Route> */}


      {/*   <Route path='/test' element={<Test />} /> */}


      </Routes>

    </Router>
  );
}

export default App;
