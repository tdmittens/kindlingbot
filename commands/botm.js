const util = require('../util');
const main = require('../index');
const discord = main.discord;
const logger = main.logger;


module.exports = {

    // Data object that includes all the JSON to post to the Discord command endpoint.
    data: {
        name: "botm",
        description: "Send a message through the Kindling Bot",
        type: 1,
        default_permission: true, 
        // options: [
        //     {
        //         name: "Message",
        //         description: "Send a message through the Kindling Bot.",
        //         type: 3, 
        //         required: false,
        //     },
        // ],
        // permissions: [ 
        //     {
        //         id: "848152923955265576",
        //         type: 1,
        //         permission: true,
        //     },
        // ],
    },

    // Code executed when this slash command is used by a valid user.
    execute: async (interaction) => {
        const channelID = interaction.channel_id;
        const channel = discord.channels.cache.get(channelID);

        const messageID = interaction.id;
        const message = channel.messages.cache.get(messageID);

        util.sendMessage(`${message}`, interaction);

    },

};