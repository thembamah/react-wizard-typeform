import React from "react";
import {
  Radiobox,
  Checkbox,
  Select,
  InputText,
  TextArea,
} from "app/form-builder/form-types";

import { QuestionWrapper, AnswersWrapper, QuestionTitle } from "./styled";
import { Okbutton } from 'app/form-builder/form-components';

const Question = ({
  content,
  title,
  control,
  register,
  setValue,
  getValues,
  questionId,
  onNextStep,
  hideNextButton,
  nextOnClick
}) => {

  const formType = (item) => {
    switch (item.type) {
      case "radiobox":
        return (
          <Radiobox
            control={control}
            getValues={getValues}
            setValue={setValue}
            questionId={questionId}
            values={item.values}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            control={control}
            getValues={getValues}
            setValue={setValue}
            questionId={questionId}
            values={item.values}
          />
        );
      case "select":
        return (
          <Select
            control={control}
            getValues={getValues}
            setValue={setValue}
            questionId={questionId}
            values={item.values}
          />
        );
      case "input":
        return (
          <InputText
            register={register}
            questionId={questionId}
            placeholder={item.placeholder}
          />
        );
      case "textarea":
        return (
          <TextArea
            register={register}
            questionId={questionId}
            placeholder={item.placeholder}
          />
        );
      default:
        break;
    }
  };

  return (
    <QuestionWrapper>
      <QuestionTitle>
        <span>
          {questionId}
          <svg height="10" width="11"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>
        </span>
        {title}
      </QuestionTitle>
      <AnswersWrapper onClick={nextOnClick ? onNextStep : undefined}>
        {content.map((item, index) => (
          <div key={index}>{formType(item)}</div>
        ))}
      </AnswersWrapper>
      {!hideNextButton && <Okbutton onClick={onNextStep}>Ok</Okbutton>}

    </QuestionWrapper>
  );
};

export default Question;

