import React, { useState } from "react";
import { RadioWrapper, CheckboxOption } from "./styled";

const Radiobox = ({ values, questionId, setValue, getValues }) => {
  const [itemChecked, setItemChecked] = useState(
    getValues(questionId.toString()) || {}
  );

  const handleChange = (option) => {
    let valueSelected = getValues(questionId.toString());
    if (!valueSelected) {
      valueSelected = {};
    }

    if (valueSelected.id === option.id) {
      setItemChecked({});
      setValue(questionId.toString(), {});
    } else {
      setItemChecked(option);
      setValue(questionId.toString(), option);
    }
  };

  return (
    <RadioWrapper>
      {values.map((val) => (
        <CheckboxOption key={val.id}>
          <span className='optionId'>{val.id}</span>
          <span className='option'>{val.label}</span>
          <input
            defaultChecked={itemChecked.id === val.id}
            onClick={() => handleChange(val)}
            type="radio"
            name={questionId}
            value={val.id}
          />
          <div></div>
        </CheckboxOption>
      ))}
    </RadioWrapper>
  );
};

export default Radiobox;
