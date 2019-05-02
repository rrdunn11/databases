var db = require('../db');

module.exports = {
  messages: {
    get: function (sql, callback) {
      db.db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        callback(null, result);
      });
    }, // a function which produces all the messages
    post: function (sql, callback) {
      db.db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        callback(null, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (sql, callback) {
      db.db.query(sql, (err, result) => {
        if (err) throw err;
        callback(null, result);
      });
    },
    post: function (sql, callback) {
      db.db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        callback(null, result);
      });
    }
  }
};

