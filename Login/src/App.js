import NavBar from "./components/NavBar/NavBar";
import Main01 from "./components/Content/Main/Main";
import {Main02} from "./components/Content/Main/Main";
import {Main03} from "./components/Content/Main/Main";
import Login from "./components/Content/Login/Login";
import Register from "./components/Content/Register/Register";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Btn (button) {
  if (button === 1) {
    return (
      <><NavBar /><Main01 /><Footer /></>
    );
  } else if (button === 2) {
    return (
      <><NavBar /><Main02 /><Footer /></>
    );
  } else {
    return (
      <><NavBar /><Main03 /><Footer /></>
    );
  }
};

export function Home () {
  return (
    <div className="home">
      <NavBar />
      <Main01 />
      <Footer />
    </div> 
  );
}

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Btn />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/SignIn' element={<Register />} />
        <Route path='/b&w' element={<><NavBar /><Main02 /><Footer /></>} />
        <Route path='/Rainbow' element={<><NavBar /><Main03 /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

