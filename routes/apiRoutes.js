const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = (app) => {
    app.get("./api/notes", (req, res) => {
        console.log(JSON.stringify(data));
        res.json(data);
    });
    app.post("./api/notes", (req, res) => {
        let note = req.body;
        note.id = uuidv4();
        data.push(note);
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        console.log("Saved");
        res.json(data);
    });
    app.delete("./api/notes/:id", (req, res) => {
        let noteID = req.params.id.toString();
        let newData = data.filter(note => note.id.toString() !== noteID);
        fs.writeFileSync("./db/db.json", JSON.stringify(newData));
        res.end(console.log("Deleted"));
    });
}

// not working :(