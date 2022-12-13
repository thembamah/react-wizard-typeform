const stepsData = [
  {
    id: 1,
    type: 'section',
    content: [
      {
        type: 'text',
        value: 'Hey there. We"d love to learn more about you and how our product is helping you.',
      },
      {
        type: 'text',
        value: 'Can you spare 5 minutes?',
      }
    ]
  },
  {
    id: 2,
    question_id: 1,
    type: 'question',
    title: 'First off, are you using the product for business or personal use? *',
    subtitle: '',
    hide_ok_button: true,
    next_on_click: true,
    content: [
      {
        type: 'radiobox',
        values: [
          {
            id: 1,
            label: 'Business',
          },
          {
            id: 2,
            label: 'Personal',
          },
        ],
      },
    ]
  },
  {
    id: 3,
    question_id: 2,
    type: 'question',
    title: 'Great. What is the size of your company? This question is required. *',
    subtitle: '',
    content: [
      {
        type: 'checkbox',
        values: [
          {
            id: 1,
            label: 'Self-Employed/Freelancer',
          },
          {
            id: 2,
            label: '1-10 employees',
          },
          {
            id: 3,
            label: '11-50 employees',
          },
          {
            id: 4,
            label: '51-200 employees',
          },
        ],
      },
    ]
  },
  {
    id: 4,
    question_id: 3,
    type: 'question',
    title: 'And which type of industry do you work in? This question is required. *',
    subtitle: '',
    content: [
      {
        type: 'select',
        values: [
          {
            id: 1,
            label: 'Accounting',
          },
          {
            id: 2,
            label: 'Animation',
          },
          {
            id: 3,
            label: 'Apparel & Fashion',
          },
          {
            id: 4,
            label: 'Arts and Crafts',
          },
        ],
      },
    ]
  },
  {
    id: 5,
    question_id: 4,
    type: 'question',
    title: "If you'd like us to follow up with you, please be sure to leave your email address below :)",
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'name@example.com'
      },
    ]
  },
  {
    id: 6,
    type: 'section',
    should_save: true,
    hide_next_button: true,
    content: [
      {
        type: 'text',
        value: 'Your data has been saved :)',
      },
      {
        type: 'text',
        value: "It's in your local storage",
      }
    ]
  },
];

export default stepsData;