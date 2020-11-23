CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INT REFERENCES users(id)
);

ALTER TABLE users
ALTER password
SET DATA TYPE TEXT;

INSERT INTO users 
(username, password, profile_pic)
VALUES
('bats', 'supermansux', 'https://www.lego.com/cdn/cs/set/assets/bltcd635a3454dc7194/DC_-_Character_Detail_-_Gallery-Tall-Large_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=1600&height=700&dpr=1'),
('sups', 'krypton', 'https://www.lego.com/cdn/cs/set/assets/blt0dc21d2001620350/DC_-_Character_Detail_-_Gallery-Tall-Large_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=1600&height=700&dpr=1'),
('ww', '<3stevetrevor', 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/legomovie-wonderwoman-meeting.jpg');

INSERT INTO posts
(title, img, content, author_id)
VALUES
('Justice', 'https://upload.wikimedia.org/wikipedia/en/2/26/Justice_League.png', 'this is the content of this post', 9),
('More Justice', 'https://media.wired.com/photos/5d4cac3dd2da9d0008d24a59/125:94/w_2340,h_1760,c_limit/business_justice-league_BPJMWA.jpg', 'this is the content of this other post', 7);