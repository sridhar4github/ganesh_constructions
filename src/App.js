import 'bootstrap/scss/bootstrap.scss'
import './App.scss';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
// import Navbar from './Navbar';

function App() {
  return (
      <>
          {/*<Navbar />*/}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </>
  );
}

export default App;
