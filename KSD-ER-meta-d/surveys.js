
// Self-Rated Emotional Intelligence Scale
// Brackett et al. (2006)

const emotionSurvey = {
    type: jsPsychSurveyLikert,
    preamble: '<h3>Please indicate how much you agree with each statement.</h3>',
    questions: [
        {prompt: 'By looking at people&#8217;s facial expressions, I recognize the emotions they are experiencing.', name: 'Emo1', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I am a rational person and I rarely, if ever, consult my feelings to make a decision.', name: 'Emo2', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I have a rich vocabulary to describe my emotions.', name: 'Emo3', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I have problems dealing with my feelings of anger.', name: 'Emo4', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When someone I know is in a bad mood, I can help the person calm down and feel better quickly.', name: 'Emo5', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I am aware of the nonverbal messages other people send.', name: 'Emo6', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When making decisions, I listen to my feelings to see if the decision feels right.', name: 'Emo7', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I could easily write a lot of synonyms for emotion words like happiness or sadness.', name: 'Emo8', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I can handle stressful situations without getting too nervous.', name: 'Emo9', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I know the strategies to make or improve other people&#8217;s moods.', name: 'Emo10', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I can tell when a person is lying to me by looking at his or her facial expression.', name: 'Emo11', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I am a rational person and don&#8217;t like to rely on my feelings to make decisions.', name: 'Emo12', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I have the vocabulary to describe how most emotions progress from simple to complex feelings.', name: 'Emo13', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I am able to handle most upsetting problems.', name: 'Emo14', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I am not very good at helping others to feel better when they are feeling down or angry.', name: 'Emo15', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'My quick impressions of what people are feeling are usually wrong.', name: 'Emo16', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'My &#8220;feelings&#8221; vocabulary is probably better than most other persons&#8217; &#8220;feelings&#8221; vocabularies.', name: 'Emo17', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I know how to keep calm in difficult or stressful situations.', name: 'Emo18', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I am the type of person to whom others go when they need help with a difficult situation.', name: 'Emo19', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']}
    ],
    randomize_question_order: false
};

// Emotion Regulation Questionnaire (ERQ)
// Gross & John (2003)

const ERQ = {
    type: jsPsychSurveyLikert,
    preamble: '<h3>Please indicate how much you agree with each statement.</h3>',
    questions: [
        {prompt: 'When I want to feel more positive emotion (such as joy or amusement), I change what I&#8217;m thinking about.', name: 'ERQ1', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I keep my emotions to myself.', name: 'ERQ2', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When I want to feel less negative emotion (such as sadness or anger), I change what I&#8217;m thinking about.', name: 'ERQ3', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When I am feeling negative emotions, I make sure not to express them.', name: 'ERQ4', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When I want to feel more positive emotion, I change the way I&#8217;m thinking about the situation.', name: 'ERQ5', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I control my emotions by not expressing them.', name: 'ERQ6', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When I want to feel less negative emotion, I change the way I&#8217;m thinking about the situation.', name: 'ERQ7', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I control my emotions by changing the way I think about the situation I&#8217;m in.', name: 'ERQ8', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'I keep my negative emotions to myself.', name: 'ERQ9', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']},
        {prompt: 'When I want to feel more positive emotion, I change what I&#8217;m thinking about.', name: 'ERQ10', required: true, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']}
    ],
    randomize_question_order: false
};

// Ruminative Response Scale (RRS)
// Treynor, Gonzalez & Nolen-Hoeksema (2003)

const RRS = {
    type: jsPsychSurveyLikert,
    preamble: '<h3>People think and do many different things when they feel sad or down. Please indicate how often you think or do each of the following.</h3>',
    questions: [
        {prompt: 'Think about how alone you feel.', name: 'RRS1', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think &#8220;Why do I always react this way?&#8221;', name: 'RRS2', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think about a recent situation, wishing it had gone better.', name: 'RRS3', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think &#8220;Why can&#8217;t I handle things better?&#8221;', name: 'RRS4', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think about how passive and unmotivated you feel.', name: 'RRS5', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Analyze recent events to understand why you are depressed.', name: 'RRS6', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Go someplace alone to think about your feelings.', name: 'RRS7', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think about all your shortcomings, failings, faults, mistakes.', name: 'RRS8', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think &#8220;Why do I have problems other people don&#8217;t have?&#8221;', name: 'RRS9', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']},
        {prompt: 'Think &#8220;Why can&#8217;t I get going?&#8221;', name: 'RRS10', required: true, labels: ['Almost Never', 'Sometimes', 'Often', 'Almost Always']}
    ],
    randomize_question_order: false
};


