import ganeshImgBg1 from './assets/images/ganesh1-removebg-preview.png';
import 'bootstrap/scss/bootstrap.scss'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div id="raysDemoHolder">
              <div id="rays"></div>
              <img src={ganeshImgBg1} className="img-icon" alt="logo" />
          </div>
        {/*<p>
          Ganesh Constructions website coming soon...
        </p>*/}
      </header>
    </div>
  );
}

export default App;
