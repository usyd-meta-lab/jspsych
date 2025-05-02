
/* 
  ===============================================================
  =                    STEM PROCEDURE                     =
  ===============================================================
*/

// STEM Instructions
var STEM_instructions = {
  type: jsPsychInstructions,
  pages: [
    '<p class="instructions">In this test, you will be presented with a few brief details about an emotional situation, and asked to choose from four responses the most effective course of action to manage both the emotions the person is feeling and the problems they face in that situation.</p>' +
    '<p class="instructions">Although more than one course of action might be acceptable, you are asked to choose what you think the most effective response for that person in that situation would be.</p>' +
    '<p class="instructions">Remember, you are not necessarily choosing what you would do, or the nicest thing to do, but choosing the most effective response for that situation.</p>' +
    '<p class="instructions">Please respond quickly and to the best of your ability.</p>'
  ],
  show_clickable_nav: true
};




/////////////// **********   STEM TRIAL  ***************************** ///////////////

var STEM_question_prompts = [
  {item: "STEM01", question_text: "Wai-Hin and Connie have shared an office for years but Wai-Hin gets a new job and Connie loses contact with her. What action would be the most effective for Connie?", situation: "Wai-Hin and Connie have shared an office for years but Wai-Hin gets a new job and Connie loses contact with her.", answers_text: ["(a) Just accept that she is gone and the friendship is over.", "(b) Ring Wai-Hin and ask her out for lunch or coffee to catch up.", "(c) Contact Wai-Hin and arrange to catch up but also make friends with her replacement.", "(d) Spend time getting to know the other people in the office, and strike up new friendships."]},
  {item: "STEM02", question_text: "Manual is only a few years from retirement when he finds out his position will no longer exist, although he will still have a job with a less prestigious role. What action would be the most effective for Manual?", situation: "Manual is only a few years from retirement when he finds out his position will no longer exist, although he will still have a job with a less prestigious role.", answers_text: ["(a) Carefully consider his options and discuss it with his family.", "(b) Talk to his boss or the management about it.", "(c) Accept the situation, but still feel bitter about it.", "(d) Walk out of that job."]},
  {item: "STEM03", question_text: "Surbhi starts a new job where he doesn&#39;t know anyone and finds that no one is particularly friendly. What action would be the most effective for Surbhi?", situation: "Surbhi starts a new job where he doesn&#39;t know anyone and finds that no one is particularly friendly.", answers_text: ["(a) Have fun with his friends outside of work hours.", "(b) Concentrate on doing his work well at the new job.", "(c) Make an effort to talk to people and be friendly himself.", "(d) Leave the job and find one with a better environment."]},
  {item: "STEM04", question_text: "Andre moves away from the city his friends and family are in. He finds his friends make less effort to keep in contact than he thought they would. What action would be the most effective for Andre?", situation: "Andre moves away from the city his friends and family are in. He finds his friends make less effort to keep in contact than he thought they would.", answers_text: ["(a) Try to adjust to life in the new city by joining clubs and activities there.", "(b) He should make the effort to contact them, but also try to meet people in his new city.", "(c) Let go of his old friends, who have shown themselves to be unreliable.", "(d) Tell his friends he is disappointed in them for not contacting him."]},
  {item: "STEM05", question_text: "Clayton has been overseas for a long time and returns to visit his family. So much has changed that Clayton feels left out. What action would be the most effective for Clayton?", situation: "Clayton has been overseas for a long time and returns to visit his family. So much has changed that Clayton feels left out.", answers_text: ["(a) Nothing - it will sort itself out soon enough.", "(b) Tell his family he feels left out.", "(c) Spend time listening and getting involved again.", "(d) Reflect that relationships can change with time."]},
  {item: "STEM06", question_text: "Daniel has been accepted for a prestigious position in a different country from his family, who he is close to. He and his wife decide it is worth relocating. What action would be the most effective for Daniel?", situation: "Daniel has been accepted for a prestigious position in a different country from his family, who he is close to. He and his wife decide it is worth relocating.", answers_text: ["(a) Realize he shouldn&#39;t have applied for the job if he didn&#39;t want to leave.", "(b) Set up a system for staying in touch, like weekly phone calls or emails.", "(c) Think about the great opportunities this change offers.", "(d) Don&#39;t take the position."]},
  {item: "STEM07", question_text: "Mei Ling answers the phone and hears that close relatives are in hospital critically ill. What action would be the most effective for Mei Ling?", situation: "Mei Ling answers the phone and hears that close relatives are in hospital critically ill.", answers_text: ["(a) Let herself cry and express emotion for as long as she feels like.", "(b) Speak to other family to calm herself and find out what is happening, then visit the hospital.", "(c) There is nothing she can do.", "(d) Visit the hospital and ask staff about their condition."]},
  {item: "STEM08", question_text: "Shona has not spoken to her nephew for months, whereas when he was younger they were very close. She rings him but he can only talk for five minutes. What action would be the most effective for Shona?", situation: "Shona has not spoken to her nephew for months, whereas when he was younger they were very close. She rings him but he can only talk for five minutes.", answers_text: ["(a) Realize that he is growing up and might not want to spend so much time with his family any more.", "(b) Make plans to drop by and visit him in person and have a good chat.", "(c) Understand that relationships change, but keep calling him from time to time.", "(d) Be upset about it, but realize there is nothing she can do."]},
  {item: "STEM09", question_text: "Mina and her sister-in-law normally get along quite well, and the sister-in-law regularly baby-sits for her for a small fee. Lately she has also been cleaning away cobwebs, commenting on the mess, which Mina finds insulting. What action would be the most effective for Mina?", situation: "Mina and her sister-in-law normally get along quite well, and the sister-in-law regularly baby-sits for her for a small fee. Lately she has also been cleaning away cobwebs, commenting on the mess, which Mina finds insulting.", answers_text: ["(a) Tell her sister-in-law these comments upset her.", "(b) Get a new babysitter.", "(c) Be grateful her house is being cleaned for free.", "(d) Tell her only to baby-sit, not to clean."]},
  {item: "attention_check", question_text: "Please select option c for this item to show you are paying attention", situation: "Please select option c for this item to show you are paying attention", answers_text: ["(a) Tell them not to cry.", "(b) Tell them to put on a brave face.", "(c) Help them focus on other things.", "(d) Suggest something else for them to do."]},
  {item: "STEM10", question_text: "Juno is fairly sure his company is going down and his job is under threat. It is a large company and nothing official has been said. What action would be the most effective for Juno?", situation: "Juno is fairly sure his company is going down and his job is under threat. It is a large company and nothing official has been said.", answers_text: ["(a) Find out what is happening and discuss his concerns with his family.", "(b) Try to keep the company afloat by working harder.", "(c) Start applying for other jobs.", "(d) Think of these events as an opportunity for a new start."]},
  {item: "STEM11", question_text: "Mallory moves from a small company to a very large one, where there is little personal contact, which she misses. What action would be the most effective for Mallory?", situation: "Mallory moves from a small company to a very large one, where there is little personal contact, which she misses.", answers_text: ["(a) Talk to her workmates, try to create social contacts and make friends.", "(b) Start looking for a new job so she can leave that environment.", "(c) Just give it time, and things will be okay.", "(d) Concentrate on her outside-work friends and colleagues from previous jobs."]},
  {item: "STEM12", question_text: "A demanding client takes up a lot of Jill&#39;s time and then asks to speak to Jill&#39;s boss about her performance. Although Jill&#39;s boss assures her that her performance is fine, Jill feels upset. What action would be the most effective for Jill?", situation: "A demanding client takes up a lot of Jill&#39;s time and then asks to speak to Jill&#39;s boss about her performance. Although Jill&#39;s boss assures her that her performance is fine, Jill feels upset.", answers_text: ["(a) Talk to her friends or workmates about it.", "(b) Ignore the incident and move on to her next task.", "(c) Calm down by taking deep breaths or going for a short walk.", "(d) Think that she has been successful in the past and this client being difficult is not her fault."]},
  {item: "STEM13", question_text: "Blair and Flynn usually go to a cafe after the working week and chat about what&#39;s going on in the company. After Blair&#39;s job is moved to a different section in the company, he stops coming to the cafe. Flynn misses these Friday talks. What action would be the most effective for Flynn?", situation: "Blair and Flynn usually go to a cafe after the working week and chat about what&#39;s going on in the company. After Blair&#39;s job is moved to a different section in the company, he stops coming to the cafe. Flynn misses these Friday talks.", answers_text: ["(a) Go to the cafe or socialize with other workers.", "(b) Don&#39;t worry about it, ignore the changes and let Blair be.", "(c) Not talk to Blair again.", "(d) Invite Blair again, maybe rescheduling for another time."]},
  {item: "STEM14", question_text: "Michelle&#39;s friend Dara is moving overseas to live with her partner. They have been good friends for many years and Dara is unlikely to come back. What action would be the most effective for Michelle?", situation: "Michelle&#39;s friend Dara is moving overseas to live with her partner. They have been good friends for many years and Dara is unlikely to come back.", answers_text: ["(a) Forget about Dara.", "(b) Spend time with other friends, keeping herself busy.", "(c) Think that Dara and her partner will return soon.", "(d) Make sure she keeps in contact through email, phone or letter writing."]},
  {item: "STEM15", question_text: "Hannah&#39;s access to essential resources has been delayed and her work is way behind schedule. Her progress report makes no mention of the lack of resources. What action would be the most effective for Hannah?", situation: "Hannah&#39;s access to essential resources has been delayed and her work is way behind schedule. Her progress report makes no mention of the lack of resources.", answers_text: ["(a) Explain the lack of resources to her boss or to management.", "(b) Learn that she should plan ahead for next time.", "(c) Document the lack of resources in her progress report.", "(d) Don&#39;t worry about it."]},
  {item: "STEM16", question_text: "Reece&#39;s friend points out that her young children seem to be developing more quickly than Reece&#39;s. Reece sees that this is true. What action would be the most effective for Reece?", situation: "Reece&#39;s friend points out that her young children seem to be developing more quickly than Reece&#39;s. Reece sees that this is true.", answers_text: ["(a) Talk the issue over with another friend.", "(b) Angrily confront her friend about making such statements.", "(c) Realize that children develop at different rates.", "(d) Talk to a doctor about what the normal rates of development are."]},
  {item: "STEM17", question_text: "Jumah has been working at a new job part-time while he studies. His shift times for the week are changed at the last minute, without consulting him. What action would be the most effective for Jumah?", situation: "Jumah has been working at a new job part-time while he studies. His shift times for the week are changed at the last minute, without consulting him.", answers_text: ["(a) Refuse to work the new shifts.", "(b) Find out if there is some reasonable explanation for the shift changes.", "(c) Tell the manager in charge of shifts that he is not happy about it.", "(d) Grumpily accept the changes and do the shifts."]},
  {item: "STEM18", question_text: "Julie hasn&#39;t seen Ka for ages and looks forward to their weekend trip away. However, Ka has changed a lot and Julie finds that she is no longer an interesting companion. What action would be the most effective for Julie?", situation: "Julie hasn&#39;t seen Ka for ages and looks forward to their weekend trip away. However, Ka has changed a lot and Julie finds that she is no longer an interesting companion.", answers_text: ["(a) Cancel the trip and go home.", "(b) Realize that it is time to give up the friendship and move on.", "(c) Understand that people change, so move on, but remember the good times.", "(d) Concentrate on her other, more rewarding friendships."]}
];

var STEM_trial = {
  data: function(){
    return {trialnum: trialnum, blocknum: blocknum}
  },
  timeline: [


// Question

  {type: jsPsychSurveyMultiChoice,
  questions: function(){ 
    return [
  {
    prompt: jsPsych.timelineVariable('question_text'), 
    name: jsPsych.timelineVariable('item'), 
    options:  jsPsych.timelineVariable('answers_text'), 
    required: false
  }
  ]},
  on_finish: function(data) {

    data.trial_type = "Stimulus Response";
    data.item = jsPsych.timelineVariable('item');


// Pull out selection



const keys = Object.keys(data.response);
const firstKey = keys[0];
const firstValue = data.response[firstKey];




if(jsPsych.timelineVariable('answers_text')[0] == firstValue) {data.selection = 0}
if(jsPsych.timelineVariable('answers_text')[1] == firstValue) {data.selection = 1}
if(jsPsych.timelineVariable('answers_text')[2] == firstValue) {data.selection = 2}
if(jsPsych.timelineVariable('answers_text')[3] == firstValue) {data.selection = 3}



// Scoring

    data.correct = 0;

if(jsPsych.timelineVariable('item') == "STEM01" & data.selection+ 1 == 1) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM01" & data.selection+ 1 == 2) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM01" & data.selection+ 1 == 3) {data.correct =  0.916666667}
if(jsPsych.timelineVariable('item') == "STEM01" & data.selection+ 1 == 4) {data.correct =  0.083333333}
if(jsPsych.timelineVariable('item') == "STEM02" & data.selection+ 1 == 1) {data.correct =  0.75}
if(jsPsych.timelineVariable('item') == "STEM02" & data.selection+ 1 == 2) {data.correct =  0.25}
if(jsPsych.timelineVariable('item') == "STEM02" & data.selection+ 1 == 3) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM02" & data.selection+ 1 == 4) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM03" & data.selection+ 1 == 1) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM03" & data.selection+ 1 == 2) {data.correct =  0.166666667}
if(jsPsych.timelineVariable('item') == "STEM03" & data.selection+ 1 == 3) {data.correct =  0.833333333}
if(jsPsych.timelineVariable('item') == "STEM03" & data.selection+ 1 == 4) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM04" & data.selection+ 1 == 1) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM04" & data.selection+ 1 == 2) {data.correct =  1}
if(jsPsych.timelineVariable('item') == "STEM04" & data.selection+ 1 == 3) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM04" & data.selection+ 1 == 4) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM05" & data.selection+ 1 == 1) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM05" & data.selection+ 1 == 2) {data.correct =  0.166666667}
if(jsPsych.timelineVariable('item') == "STEM05" & data.selection+ 1 == 3) {data.correct =  0.75}
if(jsPsych.timelineVariable('item') == "STEM05" & data.selection+ 1 == 4) {data.correct =  0.083333333}
if(jsPsych.timelineVariable('item') == "STEM06" & data.selection+ 1 == 1) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM06" & data.selection+ 1 == 2) {data.correct =  0.833333333}
if(jsPsych.timelineVariable('item') == "STEM06" & data.selection+ 1 == 3) {data.correct =  0.166666667}
if(jsPsych.timelineVariable('item') == "STEM06" & data.selection+ 1 == 4) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM07" & data.selection+ 1 == 1) {data.correct =  0.083333333}
if(jsPsych.timelineVariable('item') == "STEM07" & data.selection+ 1 == 2) {data.correct =  0.916666667}
if(jsPsych.timelineVariable('item') == "STEM07" & data.selection+ 1 == 3) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM07" & data.selection+ 1 == 4) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM08" & data.selection+ 1 == 1) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM08" & data.selection+ 1 == 2) {data.correct =  0.25}
if(jsPsych.timelineVariable('item') == "STEM08" & data.selection+ 1 == 3) {data.correct =  0.75}
if(jsPsych.timelineVariable('item') == "STEM08" & data.selection+ 1 == 4) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM09" & data.selection+ 1 == 1) {data.correct =  0.75}
if(jsPsych.timelineVariable('item') == "STEM09" & data.selection+ 1 == 2) {data.correct =  0}
if(jsPsych.timelineVariable('item') == "STEM09" & data.selection+ 1 == 3) {data.correct =  0.166666667}
if(jsPsych.timelineVariable('item') == "STEM09" & data.selection+ 1 == 4) {data.correct =  0.083333333}


if(jsPsych.timelineVariable('item') == "STEM10" & data.selection + 1 == 1){data.correct = 0.75}
if(jsPsych.timelineVariable('item') == "STEM10" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM10" & data.selection + 1 == 3){data.correct = 0.25}
if(jsPsych.timelineVariable('item') == "STEM10" & data.selection + 1 == 4){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM11" & data.selection + 1 == 1){data.correct = 0.916666667}
if(jsPsych.timelineVariable('item') == "STEM11" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM11" & data.selection + 1 == 3){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM11" & data.selection + 1 == 4){data.correct = 0.083333333}
if(jsPsych.timelineVariable('item') == "STEM12" & data.selection + 1 == 1){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM12" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM12" & data.selection + 1 == 3){data.correct = 0.083333333}
if(jsPsych.timelineVariable('item') == "STEM12" & data.selection + 1 == 4){data.correct = 0.916666667}
if(jsPsych.timelineVariable('item') == "STEM13" & data.selection + 1 == 1){data.correct = 0.166666667}
if(jsPsych.timelineVariable('item') == "STEM13" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM13" & data.selection + 1 == 3){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM13" & data.selection + 1 == 4){data.correct = 0.833333333}
if(jsPsych.timelineVariable('item') == "STEM14" & data.selection + 1 == 1){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM14" & data.selection + 1 == 2){data.correct = 0.083333333}
if(jsPsych.timelineVariable('item') == "STEM14" & data.selection + 1 == 3){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM14" & data.selection + 1 == 4){data.correct = 0.916666667}
if(jsPsych.timelineVariable('item') == "STEM15" & data.selection + 1 == 1){data.correct = 0.166666667}
if(jsPsych.timelineVariable('item') == "STEM15" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM15" & data.selection + 1 == 3){data.correct = 0.833333333}
if(jsPsych.timelineVariable('item') == "STEM15" & data.selection + 1 == 4){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM16" & data.selection + 1 == 1){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM16" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM16" & data.selection + 1 == 3){data.correct = 0.25}
if(jsPsych.timelineVariable('item') == "STEM16" & data.selection + 1 == 4){data.correct = 0.75}
if(jsPsych.timelineVariable('item') == "STEM17" & data.selection + 1 == 1){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM17" & data.selection + 1 == 2){data.correct = 0.75}
if(jsPsych.timelineVariable('item') == "STEM17" & data.selection + 1 == 3){data.correct = 0.25}
if(jsPsych.timelineVariable('item') == "STEM17" & data.selection + 1 == 4){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM18" & data.selection + 1 == 1){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM18" & data.selection + 1 == 2){data.correct = 0}
if(jsPsych.timelineVariable('item') == "STEM18" & data.selection + 1 == 3){data.correct = 0.916666667}
if(jsPsych.timelineVariable('item') == "STEM18" & data.selection + 1 == 4){data.correct = 0.083333333}









  },
},





// Summary trial to store all the data typically required (nothing is displayed to the particpant) and do the staircasing
{
  type: jsPsychCallFunction,
  func: function(data){


  },
  on_finish: function(data){

    data.rt = jsPsych.data.get().filter({trial_type: "Stimulus Response"}).last().values()[0].rt;
    data.response = jsPsych.data.get().filter({trial_type: "Stimulus Response"}).last().values()[0].response;
    data.correct = jsPsych.data.get().filter({trial_type: "Stimulus Response"}).last().values()[0].correct;
    data.trial_type = "Summary Trial"
    trialnum++;

  }
},
],
  timeline_variables: STEM_question_prompts
};





/* 
  ===============================================================
  =                    STEU PROCEDURE                     =
  ===============================================================
*/

// STEU Instructions
  var STEU_instructions = {
    type: jsPsychInstructions,
    pages: [
      '<p class="instructions">Welcome to the task!</p>' +
        '<p class = "instructions">The following questions each describe a situation, and ask you to choose which of five emotions is most likely to result from that situation.</p>' +
        '<p class = "instructions"><em>Here is an example</em></p>' +
        '<p class = "instructions"><strong>Clara receives a gift. Clara is most likely to feel?</strong></p>' +
        '<p class = "instructions">(a) happy  (b) angry  (c) frightened  (d) bored  (e) hungry</p>' + '<br>' +
        '<p class="instructions">If you think Clara would feel happy, you would select option A and then move to the next question. There are 19 questions.</p>' +
        '<p class="instructions">Please respond quickly and to the best of your ability.</p>',

        ],
   show_clickable_nav: true
 }








/////////////// **********   STEU TRIAL  ***************************** ///////////////

STEU_question_prompts = [

  {item: "STEU01", question_text: "Xavier completes a difficult task on time and under budget. Xavier is most likely to feel?",  
  answers_text: ["(a) Surprise",   "(b) Pride",   "(c) Relief",   "(d) Hope",   "(e) Joy" ]},
  {item: "STEU02", question_text: "If the current situation continues, Denise's employer will probably be able to move her job to a location much closer to her home, which she really wants. Denise is most likely to feel?",  
  answers_text: ["(a) Distress",   "(b) Joy",   "(c) Surprise",   "(d) Hope",   "(e) Fear" ]},
  {item: "STEU03", question_text: "Song finds out that a friend of hers has borrowed money from others to pay urgent bills, but has in fact used the money for less serious purposes. Song is most likely to feel?",  
  answers_text: ["(a) Anger",   "(b) Excitement",   "(c) Contempt", "(d) Shame",  "(e) Horror"]},
  {item: "STEU04", question_text: "Charles is meeting a friend to see a movie. The friend is very late and they are not in time to make it to the movie. Charles is most likely to feel?",  
  answers_text: ["(a) Depressed", "(b) Frustrated", "(c) Angry", "(d) Contemptuous", "(e) Distressed" ]},
  {item: "STEU05", question_text: "Someone believes that another person harmed them on purpose. There is not a lot that can be done to make things better. The person involved is most likely to feel?",  
  answers_text: ["(a) Dislike", "(b) Rage", "(c) Jealousy", "(d) Surprise", "(e) Anxiety"]},
  {item: "STEU06", question_text: "Jim enjoys spending Saturdays playing with his children in the park. This year they have sporting activities on Saturdays and cannot go to the park with him any more. Jim is most likely to feel?",  
  answers_text: ["(a) Angry", "(b) Sad", "(c) Frustrated", "(d) Distressed", "(e) Ashamed"]},
  {item: "STEU07", question_text: "Megan is looking to buy a house. Something happened and she felt regret. What is most likely to have happened?",  
  answers_text: [
    "(a) She didn't make an offer on a house she wanted, and now she is trying to find out if it is too late.",
    "(b) She found a house she liked that she didn't think she would find.",
    "(c) She couldn't make an offer on a house she liked because the bank didn't get her the money in time.",
    "(d) She didn't make an offer on a house she liked and now someone else has bought it.",
    "(e) She made an offer on a house and is waiting to see if it is accepted."
    ]},
  {item: "STEU08", question_text: "Mary was working at her desk. Something happened that caused her to feel surprised. What is most likely to have happened?",  
  answers_text: [
    "(a) Her work-mate told a silly joke.",
    "(b) She was working on a new task she hadn't dealt with before.",
    "(c) She found some results that were different from what she thought they would be.",
    "(d) She realized she would not be able to complete her work.",
    "(e) She had to do a task she didn't normally do at work."

    ]},
  {item: "STEU09", question_text: "Someone thinks that another person has deliberately caused something good to happen to them. They are most likely to feel?",  
  answers_text: ["(a) Hope", "(b) Pride", "(c) Gratitude", "(d) Surprise", "(e) Relief"]},
  {item: "STEU10", question_text: "By their own actions, a person reaches a goal they wanted to reach. The person is most likely to feel?",  
  answers_text: ["(a) Joy", "(b) Hope", "(c) Relief", "(d) Pride", "(e) Surprise"]},
  {item: "attention_check", question_text: "Please select option c for this item to show you are paying attention", answers_text: ["(a) Sad.", "(b) Anxious.", "(c) Happy.", "(d) Afraid"]},
  {item: "STEU11", question_text: "An unwanted situation becomes less likely or stops altogether. The person involved is most likely to feel?",  
  answers_text: ["(a) Regret", "(b) Hope", "(c) Joy", "(d) Sadness", "(e) Relief"]},
  {item: "STEU12", question_text: "Hasad tries to use his new mobile phone. He has always been able to work out how to use different appliances, but he cannot get the phone to function. Hasad is most likely to feel?",  
  answers_text: ["(a) Distressed", "(b) Confused", "(c) Surprised", "(d) Relieved", "(e) Frustrated"]},
  {item: "STEU13", question_text: "Dorian's friend is ill and coughs all over him without bothering to turn away or cover his mouth. Dorian is most likely to feel?",  
  answers_text: ["(a) Anxiety", "(b) Dislike", "(c) Surprise", "(d) Jealousy", "(e) Rage"]},
  {item: "STEU14", question_text: "Quan and his wife are talking about what happened to them that day. Something happened that caused Quan to feel surprised. What is most likely to have happened?",  
  answers_text: [
    "(a) His wife talked a lot, which did not usually happen.",
    "(b) His wife talked about things that were different to what they usually discussed.",
    "(c) His wife told him that she might have some bad news.",
    "(d) His wife told Quan some news that was not what he thought it would be.",
    "(e) His wife told a funny story."

    ]},
  {item: "STEU15", question_text: "A supervisor who is unpleasant to work for leaves Alfonso's work. Alfonso is most likely to feel?",  
  answers_text: ["(a) Joy", "(b) Hope", "(c) Regret", "(d) Relief", "(e) Sadness"]},
  {item: "STEU16", question_text: "The nature of Sara's job changes due to unpredictable factors and she no longer gets to do the portions of her work that she most enjoyed. Sara is most likely to feel?",  
  answers_text: ["(a) Ashamed", "(b) Sad", "(c) Angry", "(d) Distressed", "(e) Frustrated"]},
  {item: "STEU17", question_text: "Leila has been unable to sleep well lately and there are no changes in her life that might indicate why. Leila is most likely to feel? ",  
  answers_text: ["(a) Angry", "(b) Scared", "(c) Sad", "(d) Distressed", "(e) Guilty"]},
  {item: "STEU18", question_text: "Someone believes another person has deliberately caused something good to stop happening to them. However, they feel they can do something about it. They are most likely to feel?",  
  answers_text: ["(a) Angry", "(b) Contemptuous", "(c) Distress", "(d) Depressed", "(e) Frustrated"]},
  {item: "STEU19", question_text: "Matthew has been at his current job for six months. Something happened that caused him to feel regret. What is most likely to have happened?",  
  answers_text: [
    "(a) He did not apply for a position he wanted and has found out that someone else less qualified got the job.",
    "(b) He did not apply for a position he wanted and has started looking for a similar position.",
    "(c) He found out that opportunities for promotion have dried up.",
    "(d) He found out that he didn't get a position he thought he would get",
    "(e) He didn't hear about a position he could have applied for and now it is too late"

    ]}
  ]






var STEU_trial = {
  data: function(){
    return {trialnum: trialnum, blocknum: blocknum}
  },
  timeline: [


// Question

    {type: jsPsychSurveyMultiChoice,
    questions: function(){
    return [
    {
      prompt: jsPsych.timelineVariable('question_text'), 
      name: jsPsych.timelineVariable('item'), 
      options:  jsPsych.timelineVariable('answers_text'), 
      required: false
    }
    ]},
    on_finish: function(data) {

      data.trial_type = "Stimulus Response";
      data.item = jsPsych.timelineVariable('item');


// Pull out selection



      const keys = Object.keys(data.response);
      const firstKey = keys[0];
      const firstValue = data.response[firstKey];




      if(jsPsych.timelineVariable('answers_text')[0] == firstValue) {data.selection = 0};
      if(jsPsych.timelineVariable('answers_text')[1] == firstValue) {data.selection = 1};
      if(jsPsych.timelineVariable('answers_text')[2] == firstValue) {data.selection = 2};
      if(jsPsych.timelineVariable('answers_text')[3] == firstValue) {data.selection = 3};



// Scoring

      data.correct = 0;

      if(jsPsych.timelineVariable('item') == "STEU01" & data.selection+ 1 == 2) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU02" & data.selection+ 1 == 4) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU03" & data.selection+ 1 == 3) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU04" & data.selection+ 1 == 3) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU05" & data.selection+ 1 == 1) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU06" & data.selection+ 1 == 2) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU07" & data.selection+ 1 == 4) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU08" & data.selection+ 1 == 3) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU09" & data.selection+ 1 == 3) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU10" & data.selection+ 1 == 4) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU11" & data.selection+ 1 == 5) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU12" & data.selection+ 1 == 5) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU13" & data.selection+ 1 == 2) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU14" & data.selection+ 1 == 4) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU15" & data.selection+ 1 == 4) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU16" & data.selection+ 1 == 2) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU17" & data.selection+ 1 == 4) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU18" & data.selection+ 1 == 1) {data.correct =  1};
      if(jsPsych.timelineVariable('item') == "STEU19" & data.selection+ 1 == 1) {data.correct =  1};




    },
  },


// Summary trial to store all the data typically required (nothing is displayed to the particpant) and do the staircasing
  {
    type: jsPsychCallFunction,
    func: function(data){


    },
    on_finish: function(data){

      data.rt = jsPsych.data.get().filter({trial_type: "Stimulus Response"}).last().values()[0].rt;
      data.response = jsPsych.data.get().filter({trial_type: "Stimulus Response"}).last().values()[0].response;
      data.correct = jsPsych.data.get().filter({trial_type: "Stimulus Response"}).last().values()[0].correct;
      trial_type = "Summary Trial"
      trialnum++;

    }
  },
  ],
timeline_variables: STEU_question_prompts
};

