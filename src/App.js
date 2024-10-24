import FunctionText from './Components/FunctionText';
import Index from './Components/Function/Index';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fetch from './Components/Function/Fetch';

function App() {
  return (
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<FunctionText />} />
      <Route path="/index" element={<Index />} />
      <Route path="/fetch" element={<Fetch />} />
   </Routes>
  </BrowserRouter>
  );
}

export default App;
