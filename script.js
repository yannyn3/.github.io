document.getElementById('newPostForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    addPost(title, content);
});

function addPost(title, content) {
    var postsDiv = document.getElementById('posts');

    var newPostDiv = document.createElement('div');
    newPostDiv.classList.add('post');

    var postTitle = document.createElement('h3');
    postTitle.textContent = title;

    var postContent = document.createElement('p');
    postContent.textContent = content;

    newPostDiv.appendChild(postTitle);
    newPostDiv.appendChild(postContent);

    postsDiv.appendChild(newPostDiv);
}
