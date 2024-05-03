import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import Login from './Components/Login';
import InstituteDashboard from './Components/Institute/InstituteDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navebar />}>
            
            {/* home page route */}
            <Route index element={<Home />} />
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
