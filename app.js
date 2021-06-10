const tmi = require('tmi.js');

//const regexpCommand = new RegExp(/^!( [a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const opts = {
    options: {
        debug: true,
    },
    identity:{
        username:"acastrobot",
        password:"oauth:8netmcwxgk1a798q7alt9oo4by2ohk",
    },
    channels: [
        "actioncastro",
    ]
};


const client = new tmi.client(opts);


//client.connect();

//client.on('chat',(channel, userstate, message, self)=>{
///if (message === "hello") {
//    client.say(channel,"hello");
//}

//});


var blockedWords = ['ex gf']

client.on('message',(channel, userstate, message, self)=>{

    if(self){return;}


    if (message == "!emoteY") {
        client.emoteonly("actioncastro");
    }
    if (message == "!emoteN") {
        client.emoteonlyoff("actioncastro");
    }
    if (message==="!followerY") {
        client.followersonly("actioncastro");
    }
    if (message=="!followerN") {
        client.followersonlyoff("actioncastro");
    }
    if(message=="!clear") {
        client.clear("actioncastro")
    }
    if (message=="Frank Ocean" || message=="frank Ocean" || message=="frank ocean" || message=="Frank ocean" || message=="FRANK OCEAN"){
        client.say(channel, "I THOUGHT THAT I WAS DREAMING... WHEN YOU SAID YOU LOVED ME");
    }
    if (message==="hi"|| message==="HI" || message==="Hi"){
        client.say(channel, "What up, lollypop")
    }
    if (message==="castro"|| message==="Castro" || message==="CASTRO"){
        client.say(channel, "ACTION")
    }
    if (message==="hello"|| message==="HELLO" || message==="Hello"){
        client.say(channel, "...is it me you're looking for?")
    }
    if (message==="brb"|| message==="BRB" || message==="be right back"){
        client.say(channel, "Catch you later, alligator!")
    }
    if (message==="yo"|| message==="Yo!" || message==="yo!!" || message==="YO"){
        client.say(channel, "What's good ma'dude")
    }
    if(message=="!discord" || message=="!Discord") {
        client.say(channel, "hi! you can join our discord here: https://discord.gg/bUaJb7Cu2G ! much love ! " )
    }
    if(message=="!link" || message=="!Link") {
        client.say(channel, "make sure to follow me! Streaming in the Discord!")
    }


    let shouldSendMessage=false;
    shouldSendMessage = blockedWords.some(blockedWords=>{message.includes(blockedWords.toLowerCase())});
    
    if (shouldSendMessage){
        client.deletemessage(channel, userstate.id);
        client.say(channel, `@${userstate.username} oopsie you naughty!`)
    }
    
    });


client.connect();