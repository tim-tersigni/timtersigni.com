function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("scrolled to top")
  }

  document.getElementById("back-to-top").onclick = scrollToTop;