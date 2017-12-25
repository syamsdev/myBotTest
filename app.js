import { SERVFAIL } from 'dns';

// packages
var restify = require('restify');
var builder = require('botbuilder');

//setup server
var server = restify.createServer();
server.listen(process.env.PORT || 3000,function()
{
    console.log('%s listening to %s',server.name,server.url);
});

//Create chat bot
var connector = new builder.ChatConnector({appId: 'XXX',appPassword: 'YYYY'});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages',connector.listen());

//Creat bot dialogs
bot.dialog('/',function(session) {
    session.send("Hello World");
});