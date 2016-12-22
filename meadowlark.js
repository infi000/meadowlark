/*
 * @Author: 张驰阳
 * @Date:   2016-12-22 15:11:46
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2016-12-22 16:29:30
 */

'use strict';

var express = require("express");
var app = express();
//设置handlebars试图引擎
var handlebars = require("express3-handlebars").create({ defaultLayout: "main" }); //默认布局

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

//启动服务器前通过设置环境变量覆盖端口
app.set("port", process.env.PORT || 3000);
//创建公共目录
app.use(express.static(__dirname + "/public"));

//路由
app.get("/", function(req, res) {
    res.render("home")
});
app.get("/about", function(req, res) {
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    res.render("about", { fortune: randomFortune })
});


//定制404页面
app.use(function(req, res) {

    res.status(404);
    res.render("404")
});

//定制500页面
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(app.get('port'), function() {
    console.log("EXpress started on http://localhost:" +
        app.get("port") + ";press Ctrl-C to terminate.");
});
