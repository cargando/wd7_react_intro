import React from "react";

const TextInput = React.forwardRef( (props, ref) => {

  const {
    name,
    onChange,
    value,
  } = props;

  return (
    <input
      name={ name }
      type="text"
      value={ value }
      onChange={ onChange }
      ref={ ref }
    />
  );
});

export default React.memo(TextInput);
