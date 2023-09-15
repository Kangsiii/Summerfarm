import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/WorkFarm';
import Buy from './pages/BuyFarm';
import Talk from './pages/TalkFarm';
import Policy from './pages/PolicyFarm';
import RightSidebar from './components/RightSidebar';
import Signpage from './user/Signpage';



function App() {
  return (
    <Router>
      <Header />
      <RightSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/sign" element={<Signpage />} />
         
        </Routes>
        {/* <Footer /> */}
      </Router>
  );
}

export default App;
