// index.js using CommonJS syntax (require)

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path"); // path should also use require()

const app = express();
const Routes = require("./routes/route.js"); // Your original route import

const PORT = process.env.PORT || 5000;

dotenv.config();

// Use path.join to correctly resolve the current working directory for deployment
const _dirname = path.resolve();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use('/', Routes);

// Static files and index.html serve for deployment
app.use(express.static(path.join(_dirname, 'frontend', 'build')));
app.get('*', (req, res) => {
    // Use path.join here to ensure correct path resolution
    res.sendFile(path.resolve(_dirname, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});