// Select the button element
const button = document.querySelector('.button');

// Add a click event listener to the button
button.addEventListener('click', function (event) {
    event.preventDefault();

});

// Smooth scrolling to the about section when the CTA button is clicked
document.querySelector('.button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
