const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const apiRoutes = require("/routes/apiRoutes.js");
// const htmlRoutes = require("/routes/htmlRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use("/routes", apiRoutes);
// app.use("/routes", htmlRoutes);
require("/routes/apiRoutes.js")(app);
require("/routes/htmlRoutes.js")(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));