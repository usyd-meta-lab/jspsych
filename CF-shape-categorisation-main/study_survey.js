
// Likert scale template
function likertQuestion(prompt, labels = ["1", "2", "3", "4", "5", "6"]) {
  return {
    type: jsPsychSurveyLikert,
    questions: [{
      prompt: prompt,
      labels: labels,
      required: true
    }],
    scale_width: 500
  };
}

// Open-ended question template
function openEndedQuestion(prompt) {
  return {
    type: jsPsychSurveyText,
    questions: [{
      prompt: prompt,
      rows: 5,
      columns: 60,
      required: true
    }]
  };
}

// Force-choice (dropdown or radio) question template
function forceChoiceQuestion(prompt, options) {
  return {
    type: jsPsychSurveyMultiChoice,
    questions: [{
      prompt: prompt,
      options: options,
      required: true
    }]
  };
}

// --- Cognitive - Constructive Strategies ---
cm_survey1 = openEndedQuestion("In a paragraph or two, please describe your study techniques.");

const cognitiveQuestions = [
  "When I study, I pause to explain to myself difficult concepts.",
  "If I don&#39;t understand something, I stop to try to explain it to myself.",
  "When I study, I compare and contrast different examples to understand concepts.",
  "To better understand one concept, I compare it to another one I already know.",
  "When studying class material, I compare and contrast different concepts.",
  "I knew when I understood a concept well.",
  "It was difficult for me to determine when I knew a concept well.",
  "The first thing I did was think through a plan for what, when, and how to study.",
  "I tried to anticipate difficulties I might have had when learning.",
  "I kept track of how well I understood each concept.",
  "I kept track of my progress, and if necessary, I changed my strategies."
];

// Create an array to hold the likert trials
const cog_trials = cognitiveQuestions.map(q =>
  likertQuestion(q, ["1 (Strongly Disagree)", "2", "3", "4", "5", "6 (Strongly Agree)"])
);

// --- Time Management ---
tm_survey1 = openEndedQuestion("On average, how much total time did you spend studying (in minutes) for an exam in a typical university course?");

const timePercentageOptions = ["0%", "25%", "50%", "75%", "100%"];
tm_survey2 = forceChoiceQuestion("On average, what percentage of that time was spent reviewing your readings for an exam in a typical university course?", timePercentageOptions);
tm_survey3 = forceChoiceQuestion("On average, what percentage of that time was spent reviewing your lecture notes for an exam in a typical university course?", timePercentageOptions);
tm_survey4 = forceChoiceQuestion("On average, what percentage of that time was spent reviewing a study guide for a typical university course?", timePercentageOptions);

// --- Study Habits ---
stud_survey1 = forceChoiceQuestion("How many study sessions did you have for an exam (in a typical course)?", ["1", "2", "3", "4", "5", "6 or more"]);
stud_survey2 = forceChoiceQuestion("How often did you do the assigned readings BEFORE attending class, across your university courses?", ["1 (Never)", "2", "3", "4", "5 (Always)"]);
stud_survey3 = forceChoiceQuestion("How often did you do the assigned readings AFTER attending class, across your university courses?", ["1 (Never)", "2", "3", "4", "5 (Always)"]);

// --- Combine into timeline ---
var study_survey = {
  timeline: [
    cm_survey1,
    ...cog_trials, 
    tm_survey1,
    tm_survey2,
    tm_survey3,
    tm_survey4,
    stud_survey1,
    stud_survey2,
    stud_survey3
  ]
};