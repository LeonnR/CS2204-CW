window.addEventListener("load", rotate)
var texts = [
 "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
 "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
 "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
 ];

var randomNumber = Math.floor(Math.random() * texts.length)
document.getElementById('programh2').innerHTML = texts[randomNumber];
document.getElementById('programh2').setAttribute('style', 'font-size: 1.5em; font-weight: bold')
 function rotate() {
    document.getElementById('programh2').innerHTML = texts[randomNumber];
     randomNumber++;
     if (randomNumber >= texts.length) {
         randomNumber = 0;
     }

 }
 setInterval('rotate()', 3000); 


 var firstVideo = document.getElementById('video1')
 var count = 0;

 if (firstVideo.canPlayType('video/mp4')) {
    firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4";
  } else if (firstVideo.canPlayType('video/mkv')) {
    firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv";
  }
// firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4"


console.log(firstVideo);
 
firstVideo.onended = function() {
    count++;
    if (count % 2 !== 0) {
      if (firstVideo.canPlayType('video/mp4')) {
        firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4";
      } else if (firstVideo.canPlayType('video/mkv')) {
        firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv";
      }
    } else {
      if (firstVideo.canPlayType('video/mp4')) {
        firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4";
      } else if (firstVideo.canPlayType('video/mkv')) {
        firstVideo.src = "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv";
      }
    }
  };