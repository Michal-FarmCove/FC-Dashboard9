// Open the popup and reset to the main view
function openPopup() {
    document.getElementById("popup").style.display = "flex"; // Show the popup container
    document.getElementById("popup-main").style.display = "block"; // Show the main popup content
    document.getElementById("approval-message").style.display = "none"; // Hide the approval message content
    document.getElementById("query-popup").style.display = "none"; // Hide query popup content
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
