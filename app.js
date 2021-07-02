const tmi = require('tmi.js');

//const regexpCommand = new RegExp(/^!( [a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const opts = {
    options: {
        debug: true,
    },
    identity:{
        username:"acastrobot",
        password:" HIDDEN FOR SECURITY AND PRIVACY REASONS ",
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
    
    switch (message.toLowerCase()) {
        case "!emotey":
            client.emoteonly("actioncastro");
            break;
        case "!emoten":
            client.emoteonlyoff("actioncastro");
            break;
        case "!followery":
            client.followersonly("actioncastro");
            break;
        case "!followern":
            client.followersonlyoff("actioncastro");
            break;
        case "!clear":
            client.clear("actioncastro")
            break;
        case "frank ocean":
            client.say(channel, "I THOUGHT THAT I WAS DREAMING... WHEN YOU SAID YOU LOVED ME");
            break;
        case "hi":
            client.say(channel, "What up, lollypop")
            break;
        case "hello":
            client.say(channel, "...is it me you're looking for?")
            break;
        case "yo": case "yo!": case "yo!!":
            client.say(channel, "What's good ma'dude")
            break;
        case "castro":
            client.say(channel, "ACTION")
            break;
        case "brb":
            client.say(channel, "Catch you later, alligator!")
            break;
        case "!discord":
            client.say(channel, "hi! you can join our discord here: https://discord.gg/bUaJb7Cu2G ! much love ! " )
            break;
        case "!link":
            client.say(channel, "make sure to follow me! Streaming in the Discord!")
            break;
    }

    let shouldSendMessage=false;
    shouldSendMessage = blockedWords.some(blockedWords=>{message.includes(blockedWords.toLowerCase())});
    
    if (shouldSendMessage){
        client.deletemessage(channel, userstate.id);
        client.say(channel, `@${userstate.username} oopsie you naughty!`)
    }
    
    });


client.connect();
