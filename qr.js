var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var fs = require('fs')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('./V2/functions')
var { color } = require('./V2/color')
var welcome = require('./V5/group')
var chalk = require('chalk')
var colors = require('colors')
var spin = require('spinnies')
var async = require('async')
var CFonts = require('cfonts')
var os = require('os')

require('./V1/base.js')
nocache('./V1/base.js', module => console.log(`${module} Telah Di Update!`))

var starts = async (Akira = new WAConnection()) => {
                  Akira.logger.level = 'warn'
                  Akira.version = [2, 2143, 3]
                  console.log(color('[ YT : KirBotz× ]', 'cyan'), color('Owner Is Online Now!!!', 'yellow'))
	              console.log(color('[ YT : KirBotz× ]', 'cyan'), color('Welcome Back, Owner! Hope You Are Doing Well~', 'yellow'))
                  Akira.browserDescription = [ 'KirBotz', 'Chrome', '3.0' ]
                  Akira.on('qr', () => {
                  console.log(color('[','red'), color('!','yellow'), color(']','red'), color('Scan Kak', 'white'))
                  })
                  fs.existsSync(`./V1/session/kirbotz.json`) && Akira.loadAuthInfo(`./V1/session/kirbotz.json`)
                  Akira.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'cyan'), color('Loading Bang Sabar Napa.......', 'yellow'));
	              })
                  Akira.on('open', () => {
		          console.log(color('[ SUCCES ]', 'cyan'), color('Bot Online Pliss Subrek YT : KirBotz×', 'yellow'));
	              })
                  await Akira.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./V1/session/kirbotz.json`, JSON.stringify(Akira.base64EncodedAuthInfo(), null, '\t'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                console.log(color(' ||> ','yellow'), color(`𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐊𝐢𝐫𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐍𝐞𝐰 𝐁𝐚𝐬𝐞 𝐊𝐢𝐫𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐒𝐮𝐛𝐫𝐞𝐤 𝐘𝐓 𝐊𝐢𝐫𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐉𝐚𝐧𝐠𝐚𝐧 𝐇𝐚𝐩𝐮𝐬 𝐍𝐚𝐦𝐚 𝐆𝐮𝐚 𝐁𝐚𝐧𝐠`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐇𝐚𝐫𝐠𝐚𝐢 𝐃𝐨𝐧𝐤 𝐀𝐤𝐮 𝐂𝐚𝐩𝐞`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐞𝐧𝐢𝐤𝐦𝐚𝐭𝐢 𝐅𝐢𝐭𝐮𝐫𝐧𝐲𝐚`, 'magenta'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                teks = `https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`
                                Akira.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
                                console.log(color('|WRN|', 'yellow'), color('Join Group Akira Bot', 'cyan'))
                                Akira.sendMessage(`6289688206739@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR Hentongers_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                                Akira.sendMessage(`6289688206739@s.whatsapp.net`, `*---DATABASE BOT---*\n\n•NAMA BOT : Hentongers\n•OWNER BOT : Wily\n•NOMER OWNER : wa.me/6289688206739\n\n*[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak Wily Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
start('2',colors.bold.white('\nMenunggu Pesan Baru..'));


Akira.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'KirBotzzzシ︎⁩',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Akira;;;\nFN:Botz\nitem1.TEL;waid=6287705048235:+62 877-0504-8235\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await Akira.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
Akira.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
Akira.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
Akira.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
Akira.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
Akira.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

Akira.on('group-participants-update', async (anu) => {
await welcome(Akira, anu)
})
Akira.on('chat-update', async (message) => {
require('./V1/base.js')(Akira, message)
})
}

            function nocache(module, cb = () => { }) {
            console.log('Module', `'${module}'`, 'is now being watched for changes')
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
starts()