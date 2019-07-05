
var express=require('express');
var app=express();
var request=require('request');
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
app.use("/lib",express.static(__dirname+'/lib'));
users=[];
connections=[];
server.listen(process.env.PORT || 3000);
server.listen(process.env.PORT || 3000+"//home");
console.log('server running.......');
app.set('view engine', 'ejs');
app.get('/',function(req,res){


res.render('index.ejs');
});

app.get('/about', function(req,res){
res.render('about.ejs');	
});


io.sockets.on('connection',function(socket){
connections.push(socket);
console.log('Connected: %s sockets connected',connections.length);

//disconnect

socket.on('disconnect',function(data){
connections.splice(connections.indexOf(socket),1);
console.log('Disconnected: %s sockets connected',connections.length);


});




});




