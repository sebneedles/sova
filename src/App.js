import './App.scss';
import OnBoarding from './pages/onboarding/OnBoarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Terms from './pages/terms/Terms';
import Error from './pages/error/Error';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import DetailUser from './pages/detailUser/DetailUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<OnBoarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth-detail" element={<DetailUser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
