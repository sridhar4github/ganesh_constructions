import 'bootstrap/scss/bootstrap.scss'
import './App.scss';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
      <div className="app-wrapper">
          <Navbar />
          <div className="app-container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contacts" element={<Contacts />} />
              </Routes>
          </div>
          <Footer />
      </div>
  );
}

export default App;
