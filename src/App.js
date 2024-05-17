import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  return (
    <div className="App bg-emerald-50">
      <Navbar />
      <SectionOne/>

      <SectionTwo/>

      <SectionThree/>

      <SectionFour/>

      
    </div>
  );
}

export default App;
