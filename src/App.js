import {useState} from 'react';
import './App.css';
// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.
function App() {
  const [color, setColor] = useState('red');
  // ? example 1
  const ChangeColor = () => {
    setColor('blue');
    console.log(color);
  };

  // const counter = useState(0);
  // const setCounter = useState(0);

  // const [counter, setCounter] = useState(10);
  // console.log(counter);
  // ? creating multiple UseState variable
  // const [brand, setBrand] = useState('Lamborghini');
  // const [model, setModel] = useState('Dark-riser');
  // const [year, setYear] = useState(2024);
  // const [color, setColor] = useState('black');

  // ! create using state object
  // ? example 2
  const [car, setCar] = useState({
    brand: 'Lamborghini',
    model: 'Dark-riser',
    year: 2024,
    color: 'black',
  });
  const Change = () => {
    // if you want to update the value from the state you must get the previous value using rest operator

    setCar((prev) => {
      return {...prev, color: 'red'};
    });
  };

  // ? Example 3
  const [count, setCount] = useState(0);
  const ChangeCount = () => {
    // setCount(count + 1);
    // its not work because its running state every time it acts as a Initial state
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 4);
  };
  return (
    <div className='App'>
      <h1>My favorite color is {color}</h1>
      <button onClick={ChangeColor}>Change</button>
      <hr />
      <h1 style={{marginTop: '80px'}}>my {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={Change}>Change</button>

      <hr />
      <h1 style={{marginTop: '80px'}}>Count : {count} </h1>
      <button onClick={ChangeCount}>Increase</button>
      <hr />
    </div>
  );
}

export default App;
