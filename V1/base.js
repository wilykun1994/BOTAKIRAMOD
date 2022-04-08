process.on('uncaughtException', console.error) // safe log error
/////////////tes
var {
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
        } = 
        require('@adiwajshing/baileys')
var hx = require('hxz-api')
var moment = require('moment-timezone')
var speed = require('performance-now')
var { spawn, exec, execSync } = require('child_process')
var axios = require('axios')
var ffmpeg = require('fluent-ffmpeg')
var fs = require('fs-extra')
var imgbb = require('imgbb-uploader')
var yts = require( 'yt-search')
var os = require('os')
var fromBuffer = require('file-type')
var FormData = require('form-data')
var util = require('util')
var got = require('got')
var twitterGetUrl = require('twitter-url-direct')
var googleImage = require('g-i-s')
var brainly = require('brainly-scraper')
var fetch = require('node-fetch')
var ggs = require('google-it')
var request = require('request')
var crypto = require('crypto')
var chalk = require('chalk')
var fromBuffer = require('file-type')
var ms = require('parse-ms')
var toMs = require('ms')
var { error } = require('qrcode-terminal')
var { color, bgcolor } = require('../V2/color')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('../V2/functions')
var { yta, ytv, upload, formatDate } = require('../V2/ytdl')
var { y2mateA, y2mateV } = require('../V2/y2mate')
var { webp2gifFile, igDownloader } = require('../V2/gif.js')
var { mediafireDl } = require('../V2/mediafire.js')
var { jadibot, stopjadibot } = require('../V2/jadibot.js')
var { lirikLagu } = require('../V2/lirik.js')
var afk = require('../V2/afk')
var { pinterest } = require('../V2/pinterest')
var simple = require('../V2/simple')
//////////////////////////\\\\\//\\\
var game = require('../V2/game')
/////\\/\//\/\\/\\\\/\\/\\/\\/\\/\\/\//\///\//\//\/\\/
var { jadivirtex1 } = require('../V5/jadivirtex1')
/////////////////////////////////////////////////////////\\///////////////////////////////
var _scommand = JSON.parse(fs.readFileSync('./V3/scommand.json'))
var welkom = JSON.parse(fs.readFileSync('./V3/welcome.json'))
var antilink = JSON.parse(fs.readFileSync('./V3/antilink.json'))
var antilinkyt = JSON.parse(fs.readFileSync('./V3/antilinkyt.json'))
var antilinkwame = JSON.parse(fs.readFileSync('./V3/antilinkwame.json'))
var antivirtex = JSON.parse(fs.readFileSync('./V3/antivirtex.json'))
var _registered = JSON.parse(fs.readFileSync('./V3/reg/registered.json'))
var register = JSON.parse(fs.readFileSync('./V3/reg/registered.json'))
////////////////////////////////////////////////////////////////////////////////////////
var setting = JSON.parse(fs.readFileSync('./V1/session/setting.json'))
/////////////////////////////////////////////////////////////////////////////////////////
var _afk = JSON.parse(fs.readFileSync('./V3/afk.json'))
var susunkata = JSON.parse(fs.readFileSync('./V3/susunkata.json'))
var tebakgambar = JSON.parse(fs.readFileSync('./V3/tebakgambar.json'))
var caklontong = JSON.parse(fs.readFileSync('./V3/game/caklontong.json'))
var family = JSON.parse(fs.readFileSync('./V3/game/family100.json'))
var siapakahaku = JSON.parse(fs.readFileSync('./V3/game/siapakahaku.json'))
var tebakkalimat = JSON.parse(fs.readFileSync('./V3/game/tebakkalimat.json'))
var tebakkata = JSON.parse(fs.readFileSync('./V3/game/tebakkata.json'))
var tebaklirik = JSON.parse(fs.readFileSync('./V3/tebaklirik.json'))
var tekateki = JSON.parse(fs.readFileSync('./V3/game/tekateki.json'))
/////////////////////////////////////////////////////////////////////////
ownerName = setting.namaOwnr
ownerNumber = setting.nomorOwnr
owner = setting.Ownr
botName = setting.nmaBot
numberBot = setting.nmorBot
fake = setting.fke
gopay = setting.noGopay
/////////////////////////////////////////////////////////////////////////
lolkey = setting.LolKeyy
dhakey = setting.DhaKeyy
dhnapi = setting.DhnApi
ramdaniapikey = setting.RhmApi
hardiantokey = setting.RhnApi
/////////////////////////////////////////////////////////////////////////
harga1bulan = 'HARGA : 1 BULAN 15K'
harga2bulan = 'HARGA : 2 BULAN 20K'
harga6bulan = 'HARGA : 6 BULAN 30K'
hargaperpanjang = 'PERPANJANG 15K / 1 BULAN'
logonyatod = fs.readFileSync('./V4/kirtod.jpeg')
nilogorules = fs.readFileSync('./V4/rules.jpg')
nilogoowner = fs.readFileSync('./V4/owner.jpg')
nilogomenu = fs.readFileSync('./V4/fakeakira.jpeg')
qrall = fs.readFileSync('./V4/qrallpayment.jpg')
qrgopay = fs.readFileSync('./V4/qrgopay.jpg')
////////////////////////\\\\\\\\\\\\\\\\\\
soundverify = fs.readFileSync('./SOUND/soundverify.mp3')
/////////////////////
audio1 = fs.readFileSync('./media/audio3/nyz1.m4a')
audio2 = fs.readFileSync('./media/audio3/nyz2.m4a')
audio3 = fs.readFileSync('./media/audio3/nyz3.m4a')
audio4 = fs.readFileSync('./media/audio3/nyz4.m4a')
audio5 = fs.readFileSync('./media/audio3/nyz5.m4a')
audio6 = fs.readFileSync('./media/audio3/nyz6.m4a')
audio7 = fs.readFileSync('./media/audio3/nyz7.m4a')
audio8 = fs.readFileSync('./media/audio3/nyz8.m4a')
audio9 = fs.readFileSync('./media/audio3/nyz9.m4a')
audio10 = fs.readFileSync('./media/audio3/nyz10.m4a')
audio11 = fs.readFileSync('./media/audio3/nyz11.m4a')
audio12 = fs.readFileSync('./media/audio3/nyz12.m4a')
audio13 = fs.readFileSync('./media/audio3/nyz13.m4a')
audio14 = fs.readFileSync('./media/audio3/nyz14.m4a')
audio15 = fs.readFileSync('./media/audio3/nyz15.m4a')
audio16 = fs.readFileSync('./media/audio3/nyz16.m4a')
audio17 = fs.readFileSync('./media/audio3/nyz17.m4a')
audio18 = fs.readFileSync('./media/audio3/nyz18.m4a')
audio19 = fs.readFileSync('./media/audio3/nyz19.m4a')
audio20 = fs.readFileSync('./media/audio3/nyz20.m4a')
audio22 = fs.readFileSync('./media/audio3/nyz22.m4a')
audio23 = fs.readFileSync('./media/audio3/nyz23.m4a')
audio24 = fs.readFileSync('./media/audio3/nyz24.m4a')
audio25 = fs.readFileSync('./media/audio3/nyz25.m4a')
audio26 = fs.readFileSync('./media/audio3/nyz26.m4a')
audio27 = fs.readFileSync('./media/audio3/nyz27.m4a')
audio28 = fs.readFileSync('./media/audio3/nyz28.m4a')
audio29 = fs.readFileSync('./media/audio3/nyz29.m4a')
audio30 = fs.readFileSync('./media/audio3/nyz30.m4a')
audio31 = fs.readFileSync('./media/audio3/nyz31.m4a')
audio32 = fs.readFileSync('./media/audio3/nyz32.m4a')
audio33 = fs.readFileSync('./media/audio3/nyz33.m4a')
audio34 = fs.readFileSync('./media/audio3/nyz34.m4a')
audio35 = fs.readFileSync('./media/audio3/nyz35.m4a')
sound1 = fs.readFileSync('./media/sound2/sound1.mp3')
sound2 = fs.readFileSync('./media/sound2/sound2.mp3')
sound3 = fs.readFileSync('./media/sound2/sound3.mp3')
sound4 = fs.readFileSync('./media/sound2/sound4.mp3')
sound5 = fs.readFileSync('./media/sound2/sound5.mp3')
sound6 = fs.readFileSync('./media/sound2/sound6.mp3')
sound7 = fs.readFileSync('./media/sound2/sound7.mp3')
sound8 = fs.readFileSync('./media/sound2/sound8.mp3')
sound9 = fs.readFileSync('./media/sound2/sound9.mp3')
sound10 = fs.readFileSync('./media/sound2/sound10.mp3')
sound11 = fs.readFileSync('./media/sound2/sound11.mp3')
sound12 = fs.readFileSync('./media/sound2/sound12.mp3')
sound13 = fs.readFileSync('./media/sound2/sound13.mp3')
sound14 = fs.readFileSync('./media/sound2/sound14.mp3')
sound15 = fs.readFileSync('./media/sound2/sound15.mp3')
sound16 = fs.readFileSync('./media/sound2/sound16.mp3')
sound17 = fs.readFileSync('./media/sound2/sound17.mp3')
sound18 = fs.readFileSync('./media/sound2/sound18.mp3')
sound19 = fs.readFileSync('./media/sound2/sound19.mp3')
sound20 = fs.readFileSync('./media/sound2/sound20.mp3')
sound22 = fs.readFileSync('./media/sound2/sound22.mp3')
sound23 = fs.readFileSync('./media/sound2/sound23.mp3')
sound24 = fs.readFileSync('./media/sound2/sound24.mp3')
sound25 = fs.readFileSync('./media/sound2/sound25.mp3')
sound26 = fs.readFileSync('./media/sound2/sound1.mp3')
sound27 = fs.readFileSync('./media/sound2/sound2.mp3')
sound28 = fs.readFileSync('./media/sound2/sound3.mp3')
sound29 = fs.readFileSync('./media/sound2/sound4.mp3')
sound30 = fs.readFileSync('./media/sound2/sound5.mp3')
sound31 = fs.readFileSync('./media/sound2/sound6.mp3')
sound32 = fs.readFileSync('./media/sound2/sound7.mp3')
sound33 = fs.readFileSync('./media/sound2/sound8.mp3')
sound34 = fs.readFileSync('./media/sound2/sound9.mp3')
sound35 = fs.readFileSync('./media/sound2/sound10.mp3')
sound36 = fs.readFileSync('./media/sound2/sound11.mp3')
////////////////////\\\\\\\\\\\\\\\\
banChats = false
/////////////////////////////////////////////////////////////////////////////////////////
var getCmd = (id) => {
var position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
var addCmd = (id, command) => {
var obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./V3/scommand.json', JSON.stringify(_scommand))
}
//////////////////////////////////////////////////////////////////////////////////////////
          var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌆'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌇'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌄'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🌞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
////////////////////////////////////////////////////////////////////////////////////////
module.exports = KirBotz = async (KirBotz, akira) => {
	   try {
       if (!akira.hasNewMessage) return
       akira = akira.messages.all()[0]
	   if (!akira.message) return
	   if (akira.key && akira.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   m = simple.smsg(KirBotz, akira)
	   akira.message = (Object.keys(akira.message)[0] === 'ephemeralMessage') ? akira.message.ephemeralMessage.message : akira.message
       var content = JSON.stringify(akira.message)
	   var from = akira.key.remoteJid
	   var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	   var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
	   var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
       var type = Object.keys(akira.message)[0]
       var cmd = (type === 'conversation' && akira.message.conversation) ? akira.message.conversation : (type == 'imageMessage') && akira.message.imageMessage.caption ? akira.message.imageMessage.caption : (type == 'videoMessage') && akira.message.videoMessage.caption ? akira.message.videoMessage.caption : (type == 'extendedTextMessage') && akira.message.extendedTextMessage.text ? akira.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && akira.message.conversation.startsWith(prefix)) ? akira.message.conversation : (type == 'imageMessage') && akira.message[type].caption.startsWith(prefix) ? akira.message[type].caption : (type == 'videoMessage') && akira.message[type].caption.startsWith(prefix) ? akira.message[type].caption : (type == 'extendedTextMessage') && akira.message[type].text.startsWith(prefix) ? akira.message[type].text : (type == 'listResponseMessage') && akira.message[type].singleSelectReply.selectedRowId ? akira.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && akira.message[type].selectedButtonId ? akira.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(akira.message[type].fileSha256.toString('base64')) !== null && getCmd(akira.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(akira.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? akira.message.conversation : (type === 'extendedTextMessage') ? akira.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var txt = akira.message.conversation
       var botNumber = KirBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? akira.participant : akira.key.remoteJid
       var senderr = akira.key.fromMe ? KirBotz.user.jid : akira.key.remoteJid.endsWith('@g.us') ? akira.participant : akira.key.remoteJid
       var totalchat = await KirBotz.chats.all()
       var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var isWelkom = isGroup ? welkom.includes(from) : true
       var isAntiLink = isGroup ? antilink.includes(from) : true
       var isAntiLinkyt = isGroup ? antilinkyt.includes(from) : false
       var isAntiLinkwame = isGroup ? antilinkwame.includes(from) : false
       var isAntiVirtex = isGroup ? antivirtex.includes(from) : true
       var isAfkOn = afk.checkAfkUser(sender, _afk)
       var conts = akira.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = akira.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var mentionByTag = type == "extendedTextMessage" && akira.message.extendedTextMessage.contextInfo != null ? akira.message.extendedTextMessage.contextInfo.mentionedJid : []
       var mentionByreply = type == "extendedTextMessage" && akira.message.extendedTextMessage.contextInfo != null ? akira.message.extendedTextMessage.contextInfo.participant || "" : ""
       var mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
       mention != undefined ? mention.push(mentionByreply) : []
       var mentionUser = mention != undefined ? mention.filter(n => n) : []
       var isOwner = ownerNumber.includes(sender)
       var isRegister = register.includes(sender)
//////////////////////////////////////////////////////////////////////////////////////////
selectedButton = (type == 'buttonsResponseMessage') ? akira.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? akira.message.listResponseMessage.title : ''
//////////////////////////////////////////////////////////////////////////////////////////
var sendButton = async (from, context, fortext, but, fgi) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
quoted: fgi
})
}
var sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
var kma = gam1
var mhan = await KirBotz.prepareMessage(from, kma, image)
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: akira, contextInfo: {"mentionedJid": men ? men : []}})
}
var sendVn = (teks) => {KirBotz.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:akira,contextInfo: {forwardingScore: 508, isForwarded: true}})}
///////////////////////////////////////////////
var getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
var addRegisteredUser = (userid, sender, age, time, serials) => {
            var obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./V3/reg/registered.json', JSON.stringify(_registered))
        }
        
var checkRegisteredUser = (sender) => {
            var status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
var isRegistered = checkRegisteredUser(sender)
var daftar1 = `Hai Kak😉  ${pushname}\nJangan Lupa Daftar Dulu Yah 😆`
var daftar2 = '```Click VERRIFY Di Bawah ⬇️```\n```Jika Button Tidak Kelihatan Silahkan Ketik➡️ 123```\n*「 ⱧɆ₦₮₳ł-฿Ø₮Ⱬ 」*'
var daftar3 = [
          {
            buttonId: `!verify`,
            buttonText: {
              displayText: `💮 VERIFY 💮`,
            },
            type: 1,
          },]
///////////////////////////////////////////
kirr = {
		  wait: '```⏳ TUNGGU SEBENTAR KAK……```',
		  success: '```🔥 Udah Jadi Nih……```',
		  error: {
		  stick: '*Gagal Convert Gambar To Sticker...Coba Lagi !*',
		  Iv: '*Linknya Error Tod !*'
		  },
		  only: {
		  admin: '*Kusus Admin Tod !*',
		  group: '*Khusus Group Tod !*'
		  }
		  }
//////////////////////////////////////////////////////////////////////////////////////////
var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')
//////////////////////////////////////////////////////////////////////////////////////////
var sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var hideTag = async function(from, text){
var anu = await KirBotz.groupMetadata(from)
var members = anu.participants
var ane = []
for (var i of members){
ane.push(i.jid)
}
KirBotz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./V4/fakeakira.jpeg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
var listmsg = (from, title, desc, list) => { 
var po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}
var fakeyt = (teks) => {
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
KirBotz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hai Kak ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://e.top4top.io/p_2231oxc0u0.png",
"mediaUrl": "https://youtu.be/wJQ9ig_d8yY/?utm_source=ig_web_copy_link",
"thumbnail": fs.readFileSync(`./RANDOM/menu${menhe}.jpg`),
"sourceUrl": "https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI",
},mentionedJid:[sender]}, quoted : fgi})
};
var reply = (teks) => {
KirBotz.sendMessage(from, teks, text, { thumbnail: nilogomenu, sendEphemeral: true, quoted: fakeTroli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `🔥 GROUP BOT HENTAI 🔥`,body:"SELECT",previewType:"PHOTO",thumbnail:nilogomenu,sourceUrl:`https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI`}}})
}
var reply2 = (teks) => {
KirBotz.sendMessage(from, teks, text, {quoted: fakeTroli, contextInfo: {externalAdReply: fakeyt, mentionedJid: parseMention(teks) }})
}  
game.cekWaktuFam(KirBotz, family)
var katalog = (teks) => {
res = KirBotz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©HENTAI", "jpegThumbnail": fs.readFileSync('./V4/fakeakira.jpeg'), "surface": 'CATALOG' }}, {quoted:fgi})
KirBotz.relayWAMessage(res)
}
var sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: akira, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
KirBotz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function monospace(string) {
return '```' + string + '```'
}   
var fgi = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: { 
"videoMessage": { 
"title": `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
"h": `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')
}
}
} 
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
var mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
var media = fs.readFileSync(filename)
var type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
KirBotz.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
/////////\\//\\/\\//\//\\/\\//\//\//\\/\\//\\\\/\\//\/\\/\//\//\/\
///////////////\\//\//\//\\//\//\\/\\/\\//\/\\/\//\\/\//\//\\/\\//\//\/
var sticOwner = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/owner.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/notadmin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticAdmin = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/admin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticWait = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/wait.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticOk = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/ok.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticToxic = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/toxic.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticLrngn = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/larangan.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticGaboleh = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/gaboleh.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}	
var sticBntr = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/bntr.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticGood = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/good.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticPukulyu = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/bully.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticSalam = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/salam.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticDahlah = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/dahlah.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticHadeh = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/hadeh.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}
var sticKaget = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/kaget.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: akira})
		}																		
/////////////////////////////////////////////////
/////////////////////////////////////////
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
//////////////////////////////////////////////////
var sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('../V2/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./WM/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					KirBotz.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
////////////////////////////////////////
if (isGroup) {
		if (!akira.key.fromMe && banChats === true) return
		for (var x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			var getId = afk.getAfkId(x, _afk)
			var getReason = afk.getAfkReason(getId, _afk)
			var getTime = afk.getAfkTime(getId, _afk)
			var cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    var getTime = afk.getAfkTime(sender, _afk)
		    var getReason = afk.getAfkReason(sender, _afk)
		    var ittung = ms(await Date.now() - getTime)
		    var pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./V3/afk.json', JSON.stringify(_afk))
		}
	    }
//////////////////////////////////////////////
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`Selamat🥳 Jawaban kamu benar!`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync('./V3/susunkata.json', JSON.stringify(susunkata))
                }
            }
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply('Selamat🥳 Jawaban kamu benar!')
                    delete family[sender.split('@')[0]]
                    fs.writeFileSync('./V3/game/family100.json', JSON.stringify(family))
                }
            }
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply('Selamat🥳 Jawaban kamu benar!')
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync('./V3/game/tebakgambar.json', JSON.stringify(tebakgambar))
                }
            }
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply('Selamat🥳 Jawaban kamu benar!')
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync('./V3/game/caklontong.json', JSON.stringify(caklontong))
                }
            }
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    reply('Selamat🥳 Jawaban kamu benar!')
                    fs.writeFileSync('./V3/game/siapakahaku.json', JSON.stringify(siapakahaku))
                }
            }
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    reply('Selamat🥳 Jawaban kamu benar!')
                    fs.writeFileSync('./V3/game/tebakkalimat.json', JSON.stringify(tebakkalimat))
                }
            }
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    reply('Selamat🥳 Jawaban kamu benar!')
                    fs.writeFileSync('./V3/game/tebakkata.json', JSON.stringify(tebakkata))
                }
            }
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    reply('Selamat🥳 Jawaban kamu benar!')
                    fs.writeFileSync('./V3/tebaklirik.json', JSON.stringify(tebaklirik))
                }
            }
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    reply('Selamat🥳 Jawaban kamu benar!')
                    fs.writeFileSync('./V3/game/tekateki.json', JSON.stringify(tekateki))
                } else {
                    reply('Jawaban Salah!')
                }
            }
////////////////////////////////////////////
var mengt =`${runtime(process.uptime())}\n${totalchat.length} Chat`  
var jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
var fakeTroli = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 100000, status: 200, surface: 200, message: mengt, orderTitle: mengt, thumbnail: fs.readFileSync('./V4/qrgopay.jpg'), sellerJid: '0@s.whatsapp.net'}}}   
if (!akira.key.fromMe && banChats === true) return
var createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
if (isGroup && !akira.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
fakeyt(`「 *😏 LINK TERDETEKSI 😏* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (isGroup && !akira.key.fromMe && isAntiLinkyt) {
if (budy.includes("://youtu.be/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
fakeyt(`「 *LINK TERDETEKSI* 」\n\n_Link terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (isGroup && !akira.key.fromMe && isAntiLinkwame) {
if (budy.includes("wa.me/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
fakeyt(`「 *LINK TERDETEKSI* 」\n\n_Link terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
KirBotz.groupRemove(from, [sender])
}
KirBotz.updatePresence(from, Presence.composing)
KirBotz.chatRead(from, "read")
//━━━━━━━━━━━━━━━[ NO PREFIX ]━━━━━━━━━━━━━━━\\
switch(is) {

case 'listtts':

fakeyt(` ${prefix}tts kodebahasa teks
Kode Bahasa | Negara
  af             Afrikaans
  sq             Albanian
  ar             Arabic
  hy             Armenian
  ca             Catalan
  zh             Chinese
  zh-cn         Chinese (Mandarin/China)
  zh-tw         Chinese (Mandarin/Taiwan)
  zh-yue        Chinese (Cantonese)
  hr             Croatian
  cs             Czech
  da             Danish
  nl              Dutch
  en             English
  en-au         English (Australia)
  en-uk         English (United Kingdom)
  en-us         English (United States)
  eo             Esperanto
  fi              Finnish
  fr              French
  de            German
  el             Greek
  ht             Haitian Creole
  hi             Hindi
  hu            Hungarian
  is             Icelandic
  id             Indonesian
  it             Italian
  ja            Japanese
  ko            Korean
  la             Latin
  lv             Latvian
  mk            Macedonian
  no             Norwegian
  pl              Polish
  pt             Portuguese
  pt-br          Portuguese (Brazil)
  ro             Romanian
  ru             Russian
  sr             Serbian
  sk             Slovak
  es             Spanish
  es-es         Spanish (Spain)
  es-us         Spanish (United States)
  sw             Swahili
  sv             Swedish
  ta             Tamil
  th             Thai
  tr              Turkish
  vi              Vietnamese
  cy             Welsh
  `)
break
case 'jadibot':

    if (!akira.key.fromMe && !isOwner) return reply(`Silahkan Chat Owner Kalau Mau Jadi Bot`) 
    jadibot(fakeyt,KirBotz,from)
    break
case 'listbot':

    var tekss = '「 *LIST JADIBOT* 」\n'
    for(var i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    fakeyt(tekss)
    break
case '123':
if (isRegistered) return fakeyt('```Akun Kamu Sudah Terverfikasi```')
var serialUser = createSerial(18)
	         try {
								ppimg = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./V3/reg/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         var anuu = `「 *PENDAFTARAN USER* 」
*'Terimakasih Sudah Mendaftarkan Diri 😁'*

*👤 Nama :* ${pushname}
*🦄 API :* +${sender.split('@')[0]}
*🐠 Serial:* ${serialUser}
*🐳 Total:* ${_registered.length} Pengguna

*「 ⱧɆ₦₮₳ł-฿Ø₮Ⱬ 」*`
         kirgans = await getBuffer(ppimg)
         py =await KirBotz.prepareMessage(from, kirgans, image)
         sendButloc(from,monospace(anuu),'',`Verify By *KirBotz*`,[{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `${prefix}rules`, buttonText: {displayText: 'RULES'}, type: 1}
         ],null,null,kirgans)
	        console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
            setTimeout( () => {
			KirBotz.updatePresence(from, Presence.composing)
			sendVn(soundverify)
		}, 2000)
        break
case 'setfotomenu':

	        if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
			delb = await KirBotz.downloadMediaMessage(boij)
			fs.writeFileSync(`./V4/fakeakira.jpeg`, delb)
			fakeyt('Sukses')
        	} else {
            fakeyt(`Reply Gambar Dengan Caption ${prefix}setfotomenu`)
          	}
			break	
case 'join':

            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(kirr.Iv)
            hen = args[0]
            if (!q) return fakeyt('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('pastikan link sudah benar!')
            var response = await KirBotz.acceptInvite(codeInvite)
            fakeyt('SUKSES')
            } catch {
            fakeyt('LINK ERROR!')
            }
            break
case 'tes':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
but = 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: `MENU`},type:1}
]
sendButImage(from, `Hallo Kak *${pushname}*`, `*Bot Dah On Kak Silahkan Pencet Menu Di Bawah*\n*Gunakan Bot Sebaik Mungkin Yah*`, logonyatod, but)
break
case 'mode':

if (!akira.key.fromMe) return;
sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}self`,
buttonText: {
displayText: `⬡ SELF `,
},
type: 1,
},
{
buttonId: `${prefix}public`,
buttonText: {
displayText: `⬡ PUBLIC`,
},
type: 1,
},
]);
break;
case 'leave':{
          if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
          KirBotz.groupLeave(from)
}
          break
case 'd':
case 'del':
case 'delete':

               try {
               if (akira.message.extendedTextMessage === undefined || akira.message.extendedTextMessage === null) return reply('Reply chat bot')
               KirBotz.deleteMessage(from, {id: akira.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break

}
//━━━━━━━━━━━━━━━[ YANG PREFIX ]━━━━━━━━━━━━━━━\\
//CASE BY KIRBOTZ COPAS KASIH TQTO ANJING CAPEK" GUA\\
switch (command) {
case 'tqto':
hentai = '6289688206739'
stod = `${sender.split('@')[0]}@s.whatsapp.net`
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: '⚔️ THANKS TO ⚔️',
footerText: `「🔥 𝐶𝑟𝑒𝑑𝑖𝑡𝑠 𝐵𝑦 🔥」
 👤 hentai 👤 : https://wa.me/${hentai.split("@")[0]}
`,
description: `${ucapanWaktu} Kak @${sender.split('@')[0]}`,
sections: [
{

"title": `👤 Creator Bot WhatsApp 👤`,
 rows: [
{
"title": "😂 Owner Hentai 😂",
"description": 'Mau Nambah Owner? Chat paling atas tuh :v',
"rowId": `${prefix}bothen`
}
]
}
],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fakeTroli})
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'bothen':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (var mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:KirBotzzz\n` +
            `item1.TEL;waid=6289688206739:6289688206739\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:megalodon71@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtu.be/N-Z9ugGpeYk/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Hentai - Botz Developer\n` +
            'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: fakeTroli, 
})
reply(`Ituh Kak Nomor Pembuat Sc Nya Jangan Lupa Subscribe
https://youtu.be/N-Z9ugGpeYk/`)
break
//////////////////////////////////////////l//l/lll($($($8#88$+#++$++$+$+$++$+#++$+$++"+$/ll/l//l/l/l/l////l//l/lll/ll____________&____&&&#&&#66#6#66#
case 'verify':
fakeyt('Kode Verify Kamu Itu : Ketik Di Sini ↪️ 123 ↩️')
KirBotz.sendMessage(sender, "Ketik Di Sini, Itu Kode Verify Kamu : Kalau Belom ↪️ 123 ↩️ 👍", text, {quoted: fgi})
break
case 'setcmd':
              if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = akira.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply("Done!")
              } else {
              reply('tag stickenya')
}
              break
case 'delcmd':
              if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = akira.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./V3/scommand.json', JSON.stringify(_scommand))
              reply("Done!")
              break
case 'listcmd':            
              var teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              var cemde = [];
              for (var i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break

case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'hijaber':
buffer = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/${command}?apikey=${ramdaniapikey}`)
sticWait(from)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButVideo(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':

case 'korea':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+korea`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'china':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+china`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'japan':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+japan`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'malaysia':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+malaysia`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'rose':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+rose`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'ryujin':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+ryujin`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'vietnam':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+vietnam`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'thailand':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+thailand`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'lisa':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+lisa`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'justina':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+justina`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'jiso':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+jiso`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'jeni':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+jeni`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'cogan2':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+cogan2`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'cecan2':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+cecan2`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'cogan':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+cogan`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'indonesia':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+tiktok+indo`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: akira})
break
case 'cecan':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=cewe+gambar+cecan`)
text1 = `Klik Next Untuk Ke Gambar Cewe ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'bokep':                    
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storywa':
case 'storygalau':
case 'storyanime':
case 'storytruk':
case 'storybus':
if (!akira.key.fromMe && !isOwner) return fakeyt(`Fitur Ini Gue Di Nonaktifkan Alasanya Puasa Woiii, Nanti Kalau On ntar gue Kabarin Dah`)
sticWait(from)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButVideo(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'motor':
case 'mobil':
case 'renungan':
case 'katakataimage':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':

sticWait(from)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'naruto':
case 'boruto':
case 'nekonime':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestie':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':

sticWait(from)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${lolkey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'menu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
janganti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「👤 INFO USER 👤」*
*│ 👤 Nama :* ${pushname}
*│ 📱 Nomor :* wa.me/${sender.split('@')[0]}
*│ 💻 Bio :* ${thu.status}
*╰──────────────😈

*╭──「⚔️ INFO BOTZ ⚔️」*
*│👤 Nama Owner  :* ${ownerName}
*│⚙️ Nomor Owner ️ :* wa.me/${janganti}
*│🤖 Nama Bot  :* ${botName}
*│😺 Nomor Bot  :* wa.me/${numberBot}
*│🚈 Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*│📭 Group Chat :* ${groups.length}
*│🔒 Private Chat :* ${privat.length}
*│🛠️ Total Chat :* ${totalChat.length}
*╰──────────────😈

*╭──「🛡️ PERATURAN 🛡️」*
*│⏳ Runtime :* ${runtime(process.uptime())}
*│🗒 ️Tanggal :* ${tanggal}
*│🐯 Wib :* ${wib}
*│🐱 Wita :* ${wita}
*│🐈 ️Wit :* ${wit}
*╰──────────────😈
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}rules`, buttonText: { displayText: 'ATURAN BOT 👍' }, type: 1 }
             ,
             { buttonId: `${prefix}gchentai`, buttonText: { displayText: 'GROUP BOT 🤖' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👽' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'list':
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: '👾 MENU BOT 👾',
footerText: `🛡️ 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
🌪️ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
📖 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
🏃‍♂️ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
🐱 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}`,
description: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah ⤵️`,
sections: [
{
"title":"━━━━━━━━━━━━━━━[𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨]━━━━━━━━━━━━━━━━━",
 rows: [
{
"title": "🔥 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 🔥",
"description": 'Fitur Fitur Lainnya ⚔️',
"rowId": `${prefix}allmenu`
}
,
{
"title": "😳 𝗖𝗛𝗘𝗖𝗞 𝗟𝗜𝗠𝗜𝗧 𝗕𝗢𝗧 😳",
"description": 'Fitur Ini Untuk Mengetahui Limit Bot Apikey Lolhuman Di Bot Ini 🥺',
"rowId": `${prefix}cekapikey`
}
]
}
,
{
"title":"━━━━━━━━━━━[𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪 / 𝗛𝗘𝗡𝗧𝗔𝗜 𝗗𝗟𝗟]━━━━━━━━━━━━",
 rows: [
{
"title": "😈 𝟏𝟖+ | 𝗛𝗘𝗡𝗧𝗔𝗜 𝐌𝐄𝐍𝐔 😈",
"description": 'Dosa Tanggung Sendiri Cok',
"rowId": `${prefix}18+menu`
}
,
{
"title": "📹 𝐀𝐍𝐈𝐌𝐄 𝐇𝐄𝐍𝐓𝐀𝐈 𝐆𝐈𝐅 𝐌𝐄𝐍𝐔 📹",
"description": 'Fitur Hentai Gif Sesat Dosa Tanggung Sendiri Yah🤣',
"rowId": `${prefix}animehentaigifmenu`
}
,
{
"title": "👹 𝐌𝐀𝐍𝐆𝐀 𝐃𝐎𝐔𝐉𝐈𝐍 𝐌𝐄𝐍𝐔 👹",
"description": 'Dosa Tanggung Sendiri Cok 👽',
"rowId": `${prefix}mangadoujin`
}
,
{
"title": "🤤 𝐗𝐍𝐗𝐗 / 𝐗𝐇𝐀𝐌𝐒𝐓𝐄𝐑 / 𝐍𝐄𝐊𝐎𝐏𝐎𝐈 𝐌𝐄𝐍𝐔 🤤",
"description": 'Monggo Nambah Dosa Kwokwok 🤣',
"rowId": `${prefix}xxn`
}
,
{
"title": "🎥 𝐕𝐈𝐃𝐄𝐎 𝐌𝐄𝐍𝐔 🎥",
"description": 'Fitur Video Bisa Kalian Chek Sendiri 🎥',
"rowId": `${prefix}videomenu`
}
]
}
,
{
"title":"━━━━━━━━━━━━[𝗠𝗘𝗡𝗨 𝗟𝗔𝗜𝗡𝗡𝗬𝗔]━━━━━━━━━━━━━",
 rows: [
{
"title": "[📹] 𝐀𝐍𝐈𝐌𝐄 𝐆𝐈𝐅 𝐌𝐄𝐍𝐔",
"description": 'Fitur Anime Gif Halal Bisa Kalian Chek Sendiri😁',
"rowId": `${prefix}animegifmenu`
}
,
{
"title": "[🎬] 𝐏𝐇𝐎𝐓𝐎 𝐄𝐃𝐈𝐓𝐎𝐑 𝐌𝐄𝐍𝐔",
"description": 'Menu Photo Editor Replay Gambar Kalian 😁 ',
"rowId": `${prefix}photoeditormenu`
}
,
{
"title": "[🎞️] 𝐏𝐇𝐎𝐓𝐎 𝐄𝐃𝐈𝐓𝐎𝐑 𝐕𝟐 𝐌𝐄𝐍𝐔",
"description": 'Menu Photo Editor V2 Replay Gambar Kalian 😁 ',
"rowId": `${prefix}photoeditorv2menu`
}
,
{
"title": "[🔱] 𝐑𝐀𝐍𝐃𝐎𝐌 𝐓𝐄𝐗𝐓 𝐌𝐄𝐍𝐔",
"description": 'Menu Random Text 😉',
"rowId": `${prefix}rrandomtext`
}
, 
{
"title": "[🌼] 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐀𝐍𝐈𝐌𝐄 𝐁𝐀𝐓𝐂𝐇 𝐌𝐄𝐍𝐔",
"description": 'Download Anime Langsung Ke Linknya 😁 ',
"rowId": `${prefix}downloadanime`
}
,
{
"title": "[🧽] 𝐈𝐌𝐀𝐆𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Gambar Bisa Sticker Kalian Chek Sendiri 🔍',
"rowId": `${prefix}imagestickermenu`
}
,
{
"title": "[✳️] 𝐓𝐄𝐊𝐒 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Teks Bisa Sticker Kalian Chek Sendiri 🔍',
"rowId": `${prefix}teksstickermenu`
}
,
{
"title": "[📑] 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐌𝐄𝐍𝐔",
"description": 'Fitur Informasi 😏',
"rowId": `${prefix}informasi`
}
,
{
"title": "[🤣] 𝐌𝐄𝐌𝐄 𝐒𝐏𝐎𝐍𝐆𝐄𝐁𝐎𝐁 𝐌𝐄𝐍𝐔",
"description": 'Semoga Kalian Terhibur Dengan Fitur Meme Ini 😂',
"rowId": `${prefix}memespongebobmenu`
}
,
{
"title": "[😂] 𝐌𝐄𝐌𝐄 𝐁𝐔𝐀𝐓𝐀𝐍 | 𝐌𝐄𝐍𝐔",
"description": 'Semoga Kalian Terhibur Dengan Fitur Meme Buatan Ini 😂',
"rowId": `${prefix}memebuatanmenu`
}
,
{
"title": "[😆] 𝐌𝐄𝐌𝐄 𝐌𝐄𝐍𝐔",
"description": 'Semoga Kalian Terhibur Dengan Fitur Meme Ini :v',
"rowId": `${prefix}memek`
}
,
{
"title": "[📚] 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔",
"description": 'Apa Yang Kalian Ingin Cari? 👨‍🏫',
"rowId": `${prefix}cari`
}
,
{
"title": "[📔] 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Wallpaper Anime Dan Lain-Lain 📔',
"rowId": `${prefix}wallpapermenu`
}
,
{
"title": "[🔧] 𝐀𝐏𝐋𝐈𝐊𝐀𝐒𝐈 𝐆𝐀𝐌𝐄 𝐌𝐎𝐃 || 𝐃𝐋𝐋 𝐌𝐄𝐍𝐔",
"description": 'Fitur Untuk Mencari Apk Game DLL 🔧',
"rowId": `${prefix}aplikasimenu`
}
,
{
"title": "[📰] 𝐍𝐄𝐖𝐒 / 𝐂𝐍𝐍 𝐈𝐍𝐃𝐎 𝐌𝐄𝐍𝐔",
"description": 'Fitur Berita Cnn Indonesia 👍',
"rowId": `${prefix}newscnnmenu`
}
,
{
"title": "[🐌] 𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Menarik Lainnya 🌼',
"rowId": `${prefix}makermenu`
}
,
{
"title": "[🌳] 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Other Bro :v',
"rowId": `${prefix}othermenu`
}
,
{
"title": "[💐] 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔",
"description": 'Fitur Khusus Download Ngab Kek tiktok dll 🔥',
"rowId": `${prefix}downloadmenu`
}
,
{
"title": "[🌷] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Gambar Di Jadiin Sticker Lainnya 🎃',
"rowId": `${prefix}stickermenu`
}
,
{
"title": "[🙀] 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔",
"description": 'Fitur Game Sangat Menarik Buat Tes Otak Kalian ⚒️',
"rowId": `${prefix}gamemenu`
}
,
{
"title": "[🐥] 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔",
"description": 'Fitur Khusus Di Group Ajah Ngab ☕',
"rowId": `${prefix}groupmenu`
}
,
{
"title": "[📝] 𝐍𝐔𝐋𝐈𝐒 𝐌𝐄𝐍𝐔",
"description": 'Males Nulis Di Buku? Pakek Cara Ini Ajah 🤣',
"rowId": `${prefix}nulus`
}
,
{
"title": "[👾] 𝗔𝗦𝗨𝗣𝗔𝗡 𝗩𝗘𝗥𝗦𝗜 𝗩𝗜𝗗𝗘𝗢 𝗠𝗘𝗡𝗨",
"description": 'Fitur Mppsh Ah :v',
"rowId": `${prefix}asupanmenu`
}
,
{
"title": "[💖] 𝗔𝗦𝗨𝗣𝗔𝗡 𝗩𝗘𝗥𝗦𝗜 𝗜𝗠𝗔𝗚𝗘 𝗠𝗘𝗡𝗨",
"description": 'Fitur Mppsh Ah Part 2 :v',
"rowId": `${prefix}asupanversiimage`
}
,
{
"title": "[🧿] 𝐇𝐄𝐖𝐀𝐍 𝐌𝐄𝐍𝐔",
"description": 'Fitur Hewan Bisa Kalian Chek Sendiri 🔍',
"rowId": `${prefix}hewanmenu`
}
,
{
"title": "[🐱]  𝐈𝐒𝐋𝐀𝐌𝐈 𝐌𝐄𝐍𝐔",
"description": 'Fitur Barokah Slur :v',
"rowId": `${prefix}islamimenu`
}
,
{
"title": "🌼 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔",
"description": 'Fitur Khusus Owner Ini Ngab Jadi Kalian Tidak Bisa Pakek',
"rowId": `${prefix}ownermenu`
}
,
{
"title": "[📸] 𝐅𝐎𝐓𝐎 𝐌𝐄𝐍𝐔",
"description": 'Firur Foto Bisa Kakian Chek Sendiri 📸',
"rowId": `${prefix}fotomenu`
}
]
}
,
{
"title":"━━━━━━━━[𝗠𝗘𝗡𝗨 𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗦 𝗔𝗡𝗜𝗠𝗘 / 𝗚𝗔𝗠𝗘]━━━━━━━━━",
 rows: [
{
"title": "[😊] 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑𝐒 𝐀𝐍𝐈𝐌𝐄 𝐀𝐙𝐔𝐑 𝐋𝐀𝐍𝐄",
"description": 'Fitur Cari Karakter GI 🙈',
"rowId": `${prefix}animeazurlanemenu`
}
, 
{
"title": "[💋] 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑𝐒 𝐆𝐄𝐍𝐒𝐇𝐈𝐍 𝐈𝐌𝐏𝐀𝐂𝐓",
"description": 'Fitur Cari Karakter GI 🙈',
"rowId": `${prefix}genshinmenu`
}
,
{
"title": "[💗] 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑𝐒 𝐀𝐍𝐈𝐌𝐄",
"description": 'Fitur Anime Halal Bisa Kalian Chek Sendiri📡',
"rowId": `${prefix}animemenu`
}
,
{
"title": "[❤] ️𝐂𝐇𝐀𝐑𝐀𝐂𝐇𝐓𝐄𝐑𝐒 𝐀𝐍𝐈𝐌𝐄 𝐕𝟐️",
"description": 'Fitur Anime V2 Halal Bisa Kalian Chek Sendiri👋',
"rowId": `${prefix}animev2menu`
}
]
}
,
{
"title":"━━━━━━━━━━━━[𝗠𝗘𝗡𝗨 𝗦𝗢𝗨𝗡𝗗 / 𝗔𝗨𝗗𝗜𝗢]━━━━━━━━━━━━━",
 rows: [
{
"title": "[🎵] 𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔",
"description": 'Menu Sound Coba Ajah 🎵',
"rowId": `${prefix}soundd`
}
,
{
"title": "[🎧] 𝐀𝐔𝐃𝐈𝐎 𝐌𝐄𝐍𝐔",
"description": 'Menu Audio Coba Ajah 🎧',
"rowId": `${prefix}audioo`
}
]
}
,
{
"title":"━━━━━━━━━━━━━━━[𝗧𝗢𝗣 𝗨𝗣 𝗚𝗔𝗠𝗘]━━━━━━━━━━━━━━━━━",
 rows: [
{
"title": "[💎] 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}dmff`
}
,
{
"title": "[💎] 𝐌𝐎𝐁𝐈𝐋𝐄 𝐋𝐄𝐆𝐄𝐍𝐃",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}dmml`
}
,
{
"title": "[💎] 𝐃𝐎𝐌𝐈𝐍𝐎",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}chip`
}
,
{
"title": "[💎] 𝐇𝐀𝐆𝐎",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}dmhago`
}
,
{
"title": "[💎] 𝐆𝐀𝐑𝐄𝐍𝐀",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}garenashell`
}
,
{
"title": "[💎] 𝐏𝐎𝐈𝐍𝐓 𝐁𝐋𝐀𝐍𝐊",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}pointblank`
}
,
{
"title": "[💎] 𝐂𝐀𝐋𝐋 𝐎𝐅 𝐃𝐔𝐓𝐘",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}cod`
}
,
{
"title": "[💎] 𝐏𝐔𝐁𝐆",
"description": 'Silakan Lihat Harganya 👍',
"rowId": `${prefix}pubg`
}
]
}
,
{
"title":"━━━━━━━━━━━━━━━[ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗕𝗢𝗧]━━━━━━━━━━━━━━━━━",
 rows: [
{
"title": "[☕] 𝐁𝐈𝐆 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎",
"description": 'Terima Kasih Banyak 🙂',
"rowId": `${prefix}tqto`
}
]
}
,
{
"title":"━━━━━━━━━━━━━━━[𝐌𝐄𝐃𝐈𝐀 𝐎𝐖𝐍𝐄𝐑]━━━━━━━━━━━━━━━━━",
 rows: [
{
"title": "[🎬] 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐎𝐖𝐍𝐄𝐑",
"description": 'Chek Lah 🤣',
"rowId": `${prefix}ytowner`
}
]
}
,
{
"title":"━━━━━━━━━━━━━━━[𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 𝗕𝗢𝗧]━━━━━━━━━━━━━━━━━",
 rows: [
{
"title": "[🤖] 𝐒𝐄𝐖𝐀𝐁𝐎𝐓",
"description": 'Beneran Cok Mau Sewa Bot? 🙄',
"rowId": `${prefix}sewabot`
}
,
{
"title": "[☘️] 𝐃𝐎𝐍𝐀𝐒𝐈",
"description": 'Donasi Lah Kawan Dan Baik Hati 😁',
"rowId": `${prefix}donasi`
}
,
{
"title": "[🌺] 𝐑𝐔𝐋𝐄𝐒",
"description": 'Penting Baca Ngab 😉',
"rowId": `${prefix}rules`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
var yoasobi1 = fs.readFileSync(`./SOUND/yoasobi1.mp3`)
         KirBotz.sendMessage(from, yoasobi1, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
                      ///kwokwokwok
case 'memespongebobmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🤣 MEME SPONGEBOB 🤣」*
🤣 ${prefix}meme_patrick
🤣 ${prefix}meme_kartun_spongebob
🤣 ${prefix}meme_spongebob
🤣 ${prefix}meme_squidward
🤣 ${prefix}meme_plankton
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'photoeditorv2menu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🐈 PHOTO EDITOR V2 MENU 🐈」*
🐈 ${prefix}affect
🐈 ${prefix}beautiful
🐈 ${prefix}facepalm
🐈 ${prefix}hitler
🐈 ${prefix}jokeOverHead
🐈 ${prefix}jail
🐈 ${prefix}rip
🐈 ${prefix}sepia
🐈 ${prefix}trash
🐈 ${prefix}wanted
🐈 ${prefix}wasted
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'photoeditormenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「😜 PHOTO EDITOR MENU 😜」*
😜 ${prefix}pencil
😜 ${prefix}skullmask
😜 ${prefix}cartoon
😜 ${prefix}invert
😜 ${prefix}fisheye
😜 ${prefix}pixelate
😜 ${prefix}rotate
😜 ${prefix}flip
😜 ${prefix}grayscale
😜 ${prefix}roundimage
😜 ${prefix}fisheyee
😜 ${prefix}deepfry
😜 ${prefix}imagecolor
😜 ${prefix}upscale
😜 ${prefix}aden
😜 ${prefix}brannan
😜 ${prefix}brooklyn
😜 ${prefix}clarendon
😜 ${prefix}gingham
😜 ${prefix}hudson
😜 ${prefix}inkwell
😜 ${prefix}earlybird
😜 ${prefix}kelvin
😜 ${prefix}lark
😜 ${prefix}lofi
😜 ${prefix}maven
😜 ${prefix}mayfair
😜 ${prefix}moon
😜 ${prefix}nashville
😜 ${prefix}perpetua
😜 ${prefix}reyes
😜 ${prefix}rise
😜 ${prefix}slumber
😜 ${prefix}stinson
😜 ${prefix}toaster
😜 ${prefix}valencia
😜 ${prefix}walden
😜 ${prefix}willow
😜 ${prefix}xpro2
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                             
case 'rrandomtext':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🔱 RANDOM TEXT MENU 🔱」*
🔱 ${prefix}faktaunik
🔱 ${prefix}katabijak
🔱 ${prefix}pantun
🔱 ${prefix}bucin
🔱 ${prefix}nama
🔱 ${prefix}puisi
🔱 ${prefix}cerpen
🔱 ${prefix}ceritahoror
🔱 ${prefix}quotes
🔱 ${prefix}quotes2
🔱 ${prefix}quotesanime
🔱 ${prefix}quotesdilan
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'animeazurlanemenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「😊 CHARACTERS ANIME AZUR LANE 😊」*
😊 ${prefix}enterprise
😊 ${prefix}leffy
😊 ${prefix}belfast
😊 ${prefix}akagi
😊 ${prefix}kaga
😊 ${prefix}atago
😊 ${prefix}prinz_eugen
😊 ${prefix}ayumi
😊 ${prefix}z23
😊 ${prefix}clevelandl
😊 ${prefix}bismarck
😊 ${prefix}unicorn
😊 ${prefix}javelin
😊 ${prefix}warspite
😊 ${prefix}akashi
😊 ${prefix}Illustrious
😊 ${prefix}nagato
😊 ${prefix}takao
😊 ${prefix}hood
😊 ${prefix}shoukaku
😊 ${prefix}zuikaku
😊 ${prefix}amagi
😊 ${prefix}long_island
😊 ${prefix}sheffield
😊 ${prefix}admiral_hipper
😊 ${prefix}baltimore
😊 ${prefix}yuudachi
😊 ${prefix}montpelier
😊 ${prefix}hammann
😊 ${prefix}queen_elizabeth
😊 ${prefix}yukikaze
😊 ${prefix}kawazake
😊 ${prefix}yamashiro
😊 ${prefix}prince_of_wales
😊 ${prefix}massachusetts
😊 ${prefix}hornet
😊 ${prefix}kisaragi
😊 ${prefix}vestal
😊 ${prefix}mikasa
😊 ${prefix}hiryuu
😊 ${prefix}yorktown
😊 ${prefix}observer
😊 ${prefix}shiranui
😊 ${prefix}purifier
😊 ${prefix}san_diego
😊 ${prefix}london
😊 ${prefix}mutsuki
😊 ${prefix}saratago
😊 ${prefix}tester
😊 ${prefix}shigure
😊 ${prefix}fubuki
😊 ${prefix}helena
😊 ${prefix}z1
😊 ${prefix}edinburgh
😊 ${prefix}suffolk
😊 ${prefix}denver
😊 ${prefix}ning_hai
😊 ${prefix}ping_hai
😊 ${prefix}foxhound
😊 ${prefix}arizona
😊 ${prefix}northampton
😊 ${prefix}portland
😊 ${prefix}souryuu
😊 ${prefix}mutsu
😊 ${prefix}cygnet
😊 ${prefix}KOSONG *Nanti Saya Tambahkan Lagi* 
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                       
case 'asupanversiimage':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「💖 ASUPAN VERSI IMAGE 💖」*
💖 ${prefix}hijaber
💖 ${prefix} cecan
💖 ${prefix} cogan
💖 ${prefix} cecan2
💖 ${prefix} cogan2
💖 ${prefix} jeni
💖 ${prefix} jiso
💖 ${prefix} justina
💖 ${prefix} lisa
💖 ${prefix} rose
💖 ${prefix} ryujin
💖 ${prefix} indonesia
💖 ${prefix} vietnam
💖 ${prefix} thailand
💖 ${prefix} korea
💖 ${prefix} china
💖 ${prefix} japan
💖 ${prefix} malaysia
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'memebuatanmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「😂 MEME BUATAN | MENU 😂」*
😂 ${prefix}meme1 *textnya*
😂 ${prefix}meme2 *textnya|textnya*
😂 ${prefix}meme3 *textnya|textnya|textnya*
😂 ${prefix}meme4 *textnya*
😂 ${prefix}meme5 *textnya*
😂 ${prefix}meme6 *textnya|textnya|textnya*
😂 ${prefix}meme7 *textnya|textnya*
😂 ${prefix}meme8 *textnya|textnya*
😂 ${prefix}kannagen *textnya*
😂 ${prefix}changemymind *textnya*
😂 ${prefix}ohno *textnya*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                                           
case 'aplikasimenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🔧 APLIKASI GAME MOD DLL 🔧」*
🔧 ${prefix}happymod *Contoh > Free Fire*
🔧 ${prefix}apkdone *Contoh > Free Fire*
🔧 ${prefix}apkgoogle *Contoh > Free Fire*
🔧 ${prefix}apkmody *Contoh > Free Fire*
🔧 ${prefix}apkshub *Contoh > Free Fire*
🔧 ${prefix}apksolo *Contoh > Free Fire*
🔧 ${prefix}hostapk *Contoh > Free Fire*
🔧 ${prefix}moddroid *Contoh > Free Fire*
🔧 ${prefix}revdl *Contoh > Free Fire*
🔧 ${prefix}toraccino *Contoh > Free Fire*
🔧 ${prefix}uapkpro *Contoh > Free Fire*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'genshinmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「💋 GENSHIN IMPACT MENU 💋」*
💋 ${prefix}genshin *< Nama Karakternya?*
💋 ${prefix}lisa
💋 ${prefix}amber
💋 ${prefix}keqing
💋 ${prefix}noele
💋 ${prefix}yoimiya
💋 ${prefix}jean
💋 ${prefix}reiden_ei
💋 ${prefix}eula
💋 ${prefix}ningguang
💋 ${prefix}rosaria
💋 ${prefix}kujou_sara
💋 ${prefix}beidou
💋 ${prefix}shenhe
💋 ${prefix}hu_tao
💋 ${prefix}yanfei
💋 ${prefix}xiangling
💋 ${prefix}yun_jin
💋 ${prefix}fischl
💋 ${prefix}sucrose
💋 ${prefix}xinyan
💋 ${prefix}mona
💋 ${prefix}barbara
💋 ${prefix}ganyu
💋 ${prefix}ayaka
💋 ${prefix}aloy
💋 ${prefix}kokomi
💋 ${prefix}lumine
💋 ${prefix}KOSONG *Nanti Saya Tambahkan Lagi* 
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                            
case 'newscnnmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📰 BERITA MENU 📰」*
📰 ${prefix}cnn_indonesia
📰 ${prefix}cnn_nasional
📰 ${prefix}cnn_internasional
📰 ${prefix}cnn_ekonomi
📰 ${prefix}cnn_olahraga
📰 ${prefix}cnn_teknologi
📰 ${prefix}cnn_hiburan
📰 ${prefix}cnn_social
📰 ${prefix}jadwaltv
📰 ${prefix}jadwalbola
📰 ${prefix}indbeasiswa
📰 ${prefix}newsinfo
📰 ${prefix}kumparan
📰 ${prefix}republika
📰 ${prefix}liputan6
📰 ${prefix}detik
📰 ${prefix}jalantikus
📰 ${prefix}hoax
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                                       
case 'wallpapermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📔 WALLPAPER MENU 📔」*
📔 ${prefix}wallpapersearch *Apa Wallpaper Kalian?*
📔 ${prefix}wallpapersearch2 *Apa Wallaper Kalian?*
📔 ${prefix}wallpaper *< Ini Versi Anime Yah*
📔 ${prefix}wallpaperhacker
📔 ${prefix}wallpaperhacker2
📔 ${prefix}wallpaperharley
📔 ${prefix}wallpaperjoker
📔 ${prefix}wallpaperpubg
📔 ${prefix}wallpaperhp
📔 ${prefix}wallpaperhp2
📔 ${prefix}wallpaperkpop
📔 ${prefix}wallpaperblackpink
📔 ${prefix}wallpapergame
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                            
case 'animehentaigifmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭────────「💪 ANIME HENTAI GIF MENU 💪」*
💪 ${prefix}random_hentai_gif
💪 ${prefix}nsfw_neko_gif
💪 ${prefix}Kosong *Walaupun Sedikit Tpi Lumayan Banyak Di Dalam :v*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                       
case 'animegifmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📹 ANIME GIF MENU 📹」*
📹 ${prefix}ngif
📹 ${prefix}gifcringe
📹 ${prefix}gifdance
📹 ${prefix}gifpoke
📹 ${prefix}gifwink
📹 ${prefix}gifhappy
📹 ${prefix}gifslap
📹 ${prefix}gifkill
📹 ${prefix}gifblush
📹 ${prefix}gifglomp
📹 ${prefix}gifbite
📹 ${prefix}gifnom
📹 ${prefix}gifhandhold
📹 ${prefix}gifhighfive
📹 ${prefix}gifwave
📹 ${prefix}gifsmile
📹 ${prefix}gifyeet
📹 ${prefix}gifbonk
📹 ${prefix}gifsmug
📹 ${prefix}gifpat
📹 ${prefix}giflick
📹 ${prefix}gifkiss
📹 ${prefix}gifawoo
📹 ${prefix}gifhug
📹 ${prefix}gifcry
📹 ${prefix}gifcuddle
📹 ${prefix}gifbully
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break 
case 'animev2menu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「❤️ ANIME V2 MENU❤️」*
❤️ ${prefix}blush
❤️ ${prefix}cringe
❤️ ${prefix}dance                   
❤️ ${prefix}wink
❤️ ${prefix}happy
❤️ ${prefix}slap
❤️ ${prefix}kill
❤️ ${prefix}glomp
❤️ ${prefix}bite
❤️ ${prefix}nom
❤️ ${prefix}handhold
❤️ ${prefix}highfive
❤️ ${prefix}wave
❤️ ${prefix}smile
❤️ ${prefix}yeet
❤️ ${prefix}bonk
❤️ ${prefix}smug
❤️ ${prefix}pat
❤️ ${prefix}lick
❤️ ${prefix}kiss
❤️ ${prefix}hug
❤️ ${prefix}cry
❤️ ${prefix}cuddle
❤️ ${prefix}bully
❤️ ${prefix}tickle
❤️ ${prefix}awoo
❤️ ${prefix}cringe
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                      
case 'xxn':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「☀️ XNXX / XHAMSTER / NEKOPOI MENU ☀️」*
☀️ ${prefix}xnxx
☀️ ${prefix}xnxxsearch
☀️ ${prefix}xhamster
☀️ ${prefix}xhamstersearch
☀️ ${prefix}nekopoi
☀️ ${prefix}nekopoisearch
☀️ ${prefix}masih segitu nanti we tambahin lgi hehe :v
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'mangadoujin':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「👹 MANGA DOUJIN MENU 👹」*
👹 ${prefix}nhentai *code nuklirnya mana tod?*
👹 ${prefix}nhentaipdf *code nuklirnya mana tod?*
👹 ${prefix}nhentaisearch *judul doujinya apa tod?*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                           
case 'downloadanime':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「☀️ DOWNLOAD ANIME MENU ☀️」*
☀️ ${prefix}kusonime
☀️ ${prefix}kusonimesearch *< Saran Dari Gue Pakek Ini*
☀️ ${prefix}otakudesu
☀️ ${prefix}otakudesusearch
☀️ ${prefix}belom ada *Masih segini hehe*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                                            
case 'teksstickermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🍥 TEKS STICKER MENU 🍥」*
🍥 ${prefix}ttp
🍥 ${prefix}ttp2
🍥 ${prefix}ttp3
🍥 ${prefix}ttp5
🍥 ${prefix}ttp6
🍥 ${prefix}attp
🍥 ${prefix}attp2
🍥 ${prefix}attp3
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'imagestickermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🧽 IMAGE STICKER MENU 🧽」*
🧽 ${prefix}dadu
🧽 ${prefix}amongus
🧽 ${prefix}patrick
🧽 ${prefix}dogge
🧽 ${prefix}bucinstick
🧽 ${prefix}belom ada *Masih segini hehe*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
         break                                          
case 'soundd':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🎵 AUDIO MENU 🎵」*
🎵 ${prefix}sound1 
🎵 ${prefix}sound2 
🎵 ${prefix}sound3 
🎵 ${prefix}sound4 
🎵 ${prefix}sound5 
🎵 ${prefix}sound6 
🎵 ${prefix}sound7 
🎵 ${prefix}sound8 
🎵 ${prefix}sound9 
🎵 ${prefix}sound10 
🎵 ${prefix}sound11 
🎵 ${prefix}sound12 
🎵 ${prefix}sound13 
🎵 ${prefix}sound14 
🎵 ${prefix}sound15 
🎵 ${prefix}sound16 
🎵 ${prefix}sound17 
🎵 ${prefix}sound18 
🎵 ${prefix}sound19 
🎵 ${prefix}sound20 
🎵 ${prefix}sound21 
🎵 ${prefix}sound22 
🎵 ${prefix}sound23 
🎵 ${prefix}sound24 
🎵 ${prefix}sound25 
🎵 ${prefix}sound26 
🎵 ${prefix}sound27 
🎵 ${prefix}sound28 
🎵 ${prefix}sound29 
🎵 ${prefix}sound30 
🎵 ${prefix}sound31 
🎵 ${prefix}sound32 
🎵 ${prefix}sound33 
🎵 ${prefix}sound34 
🎵 ${prefix}sound35 
🎵 ${prefix}sound36 
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'audioo':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🎧 AUDIO MENU 🎧」*
🎧 ${prefix}audio1 
🎧 ${prefix}audio2 
🎧 ${prefix}audio3 
🎧 ${prefix}audio4 
🎧 ${prefix}audio5 
🎧 ${prefix}audio6 
🎧 ${prefix}audio7 
🎧 ${prefix}audio8 
🎧 ${prefix}audio9 
🎧 ${prefix}audio10 
🎧 ${prefix}audio11 
🎧 ${prefix}audio12 
🎧 ${prefix}audio13 
🎧 ${prefix}audio14 
🎧 ${prefix}audio15 
🎧 ${prefix}audio16 
🎧 ${prefix}audio17 
🎧 ${prefix}audio18 
🎧 ${prefix}audio19 
🎧 ${prefix}audio20 
🎧 ${prefix}audio21 
🎧 ${prefix}audio22 
🎧 ${prefix}audio23 
🎧 ${prefix}audio24 
🎧 ${prefix}audio25 
🎧 ${prefix}audio26 
🎧 ${prefix}audio27 
🎧 ${prefix}audio28 
🎧 ${prefix}audio29 
🎧 ${prefix}audio30 
🎧 ${prefix}audio31 
🎧 ${prefix}audio32 
🎧 ${prefix}audio33 
🎧 ${prefix}audio34 
🎧 ${prefix}audio35 
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'cari':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📚 SEARCH MENU 📚」*
📚 ${prefix}pinterest
📚 ${prefix}pinterest2
📚 ${prefix}pixiv
📚 ${prefix}pixiv2
📚 ${prefix}translate *error kawan:v*
📚 ${prefix}google
📚 ${prefix}image
📚 ${prefix}image2
📚 ${prefix}shopee
📚 ${prefix}gimage
📚 ${prefix}gimage2
📚 ${prefix}kbbi
📚 ${prefix}jarak
📚 ${prefix}wikipedia
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                      
case 'informasi':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🏡 INFORMATION MENU 🏡」*
🏡 ${prefix}kodepos
🏡 ${prefix}cuaca
🏡 ${prefix}infogempa
🏡 ${prefix}covidindo
🏡 ${prefix}covidglobal
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break                    
case 'nulus':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📝 NULIS MENU 📝」*
📝 ${prefix}nulis *< Ini Versi Buttonnya :v*
📝 ${prefix}nuliskiri *Teksnya Mana Tod?*
📝 ${prefix}nuliskanan *Teksnya Mana Tod?*
📝 ${prefix}foliokiri *Teksnya Mana Tod?**
📝 ${prefix}foliokanan *Teksnya Mana Tod?*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'memek':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「😆 MEME MENU 😆」*
😆 ${prefix}meme
😆 ${prefix}memeindo
😆 ${prefix}darkjoke
😆 ${prefix}Kosong :v *Nanti Saya Tambahkan Lgi :v*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
         
                               ///Tambahan di atas
case 'islamimenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🌈 ISLAMI MENU 🌈」*
🌈 ${prefix}alquran
🌈 ${prefix}alquranaudio
🌈 ${prefix}asmaulhusna
🌈 ${prefix}listsurah
🌈 ${prefix}kisahnabi *adam*
🌈 ${prefix}jadwalsholat *Yogyakarta*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'animemenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📂 ANIME MENU 📂」*
📂 ${prefix}elf
📂 ${prefix}shota
📂 ${prefix}husbu
📂 ${prefix}sagiri
📂 ${prefix}shinobu
📂 ${prefix}megumin
📂 ${prefix}wallnime
📂 ${prefix}elaina
📂 ${prefix}cosplay
📂 ${prefix}wallml
📂 ${prefix}kanna
📂 ${prefix}naruto
📂 ${prefix}boruto
📂 ${prefix}nekonime
📂 ${prefix}akira
📂 ${prefix}akiyama
📂 ${prefix}ana
📂 ${prefix}asuna
📂 ${prefix}ayuzawa
📂 ${prefix}chiho
📂 ${prefix}chitoge
📂 ${prefix}deidara
📂 ${prefix}eba
📂 ${prefix}emilia
📂 ${prefix}erza
📂 ${prefix}gremory
📂 ${prefix}hestie
📂 ${prefix}hinata
📂 ${prefix}isuzu
📂 ${prefix}itachi
📂 ${prefix}itori
📂 ${prefix}kagura
📂 ${prefix}kakasih
📂 ${prefix}kaori
📂 ${prefix}kaneki
📂 ${prefix}kotori
📂 ${prefix}kurumi
📂 ${prefix}madara
📂 ${prefix}mikasa
📂 ${prefix}miku
📂 ${prefix}minato
📂 ${prefix}nezuko
📂 ${prefix}rize
📂 ${prefix}sakura
📂 ${prefix}sasuke
📂 ${prefix}shina
📂 ${prefix}shinka
📂 ${prefix}shinomiya
📂 ${prefix}shizuka
📂 ${prefix}tejina
📂 ${prefix}toukachan
📂 ${prefix}tsunade
📂 ${prefix}yotsuba
📂 ${prefix}yuki
📂 ${prefix}yumeko
📂 ${prefix}fanart
📂 ${prefix}nino
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'videomenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📽️ VIDEO MENU 📽️」*
📽️ ${prefix}beatvn
📽️ ${prefix}bokep
📽️ ${prefix}jedagjedugff
📽️ ${prefix}jedagjedugml
📽️ ${prefix}jedagjedugpubg
📽️ ${prefix}storywa
📽️ ${prefix}storygalau
📽️ ${prefix}storyanime
📽️ ${prefix}storytruk
📽️ ${prefix}storybus
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'fotomenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🌻 FOTO MENU 🌻」*
🌻 ${prefix}motor
🌻 ${prefix}mobil
🌻 ${prefix}renungan
🌻 ${prefix}katakataimage
🌻 ${prefix}aesthetic
🌻 ${prefix}yulibocil
🌻 ${prefix}doraemon
🌻 ${prefix}pokemon
🌻 ${prefix}pentol
🌻 ${prefix}tatasurya
🌻 ${prefix}kartun
🌻 ${prefix}anjing
🌻 ${prefix}kucing
🌻 ${prefix}satanic
🌻 ${prefix}boneka
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'hewanmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🌼 HEWAN MENU 🌼」*
🌼 ${prefix}fox
🌼 ${prefix}dog
🌼 ${prefix}cat
🌼 ${prefix}panda
🌼 ${prefix}panda1
🌼 ${prefix}bird
🌼 ${prefix}koala
🌼 ${prefix}buwungpuyuh
🌼 ${prefix}elang
🌼 ${prefix}buaya
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'groupmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🐺 GROUP MENU 🐺」*
🐺 ${prefix}add *6218317882889*
🐺 ${prefix}kick *@tag*
🐺 ${prefix}welcome *button*
🐺 ${prefix}antilinkgroup *button*
🐺 ${prefix}antilinkwa *button*
🐺 ${prefix}antilinkvideoyt *button*
🐺 ${prefix}antivirtex *button*
🐺 ${prefix}group *button*
🐺 ${prefix}promote *@tag*
🐺 ${prefix}demote *@tag*
🐺 ${prefix}setdescgroup *teks*
🐺 ${prefix}setnamegroup *teks*
🐺 ${prefix}setppgroup *reply foto*
🐺 ${prefix}infogroup
🐺 ${prefix}resetlink
🐺 ${prefix}listadmin
🐺 ${prefix}opengc
🐺 ${prefix}closegc
🐺 ${prefix}linkgc
🐺 ${prefix}tagall *teks*
🐺 ${prefix}hidetag *teks*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'makermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「 🐶 MAKER MENU 🐶 」*
🐶 ${prefix}coolgravity 
🐶 ${prefix}pornhub 
🐶 ${prefix}glitch 
🐶 ${prefix}avenger 
🐶 ${prefix}space 
🐶 ${prefix}ninjalogo 
🐶 ${prefix}marvelstudio 
🐶 ${prefix}lionlogo 
🐶 ${prefix}wolflogo 
🐶 ${prefix}steel3d 
🐶 ${prefix}wallgravity 
🐶 ${prefix}arcade8bit 
🐶 ${prefix}battlefield4 
🐶 ${prefix}pubg 
🐶 ${prefix}blackpink 
🐶 ${prefix}neon 
🐶 ${prefix}greenneon 
🐶 ${prefix}advanceglow 
🐶 ${prefix}futureneon 
🐶 ${prefix}sandwriting 
🐶 ${prefix}sandsummer 
🐶 ${prefix}sandengraved 
🐶 ${prefix}metaldark 
🐶 ${prefix}neonlight 
🐶 ${prefix}holographic 
🐶 ${prefix}text1917 
🐶 ${prefix}minion 
🐶 ${prefix}deluxesilver 
🐶 ${prefix}newyearcard 
🐶 ${prefix}bloodfrosted 
🐶 ${prefix}halloween 
🐶 ${prefix}jokerlogo 
🐶 ${prefix}fireworksparkle 
🐶 ${prefix}natureleaves 
🐶 ${prefix}bokeh 
🐶 ${prefix}toxic 
🐶 ${prefix}strawberry 
🐶 ${prefix}box3d 
🐶 ${prefix}roadwarning 
🐶 ${prefix}breakwall 
🐶 ${prefix}icecold 
🐶 ${prefix}luxury 
🐶 ${prefix}cloud 
🐶 ${prefix}summersand 
🐶 ${prefix}horrorblood 
🐶 ${prefix}thunder 
🐶 ${prefix}shadow
🐶 ${prefix}cup
🐶 ${prefix}cup1
🐶 ${prefix}romance
🐶 ${prefix}smoke
🐶 ${prefix}burnpaper
🐶 ${prefix}lovemessage
🐶 ${prefix}undergrass
🐶 ${prefix}love
🐶 ${prefix}coffe
🐶 ${prefix}woodheart
🐶 ${prefix}woodenboard
🐶 ${prefix}summer3d
🐶 ${prefix}wolfmetal
🐶 ${prefix}nature3d
🐶 ${prefix}underwater
🐶 ${prefix}golderrose
🐶 ${prefix}summernature
🐶 ${prefix}letterleaves
🐶 ${prefix}glowingneon
🐶 ${prefix}fallleaves
🐶 ${prefix}flamming
🐶 ${prefix}harrypotter
🐶 ${prefix}carvedwood
🐶 ${prefix}wetglass
🐶 ${prefix}multicolor3d
🐶 ${prefix}watercolor
🐶 ${prefix}luxurygold
🐶 ${prefix}galaxywallpaper
🐶 ${prefix}lighttext
🐶 ${prefix}beautifulflower
🐶 ${prefix}puppycute
🐶 ${prefix}royaltext
🐶 ${prefix}heartshaped
🐶 ${prefix}birthdaycake
🐶 ${prefix}galaxystyle
🐶 ${prefix}hologram3d
🐶 ${prefix}glossychrome
🐶 ${prefix}greenbush
🐶 ${prefix}metallogo
🐶 ${prefix}noeltext
🐶 ${prefix}glittergold
🐶 ${prefix}textcake
🐶 ${prefix}starsnight
🐶 ${prefix}wooden3d
🐶 ${prefix}textbyname
🐶 ${prefix}writegalacy
🐶 ${prefix}galaxybat
🐶 ${prefix}snow3d
🐶 ${prefix}birthdayday
🐶 ${prefix}goldplaybutton
🐶 ${prefix}silverplaybutton
🐶 ${prefix}freefire
🐶 ${prefix}serti1
🐶 ${prefix}serti2
🐶 ${prefix}serti3
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'stickermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🌪️ STICKER MENU 🌪️」*
🌪️ ${prefix}tourl
🌪️ ${prefix}sticker 
🌪️ ${prefix}take
🌪️ ${prefix}toimg
🌪️ ${prefix}tomp4
🌪️ ${prefix}tomp3 
🌪️ ${prefix}smeme
🌪️ ${prefix}ssweb
🌪️ ${prefix}emoji
🌪️ ${prefix}wasted
🌪️ ${prefix}ppcp
🌪️ ${prefix}lovelive
🌪️ ${prefix}sao
🌪️ ${prefix}hsdxd
🌪️ ${prefix}art
🌪️ ${prefix}bts
🌪️ ${prefix}exo
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'ownermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「☄️ OWNER MENU ☄️」*
☄️ ${prefix}bc *teks*
☄️ ${prefix}public
☄️ ${prefix}self
☄️ ${prefix}mode
☄️ ${prefix}setcmd *reply sticker*
☄️ ${prefix}delcmd *reply sticker
☄️ ${prefix}listcmd
☄️ ${prefix}bugtagall *teks*
☄️ ${prefix}mode
☄️ ${prefix}leave
☄️ ${prefix}tes
☄️ ${prefix}jadibot
☄️ ${prefix}listbot
☄️ ${prefix}join *linkgc*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case '18+menu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🤤 18+ | HENTAI | MENU 🤤」*
🤤 ${prefix}waifu
🤤 ${prefix}loli
🤤 ${prefix}milf
🤤 ${prefix}chiisaihentai
🤤 ${prefix}trap
🤤 ${prefix}blowjob
🤤 ${prefix}yaoi
🤤 ${prefix}ecchi
🤤 ${prefix}ahegao
🤤 ${prefix}hololewd
🤤 ${prefix}sideoppai
🤤 ${prefix}animefeets
🤤 ${prefix}animebooty
🤤 ${prefix}animethighss
🤤 ${prefix}hentaiparadise
🤤 ${prefix}animearmpits
🤤 ${prefix}hentaifemdom
🤤 ${prefix}lewdanimegirls
🤤 ${prefix}biganimetiddies
🤤 ${prefix}animebellybutton
🤤 ${prefix}hentai4everyone
🤤 ${prefix}bj
🤤 ${prefix}ero
🤤 ${prefix}cum
🤤 ${prefix}feet
🤤 ${prefix}yuri
🤤 ${prefix}trap
🤤 ${prefix}lewd
🤤 ${prefix}eron
🤤 ${prefix}solo
🤤 ${prefix}anal
🤤 ${prefix}tits
🤤 ${prefix}kuni
🤤 ${prefix}erok
🤤 ${prefix}solog
🤤 ${prefix}feetg
🤤 ${prefix}lewdk
🤤 ${prefix}pussy
🤤 ${prefix}femdom
🤤 ${prefix}hentai
🤤 ${prefix}eroyuri
🤤 ${prefix}cum_jpg
🤤 ${prefix}erofeet
🤤 ${prefix}holoero
🤤 ${prefix}classic
🤤 ${prefix}erokemo
🤤 ${prefix}futanari
🤤 ${prefix}lewdkemo
🤤 ${prefix}pussy_jpg
🤤 ${prefix}nsfw_avatar
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'downloadmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📩 DOWNLOAD MENU 📩」*
📩 ${prefix}play *Judul Lagu?* 
📩 ${prefix}jooxplay *Judul Lagu?*
📩 ${prefix}spotify *link Nya Mana?**
📩 ${prefix}ytmp4 *linkYT*
📩 ${prefix}playmp3 *linkYT*
📩 ${prefix}ytsearch *Judul Lagunya Cok?*
📩 ${prefix}ytplay *Judul Lagunya Apa Cok?*
📩 ${prefix}ytplay2 *Judul Lagunya Apa Cok?*
📩 ${prefix}ytaudio2 *Mana Link youtubenya?*
📩 ${prefix}ytvideo2 *Mana Link youtubenya?*
📩 ${prefix}tiktokdl *linkTT*
📩 ${prefix}tiktokmp4 *linkTT*
📩 ${prefix}tiktokmp3 *linkTT*
📩 ${prefix}igdl *linkIG*
📩 ${prefix}mediafire *link*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'othermenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「📦 OTHER MENU 📦」*
📦 ${prefix}owner
📦 ${prefix}runtime
📦 ${prefix}speed
📦 ${prefix}rules
📦 ${prefix}bugreport *keluhan bot*
📦 ${prefix}lirik *Judul Lagu*
📦 ${prefix}afk *Alasan*
📦 ${prefix}gg *link*
📦 ${prefix}shorturlat *link*
📦 ${prefix}tinyurl *link*
📦 ${prefix}cuttly *link*
📦 ${prefix}nickepep
📦 ${prefix}artinama *Akira*
📦 ${prefix}artimimpi *Renang*
📦 ${prefix}jodoh *Akira Kayes*
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'gamemenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「⚔️ GAME MENU ⚔️」*
⚔️ ${prefix}suit
⚔️ ${prefix}bisakah
⚔️ ${prefix}kapankah
⚔️ ${prefix}rate
⚔️ ${prefix}apakah
⚔️ ${prefix}gantengcek
⚔️ ${prefix}cantikcek
⚔️ ${prefix}cekme
⚔️ ${prefix}jadian
⚔️ ${prefix}truth
⚔️ ${prefix}dare
⚔️ ${prefix}susunkata
⚔️ ${prefix}tebakgambar
⚔️ ${prefix}caklontong
⚔️ ${prefix}siapakahaku
⚔️ ${prefix}tebakkalimat
⚔️ ${prefix}tebakkata
⚔️ ${prefix}tebaklirik
⚔️ ${prefix}tekateki
⚔️ ${prefix}family100
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'asupanmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]  
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭─────「🧻 ASUPAN VERSI VIDEO MENU 🧻」*
🧻 ${prefix}asupan
🧻 ${prefix}asupanloli
🧻 ${prefix}bocil
🧻 ${prefix}rikagusriani
🧻 ${prefix}santuy
🧻 ${prefix}gheayubi
🧻 ${prefix}ukhty
🧻 ${prefix}nantalia
╰────────────────────────😈
 「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '☠️ MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '🔥 ATURAN BOT 🔥' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '☕ OWNER BOT ☕' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
         var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', ptt:true})
         break
case 'allmenu':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]    
janganti = '6289688206739'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
	menunyangen = `
*🌹ℍ𝔼𝕃𝕃𝕆𝕎𝕆ℝ𝕃𝔻🌹*

😈──────" 🛡️𝕭𝖔𝖙 𝕴𝖓𝖋𝖔🛡️ "──────😈
*Nama Owner :* ${ownerName}
*Nomor Owner :* wa.me/${janganti}
*Nama Bot :* ${botName}
*Nomor Bot :* wa.me/${numberBot}
*Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*Group Chat :* ${groups.length}
*Private Chat :* ${privat.length}
*Total Chat :* ${totalChat.length}

😈──────" 🛡️𝖀𝖘𝖊𝖗 𝕴𝖓𝖋𝖔🛡️ "──────😈
*👤 Nama :* ${pushname}
*📱 Nomor :* wa.me/${sender.split('@')[0]}
*💻 Bio :* ${thu.status}

*╭──「👤 OWNER MENU 👤」*
☻︎ ${prefix}bc *teks*
☻︎ ${prefix}public
☻︎ ${prefix}self
☻︎ ${prefix}mode
☻︎ ${prefix}setcmd *reply sticker*
☻︎ ${prefix}delcmd *reply sticker
☻︎ ${prefix}listcmd
☻︎ ${prefix}bugtagall *teks*
☻︎ mode 
☻︎ leave
☻︎ tes
☻︎ jadibot
☻︎ listbot
☻︎ join *linkgc*
➡️╰─────────────😈
*╭──「🙂 ISLAMI MENU 🙂」*
☻︎ ${prefix}asmaulhusna
☻︎ ${prefix}listsurah
☻︎ ${prefix}alquran *18 /1-10*
☻︎ ${prefix}alquranaudio *8 atau 18/10*
☻︎ ${prefix}kisahnabi *adam*
☻︎ ${prefix}jadwalsholat *Yogyakarta*
➡️╰─────────────😈
*╭──「📝 NULIS MENU 📝」*
☻︎ ${prefix}nulis *< Ini Versi Buttonya :v*
☻︎ ${prefix}nuliskiri *Teksnya Mana Tod?*
☻︎ ${prefix}nuliskanan *Teksnya Mana Tod?*
☻︎ ${prefix}foliokiri *Teksnya Mana Tod?*
☻︎ ${prefix}foliokanan *Teksnya Mana Tod?*
➡️╰─────────────😈
*╭──「🗡️ OTHER MENU 🗡️」*
☻︎ ${prefix}owner
☻︎ ${prefix}runtime
☻︎ ${prefix}speed
☻︎ ${prefix}rules
☻︎ ${prefix}bugreport *keluhan bot*
☻︎ ${prefix}jadwalsholat *Yogyakarta*
☻︎ ${prefix}lirik *Judul Lagu*
☻︎ ${prefix}afk *Alasan*
☻︎ ${prefix}gg *link*
☻︎ ${prefix}shorturlat *link*
☻︎ ${prefix}tinyurl *link*
☻︎ ${prefix}cuttly *link*
☻︎ ${prefix}nickepep
☻︎ ${prefix}artinama *Akira*
☻︎ ${prefix}artimimpi *Renang*
☻︎ ${prefix}jodoh *Akira Kayes*
➡️╰─────────────😈
*╭──「🌼 GROUP MENU 🌼」*
☻︎ ${prefix}add *6218317882889*
☻︎ ${prefix}kick *@tag*
☻︎ ${prefix}welcome *button*
☻︎ ${prefix}antilinkgroup *button*
☻︎ ${prefix}antilinkwa *button*
☻︎ ${prefix}antilinkvideoyt *button*
☻︎ ${prefix}antivirtex *button*
☻︎ ${prefix}group *button*
☻︎ ${prefix}promote *@tag*
☻︎ ${prefix}demote *@tag*
☻︎ ${prefix}setdescgroup *teks*
☻︎ ${prefix}setnamegroup *teks*
☻︎ ${prefix}setppgroup *reply foto*
☻︎ ${prefix}infogroup
☻︎ ${prefix}resetlink
☻︎ ${prefix}listadmin
☻︎ ${prefix}opengc
☻︎ ${prefix}closegc
☻︎ ${prefix}linkgc
☻︎ ${prefix}tagall *teks*
☻︎ ${prefix}hidetag *teks*
➡️╰─────────────😈
*╭──「🗒️ MAKER MENU 🗒️」*
☻︎ ${prefix}coolgravity 
☻︎ ${prefix}pornhub 
☻︎ ${prefix}glitch 
☻︎ ${prefix}avenger 
☻︎ ${prefix}space 
☻︎ ${prefix}ninjalogo 
☻︎ ${prefix}marvelstudio 
☻︎ ${prefix}lionlogo 
☻︎ ${prefix}wolflogo 
☻︎ ${prefix}steel3d 
☻︎ ${prefix}wallgravity 
☻︎ ${prefix}arcade8bit 
☻︎ ${prefix}battlefield4 
☻︎ ${prefix}pubg 
☻︎ ${prefix}blackpink 
☻︎ ${prefix}neon 
☻︎ ${prefix}greenneon 
☻︎ ${prefix}advanceglow 
☻︎ ${prefix}futureneon 
☻︎ ${prefix}sandwriting 
☻︎ ${prefix}sandsummer 
☻︎ ${prefix}sandengraved 
☻︎ ${prefix}metaldark 
☻︎ ${prefix}neonlight 
☻︎ ${prefix}holographic 
☻︎ ${prefix}text1917 
☻︎ ${prefix}minion 
☻︎ ${prefix}deluxesilver 
☻︎ ${prefix}newyearcard 
☻︎ ${prefix}bloodfrosted 
☻︎ ${prefix}halloween 
☻︎ ${prefix}jokerlogo 
☻︎ ${prefix}fireworksparkle 
☻︎ ${prefix}natureleaves 
☻︎ ${prefix}bokeh 
☻︎ ${prefix}toxic 
☻︎ ${prefix}strawberry 
☻︎ ${prefix}box3d 
☻︎ ${prefix}roadwarning 
☻︎ ${prefix}breakwall 
☻︎ ${prefix}icecold 
☻︎ ${prefix}luxury 
☻︎ ${prefix}cloud 
☻︎ ${prefix}summersand 
☻︎ ${prefix}horrorblood 
☻︎ ${prefix}thunder 
☻︎ ${prefix}shadow
☻︎ ${prefix}cup
☻︎ ${prefix}cup1
☻︎ ${prefix}romance
☻︎ ${prefix}smoke
☻︎ ${prefix}burnpaper
☻︎ ${prefix}lovemessage
☻︎ ${prefix}undergrass
☻︎ ${prefix}love
☻︎ ${prefix}coffe
☻︎ ${prefix}woodheart
☻︎ ${prefix}woodenboard
☻︎ ${prefix}summer3d
☻︎ ${prefix}wolfmetal
☻︎ ${prefix}nature3d
☻︎ ${prefix}underwater
☻︎ ${prefix}golderrose
☻︎ ${prefix}summernature
☻︎ ${prefix}letterleaves
☻︎ ${prefix}glowingneon
☻︎ ${prefix}fallleaves
☻︎ ${prefix}flamming
☻︎ ${prefix}harrypotter
☻︎ ${prefix}carvedwood
☻︎ ${prefix}wetglass
☻︎ ${prefix}multicolor3d
☻︎ ${prefix}watercolor
☻︎ ${prefix}luxurygold
☻︎ ${prefix}galaxywallpaper
☻︎ ${prefix}lighttext
☻︎ ${prefix}beautifulflower
☻︎ ${prefix}puppycute
☻︎ ${prefix}royaltext
☻︎ ${prefix}heartshaped
☻︎ ${prefix}birthdaycake
☻︎ ${prefix}galaxystyle
☻︎ ${prefix}hologram3d
☻︎ ${prefix}glossychrome
☻︎ ${prefix}greenbush
☻︎ ${prefix}metallogo
☻︎ ${prefix}noeltext
☻︎ ${prefix}glittergold
☻︎ ${prefix}textcake
☻︎ ${prefix}starsnight
☻︎ ${prefix}wooden3d
☻︎ ${prefix}textbyname
☻︎ ${prefix}writegalacy
☻︎ ${prefix}galaxybat
☻︎ ${prefix}snow3d
☻︎ ${prefix}birthdayday
☻︎ ${prefix}goldplaybutton
☻︎ ${prefix}silverplaybutton
☻︎ ${prefix}freefire
➡️╰─────────────😈
*╭──「📚 SEARCH MENU 📚」*
☻︎ ${prefix}pinterest
☻︎ ${prefix}pinterest2
☻︎ ${prefix}pixiv
☻︎ ${prefix}pixiv2
☻︎ ${prefix}translate *error kawan:v*
☻︎ ${prefix}google
☻︎ ${prefix}image
☻︎ ${prefix}image2
☻︎ ${prefix}shopee
☻︎ ${prefix}gimage
☻︎ ${prefix}gimage2
☻︎ ${prefix}kbbi
☻︎ ${prefix}jarak
☻︎ ${prefix}wikipedia
➡️╰─────────────😈
*╭──「🔥 STICKER MENU 🔥」*
☻︎ ${prefix}tourl 
☻︎ ${prefix}sticker
☻︎ ${prefix}take 
☻︎ ${prefix}toimg 
☻︎ ${prefix}tomp4 
☻︎ ${prefix}tomp3 
☻︎ ${prefix}smeme
☻︎ ${prefix}ssweb  
☻︎ ${prefix}emoji
☻︎ ${prefix}wasted
☻︎ ${prefix}ppcp
☻︎ ${prefix}lovelive
☻︎ ${prefix}sao
☻︎ ${prefix}hsdxd
☻︎ ${prefix}art
☻︎ ${prefix}bts
☻︎ ${prefix}exo
➡️╰─────────────😈
*╭──「💪 ANIME HENTAI GIF MENU 💪」*
☻︎ ${prefix}random_hentai_gif
☻︎ ${prefix}nsfw_neko_gif
➡️╰─────────────😈
*╭──「🎃 18+ | HENTAI | MENU 🎃」*
☻︎ ${prefix}waifu
☻︎ ${prefix}neko
☻︎ ${prefix}loli
☻︎ ${prefix}milf
☻︎ ${prefix}chiisaihentai
☻︎ ${prefix}trap
☻︎ ${prefix}blowjob
☻︎ ${prefix}yaoi
☻︎ ${prefix}ecchi
☻︎ ${prefix}ahegao
☻︎ ${prefix}hololewd
☻︎ ${prefix}sideoppai
☻︎ ${prefix}animefeets
☻︎ ${prefix}animebooty
☻︎ ${prefix}animethighss
☻︎ ${prefix}hentaiparadise
☻︎ ${prefix}animearmpits
☻︎ ${prefix}hentaifemdom
☻︎ ${prefix}lewdanimegirls
☻︎ ${prefix}biganimetiddies
☻︎ ${prefix}animebellybutton
☻︎ ${prefix}hentai4everyone
☻︎ ${prefix}bj
☻︎ ${prefix}ero
☻︎ ${prefix}cum
☻︎ ${prefix}feet
☻︎ ${prefix}yuri
☻︎ ${prefix}trap
☻︎ ${prefix}lewd
☻︎ ${prefix}eron
☻︎ ${prefix}solo
☻︎ ${prefix}anal
☻︎ ${prefix}tits
☻︎ ${prefix}kuni
☻︎ ${prefix}solog
☻︎ ${prefix}feetg
☻︎ ${prefix}lewdk
☻︎ ${prefix}pussy
☻︎ ${prefix}femdom
☻︎ ${prefix}hentai
☻︎ ${prefix}eroyuri
☻︎ ${prefix}cum_jpg
☻︎ ${prefix}erofeet
☻︎ ${prefix}holoero
☻︎ ${prefix}classic
☻︎ ${prefix}erokemo
☻︎ ${prefix}futanari
☻︎ ${prefix}lewdkemo
☻︎ ${prefix}pussy_jpg
☻︎ ${prefix}nsfw_avatar
➡️╰─────────────😈
*╭──「🤤 XNXX / XHAMSTER / NEKOPOI MENU 🤤」*
☻︎ ${prefix}xnxx
☻︎ ${prefix}xnxxsearch
☻︎ ${prefix}xhamster
☻︎ ${prefix}xhamstersearch
☻︎ ${prefix}nekopoi
☻︎ ${prefix}nekopoisearch
➡️╰─────────────😈
*╭──「📁 DOWNLOAD MENU 📁」*
☻︎ ${prefix}play *query*
☻︎ ${prefix}ytmp4 *linkYT*
☻︎ ${prefix}playmp3 *linkYT*
☻︎ ${prefix}ytsearch
☻︎ ${prefix}ytaudio2
☻︎ ${prefix}ytvideo2
☻︎ ${prefix}ytplay
☻︎ ${prefix}ytplay2
☻︎ ${prefix}tiktok *linkTT*
☻︎ ${prefix}tiktokmp4 *linkTT*
☻︎ ${prefix}tiktokmp3 *linkTT*
☻︎ ${prefix}igdl *linkIG*
☻︎ ${prefix}mediafire *link*
☻︎ ${prefix}githubstalk *username*
*╭──「📔 WALLPAPER MENU 📔」*
☻︎ ${prefix}wallpapersearch *Apa Wallpaper Kalian?*
☻︎ ${prefix}wallpapersearch2 *Apa Wallaper Kalian?*
☻︎ ${prefix}wallpaper *< Ini Versi Anime Yah*
☻︎ ${prefix}wallpaperhacker
☻︎ ${prefix}wallpaperhacker2
☻︎ ${prefix}wallpaperharley
☻︎ ${prefix}wallpaperjoker
☻︎ ${prefix}wallpaperpubg
☻︎ ${prefix}wallpaperhp
☻︎ ${prefix}wallpaperhp2
☻︎ ${prefix}wallpaperkpop
☻︎ ${prefix}wallpaperblackpink
☻︎ ${prefix}wallpapergame
➡️╰─────────────😈
*╭──「📰 BERITA MENU 📰」*
☻︎ ${prefix}cnn_indonesia
☻︎ ${prefix}cnn_nasional
☻︎ ${prefix}cnn_internasional
☻︎ ${prefix}cnn_ekonomi
☻︎ ${prefix}cnn_olahraga
☻︎ ${prefix}cnn_teknologi
☻︎ ${prefix}cnn_hiburan
☻︎ ${prefix}cnn_social
☻︎ ${prefix}jadwaltv
☻︎ ${prefix}jadwalbola
☻︎ ${prefix}indbeasiswa
☻︎ ${prefix}newsinfo
☻︎ ${prefix}kumparan
☻︎ ${prefix}republika
☻︎ ${prefix}liputan6
☻︎ ${prefix}detik
☻︎ ${prefix}jalantikus
☻︎ ${prefix}hoax
➡️╰─────────────😈
*╭──「📦 GAME MENU 📦」*
☻︎ ${prefix}suit
☻︎ ${prefix}bisakah
☻︎ ${prefix}kapankah
☻︎ ${prefix}rate
☻︎ ${prefix}apakah
☻︎ ${prefix}gantengcek
☻︎ ${prefix}cantikcek
☻︎ ${prefix}cekme
☻︎ ${prefix}jadian
☻︎ ${prefix}truth
☻︎ ${prefix}dare
☻︎ ${prefix}susunkata
☻︎ ${prefix}tebakgambar
☻︎ ${prefix}caklontong
☻︎ ${prefix}siapakahaku
☻︎ ${prefix}tebakkalimat
☻︎ ${prefix}tebakkata
☻︎ ${prefix}tebaklirik
☻︎ ${prefix}tekateki
☻︎ ${prefix}family100
➡️╰─────────────😈
*╭──「🤣 MEME SPONGEBOB MENU 🤣」*
☻ ${prefix}meme_patrick
☻ ${prefix}meme_kartun_spongebob
☻ ${prefix}meme_spongebob
☻ ${prefix}meme_squidward
☻ ${prefix}meme_plankton
➡️╰─────────────😈
*╭──「😆 MEME MENU 😆」*
☻︎ ${prefix}meme
☻︎ ${prefix}memeindo
☻︎ ${prefix}darkjoke
➡️╰─────────────😈
*╭──「😂 MEME BUATAN | MENU 😂」*
☻︎ ${prefix}meme1 *textnya*
☻︎ ${prefix}meme2 *textnya|textnya*
☻︎ ${prefix}meme3 *textnya|textnya|textnya*
☻︎ ${prefix}meme4 *textnya*
☻︎ ${prefix}meme5 *textnya*
☻︎ ${prefix}meme6 *textnya|textnya|textnya*
☻︎ ${prefix}meme7 *textnya|textnya*
☻︎ ${prefix}meme8 *textnya|textnya*
☻︎ ${prefix}kannagen *textnya*
☻︎ ${prefix}changemymind *textnya*
☻︎ ${prefix}ohno *textnya*
➡️╰─────────────😈
*╭──「👹 MANGA DOUJIN MENU 👹」*
☻︎ ${prefix}nhentai
☻︎ ${prefix}nhentaipdf
☻︎ ${prefix}nhentaisearch
➡️╰─────────────😈
*╭──「☀️ DOWNLOAD ANIME MENU ☀️」*
☻︎ ${prefix}kusonime
☻︎ ${prefix}kusonimesearch *< gue saranin pakek ini*
☻︎ ${prefix}otakudesu
☻︎ ${prefix}otakudesusearch
➡️╰─────────────😈
*╭──「🔱 RANDOM TEXT MENU 🔱」*
☻︎ ${prefix}faktaunik
☻︎ ${prefix}katabijak
☻︎ ${prefix}pantun
☻︎ ${prefix}bucin
☻︎ ${prefix}nama
☻︎ ${prefix}puisi
☻︎ ${prefix}cerpen
☻︎ ${prefix}ceritahoror
☻︎ ${prefix}quotes
☻︎ ${prefix}quotes2
☻︎ ${prefix}quotesanime
☻︎ ${prefix}quotesdilan
➡️╰─────────────😈
*╭──「😊 KARAKTER ANIME AZUR LANE 😊」*
☻︎ ${prefix}enterprise
☻︎ ${prefix}leffy
☻︎ ${prefix}belfast
☻︎ ${prefix}akagi
☻︎ ${prefix}kaga
☻︎ ${prefix}atago
☻︎ ${prefix}prinz_eugen
☻︎ ${prefix}ayumi
☻︎ ${prefix}z23
☻︎ ${prefix}clevelandl
☻︎ ${prefix}bismarck
☻︎ ${prefix}unicorn
☻︎ ${prefix}javelin
☻︎ ${prefix}warspite
☻︎ ${prefix}akashi
☻︎ ${prefix}Illustrious
☻︎ ${prefix}nagato
☻︎ ${prefix}takao
☻︎ ${prefix}hood
☻︎ ${prefix}shoukaku
☻︎ ${prefix}zuikaku
☻︎ ${prefix}amagi
☻︎ ${prefix}long_island
☻︎ ${prefix}sheffield
☻︎ ${prefix}admiral_hipper
☻︎ ${prefix}baltimore
☻︎ ${prefix}yuudachi
☻︎ ${prefix}montpelier
☻︎ ${prefix}hammann
☻︎ ${prefix}queen_elizabeth
☻︎ ${prefix}yukikaze
☻︎ ${prefix}kawazake
☻︎ ${prefix}yamashiro
☻︎ ${prefix}prince_of_wales
☻︎ ${prefix}massachusetts
☻︎ ${prefix}hornet
☻︎ ${prefix}kisaragi
☻︎ ${prefix}vestal
☻︎ ${prefix}mikasa
☻︎ ${prefix}hiryuu
☻︎ ${prefix}yorktown
☻︎ ${prefix}observer
☻︎ ${prefix}shiranui
☻︎ ${prefix}purifier
☻︎ ${prefix}san_diego
☻︎ ${prefix}london
☻︎ ${prefix}mutsuki
☻︎ ${prefix}saratago
☻︎ ${prefix}tester
☻︎ ${prefix}shigure
☻︎ ${prefix}fubuki
☻︎ ${prefix}helena
☻︎ ${prefix}z1
☻︎ ${prefix}edinburgh
☻︎ ${prefix}suffolk
☻︎ ${prefix}denver
☻︎ ${prefix}ning_hai
☻︎ ${prefix}ping_hai
☻︎ ${prefix}foxhound
☻︎ ${prefix}arizona
☻︎ ${prefix}northampton
☻︎ ${prefix}portland
☻︎ ${prefix}souryuu
☻︎ ${prefix}mutsu
☻︎ ${prefix}cygnet
➡️╰─────────────😈
*╭──「💋 GENSHIN IMPACT MENU 💋」*
☻︎ ${prefix}genshin *< Nama Karakternya?*
☻︎ ${prefix}lisa
☻︎ ${prefix}amber
☻︎ ${prefix}keqing
☻︎ ${prefix}noele
☻︎ ${prefix}yoimiya
☻︎ ${prefix}jean
☻︎ ${prefix}reiden_ei
☻︎ ${prefix}eula
☻︎ ${prefix}ningguang
☻︎ ${prefix}rosaria
☻︎ ${prefix}kujou_sara
☻︎ ${prefix}beidou
☻︎ ${prefix}shenhe
☻︎ ${prefix}hu_tao
☻︎ ${prefix}yanfei
☻︎ ${prefix}xiangling
☻︎ ${prefix}yun_jin
☻︎ ${prefix}fischl
☻︎ ${prefix}sucrose
☻︎ ${prefix}xinyan
☻︎ ${prefix}mona
☻︎ ${prefix}barbara
☻︎ ${prefix}ganyu
☻︎ ${prefix}ayaka
☻︎ ${prefix}aloy
☻︎ ${prefix}kokomi
☻︎ ${prefix}lumine
➡️╰─────────────😈
*╭──「🔧 APLIKASI GAME MOD | DLL MENU 🔧」*
☻︎ ${prefix}happymod 
☻︎ ${prefix}apkdone 
☻︎ ${prefix}apkgoogle 
☻︎ ${prefix}apkmody 
☻︎ ${prefix}apkshub 
☻︎ ${prefix}apksolo 
☻︎ ${prefix}hostapk 
☻︎ ${prefix}moddroid 
☻︎ ${prefix}revdl 
☻︎ ${prefix}toraccino 
☻︎ ${prefix}uapkpro 
➡️╰─────────────😈
*╭──「🧻 ASUPAN VERSI VIDEO MENU 🧻」*
☻︎ ${prefix}asupan
☻︎ ${prefix}asupanloli
☻︎ ${prefix}bocil
☻︎ ${prefix}rikagusriani
☻︎ ${prefix}santuy
☻︎ ${prefix}gheayubi
☻︎ ${prefix}ukhty
☻︎ ${prefix}nantalia
➡️╰─────────────😈
*╭──「🐈 ASUPAN VERSI VIDEO MENU 🐈」*
☻︎ ${prefix}affect
☻︎ ${prefix}beautiful
☻︎ ${prefix}facepalm
☻︎ ${prefix}hitler
☻︎ ${prefix}jokeOverHead
☻︎ ${prefix}jail
☻︎ ${prefix}rip
☻︎ ${prefix}sepia
☻︎ ${prefix}trash
☻︎ ${prefix}wanted
☻︎ ${prefix}wasted
➡️╰─────────────😈
*╭──「😜 PHOTO EDITOR MENU 😜」*
☻︎ ${prefix}pencil
☻︎ ${prefix}skullmask
☻︎ ${prefix}cartoon
☻︎ ${prefix}invert
☻︎ ${prefix}fisheye
☻︎ ${prefix}pixelate
☻︎ ${prefix}rotate
☻︎ ${prefix}flip
☻︎ ${prefix}grayscale
☻︎ ${prefix}roundimage
☻︎ ${prefix}fisheyee
☻︎ ${prefix}deepfry
☻︎ ${prefix}imagecolor
☻︎ ${prefix}upscale
☻︎ ${prefix}aden
☻︎ ${prefix}brannan
☻︎ ${prefix}brooklyn
☻︎ ${prefix}clarendon
☻︎ ${prefix}gingham
☻︎ ${prefix}hudson
☻︎ ${prefix}inkwell
☻︎ ${prefix}earlybird
☻︎ ${prefix}kelvin
☻︎ ${prefix}lark
☻︎ ${prefix}lofi
☻︎ ${prefix}maven
☻︎ ${prefix}mayfair
☻︎ ${prefix}moon
☻︎ ${prefix}nashville
☻︎ ${prefix}perpetua
☻︎ ${prefix}reyes
☻︎ ${prefix}rise
☻︎ ${prefix}slumber
☻︎ ${prefix}stinson
☻︎ ${prefix}toaster
☻︎ ${prefix}valencia
☻︎ ${prefix}walden
☻︎ ${prefix}willow
☻︎ ${prefix}xpro2
➡️╰─────────────😈
*╭──「💖 ASUPAN VERSI IMAGE MENU 💖」*
☻︎ ${prefix}hijaber
☻︎ ${prefix} cecan
☻︎ ${prefix} cogan
☻︎ ${prefix} cecan2
☻︎ ${prefix} cogan2
☻︎ ${prefix} jeni
☻︎ ${prefix} jiso
☻︎ ${prefix} justina
☻︎ ${prefix} lisa
☻︎ ${prefix} rose
☻︎ ${prefix} ryujin
☻︎ ${prefix} indonesia
☻︎ ${prefix} vietnam
☻︎ ${prefix} thailand
☻︎ ${prefix} korea
☻︎ ${prefix} china
☻︎ ${prefix} japan
☻︎ ${prefix} malaysia
➡️╰─────────────😈
*╭──「📰 VIDEO MENU 📰」*
☻︎ ${prefix}beatvn
☻︎ ${prefix}bokep
☻︎ ${prefix}jedagjedugff
☻︎ ${prefix}jedagjedugml
☻︎ ${prefix}jedagjedugpubg
☻︎ ${prefix}storywa
☻︎ ${prefix}storygalau
☻︎ ${prefix}storyanime
☻︎ ${prefix}storytruk
☻︎ ${prefix}storybus
➡️╰─────────────😈
*╭──「📑 INFORMATION MENU 📑」*
☻︎ ${prefix}kodepos
☻︎ ${prefix}cuaca
☻︎ ${prefix}infogempa
☻︎ ${prefix}covidindo
☻︎ ${prefix}covidglobal
➡️╰─────────────😈
*╭──「📷 FOTO MENU 📷」*
☻︎ ${prefix}motor
☻︎ ${prefix}mobil
☻︎ ${prefix}renungan
☻︎ ${prefix}katakataimage
☻︎ ${prefix}aesthetic
☻︎ ${prefix}yulibocil
☻︎ ${prefix}doraemon
☻︎ ${prefix}pokemon
☻︎ ${prefix}pentol
☻︎ ${prefix}tatasurya
☻︎ ${prefix}kartun
☻︎ ${prefix}anjing
☻︎ ${prefix}kucing
☻︎ ${prefix}satanic
☻︎ ${prefix}boneka
➡️╰─────────────😈
*╭──「📹 ANIME GIF MENU 📹」*
☻︎ ${prefix}ngif
☻︎ ${prefix}gifcringe
☻︎ ${prefix}gifdance
☻︎ ${prefix}gifpoke
☻︎ ${prefix}gifwink
☻︎ ${prefix}gifhappy
☻︎ ${prefix}gifslap
☻︎ ${prefix}gifkill
☻︎ ${prefix}gifblush
☻︎ ${prefix}gifglomp
☻︎ ${prefix}gifbite
☻︎ ${prefix}gifnom
☻︎ ${prefix}gifhandhold
☻︎ ${prefix}gifhighfive
☻︎ ${prefix}gifwave
☻︎ ${prefix}gifsmile
☻︎ ${prefix}gifyeet
☻︎ ${prefix}gifbonk
☻︎ ${prefix}gifsmug
☻︎ ${prefix}gifpat
☻︎ ${prefix}giflick
☻︎ ${prefix}gifkiss
☻︎ ${prefix}gifawoo
☻︎ ${prefix}gifhug
☻︎ ${prefix}gifcry
☻︎ ${prefix}gifcuddle
☻︎ ${prefix}gifbully
➡️╰─────────────😈
*╭──「📋 ANIME MENU 📋」*
☻︎ ${prefix}elf
☻︎ ${prefix}shota
☻︎ ${prefix}husbu
☻︎ ${prefix}sagiri
☻︎ ${prefix}shinobu
☻︎ ${prefix}megumin
☻︎ ${prefix}wallnime
☻︎ ${prefix}elaina
☻︎ ${prefix}cosplay
☻︎ ${prefix}wallml
☻︎ ${prefix}kanna
☻︎ ${prefix}naruto
☻︎ ${prefix}boruto
☻︎ ${prefix}nekonime
☻︎ ${prefix}akira
☻︎ ${prefix}akiyama
☻︎ ${prefix}ana
☻︎ ${prefix}asuna
☻︎ ${prefix}ayuzawa
☻︎ ${prefix}chiho
☻︎ ${prefix}chitoge
☻︎ ${prefix}deidara
☻︎ ${prefix}eba
☻︎ ${prefix}emilia
☻︎ ${prefix}erza
☻︎ ${prefix}gremory
☻︎ ${prefix}hestie
☻︎ ${prefix}hinata
☻︎ ${prefix}isuzu
☻︎ ${prefix}itachi
☻︎ ${prefix}itori
☻︎ ${prefix}kagura
☻︎ ${prefix}kakasih
☻︎ ${prefix}kaori
☻︎ ${prefix}kaneki
☻︎ ${prefix}kotori
☻︎ ${prefix}kurumi
☻︎ ${prefix}madara
☻︎ ${prefix}mikasa
☻︎ ${prefix}miku
☻︎ ${prefix}minato
☻︎ ${prefix}nezuko
☻︎ ${prefix}rize
☻︎ ${prefix}sakura
☻︎ ${prefix}sasuke
☻︎ ${prefix}shina
☻︎ ${prefix}shinka
☻︎ ${prefix}shinomiya
☻︎ ${prefix}shizuka
☻︎ ${prefix}tejina
☻︎ ${prefix}toukachan
☻︎ ${prefix}tsunade
☻︎ ${prefix}yotsuba
☻︎ ${prefix}yuki
☻︎ ${prefix}yumeko
☻︎ ${prefix}fanart
☻︎ ${prefix}nino
➡️╰─────────────😈
*╭──「❤️ ANIME V2 MENU ❤️」*
☻︎ ${prefix}blush
☻︎ ${prefix}cringe
☻︎ ${prefix}dance                   
☻︎ ${prefix}wink
☻︎ ${prefix}happy
☻︎ ${prefix}slap
☻︎ ${prefix}kill
☻︎ ${prefix}glomp
☻︎ ${prefix}bite
☻︎ ${prefix}nom
☻︎ ${prefix}handhold
☻︎ ${prefix}highfive
☻︎ ${prefix}wave
☻︎ ${prefix}smile
☻︎ ${prefix}yeet
☻︎ ${prefix}bonk
☻︎ ${prefix}smug
☻︎ ${prefix}pat
☻︎ ${prefix}lick
☻︎ ${prefix}kiss
☻︎ ${prefix}hug
☻︎ ${prefix}cry
☻︎ ${prefix}cuddle
☻︎ ${prefix}bully
☻︎ ${prefix}tickle
☻︎ ${prefix}awoo
☻︎ ${prefix}cringe
➡️╰─────────────😈
*╭──「🧽 IMAGE STICKER MENU 🧽」*
☻︎ ${prefix}patrick
☻︎ ${prefix}dogge
☻︎ ${prefix}bucinstick
☻︎ ${prefix}amongus
☻︎ ${prefix}gura
☻︎ ${prefix}dadu
➡️╰─────────────😈
*╭──「✳️ TEKS STICKER MENU ✳️」*
☻︎ ${prefix}ttp
☻︎ ${prefix}ttp2
☻︎ ${prefix}ttp3
☻︎ ${prefix}ttp5
☻︎ ${prefix}ttp6
☻︎ ${prefix}attp
☻︎ ${prefix}attp2
☻︎ ${prefix}attp3
➡️╰─────────────😈
*╭──「⚔️ HEWAN MENU ⚔️」*
☻︎ ${prefix}fox
☻︎ ${prefix}dog
☻︎ ${prefix}cat
☻︎ ${prefix}panda
☻︎ ${prefix}panda1
☻︎ ${prefix}bird
☻︎ ${prefix}koala
☻︎ ${prefix}buwungpuyuh
☻︎ ${prefix}elang
☻︎ ${prefix}buaya
➡️╰─────────────😈
*╭──「🎧 AUDIO MENU 🎧」*
☻︎ ${prefix}audio1
☻︎ ${prefix}audio2
☻︎ ${prefix}audio3
☻︎ ${prefix}audio4
☻︎ ${prefix}audio5
☻︎ ${prefix}audio6
☻︎ ${prefix}audio7
☻︎ ${prefix}audio8
☻︎ ${prefix}audio9
☻︎ ${prefix}audio10
☻︎ ${prefix}audio11
☻︎ ${prefix}audio12
☻︎ ${prefix}audio13
☻︎ ${prefix}audio14
☻︎ ${prefix}audio15
☻︎ ${prefix}audio16
☻︎ ${prefix}audio17
☻︎ ${prefix}audio18
☻︎ ${prefix}audio19
☻︎ ${prefix}audio20
☻︎ ${prefix}audio21
☻︎ ${prefix}audio22
☻︎ ${prefix}audio23
☻︎ ${prefix}audio24
☻︎ ${prefix}audio25
☻︎ ${prefix}audio26
☻︎ ${prefix}audio27
☻︎ ${prefix}audio28
☻︎ ${prefix}audio29
☻︎ ${prefix}audio30
☻︎ ${prefix}audio31
☻︎ ${prefix}audio32
☻︎ ${prefix}audio33
☻︎ ${prefix}audio34
☻︎ ${prefix}audio35
➡️╰─────────────😈
*╭──「🎵 SOUND MENU 🎵」*
☻︎ ${prefix}sound1
☻︎ ${prefix}sound2
☻︎ ${prefix}sound3
☻︎ ${prefix}sound4
☻︎ ${prefix}sound5
☻︎ ${prefix}sound6
☻︎ ${prefix}sound7
☻︎ ${prefix}sound8
☻︎ ${prefix}sound9
☻︎ ${prefix}sound10
☻︎ ${prefix}sound11
☻︎ ${prefix}sound12
☻︎ ${prefix}sound13
☻︎ ${prefix}sound14
☻︎ ${prefix}sound15
☻︎ ${prefix}sound16
☻︎ ${prefix}sound17
☻︎ ${prefix}sound18
☻︎ ${prefix}sound19
☻︎ ${prefix}sound20
☻︎ ${prefix}sound21
☻︎ ${prefix}sound22
☻︎ ${prefix}sound23
☻︎ ${prefix}sound24
☻︎ ${prefix}sound25
☻︎ ${prefix}sound26
☻︎ ${prefix}sound27
☻︎ ${prefix}sound28
☻︎ ${prefix}sound29
☻︎ ${prefix}sound30
☻︎ ${prefix}sound31
☻︎ ${prefix}sound32
☻︎ ${prefix}sound33
☻︎ ${prefix}sound34
☻︎ ${prefix}sound35
☻︎ ${prefix}sound36
➡️╰─────────────😈
😈──────" 🛡️𝕰𝖓𝖉𝖎𝖓𝖌 𝕺𝖋 𝕸𝖊𝖓𝖚🛡️ "──────😈`
var imgs = await KirBotz.prepareMessage('0@c.us', fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), image, { thumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`) })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await KirBotz.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `All Menu`,
                        "description": menunyangen,
                        "footerText": `©ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "9999999999",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "999999999",
                        "retailerId": `SUBSCRIBE YT : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`,
                        "url": "https://wa.me/6289688206739"
                    },
                    "businessOwnerJid": "6289688206739@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            KirBotz.relayWAMessage(ctlg)
            var yoasobi2 = fs.readFileSync(`./SOUND/yoasobi2.mp3`)
         KirBotz.sendMessage(from, yoasobi2, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
            break
///////NULIS//////
case 'nulis':

if(!q) return fakeyt('Teks Yang Mau Di Tulis??')
listMsg = {
buttonText: 'Silakan Pilih Dulu Menu Nulisnya 📝',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah ⤵️`,
description: `LIST NULIS`,
sections: [
{
"title": `📋 NULIS BUKU 📋`,
 rows: [
{
"title": `BUKU KANAN ✏️`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI ✏️`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `😽😽😽😽😽 NULIS FOLIO 😽😽😽😽😽️`,
 rows: [
{
"title": `FOLIO KANAN ✏️`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI ✏️`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'nuliskiri':{

                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}nuliskiri* teks`)
                sticWait(from)
                fakeyt(kirr.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./V4/NULIS/FOTO/BUKU/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                })
            }
                break
case 'nuliskanan':{

                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}nuliskanan* teks`)
                sticWait(from)
                fakeyt(kirr.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./V4/NULIS/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                })
            }
                break
case 'foliokiri':{

                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}foliokiri* teks`)
                sticWait(from)
                fakeyt(kirr.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./V4/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                })
            }
                break
case 'foliokanan':{

                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}foliokanan* teks`)
                sticWait(from)
                fakeyt(kirr.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./V4/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                })
            }
                break
case 'kusonime':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title ➡️ ${get_result.title}\n`
                    ini_txt += `Japanese ➡️ ${get_result.japanese}\n`
                    ini_txt += `Genre ➡️ ${get_result.genre}\n`
                    ini_txt += `Seasons ➡️ ${get_result.seasons}\n`
                    ini_txt += `Producers ➡️ ${get_result.producers}\n`
                    ini_txt += `Type ➡️ ${get_result.type}\n`
                    ini_txt += `Status ➡️ ${get_result.status}\n`
                    ini_txt += `Total Episode ➡️ ${get_result.total_episode}\n`
                    ini_txt += `Score ➡️ ${get_result.score}\n`
                    ini_txt += `Duration ➡️ ${get_result.duration}\n`
                    ini_txt += `Released On ➡️ ${get_result.released_on}\n`
                    ini_txt += `Desc ➡️ ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    reply(ini_txt)
                    break
                case 'kusonimesearch':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title ➡️ ${get_result.title}\n`
                    ini_txt += `Japanese ➡️ ${get_result.japanese}\n`
                    ini_txt += `Genre ➡️ ${get_result.genre}\n`
                    ini_txt += `Seasons ➡️ ${get_result.seasons}\n`
                    ini_txt += `Producers ➡️ ${get_result.producers}\n`
                    ini_txt += `Type ➡️ ${get_result.type}\n`
                    ini_txt += `Status ➡️ ${get_result.status}\n`
                    ini_txt += `Total Episode ➡️ ${get_result.total_episode}\n`
                    ini_txt += `Score ➡️ ${get_result.score}\n`
                    ini_txt += `Duration ➡️ ${get_result.duration}\n`
                    ini_txt += `Released On ➡️ ${get_result.released_on}\n`
                    ini_txt += `Desc ➡️ ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesu':
                
              if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Gotoubun No Hanayome`)
              query = args.join(" ")
              sticWait(from)
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title ➡️ ${get_result.title}\n`
              ini_txt += `Japanese ➡️ ${get_result.japanese}\n`
              ini_txt += `Judul ➡️ ${get_result.judul}\n`
              ini_txt += `Type ➡️ ${get_result.type}\n`
              ini_txt += `Episode ➡️ ${get_result.episodes}\n`
              ini_txt += `Aired ➡️ ${get_result.aired}\n`
              ini_txt += `Producers ➡️ ${get_result.producers}\n`
              ini_txt += `Genre ➡️ ${get_result.genres}\n`
              ini_txt += `Duration ➡️ ${get_result.duration}\n`
              ini_txt += `Studios ➡️ ${get_result.status}\n`
              ini_txt += `Rating ➡️ ${get_result.rating}\n`
              ini_txt += `Credit ➡️ ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
                case 'otakudesusearch':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
    case 'nekopoi':
    
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira, caption: ini_txt })
                    break
case 'nekopoisearch':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Isekai Harem`)
                    query = args.join(" ")                   
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'xhamstersearch':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Japanese`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await KirBotz.sendMessage(from, thumbnail, image, { quoted: fgi, caption: ini_txt })
                    break
                case 'xnxxsearch':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Japanese`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                case 'xnxxdl':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await KirBotz.sendMessage(from, thumbnail, image, { quoted: fgi, caption: ini_txt })
                    break                  
                    //////////xnxx                                  
case 'pinterest':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    sticWait(from)
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira, caption: 'Nih Kak Udah Jadi'})
                    break
case 'pinterest2':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira, caption: 'Nih Kak Udah Jadi' })
                    }
                    break
case 'nhentai':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} 12345`)
                    henid = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} 12345`)
                    henid = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    Kirbotz.sendMessage(from, ini_buffer, document, { quoted: akira, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'translate':

if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'google':

if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : kalau tidak muncul melulu belarti error\n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break
case 'shopee':

if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Hasil Pencarian ðŸ˜‰ : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'wallpapersearch':

if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: 'Dah Jadi Kak'})
break
case 'wallpapersearch2':
	                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} loli`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: 'Dah Jadi Kak'})
                    break
case 'kbbi':

if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
sticWait(from)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':

if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
sticWait(from)
teks = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${teks}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':

if (args.length == 0) return reply(`Apa Yg Mau Di Cari Tod\nContoh : ${prefix + command} Tahu`)
query = args.join(" ")
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break

///////informasi


case 'kodepos':

if (args.length == 0) return reply(`Nama Kota Nya Mana Tod ?\nContoh : ${prefix + command} Temanggung`)
daerah = args.join(" ")
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
get_result = get_result.result[0]
zerr = `*Provinsi :* ${get_result.province}\n`
zerr += `*Kabupaten :* ${get_result.city}\n`
zerr += `*Kecamatan :* ${get_result.subdistrict}\n`
zerr += `*Kelurahan :* ${get_result.urban}\n`
zerr += `*Kode Pos :* ${get_result.postalcode}`
reply(zerr)
break
case 'cuaca':

if (args.length == 0) return reply(`Nama Kota Nya Mana Tod ?\nContoh : ${prefix + command} Depok`)
daerah = args[0]
sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
zerr = `Tempat : ${get_result.tempat}\n`
zerr += `Cuaca : ${get_result.cuaca}\n`
zerr += `Angin : ${get_result.angin}\n`
zerr += `Description : ${get_result.description}\n`
zerr += `Kelembapan : ${get_result.kelembapan}\n`
zerr += `Suhu : ${get_result.suhu}\n`
zerr += `Udara : ${get_result.udara}\n`
zerr += `Permukaan laut : ${get_result.permukaan_laut}\n`
await KirBotz.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: fakeTroli })
reply(zerr)
break
case 'infogempa':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = `*Lokasi :* ${get_result.lokasi}\n`
zerr += `*Waktu :* ${get_result.waktu}\n`
zerr += `*Potensi :* ${get_result.potensi}\n`
zerr += `*Magnitude :* ${get_result.magnitude}\n`
zerr += `*Kedalaman :* ${get_result.kedalaman}\n`
zerr += `*Koordinat :* ${get_result.koordinat}`
buffer = await getBuffer(get_result.map)
await KirBotz.sendMessage(from, buffer, image, { quoted: fakeTroli, caption: zerr })
break
case 'covidindo':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
sticOk(from)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n`
zerr += `*Sembuh :* ${get_result.sembuh}\n`
zerr += `*Dirawat :* ${get_result.dirawat}\n`
zerr += `*Meninggal :* ${get_result.meninggal}`
reply(zerr)
break
case 'covidglobal':

sticOk(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n`
zerr += `*Sembuh :* ${get_result.sembuh}\n`
zerr += `*Dirawat :* ${get_result.dirawat}\n`
zerr += `*Meninggal :* ${get_result.meninggal}`
reply(zerr)
break





/////////////////GAME
case 'truth':
              
              sticWait(from)
              var trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              var ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              KirBotz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: fgi })
              break
case 'dare':
              
              sticWait(from)
              var dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              var der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgi})
              KirBotz.relayWAMessage(prep)
              break		                            
              case 'elang':
              		
                    query = args.join("elang")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=elang`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi})
                    break
         case 'buwungpuyuh':
         
                    query = args.join("buwungpuyuh")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=burungpuyuh`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    KirBot.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: 'Dah Jadi'})
                    break
                   case 'buaya':
                   
                    query = args.join("buaya")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=buaya`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi})
                    break                                            
case 'jadian':
            
              sticWait(from)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'cekme':
                    
                    sticWait(from)
                    fakeyt("Loading. . .")
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					var hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','❌','✔️']
					var wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					try {
					profil = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `*≡════《 Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════《 CEKSIFATME 》═════≡*`
					buff = await getBuffer(profil)
					KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption: profile, contextInfo: { mentionedJid: [bet]}})
					break
case 'bisakah':

sticWait(from)
if (args.length < 1) return fakeyt(`Contoh : ${prefix}bisakah aku terbang`)
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Jawaban : ${random}`
fakeyt(tt)
break
case 'kapankah':

sticWait(from)
if (args.length < 1) return fakeyt(`Contoh : ${prefix}kapankah aku menikah`)
no = `${Math.floor(Math.random() * 100)}`
naon = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi"]
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Jawaban : ${no} ${random}`
fakeyt(kapan)
break      	   
case 'rate':

sticWait(from)
if (args.length < 1) return fakeyt(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
fakeyt(rating)
break
case 'apakah':

sticWait(from)
if (args.length < 1) return fakeyt(`Contoh : ${prefix}apakah aku jelek`)
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Jawaban = ${random}`
fakeyt(tz)
break
case 'gantengcek':
  
sticWait(from)
  if (args.length < 1) return fakeyt(`Contoh : ${prefix}gantengcek Mimin`) 
  random = `${Math.floor(Math.random() * 100)}`
  cek = `Persentase : ${random}%`
  KirBotz.sendMessage(from, cek, text, {quoted: fgi})
break
case 'cantikcek':
  
  sticWait(from)
  if (args.length < 1) return fakeyt(`Contoh : ${prefix}cantikcek Jeje`)
  random = `${Math.floor(Math.random() * 100)}`
  can = q
  cek = `Persentase : ${random}%`
  KirBotz.sendMessage(from, cek, text, {quoted: fgi})
break
//@//*//*//*//*///#//@//////@/@//@
case 'tebakgambar': // case by piyo-chan

sticWait(from)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./V3/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./V3/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
case 'susunkata':

              if (susunkata.hasOwnProperty(sender.split('@')[0])) return fakeyt("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              KirBotz.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: fgi}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./V3/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              fakeyt("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./V3/susunkata.json", JSON.stringify(susunkata))
}
              break
case 'family100':

sticWait(from)
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api.lolhuman.xyz/api/game/family100?apikey=${lolkey}")
                    tebak = `Pertanyaan : ${anu.result.data.soal}`
                    jawaban = anu.result.data.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync('./V3/game/family100.json', JSON.stringify(family))
                    console.log(jawaban)
                    KirBotz.sendMessage(from, tebak + '\n\n⏰ Timeout : 60 seconds', text, { quoted: akira })
                   await sleep(60000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
					console.log("Family100 Telah Berakhir")
                        fs.writeFileSync('./V3/game/family100.json', JSON.stringify(family))
                    }
					break   
case 'caklontong':

					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}")
                    jawaban = `${anu.result.data.jawaban.replace('Jawaban ', '')}`
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./V3/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    reply( `*Soal:* _${anu.result.data.soal}_\n ⏰ _*Timeout : 60 seconds!!*_`)
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                                KirBotz.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_' + '\n' + '*➸Deskripsi:* ' + '_' + anu.result.data.desc + '_', text, {quoted: akira}) // ur cods
								delete caklontong[sender.split('@')[0]]
								console.log("Cak Lontong Telah Berakhir")
                        fs.writeFileSync("./V3/caklontong.json", JSON.stringify(caklontong))
                    }
                    //await limitAdd(sender, limit)
					break
case 'siapakahaku':

					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}")
                    jawaban = `${anu.data.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./V3/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    tebakya = anu.data.pertanyaan
                    KirBotz.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: akira})
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                KirBotz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: akira}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
								console.log("Siapa aku Telah Berakhir")
                        fs.writeFileSync("./V3/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
					break   
case 'tebakkalimat':

					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakkalimat?apikey=Alphabot")
                    jawaban = `${anu.data.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./V3/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    KirBotz.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: akira})
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                KirBotz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: akira}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
								console.log("Tebak kalimat Telah Berakhir")
                        fs.writeFileSync("./V3/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
					break   
case 'tebakkata':

					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakkata?apikey=Alphabot")
                    jawaban = `${anu.data.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./V3/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    KirBotz.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: akira})
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                KirBotz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: akira}) // ur cods
								delete tebakkata[sender.split('@')[0]]
								console.log("Tebak kata Telah Berakhir")
                        fs.writeFileSync("./V3/tebakkata.json", JSON.stringify(tebakkata))
                    }
					break   
case 'tebaklirik': // case by piyo-chan

sticWait(from)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./V3/tebaklirik.json", JSON.stringify(tebaklirik))
                    })
                    await sleep(30000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebaklirik[sender.split('@')[0]]
                        fs.writeFileSync("./V3/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    break
case 'tekateki':

					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tekateki?apikey=Alphabot")
                    jawaban = `${anu.data.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./V3/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    KirBotz.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: akira})
                    await sleep(60000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                KirBotz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: akira}) // ur cods
								delete tekateki[sender.split('@')[0]]
								console.log("Teka-teki Telah Berakhir")
                        fs.writeFileSync("./V3/tekateki.json", JSON.stringify(tekateki))
                    }
					break 
///////#/#//@/@/1//#/$///#)$//_//_/_/$/_//_//_/______"_/_//_//_//_//_/_/"/
case 'suit': 
		     
		     if (!isGroup) return fakeyt('Khusus Group')
		     but = [
         { buttonId: `${prefix}suitnya batu`, buttonText: { displayText: 'BATU✊' }, type: 1 },
         { buttonId: `${prefix}suitnya gunting`, buttonText: { displayText: 'GUNTING✌️' }, type: 1 },
         { buttonId: `${prefix}suitnya kertas`, buttonText: { displayText: 'KERTAS✋' }, type: 1 }
         ]
         sendButton(from, `Silahkan Pilih Kak ${pushname}`, fake, but)
         break
case 'suitnya':
					
					if (!isGroup) return fakeyt('Khusus Group')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nBot *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nBot *Batu*\nKamu Kalah 😆",
					    "Kamu *Gunting*\nBot *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  fakeyt(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nBot *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nBot *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nBot *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						fakeyt(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nBot *Gunting*\nKamu Menang 😔",
					    "Kamu *Batu*\nBot *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nBot *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  fakeyt(batu)
					} else {
					  fakeyt('Pilih Gunting/Batu/Kertas')
					}
           break
///////
///////////////
case 'bugreport':
              
              if (args.length < 1) return fakeyt(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              fakeyt('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              KirBotz.sendMessage('6287705048235@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
case 'ssweb':
case 'ss':
                
                if (args.length < 1) return fakeyt('```Urlnya Mana Kocak? 😒```')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					sticWait(from)
					buff = await getBuffer(anu.screenshot)
					KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break
case 'serti1':
case 'serti2':
case 'serti3':

if (args.length ==0) return fakeyt('```Text Nya Mana Tod? 😒```')
txtt = args.join (" ")
fakeyt(`Wet wet...`)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
sticWait(from)
KirBotz.sendMessage(from, buff, image, { quoted: fgi, caption: 'Nih Bro Hasil nya' })
break
////
case 'cosplay':
case 'wallml':

          var wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          sticWait(from)
          var wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [
            {buttonId:`${prefix}list`,buttonText: {displayText: 'MENU BOT ☠️'}, type: 1}
            ,
            {buttonId:`${prefix + command}`,buttonText: {displayText: 'SELANJUTNYA ➡️'}, type: 1}
            ]
            var ButtonssMessages = {
            contentText: `*Subrek YT : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: bb.message.imageMessage
            }
            await KirBotz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : fgi})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'elaina':
case 'wallnime':
case 'kanna':
                
sticWait(from)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'loli':
case 'milf':
case 'neko':
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
sticWait(from)
if (!akira.key.fromMe && !isOwner) return fakeyt(`Fitur Ini Gue Di Nonaktifkan Alasanya Puasa Woiii, Nanti Kalau On ntar gue Kabarin Dah`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: akira})
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'eron':
case 'solo':
case 'anal':
case 'tits':
case 'kuni':
case 'erok':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'futanari':
case 'lewdkemo':
case 'pussy_jpg':
case 'nsfw_avatar':
      
sticWait(from)
if (!akira.key.fromMe && !isOwner) return fakeyt(`Fitur Ini Gue Di Nonaktifkan Alasanya Puasa Woiii, Nanti Kalau On ntar gue Kabarin Dah`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
                    ////////GIF
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                
                if (!akira.key.fromMe && !isOwner) return fakeyt(`Fitur Ini Gue Di Nonaktifkan Alasanya Puasa Woiii, Nanti Kalau On ntar gue Kabarin Dah`)
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: fgi})
                        fs.unlinkSync(rano)
                    })
                    break
///////////////////////////////////////////////////////////////////////////////////////
                  case 'ngif':
                  
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    break
                    case 'gifblush':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/blush?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifcringe':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifdance':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifpoke':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/poke?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifwink':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/wink?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifhappy':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifslap':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifkill':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifglomp':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/glomp?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifbite':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/bite?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifnom':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/nom?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifhandhold':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/handhold?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifhighfive':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/highfive?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifwave':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifsmile':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifyeet':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/yeet?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifbonk':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifsmug':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
case 'gifpat':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/pat?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
case 'giflick':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/lick?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
case 'gifkiss':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
case 'gifawoo':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/awoo?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
case 'gifhug':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/hug?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
case 'gifcry':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifcuddle':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/cuddle?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
                    case 'gifbully':
                    
                sticWait(from)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/gifbully?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        KirBotz.sendMessage(from, buff, sticker, { quoted: akira})
                        fs.unlinkSync(rano)
                    })
                    reply(`Bila Tidak Muncul Coba Ulangi Lagi`)
                    break
/////////////////////////////////////////////////////////////////////////////////////////

                    //////halal
                    case 'husbu':
                    case 'blush':
                    case 'cringe':
                    case 'dance':                   
                    case 'wink':
                    case 'happy':
                    case 'slap':
                    case 'kill':
                    case 'glomp':
                    case 'bite':
                    case 'nom':
                    case 'handhold':
                    case 'highfive':
                    case 'wave':
                    case 'smile':
                    case 'yeet':
                    case 'bonk':
                    case 'smug':
                    case 'pat':
                    case 'lick':
                    case 'kiss':
                    case 'hug':
                    case 'cry':
                    case 'cuddle':
                    case 'bully':
                    case 'tickle':
                    case 'awoo':
                    case 'cringe':
                    
sticWait(from)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
                    case 'kemonomimi':
                    case 'wallpaper':
                    case 'fox_girl':
                    case 'baka':
                    case 'holo':
                    case 'poke':
                    case 'gasm':
                    case 'feed':
                    
sticWait(from)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
                    ///////////////////GIF                      
case 'wasted':
	    
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !akira.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
			owgi = await KirBotz.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${data.display_url}`)
			KirBotz.sendMessage(from, buff, image, {quoted: akira, caption: kirr.success})
		    } else {
			fakeyt(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
		    }
		    break
case 'cogan':

sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
wmn = `🐧KirBotz`
trans = `Subrek YT : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':

sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
wmn = `🐧KirBotz`
trans = `Subrek YT : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'sewabot':
     fakeyt(kirr.wait)
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
${wib} *𝑾𝒊𝒃*
${wita} *𝑾𝒊𝒕𝒂*
${wit} *𝑾𝒊𝒕*
Jam : *${time}*
Runtime : *${runtime(process.uptime())}*
ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, buttons: [
                                 { buttonId: `${prefix}sewa1`, buttonText: { displayText: '🗿Ya' }, type: 1 },
                                 { buttonId: `${prefix}gk`, buttonText: { displayText: '👀Tidak' }, type: 1 }
                                         ], 
                                         headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'sewa1':
 
      fakeyt(kirr.wait)
 listMsg = {
 buttonText: 'LIST SEWA',
 footerText: 'Lord ⱧɆ₦₮₳ł-฿Ø₮Ⱬ',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Sewabot`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${tanggal}`,
 rows: [
                          {
                              "title": "1 BULAN",
                              "rowId": `${prefix}waktu 1bulan`
                           },
                           {
                              "title": "2 BULAN",
                              "rowId": `${prefix}waktu 2bulan`
                           },
                           {
                              "title": "6 BULAN",
                              "rowId": `${prefix}waktu 6bulan`
                           },
                           {
                              "title": "PERPANJANG",
                              "rowId": `${prefix}waktu panjang`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'waktu':

     fakeyt(kirr.wait)
if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            var buttonpulsa = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            var buttongopay = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            var buttonovo = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            var buttonovo = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            }
            break
case 'payment':
case 'donasi':
      fakeyt(kirr.wait)
 listMsg = {
 buttonText: 'PAYMENT',
 footerText: 'Lord ⱧɆ₦₮₳ł-฿Ø₮Ⱬ',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Payment`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${time}`,
 rows: [
                          {
                              "title": "QR ALL PAYMENT",
                              "rowId": `${prefix}qrall`
                           },
                           {
                              "title": "QR GOPAY",
                              "rowId": `${prefix}qrgopay`
                           },
                           {
                              "title": "NOMOR GOPAY",
                              "rowId": `${prefix}via payment`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:akira})
break
case 'qrall':

     fakeyt(kirr.wait)
jangannti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Silahkan Scan Di Atas
Kalau Udah Kirim ScreenShot 
Bukti Transper Ke Owner
Chat wa.me/${jangannti}

*${tanggal}*
`, buttons: [{ buttonId: `${prefix}ok`, buttonText: { displayText: ' OK ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: qrall, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'qrgopay':

     fakeyt(kirr.wait)
jangannti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Silahkan Scan Di Atas
Kalau Udah Kirim ScreenShot 
Bukti Transper Ke Owner
Chat wa.me/${jangannti}

*${tanggal}*
̵`, buttons: [{ buttonId: `${prefix}ok`, buttonText: { displayText: ' OK ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: qrgopay, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'via':

     fakeyt(kirr.wait)
if ((args[0]) == 'payment'){
            voto =`*NOMOR :* ${gopay}`            
            var buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Transfer Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
                   
            }
            break
case 'dmml':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 MOBILE LEGEND 」*
• VIA ID & SERVER
• LEGAL 100%
• PROSES 1-5 MENIT

☂ *86 💎 Rp 20.000*
☂ *172 💎 Rp 39.500*
☂ *257 💎 Rp 58.000*
☂ *344 💎 Rp 78.000*
☂ *429 💎 Rp 97.500*
☂ *514 💎 Rp 116.000*
☂ *600 💎 Rp 135.400*
☂ *706 💎 Rp 156.614*
☂ *878 💎 Rp 194.282*
☂ *963 💎 Rp 213.897*
☂ *1412 💎 Rp 310.756*
☂ *2195 💎 Rp 455.170*
☂ *3688 💎 Rp 760.000*
☂ *4394 💎 Rp 890.982*
☂ *5532 💎 Rp 1.145.000*
☂ *9288 💎 Rp 1.901.000*

*Starlight Membership Bonus 12 💎 Rp 97.000*
*Twilight Pass [PROMO ]  Rp 97.000*
*Starlight Membership  Rp 127.000*
*Twilight  Rp 127.000*
*Starlight Membership Plus [PROMO ] Rp 200.000*
*Mobile Legend Member Plus Rp 285.000*
̵`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'dmff':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 FREE FIRE 」*
• VIA ID
• LEGAL 100%
• PROSES 1-7 MENIT

☂ *50 💎 Rp 7.789*
☂ *70 💎 Rp 10.000*
☂ *100 💎 Rp 15.500*
☂ *140 💎 Rp 19.500*
☂ *210 💎 Rp 28.522*
☂ *355 💎 Rp 46.500*
☂ *500 💎 Rp 66.500*
☂ *720 💎 Rp 92.740*
☂ *1000 💎 Rp 129.104*
☂ *1440 💎 Rp 183.200*
☂ *2000 💎 Rp 250.400*

*Member Mingguan Rp 28.800*
*Member Bulanan Rp 138.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
̵`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'chip':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 DOMINO 」*
• VIA ID + NICK
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *30M Koin Emas-D Rp 6.000*
☂ *60M Koin Emas-D Rp 12.000*
☂ *90M Koin Emas-D Rp 18.000*
☂ *100M Koin Emas-D Rp 19.500*
☂ *200M Koin Emas-D Rp 31.000*
☂ *400M Koin Emas-D Rp 62.000*
☂ *430M Koin Emas-D Rp 68.000*
☂ *500M Koin Emas-D Rp 81.500*
☂ *2B Koin Emas-D Rp 251.000*
☂ *4B Koin Emas-D Rp 502.000*
☂ *6B Koin Emas-D Rp 753.000*
☂ *8B Koin Emas-D Rp 1.004.000*
☂ *10B Koin Emas-D Rp 1.255.000*
☂ *12B Koin Emas-D Rp 1.506.000*
☂ *14B Koin Emas-D Rp 1.757.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
̵`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'dmhago':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 HAGO 」*
• VIA ID
• LEGAL 100%
• PROSES 1-3 MENIT

*6 💎 Rp 2.000*
*45 💎 Rp 15.000*
*90 💎 Rp 30.000*
*225 💎 Rp 74.000*
*375 💎 Rp 121.000*
*900 💎 Rp 291.000*
*1650 💎 Rp 531.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
̵`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'garenashell':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 GARENA 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *33 SHELL 💰 Rp 10.000*
☂ *66 SHELL 💰 Rp 20.000*
☂ *99 SHELL 💰 Rp 30.000*
☂ *165 SHELL 💰 Rp 50.000*
☂ *330 SHELL 💰 Rp 100.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'pointblank':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 POINT BLANK 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *1200 PB CASH 💸 Rp 10.000*
☂ *2400 PB CASH 💸 Rp 20.000*
☂ *6000 PB CASH 💸 Rp 50.000*
☂ *12000 PB CASH 💸 Rp 95.000*
☂ *24000 PB CASH 💸 Rp 200.000*
☂ *36000 PB CASH 💸 Rp 280.000*
☂ *60000 PB CASH 💸 Rp 480.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'cod':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 CALL OF DUTY 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *31 CP 💸 Rp 5.000*
☂ *62 CP 💸 Rp 10.000*
☂ *127 CP 💸 Rp 20.000*
☂ *317 CP 💸 Rp 50.000*
☂ *634 CP 💸 Rp 90.000*
☂ *1373 CP 💸 Rp 195.000*
☂ *1901 CP 💸 Rp 250.000*
☂ *3300 CP 💸 Rp 395.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'pubg':

var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 PUBG 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *53 UC 💸 Rp 10.000*
☂ *105 UC 💸 Rp 22.000*
☂ *131 UC 💸 Rp 29.000*
☂ *263 UC 💸 Rp 48.500*
☂ *530 UC 💸 Rp 96.000*
☂ *825 UC 💸 Rp 143.000*
☂ *1100 UC 💸 Rp 187.000*
☂ *1925 UC 💸 Rp 319.430*
☂ *2200 UC 💸 Rp 372.680*
☂ *2463 UC 💸 Rp 422.230*
☂ *2730 UC 💸 Rp 456.180*
☂ *3025 UC 💸 Rp 502.205*
☂ *3300 UC 💸 Rp 552.205*
☂ *3563 UC 💸 Rp 602.680*
☂ *3830 UC 💸 Rp 632.180*
☂ *4125 UC 💸 Rp 687.180*
☂ *4400 UC 💸 Rp 732.180*
☂ *4663 UC 💸 Rp 776.000*

Note : 👤
• Harga sewaktu waktu berubah 🤔
• Pastikan ID Sudah benar 😉
• Pemesanan lebih tinggal x kan saja 😁
• Kesalahan Pengirim data tidak ada reff 😒
`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '⚔️ MENU AWAL ⚔️' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '📝 LIST 📝' }, type: 1 }
             ,
             { buttonId: `${prefix}format`, buttonText: { displayText: '💰 MAU BELI? 💰' }, type: 1 }
             ],
              headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'format':

thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*Sebelum lanjut, Mohon diisi dulu di bawah!! ⤵️*

*👤 ɴᴀᴍᴀ :*
*😈 ɪᴅ :*
*🛡️ ɴᴏᴍɪɴᴀʟ :*
*😁 ʜᴀʀɢᴀ ᴅɪᴀᴍᴏɴᴅ :*
*Pastikan Format Benar !! 😡*
*Jika Salah Isi Format Maka Diamond Gak Masuk 😏*
*Kami tidak akan bertanggung jawab !! 😏*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !! 👍*
*Terima kasih 😁*

${tanggal}
̵`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: '🌸 MENU AWAL 🌸' }, type: 1 }
             ,
             { buttonId: `${prefix}list`, buttonText: { displayText: '😈 LIST 😈' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: '😎 OWNER 😎' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi3 = fs.readFileSync(`./SOUND/yoasobi3.mp3`)
         KirBotz.sendMessage(from, yoasobi3, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'script':
case 'sc':

fakeyt(kirr.wait)
fakeyt(`Hmmmmm Masih Saya Pantau Kamu :V`)
sticGaboleh(from)
break
case 'rules':

sticOk(from)
                fakeyt(kirr.wait)
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. Jangan spam Bot Kocak 😫
      *Sanksi Gue blockir No Lu*
❒͡ 2. Jangan Telp Bot Woiiii 😡
     *Sanksi : Soft Block*
❒͡ 3. Jangan Banding Banding Bot 😒
      *Sanksi : Block Permanent*
❒͡ 4. Masukin Bot Saya Ini Boleh Boleh Ajah Asalkan Ijin Dulu 😎
      *Sanksi : Out Dari Group Lu Tanpa Ijin Gue*      

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/6289688206739*_`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [
             { buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU BOT ☠️' }, type: 1 }
             ,
             { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT 👽' }, type: 1 }
             ], 
             headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')            
break
case 'runtime':
sticOk(from)
fakeyt(kirr.wait)
fakeyt(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'speed':
case 'ping':              
              timestampe = speed();
              latensie = speed() - timestampe
              fakeyt(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
case 'owner':

thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (var mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${ownerName}\n` +
            `item1.TEL;waid=${owner}:${owner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Kir - Botz Developer\n` +
            'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: akira, 
})
menuh = `Hai Kak 😄 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Tuh Owner Ku Kak 😁
Jangan Macem² Yah Kak 😏`,
buttons: [
           { buttonId: `${prefix}owner`, buttonText: { displayText: '👍 OK SIAP BANG 👍' }, type: 1 }
           ,
           { buttonId: `${prefix}rules`, buttonText: { displayText: '😒 NICE DAH 😒' }, type: 1 }
           ,
           { buttonId: `${prefix}menu`, buttonText: { displayText: '😎 SIAP 86 😎' }, type: 1 }
         ], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogoowner, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
var yoasobi1 = fs.readFileSync(`./SOUND/yoasobi1.mp3`)
         KirBotz.sendMessage(from, yoasobi1, MessageType.audio, {quoted: akira, mimetype: 'audio/mp4', ptt:true})
break
case 'ytowner':

fakeyt (`*Subrek Kak*\nhttps://youtu.be/N-Z9ugGpeYk`)
break
case 'gchentai':

fakeyt (`*Join Kak*\https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI`)
break
case 'bc':            
             if (!akira.key.fromMe && !isOwner) return fakeyt(`Bacot Ngentot`)
             if (args.length < 1) return fakeyt('teks?')
             anu = await KirBotz.chats.all()
             if (isMedia && !akira.message.videoMessage || isQuotedImage) {
             var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
             bc = await KirBotz.downloadMediaMessage(encmedia)
             for (var _ of anu) {
             KirBotz.sendMessage(_.jid, bc, image, {quoted:fgi,caption: `「 ⱧɆ₦₮₳ł-฿Ø₮Ⱬ 」\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (var _ of anu) {
KirBotz.sendMessage(_.jid, 
	    {"contentText": `「 ⱧɆ₦₮₳ł-฿Ø₮Ⱬ 」\n\n${body.slice(4)}`,
	    "footerText": `*ⱧɆ₦₮₳ł-฿Ø₮Ⱬ || ${tanggal}*`,
	    "buttons": [
	    { buttonId: `${prefix}dahlah`, buttonText: { displayText: '😒 DAHLAH 😒' }, type: 1 }
             ,
             { buttonId: `${prefix}oklah`, buttonText: { displayText: '😁 OK BANG 😁' }, type: 1 }
             ,
             { buttonId: `${prefix}rules`, buttonText: { displayText: '👤 RULES BOT 👤' }, type: 1 }
             ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:fgi})
}
             fakeyt('Suksess broadcast')
}
             break
case 'lirik':

if (args.length < 1) return fakeyt('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
fakeyt(lirik)
})
break
case 'cuttly':

if (!q) return fakeyt(`Contoh ${prefix}cuttly https://github.com/KirBotz`)
anu = await fetchJson(`https://api.xteam.xyz/shorturl/cuttly?url=${q}&APIKEY=FuzBot1`)
reply(`
Before : ${anu.result.fullLink}
After : ${anu.result.shortLink}
Title : ${anu.result.title}
Data : ${anu.result.date}

Note : Untuk Melihat Web
Silahkan Ketik
${prefix}ssweb ${anu.result.shortLink}
`)
break
case 'tinyurl':

if (!q) return fakeyt(`Contoh ${prefix}shorturlat https://github.com/KirBotz`)
anu = await fetchJson(`https://api.xteam.xyz/shorturl/tinyurl?url=https://github.com/Bintang73&APIKEY=FuzBot1`)
reply(`
Before : ${q}
After : ${anu.result}

Note : Untuk Melihat Web
Silahkan Ketik
${prefix}ssweb ${anu.result}
`)
break
case 'shorturlat':

if (!q) return fakeyt(`Contoh ${prefix}shorturlat https://github.com/KirBotz`)
anu = await fetchJson(`https://api.xteam.xyz/shorturl/shorturlat?url=${q}&APIKEY=FuzBot1`)
reply(`
Before : ${q}
After : ${anu.result}

Note : Untuk Melihat Web
Silahkan Ketik
${prefix}ssweb ${anu.result}
`)
break
case 'gg':

if (!q) return fakeyt(`Contoh ${prefix}gg https://github.com/KirBotz`)
anu = await fetchJson(`https://api.xteam.xyz/shorturl/gg?url=${q}&nama=Akira&APIKEY=FuzBot1`)
reply(`
Before : ${q}
After : ${anu.result}

Note : Untuk Melihat Web
Silahkan Ketik
${prefix}ssweb ${anu.result}
`)
break
case 'bitly':

if (!q) return fakeyt(`Contoh ${prefix}bitly https://github.com/KirBotz`)
anu = await fetchJson(`https://api.xteam.xyz/shorturl/bitly?url=${q}&APIKEY=FuzBot1`)
reply(`
Before : ${anu.result.long_url}
After : ${anu.result.link}
Title : ${anu.result.id}
Data : ${anu.result.created_at}

Note : Untuk Melihat Web
Silahkan Ketik
${prefix}ssweb ${anu.result.link}
`)
break
case 'nickepep':

reply(`Wet Kak`)
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=apivinz`)
fakeyt(`*Nick FF Anda*\n${anu.result}`)
break
case 'artimimpi':

if (!q) return fakeyt(`Contoh ${prefix}artimimpi renang`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/artimimpi?query={q}&apikey=${dhakey}`)
reply(`${anu.result.hasil}`)
break
case 'artinama':

if (!q) return fakeyt(`Contoh ${prefix}artinama akira`)
anu = await fetchJson(`https://api.zeks.me/api/artinama?apikey=apivinz&nama=${q}`)
reply(`${anu.result}`)
break
case 'jodoh':

if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} akira kayes`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
anu = await fetchJson(`https://api.zeks.me/api/primbonjodoh?apikey=apivinz&nama1=${txt1}&nama2=${txt2}`, {method: 'get'})
jdoh = `🔥 JODOH
Nama Cowok : ${anu.result.nama1}
Nama Cewek : ${anu.result.nama2}
*Positif* : ${anu.result.positif}
*Negatif* : ${anu.result.negatif}`
reply(`Sabar Kak`)
buff = await getBuffer(anu.result.thumb)
KirBotz.sendMessage(from, buff, image, {quoted: fakeTroli, caption: jdoh})
break 
     // Movie & Story
                case 'lk21':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Transformer`)
                    query = args.join(" ")
                        sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await KirBotz.sendMessage(from, thumbnail, image, { quoted: akira, caption: ini_txt })
                    break
                case 'drakorongoing':
                
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
                        sticWait(from)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                        sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await KirBotz.sendMessage(from, thumbnail, image, { quoted: akira, caption: ini_txt })
                    break
                case 'wattpadsearch':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break        

case 'coolgravity':
            
                    if (args.length == 0) return fakeyt(`Contoh ➡️ ${prefix + command} Akira`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, quoted : akira})
                    })
                    break
case 'smeme':

fakeyt('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira 
owgi = await  KirBotz.downloadAndSaveMediaMessage(ger)
anu = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
fakeyt(`Gunakan foto/stiker!!!\nLalu Gunakan Reply Dengan Teks ${prefix}smeme Akira|Ganteng`)
}
break
case 'take':
case 'colong':    		

    		if (!isQuotedSticker) return fakeyt('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('../V2/fetcher').createExif(satu, dua)
			require('../V2/fetcher').modStick(media, KirBotz, akira, from)
			break
case 'tourl':
               
               if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               sticWait(from)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
               owgi = await KirBotz.downloadMediaMessage(boij)
               res = await upload(owgi)
               fakeyt(res)
               } else {
               fakeyt('kirim/reply gambar/video')
}
               break
case 'igdl': 
case 'ig':
case 'instagram':
case 'instagramdownload':              

              if (!q) return fakeyt('Link Yang Mana?')
              if (!q.includes('instagram')) return reply(`error bang`)
              sticWait(from)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, akira) })
             .catch((err) => { reply(String(err)) })
              break
case 'mediafire':            

              if (args.length < 1) return fakeyt('Link Nya Mana? ')
              if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(kirr.error.Iv)
              teks = args.join(' ')
              sticWait(from)
              res = await mediafireDl(teks)
              result = `MediaFire Downloader
               
Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              fakeyt(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: fgi})
              break
case 'zippyshare':

        //////
        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
        ini_url = args[0]
        sticWait(from)
        ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
        ini_url = ini_url.result
        ini_txt = `File Name : ${ini_url.name_file}\n`
        ini_txt += `Size : ${ini_url.size}\n`
        ini_txt += `Date Upload : ${ini_url.date_upload}\n`
        ini_txt += `Download Url : ${ini_url.download_url}`
        reply(ini_txt)
        break              
case 'play':             

             if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}play query*`)
             sticWait(from)
             var yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             var { thumb, title, filesizeF, filesize } = res
             var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}
•⚡ Link Video : ${yut.videos[0].url}`
             ya = await getBuffer(thumb)
             py =await KirBotz.prepareMessage(from, ya, image, { quoted: akira})
             sendButloc(from,monospace(capti),'',`Powered By *Hentongers*`,[{buttonId: `${prefix}ytplay2 ${yut.all[0].url}`, buttonText: {displayText: '🎶AUDIO🎶'}, type: 1},
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO🎥'}, type: 1}
],null,null,ya)
})
break
case 'ytmp3':
        //////
        if (args.length < 1) return reply('Link Nya Mana?')
        if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
        teks = args.join(' ')
        
        res = await y2mateA(teks).catch(e => {
          reply('[ ! ] Error Gagal Dalam Memasuki Web Y2mate')
        })
        result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE MP3
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP3\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`

        sendFileFromUrl(res[0].thumb, image, { caption: result, quoted: fgi }).then((lalu) => {
          sendFileFromUrl(res[0].link, audio, { quoted: akira, mimetype: 'audio/mp3', filename: res[0].output })
        })
        break
case 'ytsearch':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'ytplay':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    KirBotz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: akira})
                    break
                case 'ytplay2':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    await KirBotz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: akira })
                    get_video = await getBuffer(get_result.video)
                    await KirBotz.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: akira, caption: ' Monggo Di Download :v'})
                    break    
                case 'ytaudio2':	
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    KirBotz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: akira})
                    break                
                case 'ytvideo2':		
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: fgi, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    KirBotz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: akira, caption: ' Monggo Di Download'})
                    break
      //====================================================================           
      case 'ytmp4':
      
        if (args.length < 1) return reply('Link Nya Mana?')
        if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
        teks = args.join(' ')
        sticWait(from)
        res = await y2mateV(teks).catch(e => {
          reply('[ ! ] Error Gagal Memasuki Web Y2mate')
        })
        result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE MP4
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
Data Berhasil Didapatkan!
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP4\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`
Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
          sendFileFromUrl(res[0].link, video, { quoted: fgi, caption : ' Nih Bro Udah Jadi 👍', mimetype: 'video/mp4', filename: res[0].output })     
        break
case 'tiktokdl':

if (!q) return fakeyt('Linknya Tiktoknya Mana?')
if (!q.includes('tiktok')) return reply(`Link Error Tod`)
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { quoted: akira, contentText: `${menuh}`, footerText: `Pencet Button Di Bawah
ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, buttons: [{ buttonId: `${prefix}tiktoknowm ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 },{ buttonId: `${prefix}tiktokmusic ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: logonyatod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'tiktoknowm':
case 'ttnowm':
case 'tiktok':

if (args.length < 1) return reply("Masukkan url tiktok")
reply(`MAAF FITUR TIKTOK DI SC GUE ERROR, KARNA APIKEYNYA HABIS SAD :V`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.nowatermark)
KirBotz.sendMessage(from, tiktok, video, {quoted: akira, caption : 'Selesai Bro 👍'})
break
                case 'tiktokmusic':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
                    KirBotz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: akira})
                    break
            
            case 'spotify':
            
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await KirBotz.sendMessage(from, thumbnail, image, { quoted: fgi, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await KirBotz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: akira })
                    break
                case 'jooxplay':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n\n\n`
                    ini_txt += `TUNGGU SEBENTAR AUDIO SEDANG DI KIRIM \n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    KirBotz.sendMessage(from, thumbnail, image, { quoted: fgi, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    KirBotz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: akira})
                    break              
            ///////////download
case 'alquranaudio':

                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                    KirBotz.sendMessage(from, ini_buffer, audio, { quoted: akira, mimetype: Mimetype.mp4Audio })      
                    break                   
case 'alquran':
                
                    if (args.length < 1) return reply(`Contoh ➡️ ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
case 'listsurah':
                
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
case 'asmaulhusna':
                    
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    fakeyt(ini_txt)
                    break
case 'kisahnabi':
                    
                    if (args.length == 0) return fakeyt(`Contoh ➡️ ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    fakeyt(ini_txt)
                    break
case 'jadwalsholat':	
                    
                    if (args.length == 0) return fakeyt(`Contoh ➡️ ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    fakeyt(ini_txt)
                    break
case 'semoji':
case 'emoji':
              
              if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
              await KirBotz.sendMessage(from, ini_buffer, sticker, { quoted: akira })
              break
/////\\\\\
case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
sticWait(from)
cowo = await getBuffer(anu.result.male)
cewe = await getBuffer(anu.result.female)
cowok = `Nih kak cowoknya 🧒`
cewek = `Nih kak ceweknya 👧`
text2 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, cowok, text2, cowo, but, {quoted: akira})
sendButImage(from, cewek, text2, cewe, but, {quoted: akira})
break
case 'hsdxd':

sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, highschooldxd, image, {quoted: fgi, caption: 'NIH BANG '})
				break
case 'sao':

sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, swordartonline, image, {quoted: fgi, caption: 'swort art online\nMEZ RazoR'})
				break
case 'lovelive':

sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, lovelive, image, {quoted: fgi, caption: 'NIH BANG '})
				break
case 'meme':

                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix}list`, buttonText: { displayText: '🔥MENU🔥' }, type: 1 }
                ,
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️GANTI➡️' }, type: 1 }
                       ]
                sendButImage(from, '```Cikidot 🤣```', `🤖 Hentongers-Botz 🤖`, hasil, but, { quoted: fgi})
                                            break
                                            case 'memeindo':

                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix}list`, buttonText: { displayText: '🔥MENU🔥' }, type: 1 }
                ,
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️GANTI➡️' }, type: 1 }
                       ]
                sendButImage(from, '```Meme Versi Indo 🤣```', `🤖 Hentongers-Botz 🤖`, hasil, but)
                                            break
                                            case 'darkjoke':

                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix}list`, buttonText: { displayText: '🔥MENU🔥' }, type: 1 }
                ,
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️GANTI➡️' }, type: 1 }
                       ]
                sendButImage(from, '```Nih Kak Awas Gelap Anjer 🤣```', `🤖 Hentongers-Botz 🤖`, hasil, but)
                                            break
       case 'meme1':
       
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme1?apikey=${lolkey}&text=${gl1}`)
        KirBotz.sendMessage(from, buffer, image, {quoted: akira})
        break
        case 'meme2':
       
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text|text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme7?apikey=${lolkey}&text1=${gl1}&text2=${gl2}`)
        KirBotz.sendMessage(from, buffer, image, {quoted: akira})
        break         
       case 'meme3':
       
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text|text|text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        gl3 = q.split('|')[2]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme3?apikey=${lolkey}&text1=${gl1}&text2=${gl2}&text3=${gl3}`)
        KirBotz.sendMessage(from, buffer, image, { quoted: akira })
        break
         case 'meme4':
         
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme4?apikey=${lolkey}&text=${gl1}`)
        KirBotz.sendMessage(from, buffer, image, {quoted: akira})
        break
        case 'meme5':
         
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme5?apikey=${lolkey}&text=${gl1}`)
        KirBotz.sendMessage(from, buffer, image, {quoted: akira})
        break                    
       case 'meme6':
       
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text|text|text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        gl3 = q.split('|')[2]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme6?apikey=${lolkey}&text1=${gl1}&text2=${gl2}&text3=${gl3}`)
        KirBotz.sendMessage(from, buffer, image, { quoted: akira })
        break
        case 'meme7':
       
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text|text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme7?apikey=${lolkey}&text1=${gl1}&text2=${gl2}`)
        KirBotz.sendMessage(from, buffer, image, {quoted: akira})
        break              
      case 'meme8':
      
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text|text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme8?apikey=${lolkey}&text1=${gl1}&text2=${gl2}`)
        KirBotz.sendMessage(from, buffer, image, { quoted: akira })
        break
      //=======================================================================
    case 'kannagen':
      
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/kannagen?apikey=${lolkey}&text=${gl1}`)
        KirBotz.sendMessage(from, buffer, image, { quoted: akira })
        break
        case 'changemymind':
      case 'cmm':
      
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/changemymind?apikey=${lolkey}&text=${gl1}`)
        KirBotz.sendMessage(from, buffer, image, { quoted: akira })
        break
      case 'ohno':
      
        if (!q) return reply(`Contoh ➡️ ${prefix + command} text`)
        sticWait(from)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/ohno?apikey=${lolkey}&text=${gl1}`)
        KirBotz.sendMessage(from, buffer, image, { quoted: akira })
        break 
        ///////////////////apk
        case 'happymod':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
            sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${query}&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkmody.io dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Rate :${x.apps_rate}\n`
          ini_txt += `Link Download : ${x.apps_linkdl}\n`
          ini_txt += `Sumber : ${x.apps_thumb}\n\n`
        }
        reply(ini_txt)
        break
        case 'apkdone':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diwebsite apkdone.com dan memberikan data hasil dari pencarian 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Rate : ${x.apps_rate}\n`
          ini_txt += `Tag : ${x.apps_tag}\n\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkgoogle':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${query}&page=1&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkgoogle.org dan memberikan data hasilnya	 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkmody':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${query}&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkmody.io dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Desc :${x.apps_desc}\n`
          ini_txt += `Link : ${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkshub':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${query}&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkshub.com dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Views :${x.apps_views}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apksolo':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apksolo?apps=${query}&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari Aplikasi melalui website dan mengirim sebuah data yang merupakan hasil pencarian! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version :${x.apps_version}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'hostapk':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${query}&page=1&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diwebsite hostapk.com dan memberikan data hasil dari pencarian 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Released : ${x.apps_released}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'moddroid':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/moddroid?apps=${query}&page=1&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diwebsite moddroid.com dan memberikan data hasil dari pencarian 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'revdl':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${query}&page=1&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari Aplikasi melalui website dan mengirim sebuah data yang merupakan hasil pencarian! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'toraccino':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${query}&page=1&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari Aplikasi melalui website dan mengirim sebuah data yang merupakan hasil pencarian! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `Upload : ${x.apps_upload}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'uapkpro':

        if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} free fire`)
        query = args.join(' ')
        sticWait(from)
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=${dhnapi}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform uapkpro.org dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break                            
        ///////////////apk                                       
case 'tts':

				if (args.length < 1) return KirBotz.sendMessage(from, `ketik ${prefix}tts teks`, text, {quoted: fgi})
				var gtts = require('../V2/gtts')(args[0])
				if (args.length < 2) return KirBotz.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: fgi})
				dtt = body.slice(8)
				reply(kirr.wait)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('Textnya Kepanjangan Asu!!')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply(`Error`)
				KirBotz.sendMessage(from, buffer, audio, {quoted: fgi, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				break
case 'fox':  

                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
case 'dog':  

                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
case 'cat':

                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
case 'panda':  

                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
case 'panda1':  

                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
case 'bird': 

                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
case 'koala':  

                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Subrek Yah YT Owner Ku Nama Nya *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ*`, quoted: fgi})
                   break
////\\\\\
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
                    
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, quoted : fgi}) 
                    })
                    break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
                    
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, quoted : fgi})
                    })
                    break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
                    
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Mimin Gantenk`)
                    sticWait(from)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                    KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, quoted : akira})
                    })
                    break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
                    
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Mimin Gantenk`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, quoted : akira})
                    })
                    break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
                    
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`, quoted : akira})
                    })
                    break
case 'public':

if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === false) return
uptime = process.uptime()
banChats = false
fakeyt(`「 *PUBLIC-MODE* 」`)
break
case 'self':

if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === true) return
uptime = process.uptime()
banChats = true
fakeyt(`「 *SELF-MODE* 」`)
break
case 'tomp4':
               
               if ((isMedia && !akira.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
               mediaaa = await KirBotz.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               KirBotz.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: akira, caption: kirr.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(kirr.wrongFormat)
}
               break
case 'tomp3':
            
            if (!isQuotedVideo) return reply('Reply videonya!')
            sticWait(from)
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            KirBotz.sendMessage(from, buffer453, audio, { mimetype:'audio/mp4', ptt:true, quoted:akira,contextInfo: {forwardingScore: 508, isForwarded: true}})
            fs.unlinkSync(ran)
            })
            break
case 'sticker':
case 'stiker':
case 's':
						if (isMedia && !akira.message.videoMessage || isQuotedImage) {
							var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
							var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./WM/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(kirr.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./WM/data.exif ./WM/${sender}.webp -o ./WM/${sender}.webp`, async (error) => {
											if (error) return reply(kirr.error.api)
											KirBotz.sendMessage(from, fs.readFileSync(`./WM/${sender}.webp`), sticker, {quoted: akira})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./WM/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./WM/${sender}.webp`)
						} else if ((isMedia && akira.message.videoMessage.fileLength < 10000000 || isQuotedVideo && akira.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
							var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./WM/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(kirr.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./WM/data.exif ./WM/${sender}.webp -o ./WM/${sender}.webp`, async (error) => {
											if (error) return reply(kirr.error.api)
											KirBotz.sendMessage(from, fs.readFileSync(`./WM/${sender}.webp`), sticker, {quoted: akira})
											fs.unlinkSync(media)
											fs.unlinkSync(`./WM/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./WM/${sender}.webp`)
						} else {
							fakeyt(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'toimg':
if (!isQuotedSticker) return fakeyt(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek YT : ⱧɆ₦₮₳ł-฿Ø₮Ⱬ`)
fs.unlinkSync(ran)
})
break
case 'ttp':  

                    fakeyt(kirr.wait)
                    if (!q) return fakeyt(`Teks Nya Contoh ➡️ ${prefix}ttp wily`)
                    anu1 = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${q}`)
                    KirBotz.sendMessage(from, anu1, sticker, { quoted: akira })
                    break
case 'ttp2':                  

                      fakeyt(kirr.wait)
if (args.length == 0) return reply(`Contoh > ${prefix + command} hentai`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
break
case 'ttp3':                      

                       fakeyt(kirr.wait)
if (args.length == 0) return reply(`contoh ➡️ ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
break
case 'ttp5':

                        fakeyt(kirr.wait)                     
if (args.length == 0) return reply(`contoh ➡️ ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp5?apikey=${lolkey}&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
break
case 'ttp6':                      

if (args.length == 0) return reply(`contoh ➡️ ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp6?apikey=${lolkey}&text=${encodeURI(q)}`)
fakeyt(kirr.wait)
KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
break                                                                   
case 'attp':           

           fakeyt(kirr.wait)
           if (args.length == 0) return fakeyt(`Contoh ➡️ ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${encodeURI(q)}`)
           KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
            break
case 'attp2':                            

                         fakeyt(kirr.wait)
if (args.length == 0) return reply(`contoh ➡️ ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${encodeURI(q)}%F0%9F%91%8B`) 
KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
break
                      case 'attp3':                     
                      
                      fakeyt(kirr.wait)
if (args.length == 0) return reply(`contoh ➡️ ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: akira })
break
       case 'patrick':
       
            sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
			KirBotz.sendMessage(from, wkwk, sticker, {quoted: akira})
			break            
         case 'dadu':
         
            sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkey}`)
			KirBotz.sendMessage(from, wkwk, sticker, {quoted: akira})
			break
			case 'amongus':
			
            sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${lolkey}`)
			KirBotz.sendMessage(from, wkwk, sticker, {quoted: akira})
			break            
         case 'gawrgura':
         case 'gura':
         
            sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
			KirBotz.sendMessage(from, wkwk, sticker, {quoted: akira})
			break
	     case 'dogge':         
	     
            sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=${lolkey}`)
			KirBotz.sendMessage(from, wkwk, sticker, {quoted: akira})
			break  
		    case 'bucinstick':
		    
            sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
			KirBotz.sendMessage(from, wkwk, sticker, {quoted: akira})
			break 
			/////////////////////////          STICKER WELCOM
                   case 'selamatdatang':
                   sticGood(from)
                   break
                   case 'pukulyu':
                   sticPukulyu(from)
                   break
                   case 'salam':
                   sticSalam(from)
                   break
          ////////////////////////////        STICKER OUT
                   case 'dahlah':
                   sticDahlah(from)
                   break
                   case 'hadeh':
                   sticHadeh(from)
                   break
                   case 'kaget':
                   sticKaget(from)
                   break                  
            ///////////////////////       
case 'welcome':

if (!isGroup) return fakeyt(kirr.only.group)
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」`, [
          {
            buttonId: `${prefix}welco enable`,
            buttonText: {
              displayText: `👍ON👍`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}welco disable`,
            buttonText: {
              displayText: `🔥OFF🔥`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'welco':               

               if (!isGroup) return fakeyt(kirr.only.group)
               if (args.length < 1) return fakeyt('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return fakeyt('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./V3/welcome.json', JSON.stringify(welkom))
               fakeyt('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./V3/welcome.json', JSON.stringify(welkom))
               fakeyt('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               fakeyt('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilinkgroup':

if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」`, [
          {
            buttonId: `${prefix}anti enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}anti disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'anti':
              
              if (!isGroup) return fakeyt(kirr.only.group)
              if (!isBotGroupAdmins) return fakeyt(`Bot Harus jadi Admin`)
              if (!q) return fakeyt(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return fakeyt(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./V3/antilink.json', JSON.stringify(antilink))
              fakeyt('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              var anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./V3/antilink.json', JSON.stringify(antilink))
              fakeyt('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              fakeyt(`Pilih enable atau disable`)
}
              break
case 'antilinkvideoyt':

if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」`, [
          {
            buttonId: `${prefix}antiyt enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antiyt disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antiyt':
              
              if (!isGroup) return fakeyt(kirr.only.group)
              if (!isBotGroupAdmins) return fakeyt(`Bot Harus jadi Admin`)
              if (!q) return fakeyt(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLinkyt) return fakeyt(`Udah aktif`)
              antilinkyt.push(from)
              fs.writeFileSync('./V3/antilinkyt.json', JSON.stringify(antilinkyt))
              fakeyt('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              var anu = antilinkyt.indexOf(from)
              antilinkyt.splice(anu, 1)
              fs.writeFileSync('./V3/antilinkyt.json', JSON.stringify(antilinkyt))
              fakeyt('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              fakeyt(`Pilih enable atau disable`)
}
              break
case 'antilinkwa':

if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」`, [
          {
            buttonId: `${prefix}antiwame enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antiwame disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antiwame':
              
              if (!isGroup) return fakeyt(kirr.only.group)
              if (!isBotGroupAdmins) return fakeyt(`Bot Harus jadi Admin`)
              if (!q) return fakeyt(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLinkwame) return fakeyt(`Udah aktif`)
              antilinkwame.push(from)
              fs.writeFileSync('./V3/antilinkwame.json', JSON.stringify(antilinkwame))
              fakeyt('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              var anu = antilinkwame.indexOf(from)
              antilinkwame.splice(anu, 1)
              fs.writeFileSync('./V3/antilinkwame.json', JSON.stringify(antilinkwame))
              fakeyt('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              fakeyt(`Pilih enable atau disable`)
}
              break
case 'antivirtex':

if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」`, [
          {
            buttonId: `${prefix}antivrtx enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antivrtx disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antivrtx':
               
               if (!isGroup) return fakeyt(kirr.only.group)
               if (!isBotGroupAdmins) return fakeyt(`𝑱𝒂𝒅𝒊𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 𝑫𝒖𝒍𝒖 𝑪𝒖𝒌 🗿`)
               if (args[0] == "enable") {
               if (isAntiVirtex) return fakeyt("Udah Aktip");
               antivirtex.push(from);
               fs.writeFileSync("./V3/antivirtex.json", JSON.stringify(antivirtex))
               fakeyt("Sukses mengaktifkan fitur antivirtex di group ini ✅")
               } else if (args[0] == "disable") {
               antivirtex.splice(from, 1);
               fs.writeFileSync("./V3/antivirtex.json", JSON.stringify(antivirtex))
               fakeyt("Sukses menonaktifkan fitur antivirtex di group ini ✅")
               } else {
               fakeyt('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'add':
             
             if (akira.message.extendedTextMessage === null || akira.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             KirBotz.groupAdd(from, [entah])
             } else {
             entah = akira.message.extendedTextMessage.contextInfo.participant
             KirBotz.groupAdd(from, [entah])
}
             break
case 'kick':

if (!isGroup) return fakeyt(kirr.only.group)
if (!akira.key.fromMe && !isGroupAdmins) return fakeyt(kirr.only.admin)
if (!q)return fakeyt(`Format Error!\n\nContoh ➡️ ${prefix + command} @tag`)
if (!isBotGroupAdmins) return fakeyt(kirr.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
fakeyt(`Succses kick target!`)
break
case 'group':

        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *ⱧɆ₦₮₳ł-฿Ø₮Ⱬ* 」`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `⬡ OPEN `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `⬡ CLOSE`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'opengc':

if (!isGroup) return fakeyt(kirr.only.group)
if (!isBotGroupAdmins) return fakeyt(`Bot Bukan Admin`)
fakeyt(`Sukses Membuka Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc':

if (!isGroup) return fakeyt(kirr.only.group)
if (!isBotGroupAdmins) return fakeyt(`Bot Bukan Admin`)
fakeyt(`Sukses Menutup Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgc':

		     	   if (!isGroup) return fakeyt(kirr.only.group)
                   if (!isBotGroupAdmins) return fakeyt(`Bot Bukan Admin`)
			       linkgc = await KirBotz.groupInviteCode(from)
				   yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
				   KirBotz.sendMessage(from, yeh, text, { quoted: fgi })
				   break
case 'setnamegroup':

if (!q) return reply(`Nama?`)
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
KirBotz.groupUpdateSubject(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setdescgroup':

if (!q) return reply(`teks?`)
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
KirBotz.groupUpdateDescription(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setppgroup':

if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
let media = await KirBotz.downloadMediaMessage(encmedia)
KirBotz.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim Foto Terus Reply Foto Dengan Teks ${prefix}setppgroup`)
}
break
case 'promote':

        if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
        if (!isGroup) return reply(kirr.only.group)
        if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
        reply(`S u k s e s ! ! `)
        KirBotz.groupMakeAdmin(from, mentionUser)
        break;
case 'demote':

		if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
        reply(`S u k s e s ! ! `)
        KirBotz.groupDemoteAdmin(from, mentionUser)
        break
case 'tagall':
       
       if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
       if (!q) return reply('Tekss?')
       if (!isGroup) return reply(kirr.only.group)
              var arr = [];
              var txti = `[ TAG ALL BY KIRBOTZ ]\n\n${q ? q : ''}\n\n`
              for (var i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
      
      if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
      if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
      if (!isGroup) return reply(kirr.only.group)
             try {
             quotedText = akira.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'afkkk': 
              
              if (!isGroup) return reply(`Khusus Group Bang`)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              var reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              var aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
						break
case 'listadmin':

if (!isGroup) return reply(kirr.only.group)
teks = `List Admin Di Group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'resetlink':


if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isGroupAdmins) return reply(kirr.only.admin)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
json = ['action', 'inviteReset', from]
KirBotz.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'infogroup':


if (!isGroup) return reply(kirr.only.group)
try {
var pic = await KirBotz.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*

*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Owner Grup :* @${groupMetadata.owner.split('@')[0]}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*Welcome :* ${isWelkom ? '✅' : '❌'}
*AntilinkGroup :* ${isAntiLink ? '✅' : '❌'}
*AntilinkVideoYT :* ${isAntiLinkyt ? '✅' : '❌'}
*AntilinkWame :* ${isAntiLinkwame ? '✅' : '❌'}
*AntiVirtex :* ${isAntiVirtex ? '✅' : '❌'}
*Deskripsi :*
${groupMetadata.desc}`
KirBotz.sendMessage(from, await getBuffer(pic), image, {quoted: fakeTroli, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
//////////
case 'bugtagall':

if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kak 😆`)
if(!q) return reply('Teks??')
if (!isGroup) return reply(`Khusus Group`)
var nom = akira.participant
members_id = []
	teks = '\n'
	for (var mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`${q}. *KONTOL LODON    ${q} Xixi ${jadivirtex1}`+teks+`┗━ *「 ⱧɆ₦₮₳ł-฿Ø₮Ⱬ 」* `, members_id, false)
break
////////////////////////////////////////GIMAGE//////////////////////////////////////
case 'gimage':
case 'image':

if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Eren`)
query = args.join(" ")
sticWait(from)
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
await KirBotz.sendMessage(from, ini_buffer, image, {quoted: akira, caption: 'Anjer Kwokwok :v'})
break
case 'gimage2':
case 'image2':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} loli`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira})
                    }
                    break
case 'pixiv':

                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    sticWait(from)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${query}`)
                    KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira})
                    break
case 'pixiv2':

                 if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} loli`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/pixiv2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        KirBotz.sendMessage(from, ini_buffer, image, { quoted: akira})
                    }
                    break             
////////////////////////////////////////GIMAGE//////////////////////////////////////
case 'eren':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=eren`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Ereh Kwokwok :v', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'image_nhentai':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=image nhentai`)
        sticWait(from)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Rias Gremory :V', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
        ////////////////// berita
        case 'newsinfo':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = "*News TV Info :*\n\n"
for (var x of get_result) {
zerr += `*Title :* ${x.title}\n`
zerr += `*Author :* ${x.author}\n`
zerr += `*Source :* ${x.source.name}\n`
zerr += `*Url :* ${x.url}\n`
zerr += `*Published :* ${x.publishedAt}\n\n`
zerr += `*Description :* ${x.description}`
}
reply(zerr)
break
case 'jadwaltv':

sticWait(from)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
get_result = get_result.result
zerr = `*Info Televisi :*\n\n`
for (var x in get_result) {
zerr += `${x.toUpperCase()}${get_result[x]}\n\n`
}
reply(zerr)
break
case 'jadwalbola':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
	
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'cnn_indonesia':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "Berita Indonesia :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)
                    await KirBotz.sendMessage(from, get_result, { quoted: fgi, caption: ini_txt })
                    break
         case 'cnn_nasional':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    zerr = "*News TV Info :*\n\n"
                    for (var x of get_result) {
                        zerr += `Judul : ${x.judul}\n`
                        zerr += `Link : ${x.link}\n`
                        zerr += `Tipe : ${x.poster}\n`
                        zerr += `Published : ${time}\n\n`                       
                    }
                    reply(zerr)                   
                    break
                case 'cnn_internasional':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "berita internasional :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)                    
                    break
                    case 'cnn_ekonomi':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/ekonomi?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "berita ekonomi :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)                    
                    break 
                     case 'cnn_olahraga':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/olahraga?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "berita olahraga :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)                    
                    break
                    case 'cnn_teknologi':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/teknologi?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "berita teknologi :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)                    
                    break   
                    case 'cnn_hiburan':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/hiburan?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "berita hiburan :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)                    
                    break
                    case 'cnn_social':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/social?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = "berita social :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.poster}\n`
                        ini_txt += `Published : ${time}\n\n`
                    }
                    reply(ini_txt)                    
                    break
case 'kumparan':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/kumparan?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = "*Berita Kumparan :*\n"
for (var x of get_result) {
zerr += `*Judul :* ${x.title}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Category :* ${x.category}\n`
zerr += `*Description :* ${x.desc}\n`
zerr += `*Published :* ${time}\n\n\n`
}
reply(zerr)
break
case 'republika':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/republika?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = "*Berita Republika :*\n"
for (var x of get_result) {
zerr += `*Judul :* ${x.title}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Category :* ${x.category}\n`
zerr += `*Description :* ${x.desc}\n`
zerr += `*Published :* ${time}\n\n\n`
}
reply(zerr)
break
case 'liputan6':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/liputan6?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = "*Berita Liputan 6 :*\n"
for (var x of get_result) {
zerr += `*Judul :* ${x.title}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Category :* ${x.category}\n`
zerr += `*Description :* ${x.desc}\n`
zerr += `*Published :* ${time}\n\n\n`
}
reply(zerr)
break       
case 'detik':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/detik?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = "*Berita detik :*\n"
for (var x of get_result) {
zerr += `*Judul :* ${x.title}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Category :* ${x.category}\n`
zerr += `*Description :* ${x.desc}\n`
zerr += `*Published :* ${time}\n\n\n`
}
reply(zerr)
break
case 'jalantikus':

get_result = await fetchJson(`https://api.lolhuman.xyz/api/jalantikus?apikey=${lolkey}`)
sticWait(from)
get_result = get_result.result
zerr = "*Berita Jalan Tikus :v :*\n"
for (var x of get_result) {
zerr += `*Judul :* ${x.title}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Category :* ${x.category}\n`
zerr += `*Description :* ${x.desc}\n`
zerr += `*Published :* ${time}\n\n\n`
}
reply(zerr)
break 
case 'hoax':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolkey}`)
                    sticWait(from)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
///////////////////////////////// genshin
                case 'genshin':
                
                    if (args.length == 0) return reply(`Contoh ➡️ ${prefix + command} jean`)
                    hero = args.join(" ")
                    fakeyt(kirr.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await KirBotz.sendMessage(from, ini_icon, image, { quoted: fgi, caption: ini_txt })
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    await KirBotz.sendMessage(from, ini_voice, audio, { quoted: akira, mimetype: Mimetype.mp4Audio })
                    break
                    ////
                    case 'lisa':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=Genshin lisa`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Lisa💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'amber':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshinamber`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Amber💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'keqing':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_keqing`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Keqing💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break        
case 'noele':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_noele`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Noele💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break      
case 'yoimiya':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Yoimiya`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Yoimiya💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'jean':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_jean`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Jean💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'reiden_ei':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_reiden_ei`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Reiden Ei💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'eula':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_eula`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Eula💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'ningguang':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_ningguang`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Ningguang💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break   
case 'rosaria':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Rosaria`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Rosaria💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'kujou_sara':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_kujou_sara`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Kujou Sara💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'beidou':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_beidou`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Beidou💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'shenhe':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Shenhe`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Shenhe💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
        ////
case 'hu_tao':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Hu_Tao`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Hu Tao💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'yanfei':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_yanfei`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Yanfei💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'xiangling':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Xiangling`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Xiangling💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break   
case 'yun_jin':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Yun_jin`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Yun Jin💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'fischl':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Fischl`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Fischl💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break  
case 'sucrose':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Sucrose`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sucrose💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break         
case 'xinyan':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Xinyan`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Xinyan💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'mona':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Mona`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Mona💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'barbara':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Barbara`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Barbara💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break    
        case 'ganyu':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Ganyu`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Ganyu💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break   
        case 'ayaka':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Ayaka`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Ayaka💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break   
        case 'aloy':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Aloy`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Aloy💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break    
        case 'kokomi':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Kokomi`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Kokomi💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break   
        case 'lumine':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=genshin_Lumine`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}list`, buttonText: { displayText: `🔥LIST🔥` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `➡️GANTI➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Lumine💗', imageMessage: imageMsg,
          contentText: `©Genshin Impact`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
        /////////////////////////////////////////////azur lane
        case 'enterprise':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane enterprise`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'leffy':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Leffy`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'belfast':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Belfast`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'akagi':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Akagi`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'kaga':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Kaga`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'prinz_eugen':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane prinz eugen`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'atago':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Atago`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'ayumi':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Ayumi`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'z23':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Z23`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'cleveland':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Cleveland`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'bismarck':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Bismarck`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'unicorn':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Unicorn`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'javelin':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Javelin`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'warspite':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Warspite`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'akashi':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Akashi`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'Illustrious':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Illustrious`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'nagato':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Nagato`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'takao':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Takao`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'hood':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Hood`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'shoukaku':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Shoukaku`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'zuikaku':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Zuikaku`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'amagi':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Amagi`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'long_island':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane long island`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'sheffield':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Sheffield`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'admiral_hipper':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane admiral hipper`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'baltimore':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Baltimore`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'yuudachi':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Yuudachi`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'montpelier':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Montpelier`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'hammann':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Hammann`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'queen_elizabeth':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Queen elizabeth`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'yukikaze':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Yukikaze`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'kawazake':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Kawazake`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'yamashiro':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Yamashiro`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'prince_of_wales':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Prince of Wales`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'massachusetts':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Massachusetts`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'hornet':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Hornet`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'kisaragi':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Kisaragi`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'vestal':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Vestal`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'mikasa':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane mikasa`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'hiryuu':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Hiryuu`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'yorktown':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane yorktown`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'observer':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Observer`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'shiranui':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Shiranui`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'purifier':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Purifier`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'san_diego':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane San diego`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'london':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane London`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'mutsuki':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Mutsuki`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'saratago':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Saratago`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'tester':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Tester`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'shigure':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Shihure`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'fubuki':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Fubuki`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'helena':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Helena`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'z1':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Z1`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'edinburgh':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Edinburgh`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'suffolk':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane suffolk`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'denver':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Denver`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'ning_hai':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Ning hai`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'ping_hai':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane ping Hai`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'foxhound':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Foxhound`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'arizona':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Arizona`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'northampton':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Northampton`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'portland':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Portland`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'souryuu':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Souryuu`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'mutsu':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Mutsu`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
case 'cygnet':
        
sticWait(from)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=azur lane Cygnet`)
text1 = `Klik Next Untuk Ke Gambar ${command} Selanjutnya ➡️`
text2 = `Mohon Untuk Tidak Spam !! 😤`
but = [
        { buttonId: `${prefix}menu`, buttonText: { displayText: '️MENU BOT ☠️' }, type: 1 }
        ,
        { buttonId: `${prefix}rules`, buttonText: { displayText: '️ATURAN BOT 👍' }, type: 1 }
        ,
        { buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }
        ]
sendButImage(from, text1, text2, buffer, but, {quoted: fgi})
break
///////////        
        case 'cekapikey':
		
		apiKey = args[0]
		fakeyt(kirr.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
                    get_result = get_result.result
                        txt += `Nama ➡️ ${get_result.username}\n`
                        txt += `Request ➡️ ${get_result.requests}\n`
                        txt += `Limit Bot ➡️ ${get_result.today}\n`
                        txt += `Type ➡️ ${get_result.account_type}\n\n`
                        txt += `Masa Berlaku Apikey Bot ➡️ ${get_result.expired}\n\n`
                    reply(txt)
                    break
                    /////////////////baru MENU EDITOR
                    //// meme maker
case 'affect':
case 'beautiful':
case 'facepalm':
case 'hitler':
case 'jokeOverHead':
case 'jail':
case 'rip':
case 'sepia':
case 'trash':
case 'wanted':
case 'wasted': 
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, { quoted: akira})
  } else {
  reply('Reply Imagenya!!')
  }
  break
 
  //////////////
case 'pencil':
case 'skullmask':
case 'cartoon':
case 'invert':
case 'fisheye':
case 'pixelate':
case 'rotate':
case 'flip':
case 'grayscale':
case 'roundimage':
case 'fisheyee':
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                    
   /////////////
case 'deepfry':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/deepfry?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break               
   case 'imagecolor':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/imagecolor?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break       
 case 'upscale':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/upscale?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'aden':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                       
     case 'brannan':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/brannan?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'brooklyn':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/brooklyn?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'clarendon':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/clarendon?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'gingham':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/gingham?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'hudson':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/hudson?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'inkwell':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/inkwell?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break          
     case 'earlybird':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/earlybird?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
   case 'kelvin':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/kelvin?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
      case 'lark':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/lark?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'lofi':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/lofi?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
   case 'maven':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/maven?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break            
    case 'mayfair':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/mayfair?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
   case 'moon':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/moon?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
case 'nashville':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/nashville?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
case 'perpetua':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/perpetua?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
case 'reyes':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/reyes?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
case 'rise':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/rise?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
case 'slumber':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/slumber?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'stinson':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/stinson?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'toaster':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/toaster?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'valencia':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/valencia?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'walden':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/walden?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'willow':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/willow?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  case 'xpro2':
var imgbb = require('imgbb-uploader')
  if ((isMedia && !KirBotz.message.videoMessage || isQuotedImage) && args.length == 0) {
  sticWait(from)
  ted = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: akira
  owgi = await KirBotz.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('39d895963468b814fad0514bd28787e2', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/xpro2?apikey=${lolkey}&img=${dpaa.display_url}`)
  KirBotz.sendMessage(from, uhyy, image, {quoted: akira, caption: 'Ini Bro Udah Jadi'})
  } else {
  reply('Reply Imagenya!!')
  }
  break                          
  ///////////// quotes
case 'cerpen':
                    
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                        sticWait(from)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Cerpen Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT➡️`,
            },
            type: 1,
          },]);
        break;
case 'ceritahoror':
                
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                        sticWait(from)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ Hentongers', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: fakeTroli})
              KirBotz.relayWAMessage(prep)
        break  
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
case 'nama':
case 'puisi':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Next Di Bawah Untuk Ke ${command} Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT➡️ `,
            },
            type: 1,
          },]);
        break;
case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    fakeyt(`_${quotes}_\n\n*― ${author}*`)
                    break
case 'quotes2':
                    
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    fakeyt(`_${quotes}_\n\n*â€• ${author}*`)
                    break
case 'quotesanime':
                    
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    fakeyt(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
case 'quotesdilan':
                    
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'meme_patrick':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=meme+indo+patrick`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}menu`, buttonText: { displayText: `MENU BOT ☠️` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT ➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'MEME PATRICK😆', imageMessage: imageMsg,
          contentText: `Maaf Kalau Fitur Ini Tidak Akurat 98%`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'meme_kartun_spongebob':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=meme+indo+kartun+spongebob+squarepatns`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}menu`, buttonText: { displayText: `MENU BOT ☠️` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT ➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'MEME PATRICK😆', imageMessage: imageMsg,
          contentText: `Maaf Kalau Fitur Ini Tidak Akurat 99%`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break        
case 'meme_spongebob':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=meme+indo+spongebob`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}menu`, buttonText: { displayText: `MENU BOT ☠️` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT ➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Meme Spongebob😆', imageMessage: imageMsg,
          contentText: `Maaf Kalau Fitur Ini Tidak Akurat 98%`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break        
case 'meme_squidward':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=meme+indo+squidword`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}menu`, buttonText: { displayText: `MENU BOT ☠️` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT ➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Meme Squidword😆', imageMessage: imageMsg,
          contentText: `Maaf Kalau Fitur Ini Tidak Akurat 98%`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break
case 'meme_plankton':

        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=meme+indo+plankton`)
        fakeyt(kirr.wait)
        buttons = [
                     { buttonId: `${prefix}menu`, buttonText: { displayText: `MENU BOT ☠️` }, type: 1 }
                     ,
                     { buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT ➡️` }, type: 1 }
                     ]
        imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Meme Plankton😆', imageMessage: imageMsg,
          contentText: `Maaf Kalau Fitur Ini Tidak Akurat 98%`, buttons, headerType: 4
        }
        prep = await KirBotz.prepareMessageFromContent(from, { buttonsMessage }, { quoted: akira })
        KirBotz.relayWAMessage(prep)
        break        
/////////////////////////////////audio///sound///
case 'audio1':

sendVn(audio1)
fakeyt(kirr.wait)
break
case 'audio2':

sendVn(audio2)
fakeyt(kirr.wait)
break
case 'audio3':

sendVn(audio3)
fakeyt(kirr.wait)
break
case 'audio4':

sendVn(audio4)
fakeyt(kirr.wait)
break
case 'audio5':

sendVn(audio5)
fakeyt(kirr.wait)
break
case 'audio6':

sendVn(audio6)
fakeyt(kirr.wait)
break
case 'audio7':

sendVn(audio7)
fakeyt(kirr.wait)
break
case 'audio8':

sendVn(audio8)
fakeyt(kirr.wait)
break
case 'audio9':

sendVn(audio9)
fakeyt(kirr.wait)
break
case 'audio10':

sendVn(audio10)
fakeyt(kirr.wait)
break
case 'audio11':

sendVn(audio11)
fakeyt(kirr.wait)
break
case 'audio12':

sendVn(audio12)
fakeyt(kirr.wait)
break
case 'audio13':

sendVn(audio13)
fakeyt(kirr.wait)
break
case 'audio14':

sendVn(audio14)
fakeyt(kirr.wait)
break
case 'audio15':

sendVn(audio15)
fakeyt(kirr.wait)
break
case 'audio16':

sendVn(audio16)
fakeyt(kirr.wait)
break
case 'audio17':

sendVn(audio17)
fakeyt(kirr.wait)
break
case 'audio18':

sendVn(audio18)
fakeyt(kirr.wait)
break
case 'audio19':

sendVn(audio19)
fakeyt(kirr.wait)
break
case 'audio20':

sendVn(audio20)
fakeyt(kirr.wait)
break
case 'audio21':

sendVn(audio21)
fakeyt(kirr.wait)
break
case 'audio22':

sendVn(audio22)
fakeyt(kirr.wait)
break
case 'audio23':

sendVn(audio23)
fakeyt(kirr.wait)
break
case 'audio24':

sendVn(audio24)
fakeyt(kirr.wait)
break
case 'audio25':

sendVn(audio25)
fakeyt(kirr.wait)
break
case 'audio26':

sendVn(audio26)
fakeyt(kirr.wait)
break
case 'audio27':

sendVn(audio27)
fakeyt(kirr.wait)
break
case 'audio28':

sendVn(audio28)
fakeyt(kirr.wait)
break
case 'audio29':

sendVn(audio29)
fakeyt(kirr.wait)
break
case 'audio30':

sendVn(audio30)
fakeyt(kirr.wait)
break
case 'audio31':

sendVn(audio31)
fakeyt(kirr.wait)
break
case 'audio32':

sendVn(audio32)
fakeyt(kirr.wait)
break
case 'audio33':

sendVn(audio33)
fakeyt(kirr.wait)
break
case 'audio34':

sendVn(audio34)
fakeyt(kirr.wait)
break
case 'audio35':

sendVn(audio35)
fakeyt(kirr.wait)
break
////////////////////////////////////////sound
////////////////////////////sound
case 'sound1':

sendVn(sound1)
fakeyt(kirr.wait)
break
case 'sound2':

sendVn(sound2)
fakeyt(kirr.wait)
break
case 'sound3':

sendVn(sound3)
fakeyt(kirr.wait)
break
case 'sound4':

sendVn(sound4)
fakeyt(kirr.wait)
break
case 'sound5':

sendVn(sound5)
fakeyt(kirr.wait)
break
case 'sound6':

sendVn(sound6)
fakeyt(kirr.wait)
break
case 'sound7':

sendVn(sound7)
fakeyt(kirr.wait)
break
case 'sound8':

sendVn(sound8)
fakeyt(kirr.wait)
break
case 'sound9':

sendVn(sound9)
fakeyt(kirr.wait)
break
case 'sound10':

sendVn(sound10)
fakeyt(kirr.wait)
break
case 'sound11':

sendVn(sound11)
fakeyt(kirr.wait)
break
case 'sound12':

sendVn(sound12)
fakeyt(kirr.wait)
break
case 'sound13':

sendVn(sound13)
fakeyt(kirr.wait)
break
case 'sound14':

sendVn(sound14)
fakeyt(kirr.wait)
break
case 'sound15':

sendVn(sound15)
fakeyt(kirr.wait)
break
case 'sound16':

sendVn(sound16)
fakeyt(kirr.wait)
break
case 'sound17':

sendVn(sound17)
fakeyt(kirr.wait)
break
case 'sound18':

sendVn(sound18)
fakeyt(kirr.wait)
break
case 'sound19':

sendVn(sound19)
fakeyt(kirr.wait)
break
case 'sound20':

sendVn(sound20)
fakeyt(kirr.wait)
break
case 'sound21':

sendVn(sound21)
fakeyt(kirr.wait)
break
case 'sound22':

sendVn(sound22)
fakeyt(kirr.wait)
break
case 'sound23':

sendVn(sound23)
fakeyt(kirr.wait)
break
case 'sound24':

sendVn(sound24)
fakeyt(kirr.wait)
break
case 'sound25':

sendVn(sound25)
fakeyt(kirr.wait)
break
case 'sound26':

sendVn(sound26)
fakeyt(kirr.wait)
break
case 'sound27':

sendVn(sound27)
fakeyt(kirr.wait)
break
case 'sound28':

sendVn(sound28)
fakeyt(kirr.wait)
break
case 'sound29':

sendVn(sound29)
fakeyt(kirr.wait)
break
case 'sound30':

sendVn(sound30)
fakeyt(kirr.wait)
break
case 'sound31':

sendVn(sound31)
fakeyt(kirr.wait)
break
case 'sound32':

sendVn(sound32)
fakeyt(kirr.wait)
break
case 'sound33':

sendVn(sound33)
fakeyt(kirr.wait)
break
case 'sound34':

sendVn(sound34)
fakeyt(kirr.wait)
break
case 'sound35':

sendVn(sound35)
fakeyt(kirr.wait)
break
case 'sound36':

sendVn(sound36)
fakeyt(kirr.wait)
break
//////
default:
if (budy.startsWith('kr')){
if (!akira.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('ERROR : %s', color(e, 'magenta'))
        }
	}
}