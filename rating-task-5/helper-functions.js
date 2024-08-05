function stimSet(t){
function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

var stim_vector = range(0, 119);
var stim_vector = jsPsych.randomization.sampleWithoutReplacement(stim_vector, 20);
var block1_stim = jsPsych.randomization.shuffle(stim_vector);
var block2_stim = jsPsych.randomization.shuffle(stim_vector);
var stim_vector = block1_stim.concat(block2_stim);
return(stim_vector)
}
