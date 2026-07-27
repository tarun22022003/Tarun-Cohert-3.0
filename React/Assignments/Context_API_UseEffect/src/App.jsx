import { useContext } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { ContextProvider, MyStore } from "./Context/MyContext";

const App = () => {
  let { count, setCount } = useContext(MyStore);
  console.log("App Rendering");
  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ContextProvider>
        <Home />
        <About />
      </ContextProvider>

      <Contact />
    </div>
  );
};

export default App;
