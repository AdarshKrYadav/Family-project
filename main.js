Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var Camera=document.getElementById("camera");
Webcam.attach("#Camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='photo' src='"+data_uri+"'>";
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h6xHrVRJI/.json",modelloaded);
function modelloaded(){
    console.log("Your model has been loaded");
}
function check(){
    var savedimage=document.getElementById("photo");
    classifier.classify(savedimage,gotresult);
}
function gotresult(error,result){
    if(error){console.log(error);}
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}
