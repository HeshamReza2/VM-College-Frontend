import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import InstituteDashboard from './Components/Institute/InstituteDashboard';
import IntakeCapacity from './Components/IntakeCapacity';
import MeritList from './Components/MeritList';
import KnowResult from './Components/KnowResult';
import PaymentStatus from './Components/PaymentStatus';
import Login from './Components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navebar />}>
            
            {/* home page route */}
            <Route index element={<Home />} />
            <Route path='/intake-capacity' element={<IntakeCapacity />} />
            <Route path='/merit-list' element={<MeritList />} />
            <Route path='/know-your-result' element={<KnowResult />} />
            <Route path='/view-payment-status' element={<PaymentStatus />} />
            
            <Route path='/login' element={<Login />} />

            {/* institute page routes */}
            <Route path='/institute/dashboard' element={<InstituteDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
