import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyAmount } from "./Redux/Features/counterSlice";

const App = () => {

  const dispatch = useDispatch()  // agr value count karwani h to dispatch 
  const count = useSelector((state)=> state.counter.value)
  const [num, setNum] = useState(1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())

      }}>Increment</button>
      <button onClick={() => {
      dispatch(decrement())
      }}>Decrement</button>
      <input type="number" value ={num} onChange={(e)=>{      // here we have done the Two Way binding wherein we will take the input of the count increase and we will pass it to the below function.
          setNum(e.target.value)
      }} />
      <button onClick={()=>{
        dispatch(incrementbyAmount(Number(num)))    // Here we are providing the actions in function call since we have taken actions in the argument while creating reducer in counter slice.
      }}>Increase by {num}</button>
    </div>
  );
};

export default App;
