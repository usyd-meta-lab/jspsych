// Function to count characters
function textCounter(field1, field2)
{
var N = field2;
if(field1.value.length > N | field1.value.length == 0) {
if(field1.value.length > N ){$("#remainingC").html("<p style = 'color:#ff0000;'>characters remaining: " + (N - field1.value.length));}
else {$("#remainingC").html("<p>characters remaining: " + (N - field1.value.length))}
$("#jspsych-html-slider-response-next").prop('disabled', true);

} else {
$("#jspsych-html-slider-response-next").prop('disabled', false);
$("#remainingC").html("characters remaining: " + (N - field1.value.length));
}}
