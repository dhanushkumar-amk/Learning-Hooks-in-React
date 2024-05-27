import React, {useState, useEffect, useRef} from 'react';const UseRef = () => {
  //   const [count, setCount] = useState(0);
  //   const [value, setValue] = useState(0);

  /** use ref is used to react it can't be re rendered the component whenever its component is changed so wee can can't be rerender  */
  //   const count = useRef(0);

  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });

  /**  using useref  to select th dom element and modifying the dom element */
  const inputElement = useRef(0);
  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = 'orange';
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#000',
        justifyContent: 'center',

        // color: 'orange',
        // flexDirection: 'column',
      }}>
      {/* <h1>Counter</h1>

      <button
        style={{padding: '10px 20px'}}
        onClick={() => {
          setValue((prev) => prev - 1);
        }}>
        -1
      </button>
      <h1>{value}</h1>
      <button
        style={{padding: '10px 20px'}}
        onClick={() => {
          setValue((prev) => prev + 1);
        }}>
        +1
      </button>

      <h1>RENDERED COUNT :{count.current} </h1> */}

      {/* ?  another example for rerendered the dom */}
      <input
        type='text'
        ref={inputElement}
      />
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default UseRef;
