import { Routes, Route, Navigate } from 'react-router-dom';

import Profile from './layouts/Profile';
import CustomerList from './layouts/CustomerList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerList />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
}

export default App;
