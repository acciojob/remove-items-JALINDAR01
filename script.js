document.addEventListener("DOMContentLoaded", function () {
    // Get references to the dropdown and button elements
    const colorSelect = document.getElementById("colorSelect");
    const removeButton = document.getElementById("removeButton");

    // Add a click event listener to the button
    removeButton.addEventListener("click", function () {
        // Get the selected option
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];

        // Check if an option is selected
        if (selectedOption) {
            // Remove the selected option from the dropdown
            colorSelect.removeChild(selectedOption);
        }
    });
});
