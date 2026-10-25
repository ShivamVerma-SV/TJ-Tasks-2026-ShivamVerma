const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to My Express Website 🚀</h1>
        <p>Running with Node.js and Express in Docker 🐳.</p>
        <a href="/about">About</a>
    `);
});


app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <p>This website was created as a Docker and Vercel deployment task.</p>
        <a href="/">Home</a>
    `);
});


app.get("/hello", (req, res) => {
    res.json({
        message: `Hello${req.query.name ? ` ${req.query.name}` : ""} from Node.js and Express!`
    });
});

app.get("/time", (req, res) => {
    const currentTime = new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
    res.json({
        time: currentTime,
        timezone: "IST"
    });
});


// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});