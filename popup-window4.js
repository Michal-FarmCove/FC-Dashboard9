// Function to open the popup and display specific content
function openPopup(button) {
    const type = button.getAttribute('data-type');
    
    // Hide all content sections initially
    document.getElementById('full-details').style.display = 'none';
    document.getElementById('budget-details').style.display = 'none';
    document.getElementById('relationship-table').style.display = 'none';

    if (type === 'full') {
        // Show Full Project Details
        document.getElementById('full-details').style.display = 'block';

        // Retrieve data attributes and update fields for full details
        document.getElementById('title').value = button.getAttribute('data-title');
        document.getElementById('provisional-title').value = button.getAttribute('data-title');
        document.getElementById('fpc-country').value = button.getAttribute('data-country');
        document.getElementById('film-language').value = button.getAttribute('data-language');
        document.getElementById('indian-rating').value = button.getAttribute('data-indian-rating');
        document.getElementById('uk-rating').value = button.getAttribute('data-uk-rating');

    } else if (type === 'budget') {
        // Show Only Estimated Budget
        document.getElementById('budget-details').style.display = 'block';
        
        // Set the estimated budget value if needed
        document.getElementById('estimated-budget').value = '£3,500,000.00';

    } else if (type === 'relationship') {
        // Show Relationship Table for Third Button
        document.getElementById('relationship-table').style.display = 'block';
    }

    // Show the popup
    document.getElementById('popup').style.display = 'flex'; // Use 'flex' for centering if required
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function for the Save button (if any specific actions are needed)
function saveDetails() {
    // Placeholder for any save actions (e.g., form submission or data handling)
    console.log('Save button clicked');
    
    // Close the popup after saving
    closePopup();
}


