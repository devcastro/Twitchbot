const tmi = require("tmi.js");

//const regexpCommand = new RegExp(/^!( [a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const opts = {
  options: {
    debug: true,
  },
  identity: {
    username: "acastrobot",
    password: "oauth:8netmcwxgk1a798q7alt9oo4by2ohk",
  },
  channels: ["actioncastro"],
};

const client = new tmi.client(opts);


client.on('connected', onConnectedHandler);

client.on("message", (channel, userstate, message, self) => {
  if (self) {
    return;
  }

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
      client.clear("actioncastro");
      break;
    case "frank ocean":
      client.say(
        channel,
        "I THOUGHT THAT I WAS DREAMING... WHEN YOU SAID YOU LOVED ME"
      );
      break;
    case "hi":
      client.say(channel, "What up, lollypop");
      break;
    case "hello":
      client.say(channel, "...is it me you're looking for?");
      break;
    case "yo":
    case "yo!":
    case "yo!!":
      client.say(channel, "What's good ma'dude");
      break;
    case "castro":
      client.say(channel, "ACTION");
      break;
    case "brb":
      client.say(channel, "Catch you later, alligator!");
      break;
    case "!discord":
      client.say(
        channel,
        "hi! you can join our discord here: hhttps://discord.gg/3QeswtdnDR ! much love ! "
      );
      break;
    case "!link":
      client.say(channel, "make sure to follow me! Streaming in the Discord!");
      break;
  }

  let shouldSendMessage = false;
  shouldSendMessage = blockedWords.some((blockedWords) => {
    message.includes(blockedWords.toLowerCase());
  });

  if (shouldSendMessage) {
    client.clear(channel, userstate.id);
    client.say(channel, `@${userstate.username} oopsie you naughty!`);
  }
});


client.connect();

  const commandName = msg.trim();

  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}