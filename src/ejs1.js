const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/ejs",function (req, res) {
    res.render("index",{
        'thing': 'apple',
        'total': 10,
        'hobby': [
            {"name": '冰冰','age': 18},
            {"name": '小白','age': 28},
            {"name": '小柯','age': 38}
        ]
    })
})

app.listen(3000)
