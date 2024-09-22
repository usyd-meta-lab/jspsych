  // Legacy demographics

    var demographics = {
       timeline: [
      {type: jsPsychSurveyHtmlForm,
      preamble: "<font size = '15' color='#002080'>Basic Information</font>",
      html: '<div style = "text-align: left"><br><p><b> How many years have you been a teacher? </b><br><input name="years_teach" type="number" min ="0" max = "100" style = "width: 8em;"required></p>' +
      '<p><b>Grade Taught:</b></p><div><input type="radio" id="primary" name="grade" value="primary"unchecked><label for="primary">Primary</label></div><div><input type="radio" id="secondary" name="grade" value="secondary"><label for="secondary">Secondary</label></div><div><input type="radio" id="tertiary" name="grade" value="tertiary"><label for="tertiary">Tertiary</label></div>' ,
      on_finish: function(data){
        jsPsych.data.addProperties({years_teach: data.response.years_teach, grade: data.response.grade});
      },
      on_load: function(){
        document.querySelector('#jspsych-survey-html-form-next').disabled = true;


        $('input[type="radio"]').on("click", function(e) {
          if($("input[name=years_teach]" ).val() == '' || $("input[type=radio][name=grade]:checked" ).val() === undefined  ){return} else {
            document.querySelector('#jspsych-survey-html-form-next').disabled = false;
          }
        })

        $('input[type="number"]').on("change", function(e) {
          if($("input[name=years_teach]" ).val() == '' || $("input[type=radio][name=grade]:checked" ).val() === undefined ){return} else {
            document.querySelector('#jspsych-survey-html-form-next').disabled = false;
          }
        })



      }
    }
    ]}





  // Save to server [legacy]
    function saveDataServer(data){
      var xhr = new XMLHttpRequest();
        xhr.open('POST', 'write_data.php'); // 
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({filedata: data}));
      }


      var save_trial = {
        type: jsPsychCallFunction,
        async: true,
        func: function(done){
          saveDataServer(jsPsych.data.get().csv());
          done();
        }
      }


      var save_screen = {
        type: jsPsychHtmlKeyboardResponse,
        choices: "NO_KEYS",
        stimulus : "Saving...please wait",
        trial_duration: 4000
      }












