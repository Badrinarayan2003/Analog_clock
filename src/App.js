import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Onboarding1 from './components/Onboarding1';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';
import Login from './components/Login';
import Signup from './components/Signup';
import PostSignup from './components/PostSignup';

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Onboarding1 />} />
        <Route exact path='/onboarding2' element={<Onboarding2 />} />
        <Route exact path='/onboarding3' element={<Onboarding3 />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/postsignup' element={<PostSignup />} />
      </Routes>
    </Router>
  );
}
export default App;
