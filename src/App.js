
import './App.css';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Service from './components/Service';

import About from './components/about/about';


function App() {
  return (
    <div className="App">
      <Home/>
      <Contact/>
      <Service/>
      //
      <About name={"amina"} age={20}/>

    </div>
  );
}

export default App;
