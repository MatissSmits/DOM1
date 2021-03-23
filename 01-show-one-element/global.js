
  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.

  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  
  window.addEventListener("load", function(){
    const button = document.querySelector("#more_text_link")
    const textToShow = document.querySelector("#more_text_content")
    textToShow.style.display = "none"
  
  
    button.addEventListener('click', function(e) {
        textToShow.style.display = "initial"
        button.style.display = "none"
    })
  });
  
  
  
  /*
    Atbildes uz jautājumiem
  1. Pēc lapas restartēšanas teksts atkal būs paslēpts, jo restartējot lapu skripts arī restartējas.
  2. Skripts nestrādās, jo vienkārši JS neredzēs visas html izveidotās klases/id jo būs ātrāk ielādējies nekā html.
  3. Metode kas gaida signālu dokumenta par izpildītu eventu.
  */