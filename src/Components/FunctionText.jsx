import React from 'react';
import Index from './Class';
import Text from './Function/Context/Text';
import Button from './Function/Context/Button';
const FunctionText = ({ name, city }) => {
  const flag = true;

//   const functionTextBlock = (getFlag) => {
//     return getFlag ? <h4>Name is {name}, city is {city}</h4> : <h4>Hello world</h4>;
//   };


const functionTextBlock = flag ? <h4>Name is {name}, city is {city}</h4> : <h4>Hello world</h4>;
  return (
    <>
    <div>
      {functionTextBlock}
      </div>
      <Index />
      <Text />
      <Button />
    </>
  );
};

export default FunctionText;
