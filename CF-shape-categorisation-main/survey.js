/********************  Likert labels  ********************/
const likert5 = [
  "Strongly disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly agree"
];

/********************  Social Media Questionnaire  ********************/
const socialMediaSurvey = {
  type: jsPsychSurveyLikert,
  preamble: `
    <h3>Social Media Questionnaire</h3>
    <p>Please indicate how much you agree with each statement.</p>
  `,
  scale_width: 600,
  questions: [
    {
      prompt:
        "I spend a lot of time thinking about social media apps or planning my use of social media apps",
      name: "smq_q1",
      labels: likert5,
      required: true
    },
    {
      prompt: "I feel the need to use social media apps more and more",
      name: "smq_q2",
      labels: likert5,
      required: true
    },
    {
      prompt: "I use social media apps so I can forget about my problems",
      name: "smq_q3",
      labels: likert5,
      required: true
    },
    {
      prompt: "I've tried to use my social media apps less but I can't",
      name: "smq_q4",
      labels: likert5,
      required: true
    },
    {
      prompt:
        "I've become stressed or upset if I am not allowed to use my social media apps",
      name: "smq_q5",
      labels: likert5,
      required: true
    },
    {
      prompt:
        "I use social media apps so much that it has had a bad effect on my schoolwork or job",
      name: "smq_q6",
      labels: likert5,
      required: true
    }
  ]
};

/********************  Mobile Phone Questionnaire  ********************/
const mobilePhoneSurvey = {
  type: jsPsychSurveyLikert,
  preamble: `
    <h3>Mobile Phone Questionnaire</h3>
    <p>Please indicate how much you agree with each statement.</p>
  `,
  scale_width: 600,
  questions: [
    {
      prompt:
        "I interrupt whatever else I am doing when I am contacted on my phone",
      name: "mpq_q1",
      labels: likert5,
      required: true
    },
    {
      prompt: "I often use my phone for no particular reason",
      name: "mpq_q2",
      labels: likert5,
      required: true
    },
    {
      prompt: "I feel connected to others when I am using my phone",
      name: "mpq_q3",
      labels: likert5,
      required: true
    },
    {
      prompt: "Arguments have arisen with others because of my phone use",
      name: "mpq_q4",
      labels: likert5,
      required: true
    },
    {
      prompt: "I lose track of how much I am using my phone",
      name: "mpq_q5",
      labels: likert5,
      required: true
    },
    {
      prompt: "I often think about my phone when I am not using it",
      name: "mpq_q6",
      labels: likert5,
      required: true
    },
    {
      prompt: "I have been unable to reduce my phone use",
      name: "mpq_q7",
      labels: likert5,
      required: true
    },
    {
      prompt:
        "The thought of being without my phone makes me feel distressed",
      name: "mpq_q8",
      labels: likert5,
      required: true
    }
  ]
};
