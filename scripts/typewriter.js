var txt = 
'Seeking a programming internship in the Dallas or Austin area for the summer of 2021.<br/><br/><a href="https://github.com/tim-tersigni" style="color: white">Contact me!<\a> ';
var speed = 50;
var i = 0;
var inTag = false;

console.log('typewriter.js loaded');
typeWriter();

function typeWriter () {
      if (i < txt.length) {
        document.getElementById('status').innerHTML = txt.substring(0, i) +'<span aria-hidden="true"></span>';

        if (txt.charAt(i) === '<')
          inTag = true;
        if (txt.charAt(i) === '>')
          inTag = false;

        i++;

        if (!inTag)
          setTimeout(typeWriter, speed);
        else
          typeWriter();
      }
}