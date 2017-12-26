
// packages
var restify = require('restify');
var builder = require('botbuilder');
var http = require('http');


//setup server
var server = restify.createServer();
server.listen(process.env.PORT || 3978,function()
{
    console.log('%s listening to %s',server.name,server.url);
});

var myAppId = "03aafc3e-a722-4a1a-8036-c7c2263e0e46";//process.env.APP_ID || "Missing your app ID";
var myAppSecret = "k^w@OCHb}dSRnE*W";//process.env.APP_SECRET || "Missing your app secret";

//Create chat bot
var connector = new builder.ChatConnector({appId: myAppId,appPassword: myAppSecret});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages',connector.listen());

//Creat bot dialogs
bot.dialog('/',function(session) {
    session.send("Hello World");
});