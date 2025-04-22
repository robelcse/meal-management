import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MemberList from './pages/members/List';
import MemberCreate from './pages/members/Create';
import DepositCreate from './pages/deposits/Create';
import DepositList from './pages/deposits/List';
import CostCreate from './pages/costs/Create';
import CostList from './pages/costs/List';

import './App.css';
import AllMemberMealCount from './pages/meals/AllMemberMealCount';
import SingleMemberMealCount from './pages/meals/SingleMemberMealCount';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/members/create" element={<MemberCreate />} />
          <Route path="/deposits" element={<DepositList />} />
          <Route path="/deposits/create" element={<DepositCreate />} />
          <Route path="/costs" element={<CostList />} />
          <Route path="/costs/create" element={<CostCreate />} />
          <Route path="/meals/count" element={<AllMemberMealCount />} />
          <Route path="/members/meal/count" element={<SingleMemberMealCount />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
