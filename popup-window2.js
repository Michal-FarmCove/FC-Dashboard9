// Open the popup and set the image and buttons dynamically
function openPopup(imageSrc, buttons) {
    document.getElementById("popup").style.display = "flex"; // Show the popup container
    document.getElementById("popup-main").style.display = "block"; // Show the main popup content
    document.getElementById("approval-message").style.display = "none"; // Hide the approval message content
    document.getElementById("query-popup").style.display = "none"; // Hide query popup content
    
    // Set the image source
    document.getElementById("popup-image").src = imageSrc;

    // Clear previous buttons and add new ones based on the passed buttons array
    const popupButtonsContainer = document.getElementById("popup-buttons");
    popupButtonsContainer.innerHTML = ''; // Clear previous buttons
    
    buttons.forEach(button => {
        let newButton = document.createElement("button");
        newButton.className = "popup-button";
        if (button === 'approve') {
            newButton.textContent = "Approve";
            newButton.onclick = () => approveDocument();
        } else if (button === 'query') {
            newButton.textContent = "Query";
            newButton.onclick = () => queryDocument();
        } else if (button === 'queryLineItems') {
            newButton.textContent = "Reject";
            newButton.onclick = () => rejectDocument();
        }
        popupButtonsContainer.appendChild(newButton);
    });
}

// Close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the entire popup container
}

// Display the approval message inside the popup
function approveDocument() {
    document.getElementById("popup-main").style.display = "none"; // Hide the main content
    document.getElementById("approval-message").style.display = "block"; // Show the approval message content
    document.querySelector(".message-text").textContent = "Expense has been approved."; // Set the approval message
}

// Display the query input form inside the popup
function queryDocument() {
    document.getElementById("popup-main").style.display = "none"; // Hide main content
    document.getElementById("query-popup").style.display = "block"; // Show query input form
}

// Submit the query and show confirmation
function submitQuery() {
    document.getElementById("query-popup").style.display = "none"; // Hide the query input
    document.getElementById("approval-message").style.display = "block"; // Show approval message for query confirmation
    document.querySelector(".message-text").textContent = "Expense has been queried."; // Set the query message
}

// Display the rejection message inside the popup
function rejectDocument() {
    document.getElementById("popup-main").style.display = "none"; // Hide the main content
    document.getElementById("approval-message").style.display = "block"; // Show the rejection message
    document.querySelector(".message-text").textContent = "Expense has been rejected."; // Set the rejection message
}
