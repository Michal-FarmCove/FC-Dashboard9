function showTab(tabId) {
    // Attempt to hide other sections if they exist
    const sections = ['query-responses', 'approval-history'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        } else {
            console.warn(`Section with ID '${sectionId}' not found.`);
        }
    });

    // Show the selected tab if it exists
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
        tabElement.style.display = 'block';
    } else {
        console.warn(`Tab with ID '${tabId}' not found in More-Tab.js.`);
    }

    // Update active tab styling
    document.querySelectorAll('.approvals-sub-navbar a').forEach(el => {
        el.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        console.warn(`Tab with data-tab="${tabId}" not found.`);
    }
}

// Adjust the navigation items on load and resize for the primary navigation bar
function adjustNavItems() {
    const tabs = document.querySelector('.tabs');
    const moreButton = tabs.querySelector('.more');
    const moreDropdown = tabs.querySelector('.more-dropdown');

    // Reset dropdown content and show all tabs initially
    moreDropdown.innerHTML = '';
    Array.from(tabs.children).forEach(tab => {
        if (!tab.classList.contains('more')) {
            tab.style.display = 'inline-block';
        }
    });

    // Calculate available space and hide tabs if necessary
    let availableWidth = tabs.clientWidth - moreButton.clientWidth;
    Array.from(tabs.children).forEach(tab => {
        if (!tab.classList.contains('more') && availableWidth < tab.clientWidth) {
            tab.style.display = 'none';

            // Clone the tab and append to the dropdown
            const dropdownItem = tab.cloneNode(true);
            dropdownItem.style.display = 'block';
            dropdownItem.style.padding = '8px 12px';
            dropdownItem.style.color = '#333';
            dropdownItem.style.textDecoration = 'none';
            dropdownItem.style.fontSize = '14px';
            dropdownItem.style.borderBottom = '1px solid #ddd';
            moreDropdown.appendChild(dropdownItem);
        } else if (!tab.classList.contains('more')) {
            availableWidth -= tab.clientWidth;
        }
    });

    // Display the "More" button if there are items in the dropdown
    moreButton.style.display = moreDropdown.children.length > 0 ? 'inline-block' : 'none';
}

// Event listener for the primary navigation bar's dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.querySelector('.tabs .more');
    const moreDropdown = document.querySelector('.tabs .more-dropdown');

    // Toggle the dropdown visibility on More button click
    moreButton.addEventListener('click', function(event) {
        event.stopPropagation();
        moreDropdown.classList.toggle('show');
        console.log('Primary dropdown toggled:', moreDropdown.classList.contains('show'));
    });

    // Close the dropdown if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!moreButton.contains(event.target) && !moreDropdown.contains(event.target)) {
            moreDropdown.classList.remove('show');
        }
    });

    // Adjust navigation items on page load and window resize
    window.addEventListener('resize', adjustNavItems);
    window.addEventListener('load', adjustNavItems);
});
