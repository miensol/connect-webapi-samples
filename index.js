var owin = require('connect-owin'),
    express = require('express');

var app = express();

app.use(express.logger());

app.all('/webapi*', owin(__dirname + './Connect.WebApi/bin/Connect.WebApi.dll'));
// ...

app.get('/hello', function(req,res){
	res.send('Hello my friend');
});
app.listen(3000);