import React, {Fragment, useState, useEffect } from 'react';
import FormElements from './form';


// <React.Fragment> = <Fragment>
// React.useState() = useState();

function AppHook(props) {

  // const ms1 = useState(0);
  //
  // const handleButtonClick = (e) => {
  //   console.log('Click=', e);
  //
  //   if (e.target.value === "Increment") {
  //     ms1[1](ms1[0] + 1);
  //   } else {
  //     ms1[1](ms1[0] - 1);
  //   }
  //
  // }

  const [ counter, setCounter ] = useState(0);
  const [ vegetables, setVegetables ] = useState(['apple', 'banana', 'qiwi']);
  const [ vegetableName, setVegetableName ] = useState('');


  // useEffect(() => { // замена ComponentDidUpdate
  //   console.log("Yo!!! Произошел метод lifeCycle - ComponentDidUpdate");
  // });
  //
  // useEffect(() => { // замена ComponentDidMount
  //   console.log("Произошел метод lifeCycle - ComponentDidMount");
  //
  // }, []);

  useEffect(() => { // замена ComponentWillUnmount
    return () => {
      console.log("Произошел метод lifeCycle - ComponentWillUnmount");
    }

  }, []);



  useEffect(() => { // замена ComponentDidMount
    console.log("Произошел метод lifeCycle - ComponentDidUpdate, поменялась переменная state counter");

  }, [counter, vegetableName]);


  const handleButtonClick = (e) => {
    // console.log('Click=', e);

    if (e.target.value === "Increment") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }

  }

  const handleInputChange = (e) => {
    setVegetableName( e.target.value );
  };

  const handleAddVeggy = () => {

    vegetables.push(vegetableName);
    // const newVal = vegetables.slice();

    setVegetables([ ...vegetables ]);
    console.log('Пытаюсь добавить: ', vegetableName);
    console.log('Массив фруктов после добавления: ', vegetables);
  };


  return (
    <div>
      <h1>React Hooks</h1>
      <h3>Counter = { counter }</h3>
      <hr />
      <br />
      <input type="button" onClick={ handleButtonClick } value="Increment" />
      <br />
      <input type="button" onClick={ handleButtonClick } value="Decrement" />
      <hr />
      <h4>Vegetables = { vegetables.join(', ') }</h4>
      <br />
      <FormElements.TextInput
        name="userName"
        value={ vegetableName }
        onChange={ handleInputChange }
      />
      <input type="button" onClick={ handleAddVeggy } value="add veggy" />
    </div>
  );
}

export default AppHook;
