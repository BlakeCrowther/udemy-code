import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   alert('Saved data to the cloud');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect'); 
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect'); 
    };
  });

  const assignClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>     
      <button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default React.memo(cockpit);