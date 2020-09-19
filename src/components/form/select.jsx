import React from "react";

function Select(props) {
  const {
    name,
    onChange,
    value,
    options = [],
  } = props;

  function renderOption(item, index) {
    return (
      <option
        key={ index }
        value={ item }
        selected={ value === item }
      >
        { item }
      </option>
    );
  }

  return (
    <select
      name={ name }
      onChange={onChange}
    >
      {
        options.map(renderOption)
      }
    </select>
  );

}

export default React.memo(Select);
