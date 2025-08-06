import './App.css';
import { Routes, Route } from 'react-router-dom'; // ✅ only import Routes/Route here
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/register';
import AuthPage from './pages/private-route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route
        path='/profile'
        element={
          <AuthPage>
            <ProfilePage />
          </AuthPage>
        }
      />
    </Routes>
  );
}

export default App;
