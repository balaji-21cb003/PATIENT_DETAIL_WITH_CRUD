import './App.css';
import Homepage from './components/homepage';
import Centreofexcellence from './components/Centreofexcellence';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientdetail from './components/Patientdetail';
import EditPatient from './components/EditPatient';
import View from './components/view';

function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/centreofexcellence" element={<Centreofexcellence />} />
          <Route path="/patientdetail" element={<Patientdetail/>} />
          <Route path="/edit-user/:id" element={<EditPatient/>}/>
          <Route path="/view/:id" element={<View/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
