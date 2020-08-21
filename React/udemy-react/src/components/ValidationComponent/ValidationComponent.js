import React from 'react';

const ValidationComponent = (props) => {
  let validLength = null; 
  if(props.textInput.length >= 5) {
    validLength = (<p>Text long enough</p>);
  } else {
    validLength = (<p>Text too short</p>);
  }

  return (
    <div className="ValidationComponent">
      {validLength}
    </div>
  );
}

export default ValidationComponent;