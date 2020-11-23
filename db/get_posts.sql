SELECT posts.id, posts.title, posts.img, post.content, post.author_id, users.id, users.username
FROM posts
INNER JOIN users ON posts.author_id = user.id;