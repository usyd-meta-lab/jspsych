
/* 
===============================================================
=              TASK PARAMETERS              =
===============================================================
*/

let sliderVal = null;   // Tracks slider value
let phase = null;        // Tracks current phase: "Study" or "Test"
let study_time = 8000;
let tetris_time = 120000;
let require_quiz_response = false;

/* ---------- Lenient scoring helpers ---------- */
/*  Levenshtein distance (iterative, two‑row) */
function levenshtein(a, b) {
  if (a === b) return 0;
  const alen = a.length, blen = b.length;
  if (alen === 0) return blen;
  if (blen === 0) return alen;
  let v0 = new Array(blen + 1).fill(0);
  let v1 = new Array(blen + 1).fill(0);
  for (let i = 0; i <= blen; i++) v0[i] = i;
  for (let i = 0; i < alen; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < blen; j++) {
      const cost = a[i] === b[j] ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1,          // deletion
        v0[j + 1] + 1,       // insertion
        v0[j] + cost);       // substitution
      }
      [v0, v1] = [v1, v0];
    }
    return v0[blen];
  }
  /*  Detect simple transposition of two adjacent letters */
  function isTransposition(a, b) {
    if (a.length !== b.length) return false;
    let diff = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff.push(i);
      if (diff.length > 2) return false;
    }
    return diff.length === 2 &&
    a[diff[0]] === b[diff[1]] &&
    a[diff[1]] === b[diff[0]];
  }
  /*  Lenient match: exact OR edit‑distance ≤1 OR simple transposition */
  function isLenientMatch(resp, correct) {
    if (resp === correct) return true;
    if (levenshtein(resp, correct) <= 1) return true;
    return isTransposition(resp, correct);
  }
  
  
  
  
  /* 
  ===============================================================
  =              INSTRUCTIONS              =
  ===============================================================
  */
  
  
  /* ---------- Instructions: Judging Relative Efficacy ---------- */
  const efficacy_instructions = {
    type: jsPsychInstructions,   // use jsPsych.plugins['instructions'] if you prefer
    pages: [
      
      /* Page 1 – Why you are making this judgment */
      `
    <h2>Which study strategy worked better <em>for you</em>?</h2>
    <p>You have just finished learning a list of <strong>word-pairs</strong>.</p>
    <p style="max-width:60ch; margin:0 auto; text-align:left;">
      &bull; For <strong>some</strong> of the pairs you simply <strong>re-read</strong> them.<br>
      &bull; For the others you <strong>quizzed yourself</strong> by trying to recall the target word.
    </p>
    <p>On the next screen you will see a slider labelled from &ldquo;Re-reading more effective&rdquo; (left) to &ldquo;Quizzing more effective&rdquo; (right).</p>
    `,
      
      /* Page 2 – How to use the slider */
      `
    <h2>Using the slider</h2>
    <p style="max-width:60ch; margin:0 auto; text-align:left;">
      &bull; If you feel <strong>re-reading</strong> helped you remember the pairs <em>much more</em> than quizzing, drag the slider far to the left.<br><br>
      &bull; If you feel <strong>quizzing</strong> helped <em>much more</em> than re-reading, drag it far to the right.<br><br>
      &bull; If you think they&#39;re <strong>about equally effective</strong>, place the slider in the middle at &ldquo;No difference.&rdquo;<br><br>
      &bull; The farther you move the slider from the centre, the <em>bigger</em> the difference you are reporting.
    </p>
    `,
      
      /* Page 3 – Practical tips & reminder */
      `
    <h2>Before you continue</h2>
    <p style="max-width:60ch; margin:0 auto; text-align:left;">
      &bull; Use your mouse or trackpad to move the slider.<br>
      &bull; Base your judgment purely on how well <em>you personally</em> remembered the word-pairs during the learning phase.<br>
      &bull; There are no right or wrong answers &ndash; we&#39;re interested in your honest opinion.
    </p>
    <p>When you&#39;re ready, click &ldquo;Next&rdquo; to record your judgment.</p>
    `
    ],
    show_clickable_nav: true,
    button_label_next: "Next",
    button_label_previous: "Back"
  };
  
  
  
  /* 
  ===============================================================
  =             TETRIS              =
  ===============================================================
  */
  
  
  // preload and timeline setup …
  const tetris_trial = {
    timeline: [
      
      {
        type: jsPsychInstructions,
        pages: [
          "<p><strong>Tetris time!</strong> Use &larr; &rarr; to move, &uarr; to rotate, &darr; to soft-drop, space to hard-drop. Press P to pause.</p>",
          "<p>Clear rows to score points. Game ends when blocks reach the top.</p>"
        ],
        show_clickable_nav: true
      },
      
      {
        type: TetrisPlugin,   
        total_duration_ms: tetris_time,  
        grid_cols: 10,
        grid_rows: 20,
        cell_px: 28,
        drop_interval: 600
      }
    ]
    
  }
  
  
  /* 
  ===============================================================
  =             CONDITIONAL PRESENTATION              =
  ===============================================================
  */
  
  
  /* ---------- Condition‑dependent stimulus builder ---------- */
  // Will be filled once the `condition` value arrives from jsPsychPipe
  let presentation = [];
  let stimuli      = [];
  
  function initStimuli(cond){
    let pres;
    if (cond === 0){
      pres = jsPsych.randomization.repeat(["Read","Quiz"], [28,12]);
    } else if (cond === 1){
      pres = jsPsych.randomization.repeat(["Read","Quiz"], [12,28]);
    } else {
      pres = jsPsych.randomization.repeat(["Read","Quiz"], [20,20]);
    }
    
    presentation.length = 0;
    presentation.push(...pres);
    
    stimuli.length = 0;
    pres.forEach((p,i)=>{
      stimuli.push({
        cue:    cue[i],
        target: target[i],
        presentation: p
      });
    });
    console.log("Stimuli initialised for condition", cond);
  }
  
  // Expose to index.html
  window.initStimuli = initStimuli;
  
  


  
  // -------------------
  // Fixed-position display to prevent vertical shift
  // -------------------

const style = document.createElement('style');
style.innerHTML = `
  :root { --pair-block-height: 180px; }
  /* Fixed word-pair that does not move regardless of extra content */
  .fixed-pair {
    position: fixed;
    left: 50%;
    top: 22vh;                 /* tune if you want it a bit higher/lower */
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;               /* ensure it sits above other trial elements */
    pointer-events: none;      /* don't intercept clicks/drag */
  }
  .pair { font-size: 28pt; font-weight: 700; margin: 0; }

  /* Placeholder reserves vertical space so later content (e.g., slider) doesn't overlap */
  .pair-placeholder { height: var(--pair-block-height); }

  .jol-question { margin-top: 12px; font-size: 16pt; text-align: center; }
`;
document.head.appendChild(style);

// Helper: renders fixed pair + a placeholder to keep layout consistent.
function pairStimFixed(stim, includeQuestion) {
  const q = includeQuestion
    ? `<p class="jol-question">What is the likelihood that you will successfully recall this pair on a later test?</p>`
    : '';
  return `
    <div class="fixed-pair"><p class="pair"><strong>${stim}</strong></p></div>
    <div class="pair-placeholder" aria-hidden="true"></div>
    ${q}
  `;
}

  
  
  // -------------------
  // Study Phase
  // -------------------
  var study_trial = {
    data: function(){
      return {trialnum: trialnum, blocknum: blocknum, phase: phase}
    },
    timeline: [
      
      // Study
{
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    const stim = jsPsych.evaluateTimelineVariable('cue') + ' - ' + jsPsych.evaluateTimelineVariable('target');
    return pairStimFixed(stim, false);
  },
  choices: "NO_KEYS",
  trial_duration: study_time / 2,
  on_finish: function (data) { data.trial_type = "Read"; }
},

// JOL
{
  timeline: [{
    type: jsPsychHtmlSliderResponse,
    stimulus: function () {
      const stim = jsPsych.evaluateTimelineVariable('cue') + ' - ' + jsPsych.evaluateTimelineVariable('target');
      // Same frame, but question is visible here
      return pairStimFixed(stim, true);
    },
    trial_duration: study_time / 2,
    labels: ['0% chance', '50% chance', '100% chance'],
    on_finish: function (data) { data.trial_type = "JOL"; }
  }],
  conditional_function: function () {
    // your condition logic (left as-is)
    if (condition == 4 | condition == 5 | condition == 6 | condition == 7) {
      return true;
    } else {
      return false;
    }
  }
},
    


      // Study (if no JOL)
      {
        timeline: [{
          type: jsPsychHtmlKeyboardResponse,
          stimulus: function() {
            var stim = jsPsych.evaluateTimelineVariable('cue') + ' - ' + jsPsych.evaluateTimelineVariable('target');
            return pairStimFixed(stim, false);
          },
          choices: "NO_KEYS",
          trial_duration: study_time/2,
          on_finish: function(data){
            data.trial_type = "Read";
          }
            }],
           conditional_function: function(){
        if(condition == 0 | condition == 1 | condition == 2 | condition == 3){
          return true;
        } else {
          return false;
        }
      }
    },
    
    
    // Summary trial
    {
      type: jsPsychCallFunction,
      func: function(){
        
      },
      on_finish: function(data){
        data.trial_type = "Study Trial";
        
        
        // Data
        data.cue = jsPsych.evaluateTimelineVariable('cue');
        data.correct_target = jsPsych.evaluateTimelineVariable('target');
        
        
        
        
        trialnum++;  // Increment the trial number.
      }
    }
    
  ]}
  
  var study_procedure = {
    timeline: [study_trial],
    timeline_variables: stimuli,
    randomize_order: true,
    on_timeline_start: function() {
      phase = "Study";
    }
  };
  
  
  
  
  // -------------------
  // Test Phase
  // -------------------
  var test_trial = {
    type: jsPsychSurveyText,
    questions: function(){
      return(
        
        [
          {
            prompt: `What word was paired with: <strong>${jsPsych.evaluateTimelineVariable('cue')}</strong>?`,
            name: 'response',
            required: true
          }
        ]
        
      )
    }
    ,
    data: {
      trialnum: trialnum,
      blocknum: blocknum,
      phase: phase,
      trial_type: "Test Trial",
      cue: jsPsych.evaluateTimelineVariable('cue'),
      correct_target: jsPsych.evaluateTimelineVariable('target'),
      presentation: jsPsych.evaluateTimelineVariable('presentation')
    },
    on_finish: function(data) {
      
      
      data.cue = jsPsych.evaluateTimelineVariable('cue');
      data.correct_target = jsPsych.evaluateTimelineVariable('target');
      
      // SurveyText returns an object; extract the string before trimming
      const rawResp = (data.response && data.response.response) ? data.response.response : "";
      data.response = rawResp.trim().toLowerCase();
      const resp = data.response;
      const corr = data.correct_target;
      data.strict_correct  = resp === corr;
      data.lenient_correct = isLenientMatch(resp, corr);
      data.correct = data.strict_correct;   // maintains existing field
      
      
      trialnum++;  // Increment the trial number.
    }
  };
  
  var test_procedure = {
    timeline: [test_trial],
    timeline_variables: stimuli,
    on_timeline_start: function() {
      phase = "Test";
    }
  };
  
  
  
  
  
  
  // -------------------
  // Timeline
  // -------------------
  var word_pairs = [
    {
      type: jsPsychInstructions,
      pages: [`<div style="max-width: 800px; text-align: left; margin: auto; font-size: 18px;">
      <h2>Paired Associates Learning Task</h2>
      <p>In this task, you will be shown <strong>a series of word pairs</strong>. Each pair consists of two words that are associated with each other. For example, you might see something like:</p>
      <p style="text-align: center;"><strong>apple : fruit</strong></p>
        
      <p>Try to <strong>remember each pair as a unit</strong>. These word pairs will only be presented briefly, so please pay close attention.</p></div>
          `,
        `<h3>Study Phase</h3>
      <p>You will first complete a <strong>study phase</strong>, where you will see one pair at a time on the screen. Each pair will appear for about <strong>4 seconds</strong>. Your job is to remember which words were shown together.</p>
   
      <hr> 
              <h3>Intermission Phase</h3>
      <p>After the study phase, you will have a brief intermission where you will play a game of Tetris</p>
      
      <hr> 
      <h3>Test Phase</h3>
      <p>After the intermission phase, you will move on to the <strong>test phase</strong>. In this phase, you will see only the <strong>first word (the cue)</strong> from each pair, and you will be asked to type the <strong>second word (the target)</strong> that was originally paired with it.</p>
      
      <p style="text-align: center;">For example:</p>
      <p style="text-align: center;"><em>What word was paired with: <strong>apple</strong>?</em></p>
      <p>You would then type: <strong>fruit</strong> and click Continue when you are ready to begin.</p>
`
      ],
      show_clickable_nav: true
    },
    {
      type: jsPsychInstructions,
      pages: [`<div style="max-width: 800px; text-align: center; margin: auto; font-size: 18px;">
            <h2>Study Phase</h2>`
      ],
      show_clickable_nav: true
    },
    study_procedure,
    tetris_trial,
    {
      type: jsPsychInstructions,
      pages: [`<div style="max-width: 800px; text-align: center; margin: auto; font-size: 18px;">
            <h2>Test Phase</h2>
          <p>You will now be tested. Type the word that was paired with the word shown.</p><p>Press any key to begin.</p>`
      ],
      show_clickable_nav: true
    },
    test_procedure
  ];
  
  
  