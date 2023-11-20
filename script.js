//your JS code here. If required.
 function capitalizeName() {
        // Get the input field by its id
        var inputField = document.getElementById('fname');

        // Convert the content to uppercase
        var uppercaseName = inputField.value.toUpperCase();

        // Update the input field with the uppercase content
        inputField.value = uppercaseName;
    }

    // Add event listener to the input field
    document.getElementById('fname').addEventListener('blur', capitalizeName);