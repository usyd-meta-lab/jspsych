  // Legacy demographics

    var demographics = {
       timeline: [
      {type: jsPsychSurveyHtmlForm,
      preamble: "<font size = '15' color='#002080'>Basic Information</font>",
      html: '<div style = "text-align: left"><br><b> Age: </b><br><input name="age" type="number" min ="17" max = "100" style = "width: 8em;"required></p>' +
      '<b>Sex:</b></p><div><input type="radio" id="male" name="sex" value="male"unchecked><label for="male">Male</label></div><div><input type="radio" id="female" name="sex" value="female"><label for="female">Female</label></div><div><input type="radio" id="other" name="sex" value="other"><label for="other">Non binary/prefer not to say</label></div>' +
      '<br><b>Do you speak english fluently?:</b></p><div><input type="radio" id="yes" name="english" value="yes"unchecked><label for="yes">Yes</label></div><div><input type="radio" id="no" name="english" value="no"><label for="no">No</label></p></div><div></div>',
      on_finish: function(data){
        jsPsych.data.addProperties({age: data.response.age, sex: data.response.sex, english_fluent: data.response.english});
      },
      on_load: function(){
        document.querySelector('#jspsych-survey-html-form-next').disabled = true;


        $('input[type="radio"]').on("click", function(e) {
          if($("input[name=age]" ).val() == '' || $("input[type=radio][name=sex]:checked" ).val() === undefined || $( "input[type=radio][name=english]:checked" ).val() === undefined ){return} else {
            document.querySelector('#jspsych-survey-html-form-next').disabled = false;
          }
        })

        $('input[type="number"]').on("change", function(e) {
          if($("input[name=age]" ).val() == '' || $("input[type=radio][name=sex]:checked" ).val() === undefined || $( "input[type=radio][name=english]:checked" ).val() === undefined ){return} else {
            document.querySelector('#jspsych-survey-html-form-next').disabled = false;
          }
        })



      }
    }
    ],
    conditional_function: function(){
      if(typeof SONAID != 'undefined') {return true} else {return false}
    }}





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












