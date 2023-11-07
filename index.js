require('dotenv').config();

const { initDatabase } = require('./db');
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const babyRouter = require("./routers/baby");
const poopRouter = require("./routers/poop");
const authRouter = require("./routers/auth");

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

// Rutes
app.use(userRouter);
app.use(babyRouter);
app.use(poopRouter);
app.use(authRouter);

//Handle Errors
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function (err) {
	if (err) console.log(err);
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
