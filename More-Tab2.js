function adjustNavItems2() {
    const tabs = document.querySelector('.tabs2');
    const moreButton = tabs.querySelector('.more-tabs2');
    const moreDropdown = tabs.querySelector('.more-dropdown-tabs2');

    // Reset dropdown content and show all tabs initially
    moreDropdown.innerHTML = '';
    Array.from(tabs.children).forEach(tab => {
        if (!tab.classList.contains('more-tabs2')) {
            tab.style.display = 'inline-block';
        }
    });

    // Calculate the available space for tabs and determine if any should be hidden
    let availableWidth = tabs.clientWidth - moreButton.clientWidth;
    let itemsAdded = false; // Track if items are added to dropdown

    Array.from(tabs.children).forEach(tab => {
        if (!tab.classList.contains('more-tabs2')) {
            if (availableWidth < tab.clientWidth) {
                tab.style.display = 'none'; // Hide the tab
                console.log('Hiding tab and adding to dropdown:', tab.textContent);

                // Create a new link element for the dropdown menu
                const dropdownItem = document.createElement('a');
                dropdownItem.href = tab.href; // Copy the link
                dropdownItem.textContent = tab.textContent; // Copy the text
                dropdownItem.style.display = 'block';
                dropdownItem.style.padding = '8px 12px';
                dropdownItem.style.color = '#333';
                dropdownItem.style.textDecoration = 'none';
                dropdownItem.style.fontSize = '14px';
                dropdownItem.style.borderBottom = '1px solid #ddd';

                // Append the item to the dropdown
                moreDropdown.appendChild(dropdownItem);
                itemsAdded = true; // Mark that items were added
            } else {
                availableWidth -= tab.clientWidth;
            }
        }
    });

    // Display the "More" button only if there are items in the dropdown
    moreButton.style.display = itemsAdded ? 'inline-block' : 'none';

    // Log the final dropdown content for debugging
    console.log('Dropdown content:', moreDropdown.innerHTML);
}

// Event listener for the dropdown menu on click
document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.querySelector('.tabs2 .more-tabs2');
    const moreDropdown = document.querySelector('.tabs2 .more-dropdown-tabs2');

    // Toggle the dropdown visibility on More button click
    moreButton.addEventListener('click', function(event) {
        event.stopPropagation();
        moreDropdown.classList.toggle('show');
        console.log('Dropdown toggled:', moreDropdown.classList.contains('show')); // Check if toggled
        console.log('Dropdown classes:', moreDropdown.className); // Check applied classes
    });

    // Close the dropdown if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!moreButton.contains(event.target) && !moreDropdown.contains(event.target)) {
            moreDropdown.classList.remove('show');
        }
    });

    // Adjust navigation items on page load and window resize
    window.addEventListener('resize', adjustNavItems2);
    window.addEventListener('load', adjustNavItems2);
});
