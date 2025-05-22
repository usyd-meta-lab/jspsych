
/* 
  ===============================================================
  =              TASK PARAMETERS              =
  ===============================================================
*/

let sliderVal = null;   // Tracks slider value






/* 
  ===============================================================
  =              EFFICACY RATING              =
  ===============================================================
*/


 
    // Custom stimulus HTML with instructions
    const sliderHTML = `
      <p class="eff_instructions" style = "color: grey;">We are now going to ask you to make a judgement about the study techniques that you just used:<br><br><br></p>
      <div class="custom-slider-container">
        <div class="roof">
          <div class="triangle left"  id="tri-left"></div>
          <div class="triangle right" id="tri-right"></div>
        </div>
        <input type="range" id="my-slider" min="0" max="100" value="50" step="1" />
        <div class="custom-slider-labels"><span>Reading</span><span>No Difference</span><span>Quizzing</span></div>
      </div>
      <p class="prompt-below">Rate how effective you think the quizzing was compared to reading, if at all</p>`;

    const eff_rating = {
      type: jsPsychHtmlButtonResponse,
      stimulus: sliderHTML,
      choices: ['Submit'],
      css_classes: ["eff_rating"],
      button_html: function(choice){
        return `<button class="jspsych-btn" id="submit-btn" disabled>${choice}</button>`;
      },
      on_load: () => {
        const slider   = document.getElementById('my-slider');
        const triLeft  = document.getElementById('tri-left');
        const triRight = document.getElementById('tri-right');
        const submitBtn = document.getElementById('submit-btn');
        let moved = false;
        const blue = 'rgba(66,133,244,0.9)';

        slider.addEventListener('input', () => { sliderVal = slider.value; });

         // Now reveal the thumb when the slider is used
        const wrapper = document.querySelector('.eff_rating');
            wrapper.addEventListener('pointerdown', function handleFirstClick() {
              wrapper.style.setProperty('--thumb-visibility', 'visible');
              wrapper.removeEventListener('pointerdown', handleFirstClick);
            });


        function updateFill(){
          const v = Number(slider.value);
          const pctLeft  = Math.max(0, (50 - v) / 50);
          const pctRight = Math.max(0, (v - 50) / 50);
          if(pctLeft>0){
            const p = pctLeft*100;
            triLeft.style.backgroundImage = `linear-gradient(to left, ${blue} 0%, ${blue} ${p}%, #ddd ${p}%, #ddd 100%)`;
          } else { triLeft.style.backgroundImage = 'none'; triLeft.style.background = '#ddd'; }
          if(pctRight>0){
            const p = pctRight*100;
            triRight.style.backgroundImage = `linear-gradient(to right, ${blue} 0%, ${blue} ${p}%, #ddd ${p}%, #ddd 100%)`;
          } else { triRight.style.backgroundImage = 'none'; triRight.style.background = '#ddd'; }
        }
        updateFill();
        slider.addEventListener('input', ()=>{
          updateFill();
          if(!moved){ submitBtn.removeAttribute('disabled'); moved=true; }
        });
      },
      on_finish: data => {
        data.slider_value = sliderVal;
        jsPsych.data.addProperties({efficacy: data.slider_value});
      }
    };



/* 
  ===============================================================
  =              BLOCKS              =
  ===============================================================
*/
