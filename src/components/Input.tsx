import React, { useState } from "react";

type InputProps = {
  value?: string;
  initValue?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  const [value, setValue] = useState(props.initValue);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return <input type="text" value={value} onChange={handleInputChange}></input>;
};
