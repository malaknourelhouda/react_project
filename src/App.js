
import './App.css';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Service from './components/Service';

import About from './components/about/about';
import exoProps from './components/ExoProps';


function App() {
  return (
    <div className="App">
      <Home/>
      <Contact/>
      <Service/>
      //
      <About name={"amina"} age={20}/>
<ExoProps module1={12} module2={14} />
    </div>
  );
}

export default App;
