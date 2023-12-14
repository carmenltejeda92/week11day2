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

// Tip calculator route
app.get("/tip/:total/:tipPercentage", (req, res)=>{
    let total = req.params.total;
    let percentage = req.params.tipPercentage
    let tip = (total*percentage)/100
    res.send(`The servers tip should be ${tip}`)
})

// Magic 8 Ball
app.get("/magic/:question", (req, res)=>{
    let question = req.params.question
    let answers = ["It is certain", "It is decidedly so", 
    "Without a doubt", "Yes definitely","You may rely on it", 
    "As I see it yes", "Most likely", "Outlook good","Yes", 
    "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", 
    "Concentrate and ask again","Don't count on it", "My reply is no", 
    "My sources say no","Outlook not so good", "Very doubtful"]
    let rand = Math.round(Math.random()*responses.length)

    res.send(`<h1>${question} <br> ${answers[rand]}</h1>`)
  
})


//------------------------- [Routes]


// 3. Create the server
app.listen("3000", (req, res) =>{
    console.log("Server is currently running on port 3000")
})
//------------------------- [Server]