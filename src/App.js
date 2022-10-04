import logo from './logo.svg';
import './App.css';

// import Sidebar from "./components/Sidebar";
// import MainContent from './components/MainContent';

import { Sidebar, MainContent } from "./components";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
