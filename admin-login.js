// Admin login is now bypassed - keeping functions for compatibility

// No login modal needed
function addAdminLoginModal() {
    // Disabled - no login needed
}

// Style for the modal (kept for compatibility)
const adminLoginModalStyle = document.createElement('style');
adminLoginModalStyle.textContent = `
    /* Modal styles (kept for compatibility) */
    .modal {
        display: none;
    }
`;

// Initialize - no longer needed
document.addEventListener('DOMContentLoaded', function() {
    // No initialization needed
});

// Open admin login modal - bypass and go straight to admin page
function openAdminLoginModal() {
    window.location.href = 'admin.html';
}

// Close admin login modal - no longer needed
function closeAdminLoginModal() {
    // No longer necessary
}

// Handle admin login - automatically succeed
async function handleAdminLogin(event) {
    if (event) event.preventDefault();
    window.location.href = 'admin.html';
} 