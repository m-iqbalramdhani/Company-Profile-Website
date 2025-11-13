import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pembinaan from './pages/Pembinaan/Pembinaan';
import Tentang from './pages/Tentang/Tentang';
import AhliK3Umum from './pages/HalamanDetail/Ahlik3Umum/Ahlik3Umum';
import AuditorSMK3 from './pages/HalamanDetail/AuditorSMK3/AuditorSMK3';
import AhliK3Elevator from './pages/HalamanDetail/AhliK3Elevator/AhliK3Elevator-Eskalator';
import OperatorElevator from './pages/HalamanDetail/OperatorElevator/OperatorElevator';
import TeknisiElevator from './pages/HalamanDetail/Teknisi-Elevator/TeknisiElevator';
import AhliK3Konstruksi from './pages/HalamanDetail/AhliK3Konstruksi/AhliK3Kontruksi';
import SupervisiK3Perancah from './pages/HalamanDetail/SupervisiK3Perancah/SupervisiK3Perancah';
import TeknisiK3Perancah from './pages/HalamanDetail/TeknisiK3Perancah/TeknisiK3Perancah';
import AhliK3Listrik from './pages/HalamanDetail/AhliK3Listrik/AhliK3Listrik';
import TeknisiListrik from './pages/HalamanDetail/TeknisiListrik/TeknisiListrik';
import HubungiKami from './pages/HubungiKami/HubungiKami';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pembinaan" element={<Pembinaan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/ahli-k3-umum" element={<AhliK3Umum />} />
        <Route path="/auditor-smk3" element={<AuditorSMK3 />} />
        <Route path="/ahli-k3-elevator" element={<AhliK3Elevator />} />
        <Route path="/operator-elevator" element={<OperatorElevator />} />
        <Route path="/teknisi-elevator" element={<TeknisiElevator />} />
        <Route path="/ahli-k3-konstruksi" element={<AhliK3Konstruksi />} />
        <Route path="/supervisi-k3-perancah" element={<SupervisiK3Perancah />} />
        <Route path="/teknisi-k3-perancah" element={<TeknisiK3Perancah />} />
        <Route path="/ahlik3listrik" element={<AhliK3Listrik />} />
        <Route path="/teknisi-listrik" element={<TeknisiListrik />} />
        <Route path="/hubungi" element={<HubungiKami />} />
        {/* <Route path="/hubungi" element={<div>Hubungi Kami Page</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;