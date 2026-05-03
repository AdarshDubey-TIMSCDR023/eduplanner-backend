const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

// Check if MONGO_URI exists (important for Render)
if (!process.env.MONGO_URI) {
console.log("❌ MONGO_URI is NOT defined in environment variables");
} else {
console.log("✅ MONGO_URI detected");
}

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

// Health route
app.get("/", (req, res) => {
res.send("EduPlanner API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
