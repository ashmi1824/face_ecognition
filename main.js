camera= document.getElementById("camera");
Webcam.attach('#camera');

Webcam.set({
   width:350,
   height:300,
   img_format:'png',
   png_quality:90
});


function take_snapshot(){
     Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="captured_image" src=" '+data_uri+'"/>';
      }); 
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Frt10lE-R/model.json',modelLoaded);
function modelLoaded(){
   console.log("Model Loaded!");
}
function Identify_image(){
   img=document.getElementById("captured_image");
   classifier.classify(img,gotResults);
}
function gotResults(error,results){
   if(error){
      console.error(error);
   }else{
      console.log(results);
      document.getElementById("faceName").innerHTML=results[0].label;
      document.getElementById("confidence").innerHTML=results[0].confidence.toFixed(2);
   }
}
