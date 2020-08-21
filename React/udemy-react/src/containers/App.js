import React, {
  // useState,
  Component,
} from "react";
// import styled from "styled-components";

import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import CharComponent from './CharComponent/CharComponent';
// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';

//  WITH HOOKS
//
// const App = props =>  {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Maxnu', age: 29 },
//       { name: 'Stephanie', age: 26 },
//     ]
//   })

// const [otherState, setOtherState] = useState('some other value');
//
// const switchNameHandler = () => {
//   // console.log('Was Clicked');
//   setPersonState({
//     persons: [
//       { name: 'Maximillion', age: 28 },
//       { name: 'Maxnu', age: 29 },
//       { name: 'Stephanie', age: 27 },
//     ]
//   });
// }

// return (
//   <div className="App">
//     <h1>Yeet</h1>
//     <button onClick={switchNameHandler}>Switch name</button>
//     <Person
//       name={personState.persons[0].name}
//       age={personState.persons[0].age}/>
//     <Person
//       name={personState.persons[1].name}
//       age={personState.persons[1].age}>
//       My Hobbies: Racing</Person>
//     <Person
//       name={personState.persons[2].name}
//       age={personState.persons[2].age}/>
//   </div>
// );
//
// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[app.js] constructor");

    // Optional syntax
    //
    // this.state = {
    //   persons: [
    //     { id: 'a23', name: 'Max', age: 28 },
    //     { id: 'a24', name: 'Manu', age: 29 },
    //     { id: 'a25', name: 'Stephanie', age: 26 },
    //   ],
    //   // textInput: '',
    //   // textArr: [],
    //   // username: 'Mr. Poopy Butthole'
    // }
  }

  state = {
    persons: [
      { id: "a23", name: "Max", age: 28 },
      { id: "a24", name: "Manu", age: 29 },
      { id: "a25", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
    // textInput: '',
    // textArr: [],
    // username: 'Mr. Poopy Butthole'
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was Clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 },
  //     ]
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 27 },
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // });
  };

  // userInputHandler = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // }

  // textInputHandler = (event) => {
  //   this.setState({
  //     textInput: event.target.value,
  //     textArr: event.target.value.split('')
  //   });
  // }

  // deleteLetterHandler = (indexOfLetter) => {
  //   let newWord = this.state.textArr;
  //   newWord.splice(indexOfLetter, 1)
  //   this.setState({
  //     textInput: newWord.join(''),
  //     textArr: newWord
  //   })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
        // {/* {this.state.persons.map((person, index) => {
        //   return <Person
        //     // <ErrorBoundary key={person.id}
        //       click={() => this.deletePersonHandler(index)}
        //       name={person.name}
        //       age={person.age}
        //       key={person.id}
        //       changed={(event) => this.nameChangedHandler(event, person.id)}
        //     />;
        //     // </ErrorBoundary>
        // })} */}
        // {/* <Person
        //   name={this.state.persons[0].name}
        //   age={this.state.persons[0].age}/>
        // <Person
        //   name={this.state.persons[1].name}
        //   age={this.state.persons[1].age}
        //   click={this.switchNameHandler.bind(this, 'Max')}
        //   changed={this.nameChangedHandler}> My Hobbies: Racing</Person>
        // <Person
        //   name={this.state.persons[2].name}
        //   age={this.state.persons[2].age}/> */}
      );
    }

    // const chars = (
    //   this.state.textArr.map((letter, index) => {
    //     return <CharComponent
    //     clicked={() => this.deleteLetterHandler(index)}
    //     letter={letter}
    //     key={index} />
    // }));

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}

          {/* <UserInput changed={this.userInputHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}/> */}

          {/* <input 
          onChange={this.textInputHandler} value={this.state.textInput}/>
        <p>{this.state.textInput.length}</p>
        <ValidationComponent textInput={this.state.textInput} />
        {chars} */}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'yeet'));
  }
}

export default withClass(App, classes.App);
