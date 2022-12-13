import React, { useState } from 'react';
import { TextareaWrapper, Textarea } from './styled';

const InputTextArea = ({ placeholder, register, questionId }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <TextareaWrapper>
      <Textarea 
        value={value} 
        {...register(questionId.toString())}
        name={questionId.toString()}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div><strong>Shift</strong> ⇧ + <strong>Enter</strong> ↵ to make a line break</div>
    </TextareaWrapper>
  );
}

export default InputTextArea;