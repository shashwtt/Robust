module.exports = {
  Admins: ["663675391592103936"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: "!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/TKqCBu7Z", //Support Server Link
  Token: process.env['token'], //Discord Bot Token
  ClientID: process.env['clientID'], //Discord Client ID
  ClientSecret: process.env['clientSecret'], //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"],//Discord OAuth2 Scopes
  ServerDeafen : true,//If you want bot to stay deafened
  CallbackURL: "https://Discord-MusicBot.shashwatdubey.repl.co/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://Discord-MusicBot.shashwatdubey.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "anything as a password", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env['spotifyID'], //Spotify Client ID
    ClientSecret: process.env['spotifySecret'], //Spotify Client Secret
  },
};
