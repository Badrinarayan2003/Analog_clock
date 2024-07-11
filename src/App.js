import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Onboarding1 from './components/Onboarding1';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';
import Login from './components/Login';
import Signup from './components/Signup';
import PostSignup from './components/PostSignup';
import TrackingPage from './components/TrackingPage';

import { auth } from './components/Firebase';


function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })


  return (
    <Router>

      <Routes>
        <Route exact path='/' element={user ? <Navigate to="/trackingpage" /> : <Onboarding1 />} />
        <Route exact path='/onboarding2' element={<Onboarding2 />} />
        <Route exact path='/onboarding3' element={<Onboarding3 />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/postsignup' element={<PostSignup />} />
        <Route exact path='/trackingpage' element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
