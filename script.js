document.addEventListener("DOMContentLoaded", function () {
    // Get references to the dropdown and button elements
    const colorSelect = document.getElementById("colorSelect");
    const removeButton = document.getElementById("removeButton");

    // Add a click event listener to the button
    removeButton.addEventListener("click", function () {
        // Get an array of selected options
        const selectedOptions = Array.from(colorSelect.selectedOptions);

        // Loop through the selected options and remove them from the dropdown
        selectedOptions.forEach(function (selectedOption) {
            colorSelect.removeChild(selectedOption);
        });
    });
});
