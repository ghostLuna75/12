const { Client } = require("discord.js");
const { activityInterval, database } = require("../../../config.json")
const mongoose = require('mongoose')

module.exports = {
  name: "ready",
  rest: false,
  once: false,
  /**
   * @param {Client} client
   */
  async execute(client) {

    /* Connect to database */
    if(!database) return;
    mongoose.connect(database, {}).then(() => console.log("The client is now connected to the database!")  
    ).catch((err) => console.error(err))

    console.log(
      `Logged in as ${client.user.tag} and running on ${client.guilds.cache.size} Server!\nDiscord: https://yaminehz.tk/discord\nYoutube: https://yaminehz.tk/youtube`
    );
   updateActivity(client)
  },
};


           
           async function updateActivity(client) {
  let servercount = await client.guilds.cache.size
  const activities = [
    `Trusted by: ${servercount} Server`,
    `Created by YassineHzz`,
  ]
  setInterval(() => {
    const status = activities[Math.floor(Math.random() * activities.length)]
    client.user.setActivity(status)
  }, activityInterval*1000)
}