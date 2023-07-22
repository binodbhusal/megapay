import { Route, Routes } from 'react-router-dom';
import Business from './pages/Business';
import Personal from './pages/Personal';

const MegaRoute = () => (
  <Routes>
    <Route path="/" element={<Personal />} />
    <Route path="/business" element={<Business />} />

  </Routes>
);
export default MegaRoute;
