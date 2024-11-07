import FunctionText from './Components/FunctionText';
import Index from './Components/Function/Index';
import './App.css'
import {BrowserRouter,useRoutes} from 'react-router-dom'
import Fetch from './Components/Function/Fetch';
import Reducer from './Components/Function/Reducer';
import Todo from './Components/Todo/Todo';
import FormIndex from './Components/Form/Form';
import LoginIndex from './Components/Form-Controls/Login/LoginIndex'
import RegisterIndex from './Components/Form-Controls/Register/RegisterIndex';
import Comments from './Components/Custom-hooks/Comments/Comments';
import Recipe from './Components/Custom-hooks/Recipe/Recipe';
import RecipeDetails from './Components/Custom-hooks/Recipe/RecipeDetails';
import Error from './Components/NotFound/Error404';
import Layout from './Components/Page/Layout/Layout';
import Forms from './Components/react-hook-form/Forms';
import UseRefIndex from './Components/Page/Hooks/UseRefIndex.js';
import UseMemo from './Components/Page/Hooks/UseMemo.js';
import Callback from './Components/Page/Hooks/Calback.js'
import ApiIndex from './Components/api/ApiIndex.js';

function CustomRoutes() {
  return useRoutes([
    { 
      path: "/", 
      element: <FunctionText /> 
    },
    { 
      path: "/index", 
      element: <Index /> 
    },
    { 
      path: "/fetch", 
      element: <Fetch /> 
    },
    { 
      path: "/todo",
      element: <Todo /> 
    },
    { 
      path: "/form", 
      element: <FormIndex /> 
    },
    { 
      path: "/login", 
      element: <LoginIndex /> 
    },
    { 
      path: "/register",
      element: <RegisterIndex /> 
    },
    { 
      path: "/reducer", 
      element: <Reducer /> 
    },
    {
      path: "/recipe",
      element: <Layout />,
      children: [
        { path: "comments", 
          element: <Comments /> 
        },
        { 
          path: "recipe-list", 
          element: <Recipe /> 
        },
        { 
          path: "recipe-list/:id", 
          element: <RecipeDetails /> 
        }
      ]
    },
    { 
      path: "/*", 
      element: <Error /> 
    },
    { 
      path: "/react-form", 
      element: <Forms /> 
    },
    { 
      path: "/hooks", 
      element: <UseRefIndex /> 
    },
    { 
      path: "/memo-hook", 
      element: <UseMemo /> 
    },
    { 
      path: "/callback", 
      element: <Callback /> 
    },
    { 
      path: "/api-index", 
      element: <ApiIndex /> 
    }

  ]);
}


function App() {
  return (
  <BrowserRouter>
   {/* <Routes>
      <Route path="/" element={<FunctionText />} />
      <Route path="/index" element={<Index />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/form" element={<FormIndex />} />
      <Route path="/login" element={<LoginIndex />} />
      <Route path="/register" element={<RegisterIndex />} /> 
     

      <Route path="/recipe" element={<Layout />}>
       <Route path="comments" element={<Comments />} />
       <Route path="recipe-list" element={<Recipe />} /> 
       <Route path="recipe/:id" element={<RecipeDetails />} /> 
      </Route>
      <Route path="/*" element={<Error />} /> 

   </Routes> */}

   <CustomRoutes />
  </BrowserRouter>
  );
}

export default App;
