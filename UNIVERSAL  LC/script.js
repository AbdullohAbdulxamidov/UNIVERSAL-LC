// Get the button and all elements with the class 'temporary-closed'
const moreReviewsBtn = document.querySelector('.more-reviews-btn');
const hiddenElements = document.querySelectorAll('.temporary-closed');

// Set a flag to track if the elements are currently visible
let isVisible = true;

// Add an event listener to the button to toggle visibility of hidden reviews
moreReviewsBtn.addEventListener('click', function () {
    isVisible = !isVisible;  // Toggle the visibility state

    hiddenElements.forEach(element => {
        // Show or hide the hidden elements based on the visibility state
        element.style.display = isVisible ? 'flex' : 'none';
    });

    // Change the button text based on the current state
    moreReviewsBtn.textContent = isVisible ? 'Show Less Results' : 'Show More Results';
});
