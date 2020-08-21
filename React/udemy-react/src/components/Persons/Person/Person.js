import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
// import styled from "styled-components";
// import Radium from "radium";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    // const style = {
    //   '@media (min-width: 500px)': {
    //     width: '450px'
    //   }
    // };
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //   throw new Error("Something went wrong");
    // }
    console.log("[Person.js] rendering...");

    return (
      // <div className="Person" style={style}>
      // <div className={classes.Person}>
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={this.inputElementRef}
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>

      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
