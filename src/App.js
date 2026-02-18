import './App.css';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Service from './components/Service';
import About from './components/about/about';
import ExoProps from './components/ExoProps';
import Effect from './components/Effect';
import EffectWithParams from './components/EffectWithParams';
import Effect_with_clean_up_function from './components/EffectWithCleanupFct';



function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <Service />

      <About name="amina" age={20} />
      <ExoProps module1={12} module2={14} />
      <Effect />
      
      <EffectWithParams />
      <Effect_with_clean_up_function />
    </div>
  );
}

export default App;
