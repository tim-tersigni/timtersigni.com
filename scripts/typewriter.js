console.log('typewriter.js using observer');

var txt = 
'Seeking a programming internship in the Dallas or Austin area for the summer of 2021. I am hardworking and always eager to learn! Please contact me with any opportunities.<br/><br/>Contact me: <a href="mailto:timothy.tersigni.dev@gmail.com" target="_blank" style="color: white">timothy.tersigni.dev@gmail.com<\a> ';
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

        if (!inTag)
          setTimeout(typeWriter, speed);
        else
          typeWriter();
      }
}

// Intersection Observer triggers typeWriter function when status is in view
let options = {
  root: null,
  rootMargin: '0px',
  threshold: .3
}
let observer = new IntersectionObserver(typeWriter, options);
observer.observe(document.getElementById('status'));