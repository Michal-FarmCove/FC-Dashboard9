// Toggle the mobile menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Toggle all switches and fill in today's date for each row
function toggleAll(checkbox) {
    const rows = document.querySelectorAll("tbody tr");
    const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
    const saveCancelButtons = document.getElementById('save-cancel-buttons');
    
    rows.forEach(row => {
        const payCheckbox = row.querySelector(".pay-switch-input");
        const dateCell = row.querySelector(".date-cell");

        // Set checkbox state based on "Pay all"
        if (checkbox.checked) {
            payCheckbox.checked = true;
            dateCell.innerHTML = `<input type="date" class="date-input" value="${today}" />`;
        } else {
            payCheckbox.checked = false;
            dateCell.innerHTML = '';
        }
    });

    // Show or hide the save/cancel buttons based on the "Pay all" checkbox
    saveCancelButtons.style.display = checkbox.checked ? 'flex' : 'none';
}

// Toggle individual switch for date input
function toggleInputs(checkbox, rowId) {
    const row = document.getElementById(rowId);
    const dateCell = row.querySelector('.date-cell');
    const saveCancelButtons = document.getElementById('save-cancel-buttons');
    
    if (checkbox.checked) {
        const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
        dateCell.innerHTML = `<input type="date" class="date-input" value="${today}" />`;
    } else { 
        dateCell.innerHTML = '';
    }
    
    // Show or hide the save/cancel buttons based on whether any switches are checked
    const anyChecked = Array.from(document.querySelectorAll('.pay-switch-input')).some(input => input.checked);
    saveCancelButtons.style.display = anyChecked ? 'flex' : 'none';
}

// Save changes notification
function saveChanges() {
    document.getElementById('notification-message').innerText = "Changes have been saved.";
    document.getElementById('popup-image').style.display = 'none'; // Hide image for save
    showNotification();
}

// Cancel changes and reset all switches
function cancelChanges() {
    // Reset each individual payment switch
    const checkboxes = document.querySelectorAll('.pay-switch-input');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        const row = checkbox.closest('tr');
        const dateCell = row.querySelector('.date-cell');
        dateCell.innerHTML = ''; // Clear any date inputs
    });

    // Explicitly reset the "Pay All" switch using a direct ID selector
    const payAllCheckbox = document.querySelector('.pay-all-container input[type="checkbox"]');
    if (payAllCheckbox) {
        payAllCheckbox.checked = false; // Uncheck the Pay All switch
    }

    // Hide save/cancel buttons
    document.getElementById('save-cancel-buttons').style.display = 'none';
    document.getElementById('notification-message').innerText = "Changes have been cancelled.";
    document.getElementById('popup-image').style.display = 'none'; // Hide image for cancel
    showNotification();
}

// Toggle dropdown for CSV export
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Export CSV notification with image
function exportCSV() {
    document.getElementById('notification-message').innerText = "CSV has been exported.";
    document.getElementById('popup-image').style.display = 'block'; // Show image only for export
    showNotification();

    // Hide the dropdown after selection
    document.querySelector('.dropdown-content').style.display = 'none';
}

// Show the general notification popup
function showNotification() {
    const notificationPopup = document.getElementById('notification-popup');
    notificationPopup.style.display = 'flex';
}

// Close the notification popup
function closeNotification() {
    const notificationPopup = document.getElementById('notification-popup');
    notificationPopup.style.display = 'none';
}
