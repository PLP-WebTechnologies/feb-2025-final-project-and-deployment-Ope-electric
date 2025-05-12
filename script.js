document.addEventListener("DOMContentLoaded", function() {
  const latestPosts = document.querySelector("#latest-posts");

  // Dynamically load blog posts
  const posts = [
    { title: "Post 1 Title", url: "post1.html", excerpt: "This is a preview of the first post..." },
    { title: "Post 2 Title", url: "post2.html", excerpt: "This is a preview of the second post..." }
  ];

  posts.forEach(post => {
    const postPreview = document.createElement("div");
    postPreview.classList.add("post-preview");

    const postTitle = document.createElement("h3");
    const postLink = document.createElement("a");
    postLink.href = post.url;
    postLink.textContent = post.title;

    const postExcerpt = document.createElement("p");
    postExcerpt.textContent = post.excerpt;

    postTitle.appendChild(postLink);
    postPreview.appendChild(postTitle);
    postPreview.appendChild(postExcerpt);

    latestPosts.appendChild(postPreview);
  });
});
