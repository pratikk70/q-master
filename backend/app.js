const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Controllers & Routes
const waitTimeController = require("./controllers/waitTimeController");
const rideRoutes = require("./routes/rideRoutes");
const adminRoutes = require("./routes/adminRoutes");
const queueRoutes = require("./routes/queueRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wait-time", waitTimeController);
app.use("/rides", rideRoutes);
app.use("/admin", adminRoutes);
app.use("/queue", queueRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/recommendation", recommendationRoutes);
app.use("/users", userRoutes);

// Export must ALWAYS be the absolute last line
module.exports = app;