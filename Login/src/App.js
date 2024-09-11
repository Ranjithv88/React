import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Content/Main/Main";
import Login from "./components/Content/Login/Login";
import Register from "./components/Content/Register/Register";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Home () {
  return (
    <div className='home'>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/SignIn' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

