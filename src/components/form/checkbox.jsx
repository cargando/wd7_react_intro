import React from "react";

function CheckBox(props) {
  const {
    name,
    onChange,
    checked,
    text = '',
  } = props;

  return (
    <div>
      <input
        name={ name }
        type="checkbox"
        checked={ checked }
        onChange={ onChange }
        style={{display: 'inline'}}
      /> &nbsp;
      <span>{ text }, { String(checked) } </span>
    </div>
  );
}

export default React.memo(CheckBox);
