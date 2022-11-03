var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var inp = document.getElementById('input')

var content = ''

recognition.continuous = true 

recognition.onstart = function(){
  alert("voice recognition is on")  
};
recognition.onspeechend = function(){
  alert("voice recognition is off");  

};
recognition.onerror = function(){
    alert("error occured")
}
recognition.onresult = function(event){
    var current = event.resultIndex

    var transcript = event.results[current][0].transcript

    content += transcript

    inp.val(content)
}

$('#sp').click(function (event){
   if( content.length) {
    content += ' '
    }

    recognition.start()

})