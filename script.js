document.addEventListener('DOMContentLoaded', (event) => {
    // Handle search form submission
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = document.getElementById('search-input').value;
        alert(`Searching for: ${searchTerm}`);
        // Implement search functionality here
    });

    // Handle post creation
    const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const postContent = document.getElementById('post-content').value;
        if (postContent) {
            addPost(postContent);
            document.getElementById('post-content').value = ''; // Clear the textarea
        }
    });

    // Function to add a new post
    function addPost(content) {
        const newsFeed = document.getElementById('news-feed');
        const postCard = document.createElement('div');
        postCard.className = 'card my-3';
        postCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">User Name</h5>
                <p class="card-text">${content}</p>
                <button class="btn btn-light like-btn">Like</button>
                <button class="btn btn-light comment-btn">Comment</button>
                <button class="btn btn-light share-btn">Share</button>
            </div>
        `;
        newsFeed.prepend(postCard); // Add new post at the top
    }

    // Handle profile link click
    const profileLink = document.querySelector('.nav-link[href="profile.html"]');
    profileLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'profile.html';
    });

    // Add event listeners for modal forms (Login/Register)
    const loginForm = document.querySelector('#loginModal form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        alert(`Logging in with Email: ${email}, Password: ${password}`);
        // Implement login functionality here
    });

    const registerForm = document.querySelector('#registerModal form');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        alert(`Registering with Name: ${name}, Email: ${email}`);
        // Implement registration functionality here
    });
});
