const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 's!';

client.once('ready', () => {
    console.log('Socks Is Online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
});


client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'gi':
            const embed = new Discord.MessageEmbed()
            .setTitle('General Information')
            .addField('Developer Info', 'This bot was made as a bot that includes bot suggestions, but its different again. you request a command with a plain answer (example: s!hi reply: hello)')
            message.channel.send(embed);
        break;
    }

})

client.login(process.env.BOT_TOKEN)
