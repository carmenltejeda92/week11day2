// 1. Require Express
const express = require("express")

// 2. Initialize Express
const app = express()
//------------------------- [Require Statements/Imports]
//------------------------- [Middleware]

// Route with generic greeting
app.get("/greeting", (req, res) =>{
    res.send("<h1>Hello, stranger</h1>")
})

// Route with name param
app.get("/greeting/:name", (req, res)=>{
    res.send(`What's up, ${req.params.name}, how's your day?`)
})


//------------------------- [Routes]


// 3. Create the server
app.listen("3000", (req, res) =>{
    console.log("Server is currently running on port 3000")
})
//------------------------- [Server]