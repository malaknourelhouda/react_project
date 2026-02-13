import './App.css';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Service from './components/Service';
import About from './components/about/about';
import ExoProps from './components/ExoProps';
import Effect from './components/Effect';

function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <Service />

      <About name="amina" age={20} />
      <ExoProps module1={12} module2={14} />
      <Effect />
    </div>
  );
}

export default App;
