// THIS IS FOR VIDEO PREVIEW PRACTICE

console.log("page loaded...");
function over() {
    var video = document.getElementById("stars");
    video.muted=true;
    video.play();
  }
  
  function out() {
    var video = document.getElementById("stars");
    video.pause();
}  
