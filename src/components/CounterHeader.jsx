import React from "react";

function CounterHeader (props) {

  const { cnt, name, children } = props;

  // props.children - это свойство в пропсах, которое хранит детей,
  // переданных в качестве ядра, которое нужно обернуть оборачивания
  console.log('Children = ', children);
  return (
    <div>
      {
        children('Yo!!!')
      }
      <h4>This is counter value: { cnt }, n = { name }</h4>
    </div>);
}

export default React.memo(CounterHeader);


