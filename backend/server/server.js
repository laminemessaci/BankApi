const express = require("express");
require("dotenv").config();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const swaggerDocs = yaml.load("./swagger.yaml");
const dbConnection = require("./database/connection");
const morgan = require("morgan");
const corsOptions = require("./config/corsOptions");

const app = express();
const PORT = process.env.PORT || 3001;

const connectToDatabase = async () => {
  await dbConnection();
};

connectToDatabase();
// Handle CORS issues
app.use(cors(corsOptions));
app.use(morgan("dev"));

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle custom routes
app.use("/api/v1/user", require("./routes/userRoutes"));

// API Documentation
if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

app.get("/", (req, res, next) => {
  res.send("Hello from my Express server v2!");
});

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
