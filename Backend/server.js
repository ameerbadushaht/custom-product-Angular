import mongoose from "mongoose";
import express from "express";
import cors from "cors"; 
import authRoutes from "./src/routes/authRouter.js";


const app = express();
const port = process.env.PORT || 3000;


// mongodb+srv://customProduct:<db_password>@atlascluster.pq5ch65.mongodb.net/

app.use(express.json());
app.use(cors());
await mongoose.connect(
  "mongodb+srv://customProduct:amr123@atlascluster.pq5ch65.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("Database connected");

app.use("/auth", authRoutes);
// app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
