require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./lib/sequelize.js");
const User = require("./models/user.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced.");
  })
  .catch((error) => {
    console.error("Unable to connect to database", error);
  });

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch all users" });
  }
});

app.get("/users/:id", async (req, res) => {
  let targetId = parseInt(req.params.id);
  try {
    let targetUser = await User.findByPk(targetId);

    if (targetUser) {
      res.json({ targetUser });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
