import FunctionText from './Components/FunctionText';
import Index from './Components/Function/Index';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fetch from './Components/Function/Fetch';
import Reducer from './Components/Function/Reducer';
import Todo from './Components/Todo/Todo';
import FormIndex from './Components/Form/Form';
function App() {
  return (
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<FunctionText />} />
      <Route path="/index" element={<Index />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/form" element={<FormIndex />} />
 
   </Routes>
  </BrowserRouter>
  );
}

export default App;
