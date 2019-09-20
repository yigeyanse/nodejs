const express = require("express")
const app = express()

app.get("/",function (req, res) {
     res.send("我是首页")
})

app.get("/music",function (req, res) {
    res.send("音乐频道")
})

app.get("/news",function (req, res) {
    res.sendFile(__dirname+"/view/news.html")
})

app.get("/student/:number",function (req, res) {
    res.send("学生频道"+req.params.number)
})

//静态文件放在最后
app.use("/static",express.static("public"))

app.listen(3000)
