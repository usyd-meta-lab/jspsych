/* 
  ===============================================================
  =              SURVEY QUESTIONS              =
  ===============================================================
*/


// Define Likert scale
const alexithymia_scale = ["<p style = 'color: white;'>1 (Strongly Disagree)</p>", "2", "3", "4", "<p style = 'color: white;'>5 (Strongly Agree)</p>"];

// Toronto Alexithymia Scale
const toronto_alexithymia = {
  type: jsPsychSurveyLikert,
  preamble: "<strong>Emotions Scale</strong><br>This questionnaire assesses how you understand and describe your emotions.",
  questions: [
    {prompt: "I am often confused about what emotion I am feeling.", name: "toronto_1", required: true, labels: alexithymia_scale},
    {prompt: "It is difficult for me to find the right words for my feelings.", name: "toronto_2", required: true, labels: alexithymia_scale},
    {prompt: "I have physical sensations that even doctors don&#39;t understand.", name: "toronto_3", required: true, labels: alexithymia_scale},
    {prompt: "I am able to describe my feelings easily.", name: "toronto_4", required: true, labels: alexithymia_scale},
    {prompt: "I prefer to analyze problems rather than just describe them.", name: "toronto_5", required: true, labels: alexithymia_scale},
    {prompt: "When I am upset, I don&#39;t know if I am sad, frightened, or angry.", name: "toronto_6", required: true, labels: alexithymia_scale},
    {prompt: "I am often puzzled by sensations in my body.", name: "toronto_7", required: true, labels: alexithymia_scale},
    {prompt: "I prefer to just let things happen rather than to understand why they turned out that way.", name: "toronto_8", required: true, labels: alexithymia_scale},
    {prompt: "I have feelings that I can&#39;t quite identify.", name: "toronto_9", required: true, labels: alexithymia_scale},
    {prompt: "Being in touch with emotions is essential.", name: "toronto_10", required: true, labels: alexithymia_scale},
    {prompt: "I find it hard to describe how I feel about people.", name: "toronto_11", required: true, labels: alexithymia_scale},
    {prompt: "People tell me to describe my feelings more.", name: "toronto_12", required: true, labels: alexithymia_scale},
    {prompt: "I don&#39;t know what&#39;s going on inside me.", name: "toronto_13", required: true, labels: alexithymia_scale},
    {prompt: "I often don&#39;t know why I am angry.", name: "toronto_14", required: true, labels: alexithymia_scale},
    {prompt: "I prefer talking to people about their daily activities rather than their feelings.", name: "toronto_15", required: true, labels: alexithymia_scale},
    {prompt: "I prefer to watch “light” entertainment shows rather than psychological dramas.", name: "toronto_16", required: true, labels: alexithymia_scale},
    {prompt: "It is difficult for me to reveal my innermost feelings, even to close friends.", name: "toronto_17", required: true, labels: alexithymia_scale},
    {prompt: "I can feel close to someone, even in moments of silence.", name: "toronto_18", required: true, labels: alexithymia_scale},
    {prompt: "I find examination of my feelings useful in solving personal problems.", name: "toronto_19", required: true, labels: alexithymia_scale},
    {prompt: "Looking for hidden meanings in movies or plays distracts from my enjoyment.", name: "toronto_20", required: true, labels: alexithymia_scale},
  ]
};

// Perth Alexithymia Questionnaire
const perth_alexithymia = {
  type: jsPsychSurveyLikert,
  preamble: "<strong>Emotional Experience Questionnaire</strong><br>This questionnaire assesses how you process and respond to emotional experiences.",
  questions: [
    {prompt: "When I&#39;m feeling bad (feeling an unpleasant emotion), I can&#39;t find the right words to describe those feelings.", name: "perth_1", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling bad, I can&#39;t tell whether I&#39;m sad, angry, or scared.", name: "perth_2", required: true, labels: alexithymia_scale},
    {prompt: "I tend to ignore how I feel.", name: "perth_3", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good (feeling a pleasant emotion), I can&#39;t find the right words to describe those feelings.", name: "perth_4", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good, I can&#39;t tell whether I&#39;m happy, excited, or amused.", name: "perth_5", required: true, labels: alexithymia_scale},
    {prompt: "I prefer to just let my feelings happen in the background, rather than focus on them.", name: "perth_6", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling bad, I can&#39;t talk about those feelings in much depth or detail.", name: "perth_7", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling bad, I can&#39;t make sense of those feelings.", name: "perth_8", required: true, labels: alexithymia_scale},
    {prompt: "I don&#39;t pay attention to my emotions.", name: "perth_9", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good, I can&#39;t talk about those feelings in much depth or detail.", name: "perth_10", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good, I can&#39;t make sense of those feelings.", name: "perth_11", required: true, labels: alexithymia_scale},
    {prompt: "Usually, I try to avoid thinking about what I&#39;m feeling.", name: "perth_12", required: true, labels: alexithymia_scale},
    {prompt: "When something bad happens, it&#39;s hard for me to put into words how I&#39;m feeling.", name: "perth_13", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling bad, I get confused about what emotion it is.", name: "perth_14", required: true, labels: alexithymia_scale},
    {prompt: "I prefer to focus on things I can actually see or touch, rather than my emotions.", name: "perth_15", required: true, labels: alexithymia_scale},
    {prompt: "When something good happens, it&#39;s hard for me to put into words how I&#39;m feeling.", name: "perth_16", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good, I get confused about what emotion it is.", name: "perth_17", required: true, labels: alexithymia_scale},
    {prompt: "I don&#39;t try to be &#39;in touch&#39; with my emotions.", name: "perth_18", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling bad, if I try to describe how I&#39;m feeling I don&#39;t know what to say.", name: "perth_19", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling bad, I&#39;m puzzled by those feelings.", name: "perth_20", required: true, labels: alexithymia_scale},
    {prompt: "It&#39;s not important for me to know what I&#39;m feeling.", name: "perth_21", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good, if I try to describe how I&#39;m feeling I don&#39;t know what to say.", name: "perth_22", required: true, labels: alexithymia_scale},
    {prompt: "When I&#39;m feeling good, I&#39;m puzzled by those feelings.", name: "perth_23", required: true, labels: alexithymia_scale},
    {prompt: "It&#39;s strange for me to think about my emotions.", name: "perth_24", required: true, labels: alexithymia_scale}
  ]
};

