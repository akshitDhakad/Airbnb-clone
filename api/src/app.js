

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(__dirname, "public"));
app.use(cookiesParser());

// routes import
const bookingRoutes = require("./routes/booking.route.js");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const placeRoutes = require("./routes/place.route.js");
const hostRoutes = require("./routes/host.routes");

app.get("/", (req, res) => {
  res.send("Hello World");
})

//routes declaration

