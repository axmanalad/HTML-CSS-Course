function encodeURIQuery(str) {
    return str.replace(/\s/g, '+');
}

// Function to handle search bar input
function performSearch(query) {
    query = query.trim();
    if (query) {
        const url = `https://www.youtube.com/results?search_query=${encodeURIQuery(query)}`;
        window.location.href = url;
    }
}

// Handle Enter key in search bar
document.querySelector('.search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch(event.target.value);
    }
});

// Handle click on search button
document.querySelector('.search-button').addEventListener('click', function() {
    performSearch(document.querySelector('.search-bar').value);
});