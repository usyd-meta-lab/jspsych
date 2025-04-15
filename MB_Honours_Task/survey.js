  /* 
  ===============================================================
  =                    SURVEY PROCEDURE                    =
  ===============================================================
  */





/**
 * Self-Rated Emotional Intelligence Scale
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
    var emotion_survey_SREIS = {
      type: jsPsychSurveyLikert,
      preamble: '<p>Please read each statement carefully and select the response that best reflects your agreement.</p>',
      questions: [
        {
          prompt: "1. By looking at people&#39;s facial expressions, I recognize the emotions they are experiencing.",
          labels: likert_scale, 
          name: 'Q1', 
          required: true
        },
        {
          prompt: "2. I am a rational person and I rarely, if ever, consult my feelings to make a decision.",
          labels: likert_scale, 
          name: 'Q2', 
          required: true
        },
        {
          prompt: "3. I have a rich vocabulary to describe my emotions.",
          labels: likert_scale, 
          name: 'Q3', 
          required: true
        },
        {
          prompt: "4. I have problems dealing with my feelings of anger.",
          labels: likert_scale, 
          name: 'Q4', 
          required: true
        },
        {
          prompt: "5. When someone I know is in a bad mood, I can help the person calm down and feel better quickly.",
          labels: likert_scale, 
          name: 'Q5', 
          required: true
        },
        {
          prompt: "6. I am aware of the nonverbal messages other people send.",
          labels: likert_scale, 
          name: 'Q6', 
          required: true
        },
        {
          prompt: "7. When making decisions, I listen to my feelings to see if the decision feels right.",
          labels: likert_scale, 
          name: 'Q7', 
          required: true
        },
        {
          prompt: "8. I could easily write a lot of synonyms for emotion words like happiness or sadness.",
          labels: likert_scale, 
          name: 'Q8', 
          required: true
        },
        {
          prompt: "9. I can handle stressful situations without getting too nervous.",
          labels: likert_scale, 
          name: 'Q9', 
          required: true
        },
        {
          prompt: "10. I know the strategies to make or improve other people&#39;s moods.",
          labels: likert_scale, 
          name: 'Q10', 
          required: true
        },
        {
          prompt: "11. I can tell when a person is lying to me by looking at his or her facial expression.",
          labels: likert_scale, 
          name: 'Q11', 
          required: true
        },
        {
          prompt: "12. I am a rational person and don&#39;t like to rely on my feelings to make decisions.",
          labels: likert_scale, 
          name: 'Q12', 
          required: true
        },
        {
          prompt: "13. I have the vocabulary to describe how most emotions progress from simple to complex feelings.",
          labels: likert_scale, 
          name: 'Q13', 
          required: true
        },
        {
          prompt: "14. I am able to handle most upsetting problems.",
          labels: likert_scale, 
          name: 'Q14', 
          required: true
        },
        {
          prompt: "15. I am not very good at helping others to feel better when they are feeling down or angry.",
          labels: likert_scale, 
          name: 'Q15', 
          required: true
        },
        {
          prompt: "16. My quick impressions of what people are feeling are usually wrong.",
          labels: likert_scale, 
          name: 'Q16', 
          required: true
        },
        {
          prompt: "17. My &#39;feelings&#39; vocabulary is probably better than most other persons&#39; &#39;feelings&#39; vocabularies.",
          labels: likert_scale, 
          name: 'Q17', 
          required: true
        },
        {
          prompt: "18. I know how to keep calm in difficult or stressful situations.",
          labels: likert_scale, 
          name: 'Q18', 
          required: true
        },
        {
          prompt: "19. I am the type of person to whom others go when they need help with a difficult situation.",
          labels: likert_scale, 
          name: 'Q19', 
          required: true
        }
      ],
      // You can also customize button labels, for instance:
      // button_label: 'Submit',
    };






/**
 * Profile of Emotional Competence
 */



var emotion_survey_PEC = {
      type: jsPsychSurveyLikert,
      preamble: '<p>Please read each statement and select the response that best reflects your agreement.</p>',
      questions: [
        {
          prompt: "1. As my emotions arise I don't understand where they come from.",
          labels: likert_scale,
          name: 'Q1',
          required: true
        },
        {
          prompt: "2. I don't always understand why I respond in the way I do.",
          labels: likert_scale,
          name: 'Q2',
          required: true
        },
        {
          prompt: "3. If I wanted, I could easily influence other people's emotions to achieve what I want.",
          labels: likert_scale,
          name: 'Q3',
          required: true
        },
        {
          prompt: "4. I know what to do to win people over to my cause.",
          labels: likert_scale,
          name: 'Q4',
          required: true
        },
        {
          prompt: "5. I am often a loss to understand other people's emotional responses.",
          labels: likert_scale,
          name: 'Q5',
          required: true
        },
        {
          prompt: "6. When I feel good, I can easily tell whether it is due to being proud of myself, happy or relaxed.",
          labels: likert_scale,
          name: 'Q6',
          required: true
        },
        {
          prompt: "7. I can tell whether a person is angry, sad or happy even if they don't talk to me.",
          labels: likert_scale,
          name: 'Q7',
          required: true
        },
        {
          prompt: "8. I am good at describing my feelings.",
          labels: likert_scale,
          name: 'Q8',
          required: true
        },
        {
          prompt: "9. I never base my personal life choices on my emotions.",
          labels: likert_scale,
          name: 'Q9',
          required: true
        },
        {
          prompt: "10. When I am feeling low, I easily make a link between my feelings and a situation that affected me.",
          labels: likert_scale,
          name: 'Q10',
          required: true
        },
        {
          prompt: "11. I can easily get what I want from others.",
          labels: likert_scale,
          name: 'Q11',
          required: true
        },
        {
          prompt: "12. I easily manage to calm myself down after a difficult experience.",
          labels: likert_scale,
          name: 'Q12',
          required: true
        },
        {
          prompt: "13. I can easily explain the emotional responses of the people around me.",
          labels: likert_scale,
          name: 'Q13',
          required: true
        },
        {
          prompt: "14. Most of the time I understand why people feel the way they do.",
          labels: likert_scale,
          name: 'Q14',
          required: true
        },
        {
          prompt: "15. When I am sad, I find it easy to cheer myself up.",
          labels: likert_scale,
          name: 'Q15',
          required: true
        },
        {
          prompt: "16. When I am touched by something, I immediately know what I feel.",
          labels: likert_scale,
          name: 'Q16',
          required: true
        },
        {
          prompt: "17. If I dislike something, I manage to say so in a calm manner.",
          labels: likert_scale,
          name: 'Q17',
          required: true
        },
        {
          prompt: "18. I do not understand why the people around me respond the way they do.",
          labels: likert_scale,
          name: 'Q18',
          required: true
        },
        {
          prompt: "19. When I see someone who is stressed or anxious, I can easily calm them down.",
          labels: likert_scale,
          name: 'Q19',
          required: true
        },
        {
          prompt: "20. During an argument I do not know whether I am angry or sad.",
          labels: likert_scale,
          name: 'Q20',
          required: true
        },
        {
          prompt: "21. I use my feelings to improve my choices in life.",
          labels: likert_scale,
          name: 'Q21',
          required: true
        },
        {
          prompt: "22. I try to learn from difficult situations or emotions.",
          labels: likert_scale,
          name: 'Q22',
          required: true
        },
        {
          prompt: "23. Other people tend to confide in me about personal issues.",
          labels: likert_scale,
          name: 'Q23',
          required: true
        },
        {
          prompt: "24. My emotions inform me about changes I should make in my life.",
          labels: likert_scale,
          name: 'Q24',
          required: true
        },
        {
          prompt: "25. I find it difficult to explain my feelings to others even if I want to.",
          labels: likert_scale,
          name: 'Q25',
          required: true
        },
        {
          prompt: "26. I don't always understand why I am stressed.",
          labels: likert_scale,
          name: 'Q26',
          required: true
        },
        {
          prompt: "27. If someone came to me in tears, I would not know what to do.",
          labels: likert_scale,
          name: 'Q27',
          required: true
        },
        {
          prompt: "28. I find it difficult to listen to people who are complaining.",
          labels: likert_scale,
          name: 'Q28',
          required: true
        },
        {
          prompt: "29. I often take the wrong attitude to people because I was not aware of their emotional state.",
          labels: likert_scale,
          name: 'Q29',
          required: true
        },
        {
          prompt: "30. I am good at sensing what others are feeling.",
          labels: likert_scale,
          name: 'Q30',
          required: true
        },
        {
          prompt: "31. I feel uncomfortable if people tell me about their problems, so I try to avoid it.",
          labels: likert_scale,
          name: 'Q31',
          required: true
        },
        {
          prompt: "32. I know what to do to motivate people.",
          labels: likert_scale,
          name: 'Q32',
          required: true
        },
        {
          prompt: "33. I am good at lifting other people's spirits.",
          labels: likert_scale,
          name: 'Q33',
          required: true
        },
        {
          prompt: "34. I find it difficult to establish a link between a person's response and their personal circumstances.",
          labels: likert_scale,
          name: 'Q34',
          required: true
        },
        {
          prompt: "35. I am usually able to influence the way other people feel.",
          labels: likert_scale,
          name: 'Q35',
          required: true
        },
        {
          prompt: "36. If I wanted, I could easily make someone feel uneasy.",
          labels: likert_scale,
          name: 'Q36',
          required: true
        },
        {
          prompt: "37. I find it difficult to handle my emotions.",
          labels: likert_scale,
          name: 'Q37',
          required: true
        },
        {
          prompt: "38. The people around me tell me I don't express my feelings openly.",
          labels: likert_scale,
          name: 'Q38',
          required: true
        },
        {
          prompt: "39. When I am angry, I find it easy to calm myself down.",
          labels: likert_scale,
          name: 'Q39',
          required: true
        },
        {
          prompt: "40. I am often surprised by people's responses because I was not aware they were in a bad mood.",
          labels: likert_scale,
          name: 'Q40',
          required: true
        },
        {
          prompt: "41. My feelings help me to focus on what is important to me.",
          labels: likert_scale,
          name: 'Q41',
          required: true
        },
        {
          prompt: "42. Others don't accept the way I express my emotions.",
          labels: likert_scale,
          name: 'Q42',
          required: true
        },
        {
          prompt: "43. When I am sad, I often don't know why.",
          labels: likert_scale,
          name: 'Q43',
          required: true
        },
        {
          prompt: "44. Quite often I am not aware of people's emotional state.",
          labels: likert_scale,
          name: 'Q44',
          required: true
        },
        {
          prompt: "45. Other people tell me I make a good confidant.",
          labels: likert_scale,
          name: 'Q45',
          required: true
        },
        {
          prompt: "46. I feel uneasy when other people tell me about something that is difficult for them.",
          labels: likert_scale,
          name: 'Q46',
          required: true
        },
        {
          prompt: "47. When I am confronted with an angry person, I can easily calm them down.",
          labels: likert_scale,
          name: 'Q47',
          required: true
        },
        {
          prompt: "48. I am aware of my emotions as soon as they arise.",
          labels: likert_scale,
          name: 'Q48',
          required: true
        },
        {
          prompt: "49. When I am feeling low, I find it difficult to know exactly what kind of emotion it is I am feeling.",
          labels: likert_scale,
          name: 'Q49',
          required: true
        },
        {
          prompt: "50. In a stressful situation I usually think in a way that helps me stay calm.",
          labels: likert_scale,
          name: 'Q50',
          required: true
        }
      ],
      // Optional: change the button label
      // button_label: 'Submit'
    };






