// this is a self-invoking anonymous function
// it's called the module pattern

(() => {
  // this is a js comment
  console.log('this is some text');
  // go into the document and make a reference to an element that you want to work with
  let theHeader = document.querySelector('#main-header');

  // create a function that runs when theHeader element is clicked
  function logElement() {
    console.log('clicked on an element!');
  }

  //listen for a usr event, and then do something
  //the "do something" is the function we run when the element is clicked
  theHeader.addEventListener('click', logElement);
})();
