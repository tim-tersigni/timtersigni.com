console.log('typewriter.js loaded');



var txt = 
'Seeking a programming internship remotely or in the Dallas or Austin area. I am hardworking and always eager to learn! Please contact me with any opportunities.<br/><br/>Contact me: <a href="mailto:tim.tersigni@gmail.com" target="_blank" style="color: white">tim.tersigni.dev@gmail.com<\a> ';
var speed = 50;
var i = 0;
var inTag = false;
function typeWriter () {
      if (i < txt.length) {
        document.getElementById('status').innerHTML = txt.substring(0, i) +'<span aria-hidden="true"></span>';

        if (txt.charAt(i) === '<')
          inTag = true;
        if (txt.charAt(i) === '>')
          inTag = false;

        i++;

        if(i === 1)
          setTimeout(typeWriter, 3000);
        else if (!inTag)
          setTimeout(typeWriter, speed);
        else
          typeWriter();
      }
}

typeWriter();