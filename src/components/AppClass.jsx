import React from "react";
import CounterHeader from './CounterHeader';
// import {
//   TextInput,
//   Select,
//   CheckBox,
// } from './form';

import FormElements from './form';

import logo from "../logo.svg";

class AppClass extends React.PureComponent {// классовый React-компонент

  // стейт - это переменные, которые учавствуют во внутренней логике, влияющей на перерисовку компонента
  state = { // первый вариант объявить стейт компонента
    counter: 0,
    userName: '',
    data: {
      userName: "",
      userEmail: "",
      userAgeRange: "",
      userActiveStudent: "",
    },
  };

  mailRef = React.createRef();

  // constructor(props) {
  //   super(props);
  //
  //   this.state = { // второй вариант объявить стейт компонента (через конструктор)
  //     counter: 0,
  //   }
  // }

  getSelectOptions = () => {
    return ['20-30', '30-40', '40-50', '50+'];
  }

  handleButtonClick = () => {
    console.log("Yo!!! Кликнули на баттон!");

    let { counter } = this.state;

    counter++;

    this.setState({ counter } )

  }

  handleChangeInput = (e) => {
    const { target } = e;
    this.setState({ textVal: target.value } )
  };

  handleChange = (e) => {
    const {target} = e;

    // console.log("TARGET: ", target);
    // console.log("TARGET type: ", target.type);
    // console.log("TARGET checked: ", target.checked);
    // console.log("TARGET value: ", target.value);

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target; // -> "userName"

    // this.setState({ [name]: value } ); // 1й вариант работы сетстейта - принимает объект

    // this.setState((prevState) => {
    //   return {
    //     data: {
    //       ...prevState.data,
    //       // userName -> старое значение
    //       // userAgeRange -> старое значение
    //       // userActiveStudent -> старое значение
    //       [name]: value,
    //       // userName: 'sdfsdf' -> новое значение
    //     },
    //   }
    // }); // 2й вариант работы сетстейта - принимает callback
    // колбэк должен вернуть объект JS, поля которого будет помещены в state

    // this.setState({ [name]: value }, callback ); // 3й вариант работы сетстейта - принимает объект
    // this.setState({ [name]: value }, () =>
    //  console.log('Только что поменялся стейт, вот его новое значение', this.state)
    // }


    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }));
  };

  componentDidMount() {
    if (this.mailRef && this.mailRef.current) {
      this.mailRef.current.focus();
    }
  }

  render() {

    const { TextInput } = FormElements;


    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1>Class-based component</h1>

          { /* <CounterHeader cnt={ this.state.counter } name="Some React name" /> */ }

          <CounterHeader cnt={ this.state.counter } name="Some React name">
            {
              (someVal) => {
                const smallImgStyle = { width: '100px' };

                return (
                  <React.Fragment>
                    ПРИВЕТ МИР!!! - { this.state.counter } это строка-ребенок от родителя { someVal }
                    <img src={ logo } className="App-logo" alt="logo" style={ smallImgStyle } />
                  </React.Fragment>
                )
              }
            }
          </CounterHeader>

          <TextInput
            name="userName"
            value={ this.state.data.userName }
            onChange={ this.handleChange }
          />
          <br />
          <TextInput
            name="userEmail"
            value={ this.state.data.userEmail }
            onChange={ this.handleChange }
            ref={ this.mailRef }
          />
          <br />
          <FormElements.Select
            name="userAgeRange"
            value={ this.state.data.userAgeRange }
            onChange={ this.handleChange }
            options={ this.getSelectOptions() }
          />
          <br />
          <FormElements.CheckBox
            name="userActiveStudent"
            checked={ this.state.data.userActiveStudent }
            onChange={ this.handleChange }
            text="Студент отчислен"
          />
          <br />
          <input type="button" onClick={ this.handleButtonClick } value="Increment" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppClass;
