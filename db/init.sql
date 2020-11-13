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