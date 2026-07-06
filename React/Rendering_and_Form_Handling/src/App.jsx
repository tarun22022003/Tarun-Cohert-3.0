import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Tarun",
  });

  return (
    <div>
      <h1>Count is -- {count}</h1>
      <h1>Name is --- {user.name}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <button
        onClick={() => {
          setUser({name:"Joshi"})
          // user.name = "Joshi";
          // setUser(user);
          // YE bhi name update krdeta, par isse rerender nhi mila kuyki setUSer call krke value same h but agr ham setCount call krde tav bhi app rerender hojaega aur name update hojaega!
          // iska mtlv ye h ki kisi bhi useState ko call krke dusri reference value ko update krwa sakte ho rerender krwakr!
          // // this won't update the name as user.name is a reference datatype and thus when setUser is called the user holds it's original value which do not gets updated.
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
