  /* 
  ===============================================================
  =                    SURVEY PROCEDURE                    =
  ===============================================================
  */



/**
 * SOCIAL NETWORK SCALE 
 */

// A typical 5-point Likert scale (adjust as needed).
    var likert_scale = [
      "1 - Strongly Disagree",
      "2 - Disagree",
      "3 - Neutral",
      "4 - Agree",
      "5 - Strongly Agree"
    ];

    // Create the survey-likert trial
    var political_survey = {
      type: jsPsychSurveyLikert,
      preamble: '<p>Please read each statement carefully and select the response that best reflects your agreement.</p>',
      questions: [
        {
          prompt: "1. I enjoy situations in which I can debate my political views.",
          labels: likert_scale, 
          name: 'Q1', 
          required: true
        },
        {
          prompt: "2. Spending my free time discussing politics is exciting.",
          labels: likert_scale, 
          name: 'Q2', 
          required: true
        },
        {
          prompt: "3. A person expressing political opinions draws my attention.",
          labels: likert_scale, 
          name: 'Q3', 
          required: true
        },
        {
          prompt: "4. I like participating in associations in which all the members may collaborate in order to attain political goals.",
          labels: likert_scale, 
          name: 'Q4', 
          required: true
        },
        {
          prompt: "5. Thinking about meetings with others is very pleasant for me.",
          labels: likert_scale, 
          name: 'Q5', 
          required: true
        },
        {
          prompt: "6. As soon as I have the chance, I find a way to share time with others in group activities. (Non",
          labels: likert_scale, 
          name: 'Q6', 
          required: true
        },
        {
          prompt: "7. I like meeting with others to plan group activities.",
          labels: likert_scale, 
          name: 'Q7', 
          required: true
        },
        {
          prompt: "8. During vacations, I enjoy doing things with other people.",
          labels: likert_scale, 
          name: 'Q8', 
          required: true
        }
      ],
      // You can also customize button labels, for instance:
      // button_label: 'Submit',
    };






/**
 * FRIENDS AND FAMILY SURVEY
 */





 // Define response option arrays

    // For items asking about counts (e.g., number of relatives/friends)
    var count_options = [
      "0 = none",
      "1 = one",
      "2 = two",
      "3 = three or four",
      "4 = five thru eight",
      "5 = nine or more"
    ];

    // For items asking about frequency (e.g., how often you hear from someone)
    var frequency_options = [
      "0 = less than monthly",
      "1 = monthly",
      "2 = few times a month",
      "3 = weekly",
      "4 = few times a week",
      "5 = daily"
    ];

    // For items asking about decision-related frequency
    var decision_options = [
      "0 = never",
      "1 = seldom",
      "2 = sometimes",
      "3 = often",
      "4 = very often",
      "5 = always"
    ];

    // Create the survey-likert trial
    var family_survey = {
      type: jsPsychSurveyLikert,
      preamble: '<p>Please answer the following questions regarding your family and friendships.</p>' +
                '<p><strong>FAMILY:</strong> Considering the people to whom you are related by birth, marriage, adoption, etc.</p>',
      questions: [
        {
          prompt: "1. How many relatives do you see or hear from at least once a month?",
          labels: count_options,
          name: 'F1',
          required: true
        },
        {
          prompt: "2. How often do you see or hear from the relative with whom you have the most contact?",
          labels: frequency_options,
          name: 'F2',
          required: true
        },
        {
          prompt: "3. How many relatives do you feel at ease with that you can talk about private matters?",
          labels: count_options,
          name: 'F3',
          required: true
        },
        {
          prompt: "4. How many relatives do you feel close to such that you could call on them for help?",
          labels: count_options,
          name: 'F4',
          required: true
        },
        {
          prompt: "5. When one of your relatives has an important decision to make, how often do they talk to you about it?",
          labels: decision_options,
          name: 'F5',
          required: true
        },
        {
          prompt: "6. How often is one of your relatives available for you to talk to when you have an important decision to make?",
          labels: decision_options,
          name: 'F6',
          required: true
        }
      ]
      // You can customize the button label by uncommenting the line below:
      // button_label: 'Submit',
    };



  // Create the FRIENDSHIPS survey-likert trial
    var friendships_survey = {
      type: jsPsychSurveyLikert,
      preamble: '<p><strong>FRIENDSHIPS:</strong> Considering all of your friends including those who live in your neighborhood.</p>',
      questions: [
        {
          prompt: "7. How many of your friends do you see or hear from at least once a month?",
          labels: count_options,
          name: 'Fr1',
          required: true
        },
        {
          prompt: "8. How often do you see or hear from the friend with whom you have the most contact?",
          labels: frequency_options,
          name: 'Fr2',
          required: true
        },
        {
          prompt: "9. How many friends do you feel at ease with that you can talk about private matters?",
          labels: count_options,
          name: 'Fr3',
          required: true
        },
        {
          prompt: "10. How many friends do you feel close to such that you could call on them for help?",
          labels: count_options,
          name: 'Fr4',
          required: true
        },
        {
          prompt: "11. When one of your friends has an important decision to make, how often do they talk to you about it?",
          labels: decision_options,
          name: 'Fr5',
          required: true
        },
        {
          prompt: "12. How often is one of your friends available for you to talk to when you have an important decision to make?",
          labels: decision_options,
          name: 'Fr6',
          required: true
        }
      ]
      // Optionally, you can add a button_label here (e.g., button_label: 'Submit')
    };
