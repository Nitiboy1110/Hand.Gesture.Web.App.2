
prediction_1 = " "

prediction_2 = " "

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("cam");

Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("photo_result").innerHTML = '<img id="captured_img" src=" ' + data_uri + '"/>' ;
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XRBbxGsEm/model.json' , modelLoaded);

function modelLoaded()
{
    console.log('Model Has Been Loaded');
}

function speak()
{
    var synth = window.speechSynthesis ; 
    speech_data_1 = "The first predection is " + prediction_1;
    speech_data_2 = "The second predection is " + prediction_2;
    var UtterThis = new SpeechSynthesisUtterance (speech_data_1 + speech_data_2);
    synth.speak(UtterThis);
}

//end of Hand Gesture Web-App 2//