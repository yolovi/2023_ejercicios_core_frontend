import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext/UserState';
import Login from './components/Login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
