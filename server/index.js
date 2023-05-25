const express = require("express");
const app = express()
const response = [
    {
        name: "Vaishnavi",
        email: "vaishnavip892001@gmail,com"
    },
    {
        name: "Piyusha",
        email: "piyusha@gmail.com"
    },
    {
        name: "Rutvika",
        email: "rutvika@gmail.com"
    },
];
app.get("/users", (req, res) => {
    res.json(response);
})


app.listen(5000, () => {
    console.log("listening on port 5000");
})