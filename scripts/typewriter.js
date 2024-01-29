console.log('typewriter.js loaded');

var txt = `Seeking a full-time job in software development and IT. 
I am eager to apply my experience and learn new things! Please contact me with any opportunities.<br/><br/>Contact me:
 <a href="mailto:tim.tersigni@gmail.com" target="_blank" style="color: white">tim.tersigni@gmail.com<\a>`;
var speed = 45;
var i = 0;
var inTag = false;
var cursorVisible = true;

function typeWriter() {
  if (i < txt.length) {
    // Add blinking cursor using a conditional operator (ternary operator)
    const cursor = cursorVisible ? "|" : "";
    document.getElementById('status').innerHTML = txt.substring(0, i) + cursor;

    if (txt.charAt(i) === '<')
      inTag = true;
    if (txt.charAt(i) === '>')
      inTag = false;

    i++;
    cursorVisible = !cursorVisible; // Toggle cursor visibility

    if (i === 1)
      setTimeout(typeWriter, 3000);
    else if (!inTag)
      setTimeout(typeWriter, speed);
    else
      typeWriter();
  }
}

typeWriter();
