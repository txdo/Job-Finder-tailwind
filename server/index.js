const { setupExpress } = require("./config/express");
const { connectToDB } = require("./config/mongoDB");
const authRoutes = require("./routes/auth");
const companyRoutes = require("./routes/company");

connectToDB();
const app = setupExpress();

app.use([authRoutes, companyRoutes]);
