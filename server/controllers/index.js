var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('hi1')
      let sql = 'SELECT * FROM messages';
      models.messages.get(sql, (err, data) => {
        if (err) throw err;
        res.status(200).send(JSON.stringify(data));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let sql = `INSERT INTO messages 
      (text, roomname, id_Usernames) VALUES 
      ("${req.body.message}", "${req.body.roomname}", (SELECT id FROM usernames WHERE name = '${req.body.username}'))`;
      // console.log('hi2', req.body.message, sql);
      models.messages.post(sql, (err, data) => {
        if (err) throw err;
        res.status(200).send(JSON.stringify(data));
      });
    }
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('hi3')
      let sql = 'SELECT * FROM usernames';
      models.users.get(sql, (err, data) => {
        if (err) throw err;
        res.status(200).send(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      // console.log('hi4', req.body.username);
      let sql = `INSERT IGNORE INTO usernames (name) VALUES ("${req.body.username}")`;
      models.users.post(sql, (err, data) => {
        if (err) throw err;
        res.status(200).send(JSON.stringify(data));
      });
    }
  }
};

