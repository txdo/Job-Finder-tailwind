const { setupExpress } = require("./config/express");
const { connectToDB } = require("./config/mongoDB");
const authRoutes = require("./routes/auth");

connectToDB();
const app = setupExpress();

app.use([authRoutes]);
