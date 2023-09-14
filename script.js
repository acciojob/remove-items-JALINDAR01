// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the select element and the button
    var colorSelect = document.getElementById('colorSelect');
    var removeButton = document.getElementById('removeButton');

    // Add a click event listener to the button
    removeButton.addEventListener('click', function () {
        // Get the selected option
        var selectedOption = colorSelect.options[colorSelect.selectedIndex];

        // Check if an option is selected
        if (selectedOption) {
            // Remove the selected option from the select element
            colorSelect.removeChild(selectedOption);
        }
    });
});
