import LoginPage from './components/auth/LoginPage.jsx';
import SignupForm from './components/auth/SignupPage.jsx';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;