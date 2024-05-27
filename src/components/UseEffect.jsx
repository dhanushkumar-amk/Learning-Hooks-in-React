import React, {  useEffect,
  useState,
} from 'react'; /*          to perform side effect in your components
Fetching data from Api 
            directly updating DOM 
            timers like setInterval, setTimeout*/

const UseEffect = () => {
  /*
    syntax for use effect
    useEffect(() => {
     },[]);  */

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Dhanushkumar');

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log('Hello from useEffect');
      return () => {
        setCount(0);
        console.log('Memory cleaned');
      };
    }, 2000);
    /**
     *  arrays is empty or not but the webpage is load the use effect is called
     *  adding  empty dependency it invokes only onces he function in use effect call back function  when the component is loaded it invokes only onces  */
  }, [count, name]);
  // }, []);
  /** put variables inside the dependencies [] it invokes if every time the component will be changed    we can also add multiple variables inside the arrays*/

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '200px',
          color: 'red',
        }}>
        I have rendered {count} times
      </h1>
    </>
  );
};

export default UseEffect;
