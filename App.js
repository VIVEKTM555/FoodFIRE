

import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import { Header } from './component/Header';





function App() {

  return (
    <div>
  <Header />
  

  <Outlet />
 

  <Footer />
   
  </div>
  );
}

export default App;


