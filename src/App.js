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
import StudentDetails from './Components/StudentDetails';
import StudentsEdit from './Components/StudentsEdit';
import SabpaisaPage from './Components/SabpaisaPage';
import SabpaisaStatus from './Components/SabpaisaStatus';

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
            
            {/* student routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/student-details' element={<StudentDetails />} />
            <Route path='/student-details-edit' element={<StudentsEdit />} />

            {/* institute page routes */}
            <Route path='/institute/dashboard' element={<InstituteDashboard />} />

            {/* payment route */}
            <Route path='/payment' element={<SabpaisaPage />} />
            <Route path='/response' element={<SabpaisaStatus />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
