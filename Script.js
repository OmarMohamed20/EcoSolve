// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// ------------------------------------------------------------

// Get the form element by id
var form = document.getElementById("myForm");

// Add an event listener to the submit event of the form
form.addEventListener("submit", function(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();
  // Display a message in an alert box
  alert("Thank you for filling out the form!");

  // To reset all inputs in the form to default value 
  document.getElementById("name").value = document.getElementById("name").defaultValue;
  document.getElementById("City").selectedIndex = 0;  
  document.getElementById("SocialNetwork").value = document.getElementById("SocialNetwork").defaultValue;
  document.getElementById("problem").value = document.getElementById("problem").defaultValue;
  document.getElementById("email").value = document.getElementById("email").defaultValue;
  document.getElementById("password").value = document.getElementById("password").defaultValue;
});

