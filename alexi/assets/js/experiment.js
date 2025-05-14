/* 
  ===============================================================
  =              TASK PARAMETERS              =
  ===============================================================
*/

let tilt = null;
let phase = null;

var preload = {
  type: jsPsychPreload,
  images: images
};


/* 
  ===============================================================
  =              INSTRUCTION SCREENS                            =
  ===============================================================
*/

var instructions_block = {
  type: jsPsychInstructions,
  pages: [
    /* Page 1 – Welcome & cover story */
    `<h2>Welcome!</h2>
     <p>Thank you for taking part in our study on <strong>how feelings influence visual perception</strong>.</p>
     <p>Please read the next pages carefully. You can move forward and backward with the <em>Next</em> and <em>Back</em> buttons.</p>`,

    /* Page 2 – Emotion task */
    `<h3>Emotion task&nbsp;(pictures)</h3>
     <p>You will see photographs that may evoke emotions. Your job is to decide whether each picture makes <em>you</em> feel <strong style="color:green;">positive</strong> or <strong style="color:red;">negative</strong>.</p>
     <p>Press the <kbd>&larr;</kbd> (left-arrow) key if it makes you feel <span style="color:red;">negative</span> and the <kbd>&rarr;</kbd> (right-arrow) key if it makes you feel <span style="color:green;">positive</span>.</p>
     <p>There are no &ldquo;right&rdquo; or &ldquo;wrong&rdquo; answers &ndash; simply report your genuine feeling.</p>`,

    /* Page 3 – Gabor perceptual task */
    `<h3>Perceptual task&nbsp;(striped circle)</h3>
     <p>You will also see a striped circle that is tilted slightly to the left or the right.</p>
     <p>If the stripes tilt <em>left</em>, press the <kbd>&larr;</kbd> key. If they tilt <em>right</em>, press the <kbd>&rarr;</kbd> key.</p>`,

    /* Page 4 – Interleaving & speed */
    `<h3>Interleaved blocks</h3>
     <p>The picture task and the striped-circle task will alternate throughout the study. Keep your fingers on the arrow keys and respond as <strong>quickly and accurately</strong> as you can.</p>`,

    /* Page 5 – Let feelings arise */
    `<h3>Let your feelings arise</h3>
     <p>Some images are quite intense. Allow any emotion to arise naturally and report it honestly &ndash; not how you think you &ldquo;should&rdquo; feel.</p>
     <p>If you ever feel too uncomfortable, you can discontinue by closing the browser window.</p>`,

    /* Page 6 – Ready */
    `<h3>Ready to begin</h3>
     <p>You&rsquo;ll start with a few practice trials so you can get used to the keys.</p>
     <p>Press <strong>Next</strong> to begin.</p>`
  ],
  show_clickable_nav: true,
  button_label_next: "Next",
  button_label_previous: "Back",
  data: {trial_type: "Instructions"}
};


var test_start =
{
  type: jsPsychInstructions,
  pages: ["Practice Complete. When you are ready to begin the test phase, click <strong>Next</strong>"],
  button_label_next: 'Next',
  show_clickable_nav: true,
  data: {trial_type: "Instructions"}
}



/* 
  ===============================================================
  =              TRIALS              =
  ===============================================================
*/


/**
 * Defines the emotion task timeline for the study.
 *
 * This timeline includes:
 *   1. Check that the user is in fullscreen mode
 *   2. A fixation frame trial.
 *   3. An emotional stimulus presentation trial that shows the image and participants respond.
 *
 * External variables referenced in this timeline include:
 *   - `phase`: A variable indicating the current phase (e.g., "Perception" or "Emotion").
 *   - `trialnum`: A counter for the current trial number.
 */



var emotion_task = {
  data: function(){
    return {trialnum: trialnum, blocknum: blocknum, phase: phase}
  },
  timeline: [

    // 1. Check Fullscreen
    {
      timeline: [

        {type: jsPsychFullscreen,
          message: '<p>You need to be in fullscreen mode to continue the experiment! <br></br> Please click the button below to enter fullscreen mode.<br></br><p>',
          fullscreen_mode: true,
          on_finish: function(){
            in_fullscreen = true;
          }
        }
      ],
      conditional_function: function(){
        if(in_fullscreen === true){
          return false;
        } else {
          return true;
        }
      }
    },

    // 2. Fixation frame trial
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
      <div style="display: flex; justify-content: space-between; align-items: center; height: 90vh; background-color: black; color: white; font-size: 2.5vh; padding: 5vh;">
        
        <!-- Left Label -->
        <div style="flex: 1; display: flex; justify-content: center;">
          <div style="border: 0.3vh solid white; padding: 2vh 4vh; color: red;">
            Negative
          </div>
        </div>
  
        <!-- Center Box (Stimulus Placeholder) -->
        <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <div style="width: 40vw; height: 80vh; margin: 0 5vw; border: 0.3vh solid white;"></div>
        </div>
  
        <!-- Right Label -->
        <div style="flex: 1; display: flex; justify-content: center;">
          <div style="border: 0.3vh solid white; padding: 2vh 4vh; color: green;">
            Positive
          </div>
        </div>
  
      </div>
    `,
      choices: "NO_KEYS",
      trial_duration: 1500,
      on_finish: function(data){
        data.trial_type = "Emotion Fixation"
      }
    },


    // 3. Emotion response
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){ return (`
      <div style="display: flex; justify-content: space-between; align-items: center; height: 90vh; background-color: black; color: white; font-size: 2.5vh; padding: 5vh;">
        
        <!-- Left Label -->
        <div style="flex: 1; display: flex; justify-content: center;">
          <div style="border: 0.3vh solid white; padding: 2vh 4vh; color: red;">
            Negative
          </div>
        </div>
  
        <!-- Center Box (Stimulus and instruction) -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; margin: 0 5vw;">
          <img src="assets/img/` + jsPsych.evaluateTimelineVariable('image') + `.jpg" style="width: 40vw; height: 80vh; margin-bottom: 2vh; border: 0.3vh solid white;"></img>
          <div style="font-size: 2vh; color: white; text-align: center;">
            How does this picture make you feel?
          </div>
        </div>
  
        <!-- Right Label -->
        <div style="flex: 1; display: flex; justify-content: center;">
          <div style="border: 0.3vh solid white; padding: 2vh 4vh; color: green;">
            Positive
          </div>
        </div>
  
      </div>
    `)},
      choices: ["ArrowLeft", "ArrowRight"],
      trial_duration: 4500,
      on_finish: function(data){
        data.trial_type = "Emotion Response"
      }
    },




    // 5. Fixation frame for the perceptual task 
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
      <div style="display: flex; justify-content: space-between; align-items: center; height: 90vh; background-color: black; color: white; font-size: 2.5vh; padding: 5vh;">
        
        <!-- Left Label -->
        <div style="flex: 1; display: flex; justify-content: center;">
          <div style="border: 0.3vh solid white; padding: 2vh 4vh; color: white;">
            Left
          </div>
        </div>
  
        <!-- Center Box (Stimulus Placeholder) -->
       <div style="flex:1; display:flex; justify-content:center; align-items:center; margin:0 5vw;">
          <canvas id="gaborCanvas" style="width:40vw; height:40vw; border:0.3vh solid white; border-radius: 50%; overflow:hidden;"></canvas>
        </div>
  
        <!-- Right Label -->
        <div style="flex: 1; display: flex; justify-content: center;">
          <div style="border: 0.3vh solid white; padding: 2vh 4vh; color: white;">
            Right
          </div>
        </div>
  
      </div>
    `,
      choices: "NO_KEYS",
      trial_duration: 1500,
      on_finish: function(data){
        data.trial_type = "Gabor Fixation"
      }
    },


    // 6. Gabor patch presentation
{
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      return `
      <div style="display:flex; justify-content:space-between; align-items:center;
                  height:90vh; background:black; color:white; font-size:2.5vh; padding:5vh;">
  
        <!-- Left box -->
        <div style="flex:1; display:flex; justify-content:center;">
          <div style="border:0.3vh solid white; padding:2vh 4vh;">Left</div>
        </div>
  
        <!-- Centre canvas -->
        <div style="flex:1; display:flex; justify-content:center; align-items:center; margin:0 5vw;">
            <canvas id="gaborCanvas" style="width:40vw; height:40vw; border:0.3vh solid white; border-radius: 50%; overflow:hidden;"></canvas>
        </div>
  
        <!-- Right box -->
        <div style="flex:1; display:flex; justify-content:center;">
          <div style="border:0.3vh solid white; padding:2vh 4vh;">Right</div>
        </div>
  
      </div>`;
    },
    choices: ['ArrowLeft', 'ArrowRight'],
    on_load: function () {
      const canvas = document.getElementById('gaborCanvas');
      const ctx    = canvas.getContext('2d');
  
      /* ---------------- Gabor parameters ---------------- */
      const pxSize  = Math.min(window.innerWidth * 0.4, window.innerHeight * 0.8);
      const sf      = 0.04;                      // cycles per px
      const contrast = 0.5;
      const sigma   = pxSize / 6;
      //const tiltDeg = 10; // true → get the raw value
      var tiltDeg = jsPsych.randomization.sampleWithReplacement([10, -10], 1);
      tilt = tiltDeg;
      const tiltRad = tiltDeg * Math.PI / 180;
      /* -------------------------------------------------- */
  
      canvas.width  = pxSize;
      canvas.height = pxSize;
  
      ctx.fillStyle = 'rgb(128,128,128)';        // grey background
      ctx.fillRect(0, 0, pxSize, pxSize);
  
      const imgData = ctx.createImageData(pxSize, pxSize);
      const data    = imgData.data;
  
      for (let y = 0; y < pxSize; y++) {
        for (let x = 0; x < pxSize; x++) {
          const x0 =  (x - pxSize / 2) * Math.cos(tiltRad) + (y - pxSize / 2) * Math.sin(tiltRad);
          const y0 = -(x - pxSize / 2) * Math.sin(tiltRad) + (y - pxSize / 2) * Math.cos(tiltRad);
  
          const gabor    = Math.sin(2 * Math.PI * sf * x0);
          const gaussian = Math.exp(-(x0 ** 2 + y0 ** 2) / (2 * sigma ** 2));
          const lum      = Math.round(128 + 127 * contrast * gabor * gaussian);
  
          const idx = (y * pxSize + x) * 4;
          data[idx]     = lum;
          data[idx + 1] = lum;
          data[idx + 2] = lum;
          data[idx + 3] = 255;
        }
      }
      ctx.putImageData(imgData, 0, 0);
    },
    on_finish: function(data){
      data.trial_type = "Gabor Presentation";

    },
    trial_duration: 50
  },



    // 6. Gabor patch response
{
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    return `
    <div style="display:flex; justify-content:space-between; align-items:center;
                height:90vh; background:black; color:white; font-size:2.5vh; padding:5vh;">

      <!-- Left box -->
      <div style="flex:1; display:flex; justify-content:center;">
        <div style="border:0.3vh solid white; padding:2vh 4vh;">Left</div>
      </div>

      <!-- Centre canvas -->
      <div style="flex:1; display:flex; justify-content:center; align-items:center; margin:0 5vw;">
          <canvas id="gaborCanvas" style="width:40vw; height:40vw; border:0.3vh solid white; border-radius: 50%; overflow:hidden;"></canvas>
      </div>

      <!-- Right box -->
      <div style="flex:1; display:flex; justify-content:center;">
        <div style="border:0.3vh solid white; padding:2vh 4vh;">Right</div>
      </div>

    </div>`;
  },
  choices: ['ArrowLeft', 'ArrowRight'],
  trial_duration: 4500,
  on_finish: function(data){
    data.trial_type = "Gabor Response";

    if(tilt[0] > 0){data.correct_key = "ArrowRight";} else {data.correct_key = "ArrowLeft";}
    data.correct = data.response == data.correct_key;
  }
},


  // 7. Blank intertrial interval
  {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 500,
    on_finish: function(data){
      data.trial_type = "Intertrial"
    }
  },

    

// Summary Trial
{
  type: jsPsychCallFunction,

  func: function() {
  },
  on_finish: function(data) {

    // Log all the emotion information.
    const lastEmoResp = jsPsych.data.get().filter({trial_type: "Emotion Response"}).last(1).values()[0];
    data.rt         = lastEmoResp.rt;
    data.response   = lastEmoResp.response;
    data.correct    = lastEmoResp.correct;
    data.image = jsPsych.evaluateTimelineVariable("image");
    data.category = jsPsych.evaluateTimelineVariable("category");
    data.valence = jsPsych.evaluateTimelineVariable("valence_M");
    data.valence_bin = jsPsych.evaluateTimelineVariable("val_bin");
    data.val_type = jsPsych.evaluateTimelineVariable("val_type");
    if(lastEmoResp.response == "ArrowRight") {data.emo_response_label = "positive"} else {data.emo_response_label = "negative"}


      // Log all the perceptual information.
      const lastGaboresp = jsPsych.data.get().filter({trial_type: "Gabor Response"}).last(1).values()[0];
      data.gabor_tilt = tilt[0];
      data.gabor_correct_key = lastGaboresp.correct_key;
      data.gabor_response = lastGaboresp.response;
      data.gabor_rt = lastGaboresp.rt;
      data.gabor_correct = lastGaboresp.correct;



    data.trial_type = "Summary Trial";
    trialnum++;  // Increment the trial number.
  }
}
  ]
};





/* 
  ===============================================================
  =              Blocks              =
  ===============================================================
*/


var practice_block = {
  timeline: [emotion_task],
   timeline_variables: prac_stimuli, // stimuli are loaded from stimuli.js
  randomize_order: true,
    on_timeline_start: function() {
    provide_feedback = false;
    phase = "Practice";
  }
}


var test_block = {
  timeline: [emotion_task],
   timeline_variables: stimuli, // stimuli are loaded from stimuli.js
  randomize_order: true,
    on_timeline_start: function() {
    provide_feedback = false;
    phase = "Test";
  }
}






