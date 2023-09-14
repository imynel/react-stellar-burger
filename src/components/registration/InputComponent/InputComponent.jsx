import React, { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const InputComponent = ({ placeholder, type, icon, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Input
        placeholder={placeholder}
        type={type}
        icon={icon}
        value={value}
        onChange={(e) => handleChange(e)}></Input>
    </>
  );
};
