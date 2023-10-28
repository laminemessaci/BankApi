const allowedOrigins = require("./allowedOrigins.js");

module.exports.corsOptions = {
  origin: (origin, callback) => {
    console.log("origin;;;;;' , ", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
