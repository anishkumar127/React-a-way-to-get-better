import reactLogo from './assets/react.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const [countSecond, setCountSecond] = useState(0);

  const [data, setData] = useState('');

  const [isTrue, setIsTrue] = useState(true);

  const handleCount = () => {
    if (countSecond <= -5) {
      setData('no more decrease');

      setIsTrue(false);
    } else setCountSecond(countSecond - 1);
  };

  const handleCountIncrease = () => {
    if (count >= 5) {
      setData('no more increase');

      setIsTrue(false);
    } else setCount(count + 1);
  };

  // useEffect

  useEffect(() => {
    // console.log("useEffect called", "first", count, "second", countSecond);

    console.log('called for set data', data);
  }, [data]);

  return (
    <>
      <h1> counting on click</h1>

      <button onClick={handleCountIncrease}>click me </button>

      <p> see count is increasing : {isTrue ? count : data}</p>

      <button onClick={handleCount}>click me </button>

      <p> see count is decreasing : {isTrue ? countSecond : data}</p>
    </>
  );
}
