import React, { useState, useEffect, useRef } from "react";
import { FormBuilderWrapper, StepWrapper, ArrowsWrapper, ArrowsButton } from "./styled";
import { Section, Question } from "./form-sections";
import { useForm } from "react-hook-form";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const FormBuilder = () => {

  const { register, control, reset, setValue, getValues } = useForm();
  const [currentIndexForm, setCurrentIndexForm] = useState(0);
  const [classNameState, setClassNameState] = useState("fade");
  const [dynamicBlocks, setDynamicBlocks] = React.useState([
    {
      id: 1,
      type: 'section',
      content: [
        {
          type: 'text',
          value: "“Hello. We are Prothek.”",
        }
      ]
    },
    {
      id: 2,
      question_id: 1,
      type: 'question',
      title: "What can we help you with today?",
      subtitle: '',
      hide_ok_button: true,
      next_on_click: true,
      content: [
        {
          type: 'radiobox',
          values: [
            {
              id: 'A',
              label: "I'm interested in your services",
              value: "services"
            },
            {
              id: 'B',
              label: "I want to send a message",
              value: "sendmessage"
            },
            {
              id: 'C',
              label: "I need support",
              value: "support"
            }
          ]
        },
      ]
    }
  ]
  );

  const values = getValues();
  const fieldAnswer = values[1]?.value

  const nextBtn= useRef(null);
  const handleClick = () => {
    nextBtn.current.click();
   }

  useEffect(() => {

    const services = [
      {
        id: 3,
        question_id: 2,
        type: 'question',
        title: "Great! Which services are you intrested in?",
        subtitle: '',
        content: [
          {
            type: 'checkbox',
            values: [
              {
                id: 'A',
                label: "Procument",
                value: "procument"
              },
              {
                id: 'B',
                label: "Patient Ordering",
                value: "patientordering"
              },
              {
                id: 'C',
                label: "Point of sale",
                value: "pos"
              }
            ],
          },
        ]
      },
      {
        id: 4,
        question_id: 3,
        type: 'question',
        title: "What is your companies name?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          },
        ]
      },
      {
        id: 5,
        question_id: 4,
        type: 'question',
        title: "What is your name?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          },
        ]
      },
      {
        id: 6,
        question_id: 5,
        type: 'question',
        title: "What is your email address?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          },
        ]
      },
      {
        id: 7,
        type: 'section',
        should_save: true,
        hide_next_button: true,
        hide_arrows: true,
        content: [
          {
            type: 'text',
            value: 'Thank you for your interest in our services.',
          },
          {
            type: 'text',
            value: 'We will be in touch soon!',
          }
        ]
      }
    ]
  
    const sendmessage = [
      {
        id: 3,
        question_id: 2,
        type: 'question',
        title: "What is your name?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          },
        ]
      },
      {
        id: 4,
        question_id: 3,
        type: 'question',
        title: "What is your email address?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          },
        ]
      },
      {
        id: 5,
        question_id: 4,
        type: 'question',
        title: "Please type your message below",
        subtitle: '',
        content: [
          {
            type: 'textarea',
            placeholder: ''
          },
        ]
      },
      {
        id: 6,
        type: 'section',
        should_save: true,
        hide_next_button: true,
        hide_arrows: true,
        content: [
          {
            type: 'text',
            value: 'Thank you we will be in touch soon!',
          }
        ]
      }
  
    ]
  
    const support = [
      {
        id: 3,
        question_id: 2,
        type: 'question',
        title: "What is your name?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          },
        ]
      },
      {
        id: 4,
        question_id: 3,
        type: 'question',
        title: "What is your email address?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          }
        ]
      },
      {
        id: 4,
        question_id: 3,
        type: 'question',
        title: "What is your user name?",
        subtitle: '',
        content: [
          {
            type: 'input',
            placeholder: ''
          }
        ]
      },
      {
        id: 5,
        question_id: 4,
        type: 'question',
        title: "How can we help you?",
        subtitle: '',
        content: [
          {
            type: 'textarea',
            placeholder: ''
          }
        ]
      },
      {
        id: 6,
        type: 'section',
        should_save: true,
        hide_next_button: true,
        hide_arrows: true,
        content: [
          {
            type: 'text',
            value: 'Thank you we will be in touch soon!',
          }
        ]
      }
    ]
  
    const AddBlock = (block) => {
      const blockToAdd = block;
      const newBlocks = [...dynamicBlocks, ...blockToAdd];
      setDynamicBlocks(newBlocks);
    };

    if (fieldAnswer === "services") {
      AddBlock(services)
    } else if (fieldAnswer === "sendmessage") {
      AddBlock(sendmessage)
    } else if (fieldAnswer === "support") {
      AddBlock(support)
    }

  }, [fieldAnswer]);

  useEffect(() => {

    const currentStep = dynamicBlocks[currentIndexForm];
    if (currentStep?.should_save) {
      const values = getValues();
      localStorage.setItem("form-values", JSON.stringify(values));
    }
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndexForm]);


  useEffect(() => {
    const handleEsc = (event) => {
      console.log(event.keyCode)
       if (event.keyCode === 13) {
        handleClick()
       }else if (evt.shiftKey && evt.keyCode === 13) { 
        alert("Shift+ENTER");
       }

    
    };
    
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  /*
  useEffect(() => {
    const formValues = localStorage.getItem("form-values");
    if (formValues) {
      reset(JSON.parse(formValues));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */
  

  const setNewCurrentIndexForm = (newIndex) => {
    
    if(newIndex < 0) return 
   
    newIndex > currentIndexForm
      ? setClassNameState("fade")
      : setClassNameState("fade-out");

    setTimeout(() => {
      setCurrentIndexForm(newIndex);
    }, 50);
  };

  const generateFormStep = (step) => {

    switch (step?.type) {
      case "section":
        return (
          <Section
            hideNextButton={step.hide_next_button}
            content={step.content}
            onNextStep={() => setNewCurrentIndexForm(currentIndexForm + 1)}
          />
        );
      case "question":
        return (
          <Question
            control={control}
            setValue={setValue}
            getValues={getValues}
            register={register}
            questionId={step.question_id}
            title={step.title}
            content={step.content}
            nextOnClick={step.next_on_click}
            hideNextButton={step.hide_ok_button}
            onNextStep={() => setNewCurrentIndexForm(currentIndexForm + 1)}
          />
        );
      default:
        break;
    }
  };

  return (
    <FormBuilderWrapper>
      <StepWrapper>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={currentIndexForm}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames={classNameState}
            >
            {generateFormStep(dynamicBlocks[currentIndexForm])}
          </CSSTransition>
        </SwitchTransition>
      </StepWrapper>

      <ArrowsWrapper show={!dynamicBlocks[currentIndexForm]?.hide_arrows}>
        <ArrowsButton
          onClick={() => setNewCurrentIndexForm(currentIndexForm - 1)}
        >
          <svg height="9" width="14">
            <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
          </svg>
        </ArrowsButton>
        <ArrowsButton
          ref={nextBtn}
          onClick={() => setNewCurrentIndexForm(currentIndexForm + 1)}
        >
          <svg height="9" width="14">
            <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
          </svg>
        </ArrowsButton>
      </ArrowsWrapper>
    </FormBuilderWrapper>
  );
};

export default FormBuilder;
