const express = require("express");
const logger = require("morgan");
const app = express();

const indexRouter = require("./routes/indexRouter")
const gameRouter = require("./routes/gameRouter")

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api/game", gameRouter);



app.listen(3000, function(){
    console.log(`Server is now live on port 3000`)
});