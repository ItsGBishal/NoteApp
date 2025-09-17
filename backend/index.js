import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import noteRoutes from './routes/node.route.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 4002;



try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

// Test route to check server
app.get("/", (req, res) => {
  res.send("Server is running correctly! super");
});

app.use(cors());
app.use(express.json());
app.use("/api/v1/noteapp", noteRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
