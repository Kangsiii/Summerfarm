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
import Announcement from './pages/Announcement';
import Mypage from './user/Mypage';




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
          <Route path="/Announcement" element={<Announcement/>} />
          <Route path="/mypage/:username" element={<Mypage />} />          
        </Routes>
        {/* <Footer /> */}
      </Router>
  );
}

export default App;
