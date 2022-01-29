// this is a self-invoking anonymous function
// it is also called a module (my variation of the module pattern)
// it's called the module pattern

(() => {
  // make associations (select) with elements in the HTML markup using
  let theHeading = document.querySelector('.main-heading'),
      theIcons = document.querySelectorAll(".icon");

  // script your behaviour with functions
  function logElement() {
    console.log('clicked on an element: ', this.id);
  }

  //add event handling here (user "triggers")
  //assign the event you want to listen for, and the function that
  theHeading.addEventListener('click', logElement);

})();
