SELECT posts.title, post.author_id, users.id, users.username
FROM posts
JOIN users ON posts.author_id = user.id;