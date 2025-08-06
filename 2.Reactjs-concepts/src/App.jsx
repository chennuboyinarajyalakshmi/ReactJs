import ClassBasedComponent from "./components/class-based-component";
import FunctionalBasedComponent from "./components/functional-based-component";
import ProductList from "./components/products/ProductList";
import { ThemeProvider } from "./components/hooks/contextapi/CreateContext";
import ThemeHome from "./components/hooks/contextapi/UseContext";
import MyclassComponentmethods from "./components/classlifecyclemethods";
import UseStateArray from "./components/hooks/useState";
import { UseEffectCounter } from './components/hooks/UseEffectCounter.jsx';
import UseReducerCounter from "./components/hooks/UseReducerCounter";
import FormComponent from "./components/form/index.jsx";
import LoginComponent from "./components/login/index.jsx";
import RegisterComponent from "./components/register/index.jsx";



function App() {
  const list=["Watch","T.V","Laptop","Fridge"]
  const name="Rajyalakshmi"
  return (
    <>
      <h1>React JS Concepts</h1>
{/*   <ClassBasedComponent />
           <FunctionalBasedComponent />   
           <MyclassComponentmethods />
           <UseStateArray/>
           <UseReducerCounter />
           <UseEffectCounter />
            <ThemeProvider>
          <ThemeHome />
          </ThemeProvider>
          <ProductList   products={list} name={name} />
          <FormComponent />

*/ }
          <div> style={{display:'flex', gap:'20px'}}
            <LoginComponent  />
            <RegisterComponent />
          </div>


          
    </>
  );
}

export default App;
