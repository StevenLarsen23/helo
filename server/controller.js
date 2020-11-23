const bcrypt = require("bcrypt");

module.exports = {
    register: async (req, res) => {
        const db = req.app.get("db");
        const {username, password, profile_pic } = req.body;
        const [foundUser] = await db.check_user(username);
        if (foundUser) {
          return res.status(400).send("Username already exists");
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.new_user([username, hash, profile_pic]);
        req.session.user = {
          userId: newUser.id,
          username: newUser.username,
          profile_pic: newUser.profile_pic,
        };
        res.status(200).send(req.session.user);
      },

      login: async (req, res) => {
          const db = req.app.get("db");
          const {username, password} = req.body;
          const [foundUser] = await db.check_user(username);
          if(!foundUser) {
              return res.status(401).send("Incorrect login info");
          }
          const authenticated = bcrypt.compareSync(password, foundUser.password);
          if(authenticated) {
              req.session.user = {
                  userId: foundUser.id,
                  username: foundUser.username, 
                  profilePic: foundUser.profilePic
              };
              res.status(200).send(req.session.user);
          } else {
              res.status(401).send("incorrect login info");
          }
      },

      logout: (req, res) => {
          req.session.destroy();
          res.sendStatus(200);
      },

      getAllPosts: (req, res) => {
          const db = req.app.get('db');
      },

      getPosts: (req, res) => {
        const db = req.app.get('db');
      }
};
