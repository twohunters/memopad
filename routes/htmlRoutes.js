const path = require("path");

module.exports = function(app) {
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname + "./public/index.html"));
    });
    app.get("./notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });
};

// not working! localhost tries to find index.html in the following (incorrect) directory:
// C:\Users\Jason\Desktop\Homework\memopad\routes.\public\index.html
// should be
// C:\Users\Jason\Desktop\Homework\memopad\public\index.html