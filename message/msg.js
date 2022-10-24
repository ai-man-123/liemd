/*HELLO BRO TERIMA KASIH SUDAH AMBIL SCRIPT INI JANGAN LUPA IKUTI DAN SUBSCRIBE MEDIA SOSIAL OWNER DAN BOT

Instagram : @arsrfii
Youtube : Channel JOJO
WhatsApp : 0813-1994-4917

THANKS TO
- Allah Swt
- Baileys
- Irfan 
- Amell
- Hardianto
- Febri
- Grup Jojoo
- Arasya

Matur Nuwun*/
"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid, serialize} = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { toAudio, toPTT, toVideo } = require('../lib/converter')
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { upload, formatDate } = require("../lib/uploads");
const { pinterest } = require("../lib/pinterest")
const { darkjokes } = require("../lib/darkjokes")
const { lirikLagu } =require("../lib/lirik.js")
const { igstory } = require("../lib/igstory")
const { ephoto } = require("../lib/ephoto")
const { igDownloader } = require("../lib/igdown")
const { wikiSearch } = require("../lib/wiki")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addList, deleteList, checkList } = require("../lib/list");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { addCommands, checkCommands, deleteCommands } = require("../lib/autoresp");
const { addLogin, deleteLogin, checkLogins } = require("../lib/login");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");
const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const w5botapi = require("w5-textmaker");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hikki = require("hikki-me");
const hxz = require("hxz-api");
const SyaApi = require("@phaticusthiccy/open-apis");
const brainly = require("brainly-scraper");
const imgbb = require("imgbb-uploader");
const ra = require("ra-api");
const thiccysapi = require("textmaker-lasi");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const waktu = require("countdown");
const kbbi = require("kbbi-scraper");
const kyy = require("ikyy");
const Ikyy = new kyy();

//Apikey melcanz, Search aja melcanz.com
//Apikey jojo = Syaa
const apikey = "melcantik"
const jojoapi = "Syaa"
const imgbbapi = "9a0aed7ae09bdf7a9d7ddeb018fed6cf"

// Setting Donasi
const gopay = "-"
const ovo = "-"
const dana = "-"
const pulsa = "-"
const pulsa2 = "-"
const ig = "aiman1_23"
const github = "ai-man-123"

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// DB Game
let tictactoe = [];
let tebakgambar = []
let kuiscuy = []
let tebaktebakan = []
let tekateki = []
let tebakkimia = []
let tb = []
let tebaklagu = []
let siapaaku = []
let susun = []
let ujian = []
let pancing = []

//Prefix
let multi = true
let nopref = false
let prefa = '#'

// Rndm
let mode = 'public'
let own2 = '601120787061@s.whatsapp.net'
let autoyt = true

// Type Menu
let typemenu = 'sections'

//Random
let randomreact = ["🗿","👋","🥰","🐛","🤸","😍","🎩","😀","😃","😄","😁","😆","😅","😂","🤣","😭","🤡","🔥","❤️","🧡","💛","💚","💙","💜","🖤","🎆","📢","🏅","🎊","😺","😸","😹","😻","😼","😽","🙀","😿","😾","🤙","👋","🙏","🤳","👀","❣️","🗣️","🌀","🥺","🌛","🌜","🌚","😇","🤪","😜","😝","😛","😱","👻"]

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const loginnya = JSON.parse(fs.readFileSync('./database/logins.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'))
let listnya = JSON.parse(fs.readFileSync('./database/list.json'))

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store) => {
	try {
		let { ownerNumber, ownerName, botName, gamewaktu, limitCount, gcwa } = setting
		let { allmenu, genmenu, downloader, rndm, menuprem, storage, othermenu, maker, vokaledit, gamemenu, atm, grupmenu, encode, owner, shop } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
                const toJSON = j => JSON.stringify(j, null,'\t')
		if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : ''
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
		const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : [`${ownerNumber}`, "6281319944917@s.whatsapp.net", `${own2}`].includes(sender) ? true : false
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isMuted = isGroup ? mute.includes(from) : false
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isBan = cekBannedUser(sender, ban)
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const piw = `❋─────────────────❋\n            *✘ lynx - BOT ✘*\n❋─────────────────❋`

    const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "41798898139-1429460331@g.us","inviteCode": "m","groupName": "Jojo Lovers", "caption": `© ${pushname}`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "41798898139-1429460331@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "41798898139-1429460331@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `_${ucapanWaktu}_ _*${pushname} 👋*_`,
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('pp.jpg')
                        }
	                  } 
                     }
    const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG! ${groupName}*`,jpegThumbnail: fs.readFileSync(setting.pathimg)}}}
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
                
		const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, chats) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./sticker" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./sticker" + names + ".png";
        let asw = "./sticker" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            conn.sendMessage(to, {sticker: media}, {quoted: msg})
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    //
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
			var url = await yts(query)
			url = url.videos[0].url
			hxz.youtube(url).then(async(data) => {
				var but = [{buttonId: `/ytplay ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, {buttonId: `/ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]
				conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, image: { url: data.thumb }, buttons: but, footer: pushname}, {quoted: msg})
			}).catch((e) => {
			  conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
				ownerNumber.map( i => conn.sendMessage(ownerNumber[0], { text: `Send Play Error : ${e}` }))
			})
		 }
        //dashboard
        async function addCountCmdUser(nama, sender, u) {
         var posi = null
         var pos = null
         Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
               posi = i
            }
          })
         if (posi === null) {
            u.push({jid: sender, db: [{nama: nama, count: 0}]})
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
             if (u[i].jid === sender) {
               posi = i
             }
          })
         }
         if (posi !== null) {
         Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
               pos = i
            }
          })
         if (pos === null) {
           u[posi].db.push({nama: nama, count: 1})
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
           u[posi].db[pos].count += 1
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
         }
        }

        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }
        async function addCountCmd(nama, sender, _db) {
         addCountCmdUser(nama, sender, _cmdUser)
          var posi = null
            Object.keys(_db).forEach((i) => {
               if (_db[i].nama === nama) {
                 posi = i
               }
            })
            if (posi === null) {
              _db.push({nama: nama, count: 1})
              fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
            _db[posi].count += 1
            fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
          }
        }
        
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg})
		}
		
		const fakemsg = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: fake})
		}
		
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+${ownerNumber}` } },
		const buttonsDefault = [
			{ urlButton: { displayText: `🏹 PING 🎯`, url : ping } },
			{ urlButton: { displayText: `👤 OWNER BOT 👤`, url : `https://wa.me/60102810046?text=Hai+bang Hensem+aku+mau+beli+PREMIUM` } },
			{ quickReplyButton: { displayText: `Rate Bot ⭐`, id: `${prefix}getrating` } },
			{ quickReplyButton: { displayText: `List Menu 📑`, id: `${prefix}allmenu` } },
		  { quickReplyButton: { displayText: `Login 👥`, id: `${prefix}login` } },
		]
		const buttonsDefa = [{buttonId: `/getrating`, buttonText: { displayText: `Rate Bot ⭐` }, type: 2 }, {buttonId: `/login`, buttonText: { displayText: `Login 👥` }, type: 2 }, {buttonId: `/allmenu`, buttonText: { displayText: "List Menu 📑" }, type: 2 }]
		
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isAudio = (type == 'audioMessage')
		const isDocument = (type == 'documentMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

		// Auto Read & Presence Online
		
		conn.sendPresenceUpdate('available', from)
		
// Auto Registrasi
		if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		  }
		  
		  
        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }

		// Premium
		_prem.expiredCheck(conn, premium)

    // Banned
        if (isBan) return
        BannedExpired(ban)
        
		// Tictactoe
		if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

        // Mode
        if (mode === 'self'){
            if (!fromMe && !isOwner) return
        }
        
        //Auto Respon
        for (var i = 0; i < commandsDB.length ; i++) {
				if (chats.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
				// Login 
				for (var i = 0; i < loginnya.length ; i++) {
				}

        // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.includes(`https://chat.whatsapp.com`)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
        

// Auto Youtube Downloader
if (autoyt) {
let yutu = `https://youtu${chats.slice(13)}`
if (!isGroup){
if (chats.includes(yutu)) {
            y2mateA(yutu).then( data => {
              conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: fvideo})
})}}
if (isGroup) {
if (chats.includes(yutu)) {
            y2mateA(yutu).then( data => {
              conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4'}, {quoted: msg})
              var caption = monospace(`Auto Download Youtube, Pilih Tipe Berikut`)
              var but = [{buttonId: `${yutu}`, buttonText: { displayText: "📄 File Document" }, type: 1 }, {buttonId: `/ytmp3vn ${yutu}`, buttonText: { displayText: "🎧 Voice Not" }, type: 2 }, {buttonId: `/ytmp4 ${yutu}`, buttonText: { displayText: "🎥 Video" }, type: 3 }]
              conn.sendMessage(sender, { text: caption, buttons: but, footer: "Silahkan Pilih Untuk mengubah Tipe Audio", templateButtons: but }, {quoted: fvideo})
					  })
            }
}
}

        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakgambar`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}
		
		cekWaktuGame(conn, kuiscuy)
		if (isPlayGame(from, kuiscuy) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, kuiscuy)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
			
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakkata`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    kuiscuy.splice(getGamePosi(from, kuiscuy), 1)
		  }
		}
		
		cekWaktuGame(conn, tekateki)
		if (isPlayGame(from, tekateki) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tekateki)) {
		    
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tekateki`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tekateki.splice(getGamePosi(from, tekateki), 1)
		  }
		}
		
		cekWaktuGame(conn, tebakkimia)
		if (isPlayGame(from, tebakkimia) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakkimia)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakkimia`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
		    tebakkimia.splice(getGamePosi(from, tebakkimia), 1)
		  }
		}
		
		cekWaktuGame(conn, tebaktebakan)
		if (isPlayGame(from, tebaktebakan) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebaktebakan)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/kuis`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tebaktebakan.splice(getGamePosi(from, tebaktebakan), 1)
		  }
		}
		
		cekWaktuGame(conn, ujian)
		if (isPlayGame(from, ujian) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, ujian)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakkata`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
		    ujian.splice(getGamePosi(from, ujian), 1)
		  }
		}
		
		cekWaktuGame(conn, tebaklagu)
		if (isPlayGame(from, tebaklagu) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebaklagu)) {
		    var htgm = randomNomor(500, 550)
		    
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebaklagu`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tebaklagu.splice(getGamePosi(from, tebaklagu), 1)
		  }
		}
		
		cekWaktuGame(conn, susun)
		if (isPlayGame(from, susun) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, susun)) {
		    var htgm = randomNomor(500, 550)
		    
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/susunkata`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg }) 
		    susun.splice(getGamePosi(from, susun), 1)
		  }
		}
		
		cekWaktuGame(conn, siapaaku)
		if (isPlayGame(from, siapaaku) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, siapaaku)) {
		    var htgm = randomNomor(500, 550)
		    
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/siapakahaku`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
		    siapaaku.splice(getGamePosi(from, siapaaku), 1)
		  }
		}
		
		cekWaktuGame(conn, tb)
		if (isPlayGame(from, tb) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tb)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
			
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakbendera`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg }) 
		    tb.splice(getGamePosi(from, tb), 1)
		  }
		}
		
if (chats.includes(`Bot`)){
 conn.sendMessage(from, { audio: fs.readFileSync('audio/jojo.mp3'), mimetype: 'audio/mp4', seconds: "359996400", ptt: true}, {quoted: msg})
}
if (chats.includes(`bot`)){
 conn.sendMessage(from, { audio: fs.readFileSync('audio/jokeuwi.mp3'), mimetype: 'audio/mp4', seconds: "359996400", ptt: true}, {quoted: msg})
}
if (chats.startsWith(`tes`)){
 conn.sendMessage(from, { audio: fs.readFileSync('audio/jojo.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
if (chats.startsWith(`Tes`)){
 conn.sendMessage(from, { audio: fs.readFileSync('audio/jojo.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
if (chats.includes(`@${botNumber.split("@")[0]}`)) {
 conn.sendMessage(from, { audio: fs.readFileSync('audio/jojo.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}

if (chats.startsWith("fetch ")) {
  if (!q)return reply(`Masukan Fetch Link!`)
  var data = await fetchText(q)
  reply(data)
}

		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}

		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(60), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(60), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command) {
			// Main Menu
			case prefix+'menu':
			case prefix+'help':
			  case prefix+'m':
			    case prefix+'start':
var menunya = `╔═⧎ *${botName}* ⧎═\n║\n╠═⧎ Hallo *${pushname}*\n║\n╠═⧎ Aku Adalah *${botName}* \n║ Silahkan Pilih List Menu\n║ Untuk Melihat Daftar Menu.\n║ Dan Pilih Rating Bot\n║ Untuk Rating Bot ${botName}\n║\n╠═⧎ *Harap Login Terlebih*\n║ *Dahulu Sebelum Memulai Bot* \n║ *lynx Untuk Mendapatkan* \n║ *Limit Dan Balance!*\n║\n╚═⧎ Thanks For Using ${botName}\n❋─────────────────❋\n\n「 *${tgl}* 」\n「 *${jam}* 」 `
			    addCountCmd('#menu', sender, _cmd)
if (typemenu === 'button') {
			    conn.sendMessage(from, { caption: menunya, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: botName, mentions: [sender]}, { quoted: msg })
}
if (typemenu === 'buttons5') {
			    conn.sendMessage(from, { caption: menunya, image: fs.readFileSync(setting.pathimg), templateButtons: buttonsDefault, footer: botName, mentions: [sender]} )
}
if (typemenu === 'text') {
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
			    conn.sendMessage(from, {text: teks, mentions: [sender]}, {quoted: msg})
}
if (typemenu === 'image') {
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
			    conn.sendMessage(from, {caption: teks, image: fs.readFileSync(setting.pathimg), mentions: [sender]}, {quoted: msg})
}
if (typemenu === 'sections') {
  var sections = [
    {
	title: "MENU lynxbot by Aiman",
	rows: [
	    {title: `1. Generator Menu 🧬`, rowId: `${prefix}generatormenu`},
	    {title: `2. Downloader Menu ⬇️`, rowId: `${prefix}downloadermenu`},
	    {title: `3. Random Menu ⛓️`, rowId: `${prefix}menurandom`},
	    {title: `4. Premium Menu ⚠️`, rowId: `${prefix}menuprem`},
	    {title: `5. Maker Menu 🎨`, rowId: `${prefix}makermenu`},
	    {title: `6. Other Menu 👣`, rowId: `${prefix}othermenu`},
	    {title: `7. Storage Menu 💾`, rowId: `${prefix}storagemenu`},
	    {title: `8. Edit Vokal 🅰️`, rowId: `${prefix}vokaledit`},
	    {title: `9. Game Menu 🎮`, rowId: `${prefix}gamemenu`},
	    {title: `10. Payment & Bank 🏦`, rowId: `${prefix}menuatm`},
	    {title: `11. Grup Menu 👥`, rowId: `${prefix}grupmenu`},
	    {title: `12. Encode & Decode 🔧`, rowId: `${prefix}encodemenu`},
	    {title: `13. Owner Menu 🎭`, rowId: `${prefix}ownermenu`},
            {title: `14. Shop Menu 🛒`, rowId: `${prefix}shopmenu`}
	]
    },
  {
	title: "Tambahan Fitur",
	rows: [
	  {title: `1. All Menu`, rowId: `${prefix}allmenu`, description: `Menampilkan Seluruh Menu`},
	  {title: `2. Login`, rowId: `${prefix}login`, description: `Jangan Lupa Login Hari Ini!`},
	  {title: `3. Rate Bot`, rowId: `${prefix}getrating`, description: `Bantu Rating Bot`},
	  {title: `4. Nomor Owner`, rowId: `${prefix}owner`, description: `Admin Dari lynxBot`}
  ]},
    {
	title: "Social Media",
	rows: [
	  {title: `1. Instagram`, rowId: `${prefix}igadmin`, description: `Instagram Admin`},
	  {title: `2. Grup Jojo`, rowId: `${prefix}gcwa`, description: `Grup JOJO-BOT`},
	  {title: `3. WhatsApp`, rowId: `${prefix}owner`, description: `Owner Bot`}
  ]}
]
var listMessage = {
  text: menunya,
  footer: "Follow My Instagram :\nhttps://instagram.com/aiman1_23",
  title: "❋─────────────────❋",
  buttonText: "lynx",
  sections
}
}
conn.sendMessage(from, listMessage, {quoted: msg})
				break
				
case prefix+'igadmin':
  var ignye = [
			{ urlButton: { displayText: `Instagram Admin`, url : `https://instagram.com/${ig}` } },
		  { quickReplyButton: { displayText: `Back To Menu 🔙`, id: `${prefix}menu` } },
		]
		conn.sendMessage(from, { text: `Nama : Arasya\nUsername : @arsrfii`, templateButtons: ignye, footer: `arsrfii`, mentions: [sender]} )
  break
case prefix+'gcwa':
  reply(`*[ GRUP ${botName.toUpperCase()} ]*\n\nLink Grup : ` + monospace(gcwa))
  break
case prefix+'allmenu':
  var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
  var footerkomt = [{buttonId: `/game`, buttonText: { displayText: `Game 🎮` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'generatormenu':
  var teks = genmenu(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'downloadermenu':
  var teks = downloader(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'menurandom':
  var teks = rndm(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'menuprem':
  var teks = menuprem(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'storagemenu':
  var teks = storage(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'othermenu':
  var teks = othermenu(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'makermenu':
  var teks = maker(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'vokaledit':
  var teks = vokaledit(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'gamemenu':
  var teks = gamemenu(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'menuatm':
  var teks = atm(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'grupmenu':
  var teks = grupmenu(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'encodemenu':
  var teks = encode(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'ownermenu':
  var teks = owner(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'shopmenu':
  var teks = shop(sender, prefix)
  var footerkomt = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: `Semua Menu` }, type: 2 }]
  conn.sendMessage(from, { text: teks, buttons: footerkomt, footer: botName, mentions: [sender]}, { quoted: msg })
  break
case prefix+'setmenu':
  if (!isOwner)return reply(mess.OnlyOwner)
  var menucuy = [{buttonId: `/getmenu button`, buttonText: { displayText: "Button Biasa" }, type: 1 }, {buttonId: `/getmenu buttons5`, buttonText: { displayText: "Buttons Pake Link" }, type: 2 }, {buttonId: `/getmenu sections`, buttonText: { displayText: "Sections" }, type: 3}]
  conn.sendMessage(from, { caption: `Pilih Type Menu Berikut :`, image: fs.readFileSync(setting.pathimg), buttons: menucuy, footer: monospace(botName), mentions: [sender]}, { quoted: msg })
  break
case prefix+'getmenu':
  if (!args[1])return reply(`Pilih Type Menu Berikut :\n` + monospace(`- button\n- image\n- buttons5\n- text`))
  if (!isOwner)return reply(mess.OnlyOwner)
  // Button
  if (args[1] == "button") {
  typemenu = 'button'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Buttons 5
  else if (args[1] == "buttons5") {
  typemenu = 'buttons5'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Text Ajah anjing
  if (args[1] == "text") {
  typemenu = 'text'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Image
  if (args[1] == "image") {
  typemenu = 'image'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  if (args[1] == "sections") {
  typemenu = 'sections'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  break
case prefix+'menu-premium':
  case prefix+'premiummenu':
    case prefix+'menupremium':
      if (!isPremium)return reply(mess.OnlyPrem)
      var menunya = `*( ⚠️ )  Premium User*

≻ ${prefix}asupan
≻ ${prefix}xnxx link
≻ ${prefix}ahegao
≻ ${prefix}bloewjob
≻ ${prefix}hentai
≻ ${prefix}masturbation
≻ ${prefix}pussy`
var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Kembali Ke Menu" }, type: 1 }]
conn.sendMessage(from, { text: menunya, buttons: but, footer: botName, templateButtons: but }, {quoted: fake})
  break
case prefix+'delete':
  case prefix+'d':
    case prefix+'del':
  conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
  break
case prefix+'donasi':
  case prefix+'donate':
    addCountCmd('#donasi', sender, _cmd)
  var donasibut = [
			{ urlButton: { displayText: `Grup Bot`, url : `${gcwa}` } },
			{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } },
		]
var teks = `  │
  ├─ ❏ GOPAY
  ├─ ❏ ${gopay}
  ├─ ❏ OVO
  ├─ ❏ ${ovo}
  ├─ ❏ DANA
  ├─ ❏ ${dana}
  ├─ ❏ digi
  ├─ ❏ 00102810046
  ├─ ❏ INSTAGRAM
  └─ ❏ https://www.instagram.com/${ig}
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : Donasi Seikhlasnya`
 conn.sendMessage(from, { caption: teks, image: {url: `https://i.ibb.co/CPcFJ6c/IMG-20220131-WA0504.jpg`}, templateButtons: donasibut, footer: botName, mentions: [sender]} )  
			    break
case prefix+'sewa':
  case prefix+'daftarprem':
    addCountCmd('#sewa', sender, _cmd)
  var teks = monospace(`[ ${botName} - PREMIUM/SEWA ]

Premium : Rp.10.000
Exp : PERMANENT

Keuntungan:
- Unlimited Limit
- Unlimited Limit Game
- Bisa akses fitur premium
- Terdaftar di list premium
- Add Ke Grup

Via :
-digi (0102810046)

~ Tim ${botName}
${readmore}
Owner : @${ownerNumber[0].split("@")[0]}`)
			    conn.sendMessage(from, {caption: teks, image: fs.readFileSync(`./media/Jojo2.jpg`), mentions: [ownerNumber[0]]}, {quoted: fake})
			    break
			case prefix+'runtime':
			    reply(runtime(process.uptime()))
			    break
  break
			case prefix+'speed':
			  reply("Testing Speed...")
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            textImg(`*${latensi.toFixed(4)}* Second Membalas Chat Anda`)
		            break
case prefix+'infobot':
  case prefix+'inforobot':
    case prefix+'info':
      addCountCmd('#infobot', sender, _cmd)
      var caption = `*[ INFO ${botName} ]*

Haii @${sender.split("@")[0]}, aku adalah *${botName}*, Yang bisa membantu anda untuk membuat stiker dan download lagu yang di udah di program oleh Pemilik Aku *${ownerName}* aku mempunyai lebih dari 100 fitur yang bisa kau gunakan dengan gratis, kamu Bisa melihat fitur fitur tersebut dengan cara ketik /menu.

*Nama Bot :* ${botName}
*Name Owner :* ${ownerName}
*Nomor Bot :* @${botNumber.split("@")[0]}
*Nomor Owner :* @${ownerNumber[0].split("@")[0]}
*Engine :* NodeJs
*Status :* Aktif
*Aktif Selama :* ${runtime(process.uptime())}
*Auto Download :* Aktif

===================
Thanks To
- Riyan
- Aiman
- Arasya
- Amel
- Hardianto
- Febri`

conn.profilePictureUrl(botNumber, 'image').then( res => conn.sendMessage(from, { caption: caption, image: { url: res }, mentions: [sender, botNumber, ownerNumber[0]]}, {quoted: fake})).catch (() => conn.sendMessage(from, {caption: caption, image: fs.readFileSync(setting.pathimg), mentions: [botNumber, ownerNumber[0]]}))
break
			case prefix+'owner':
			    sendContact(from, ownerNumber[0].split("@")[0], ownerName, msg)
			    break
			case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
case prefix+'block':
  case prefix+'blok':
  if (!isOwner)return reply(mess.OnlyOwner)
  if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        conn.updateBlockStatus(mentioned[0], "block")
                    }
                    } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa block Owner`)
                    conn.updateBlockStatus(quotedMsg.sender, "block")
                    reply(`Sukses block target`)}
  break 
  case prefix+'unblock':
    case prefix+'unblok':
  if (!isOwner)return reply(mess.OnlyOwner)
  if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        conn.updateBlockStatus(mentioned[0], "unblock")
                    }
                    } else if (isQuotedMsg) {
                    
                    conn.updateBlockStatus(quotedMsg.sender, "unblock")
                    reply(`Sukses buka block target`)}
  break 
  case prefix+'setprefix':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
case prefix+'self':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'self'
                reply('Berhasil berubah ke mode self')
                break
            case prefix+'publik': case prefix+'public':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'public'
                reply('Berhasil berubah ke mode public')
            case prefix+'setown':
              case prefix+'setowner':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} Nomor\nExample : ${command} 6288213292687`)
                var text = args[1] + '@s.whatsapp.net'
                
                own2 = text
                 mentions(`Sukses Mengganti Nomor Owner Ke Nomor : @${text.split("@")[0]}`, [text])
                break
case prefix+'addrespon':
case prefix+'addresp':
 if (!isOwner)return reply(mess.OnlyOwner)
var pesan = q.split('|')[0] ? q.split('|')[0] : q
var balas = q.split('|')[1] ? q.split('|')[1] : ''
if (checkCommands(pesan, commandsDB) === true) return reply(`Udah ada`)
addCommands(pesan, balas, sender, commandsDB)
reply(`Pesan : ${pesan}\nBalas : ${balas}\nSuskes Di Tambahankan!`)
break
case prefix+'delrespon':
case prefix+'delresp':
if (!isOwner)return reply(mess.OnlyOwner)
if (!checkCommands(q, commandsDB)) return reply(`Ga ada di database`)
deleteCommands(q, commandsDB)
reply(`Respon ${q} telah di hapus`)
break
case prefix+'listrespon':
case prefix+'listresp':
var teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n\n`
}
reply(teks)
break
				case prefix+'addlist':
				if (!isPremium)return reply(mess.OnlyPrem)
if (checkList(nameshop, listnya) === true) return reply(`Toko Tersebut Sudah Ada`)
var nameshop = q.split('|')[0] ? q.split('|')[0] : q
var text = q.split('|')[1] ? q.split('|')[1] : ''
addList(nameshop, text, sender, listnya)
var anunya = `_*[ ADD LIST ]*_\n\n📝 *Nama Toko :* ${nameshop}\n🎟️ *Penjualan :* ${text}\n👤 *Creation :* @${sender.split("@")[0]}\n⌚ *Waktu :* ${jam}\n📅 *Tanggal :* ${tgl}`
conn.sendMessage(from, {caption: anunya, image: fs.readFileSync('pp.jpg'), mentions: [sender]}, {quoted: msg})
conn.sendMessage(ownerNumber[0], {text: `Ada yang menambahkan list Penjualan`})
sendContact(ownerNumber[0], sender.split("@")[0], pushname, msg)
break
case prefix+'list':
  case prefix+'ceklist':
var list = []
var teskd = `*[ JOJO BOT - LIST DM SHOP ]*\n\n`
for (let i of listnya) {
list.push({
title: i.nameshop, rowId: `${prefix}gettlist ${i.text}`, description: `Name Shop : ${i.nameshop}\nPenjual : https://wa.me/${i.sender.split("@")[0]}`})}
var sections = [{title: "JOJO - BOT", rows:list}]
var listms = { text: `Berikut Merupakan List Penjualan Dari Beberapa User Bot`, footer: botName, buttonText: "Click Here", sections }
conn.sendMessage(from, listms, {quoted:msg})
break
case prefix+'deletetoko':
  case prefix+'delshop':
    case prefix+'deltoko':
      case prefix+'deletelist':
				if (!isPremium)return reply(mess.OnlyPrem)
if (!checkList(q, listnya)) return reply(`Tidak Menemukan Toko`)
deleteList(q, listnya)
reply(`Sukses Menghapus Toko ${q}`)
break
case prefix+'gettlist':
conn.sendMessage(from, {text: q}, {quoted: fake})
break
case prefix+'done':
if (!isGroup)return reply(mess.OnlyGrup)
if (isQuotedMsg) {
var ayaya = `「 *TRANSAKSI BERHASIL* 」` + monospace(`\n⌚ Waktu : ${jam}\n📅 Tanggal : ${tgl}\n👀 Status : Sukses\n🔢 Nomer : @${sender.split("@")[0]}`)
var but = [{buttonId: `/list`, buttonText: { displayText: 'Check List' }, type: 1 }]
conn.sendMessage(quotedMsg.sender, { text: ayaya, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
var txt1 = `「 *TRANSAKSI BERHASIL* 」` + monospace(`\n⌚ Waktu : ${jam}\n📅 Tanggal : ${tgl}\n👀 Status : Sukses\n🔢 Nomer : @${sender.split("@")[0]}`)
var but1 = [{buttonId: `/list`, buttonText: { displayText: 'Check List' }, type: 1 }]
conn.sendMessage(from, { text: txt1, buttons: but1, footer: botName, mentions: [sender]}, { quoted: msg })
} else {
  var ayaya = `「 *TRANSAKSI BERHASIL* 」` + monospace(`\n⌚ Waktu : ${jam}\n📅 Tanggal : ${tgl}\n👀 Status : Sukses\n🔢 Nomer : @${sender.split("@")[0]}`)
var but = [{buttonId: `/list`, buttonText: { displayText: 'Check List' }, type: 1 }]
conn.sendMessage(`${q}@s.whatsapp.net`, { text: ayaya, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
var txt1 = `「 *TRANSAKSI BERHASIL* 」` + monospace(`\n⌚ Waktu : ${jam}\n📅 Tanggal : ${tgl}\n👀 Status : Sukses\n🔢 Nomer : @${sender.split("@")[0]}`)
var but1 = [{buttonId: `/list`, buttonText: { displayText: 'Check List' }, type: 1 }]
conn.sendMessage(from, { text: txt1, buttons: but1, footer: botName, mentions: [sender]}, { quoted: msg })
}
break
case prefix+'proses':
reply(`Dalam Perbaikan!!`)
break
case prefix+'login':
case prefix+'daftar':
case prefix+'sign-in':
if (checkLogins(sender, loginnya) === true) return reply(`Kamu Sudah Login Hari Ini!\nKembalilah Esok hari!`)
addLogin(pushname, sender, loginnya)
var randomLimit = randomNomor(10, 30)
var rndmLimit = randomNomor(10, 35)
var blnc = randomNomor(5000, 15000)
addBalance(sender, parseInt(blnc), balance)
giveLimit(sender, parseInt(rndmLimit), limit)
givegame(sender, parseInt(randomLimit), glimit)
mentions(`Mengambil Data @${sender.split("@")[0]}`, [sender])
var cpt = `_*REGISTERED*_\n\n🎟️ *Nama :* ${pushname}\n*🔢 Nomor :* ${sender.split("@")[0]}\n*📑 Kode Pendaftar :* ${makeid(7)}\n🔧 *Tag :* @${sender.split("@")[0]}\n\n*_GIVE LOGIN_*\n\n*💸 Balance :* $${blnc} Balance\n*🎁 Limit :* ${randomLimit}\n*🎮 Game Limit :* ${rndmLimit}`
conn.profilePictureUrl(sender, 'image').then( res => conn.sendMessage(from, {caption: cpt, image: {url: res}, mentions: [sender]}, {quoted: msg})).catch(() => conn.sendMessage(from, {caption: cpt, image: fs.readFileSync('./media/profile/5.jpg'), mentions: [sender]}, {quoted: msg}))
break
case prefix+'listuser':
case prefix+'listpengguna':
case prefix+'listlogin':
if (!isOwner && !isPremium)return reply(mess.OnlyOwner)
var teks = `「 *_PENGGUNA ${botName}_* 」\n\nTotal : *${loginnya.length}*\n\n`
for (let i = 0; i < loginnya.length; i ++){
teks += `*Nama :* ${loginnya[i].nama}\n`
teks += `*Nomer :* ${loginnya[i].nomer.split("@")[0]}\n\n`
}
reply(teks)
break
case prefix+'getrate1-25':
reply(`Makasih Udah Memberi Rating Pada Bot ^_^`)
var caption = `${ucapanWaktu} ${ownerName} 👋\n\nNama Pengirim : *${pushname}*\nNomor Rating : *1 - 25 ⭐*\nNomor Pengirim : @${sender.split("@")[0]}\nTanggal : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*\nWaktu : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')}* WIB\nPesan Dari Bot : Tingkatkan Lebih Baik Lagi`
conn.profilePictureUrl(sender, 'image').then( res => conn.sendMessage(ownerNumber[0], { caption: caption, image: { url: res }, mentions: [sender]}, {quoted: fake})).catch(() => conn.sendMessage(ownerNumber[0], {caption: caption, image: fs.readFileSync('./media/profile/1.jpg'), mentions: [sender]}, {quoted: fake}))
break
case prefix+'getrate25-60':
reply(`Makasih Udah Memberi Rating Pada Bot ^_^`)
var caption = `${ucapanWaktu} ${ownerName} 👋\n\nNama Pengirim : *${pushname}*\nNomor Rating : *25 - 60 ⭐⭐*\nNomor Pengirim : @${sender.split("@")[0]}\nTanggal : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*\nWaktu : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*\nPesan Dari Bot : mungkin mau Lebih Baik Lagi`
conn.profilePictureUrl(sender, 'image').then( res => conn.sendMessage(ownerNumber[0], { caption: caption, image: { url: res }, mentions: [sender]}, {quoted: fake})).catch(() => conn.sendMessage(ownerNumber[0], {caption: caption, image: fs.readFileSync('./media/profile/1.jpg'), mentions: [sender]}, {quoted: fake}))
break
case prefix+'getrate60-100':
reply(`Makasih Udah Memberi Rating Pada Bot ^_^`)
var caption = `${ucapanWaktu} ${ownerName} 👋\n\nNama Pengirim : *${pushname}*\nNomor Rating : *60 - 100 ⭐⭐⭐*\nNomor Pengirim : @${sender.split("@")[0]}\nTanggal : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*\nWaktu : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*\nPesan Dari Bot : Sudah Pas, Ayo Semangat`
conn.profilePictureUrl(sender, 'image').then( res => conn.sendMessage(ownerNumber[0], { caption: caption, image: { url: res }, mentions: [sender]}, {quoted: fake})).catch(() => conn.sendMessage(ownerNumber[0], {caption: caption, image: fs.readFileSync('./media/profile/1.jpg'), mentions: [sender]}, {quoted: fake}))
break
case prefix+'getrating':
var caption = `Hallo ${pushname}\n\nBantu Rating Bot Yukk!!, dengan cara menekan Tombol Berikut, Pilih Salah satu yaaa terima kasii`
var buttonsDefap = [{buttonId: `/getrate1-25`, buttonText: { displayText: "Rating 1 - 25 ⭐" }, type: 1 }, {buttonId: `/getrate25-60`, buttonText: { displayText: "Rating 25 - 60 ⭐⭐" }, type: 2 }, {buttonId: `/getrate60-100`, buttonText: { displayText: "Rating 60 - 100 ⭐⭐⭐" }, type: 2 }]
conn.sendMessage(from, { caption: caption, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefap, footer: botName, mentions: [sender]}, { quoted: msg })
break
case prefix+'mute':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (isMuted) return reply(`udah mute`)
mute.push(from)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
reply(`Bot berhasil dimute di chat ini`)
break
case prefix+'ban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[2], ban)
                    }
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
                }
                break
            case prefix+'unban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    reply('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[1])) {
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
                }
                break
            case prefix+'listban':
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break
case prefix+'creategrup':
  case prefix+'buatgrup':
    case prefix+'creategroup':
      if (!isOwner) return reply(mess.OnlyOwner)
      if (!q)return reply(`Masukan Nama Grup!!\nExample : ${command} ${pushname} Jelek`)
      conn.groupCreate(q, [sender, sender])
      reply(`Sukses Membuat Grup ${q}`)
      break
//storage menu
case prefix+'addimage':
  case prefix+'addimg':
if (!isPremium)return reply(mess.OnlyPrem)
if (!q)return reply(`Masukan Text!`)
if (!isQuotedImage)return reply(`Reply Imagenya!`)
if (isQuotedImage) {
var gambar = JSON.parse(fs.readFileSync("./database/storage/image.json"))
var media = await downloadAndSaveMediaMessage("image", `./database/storage/Image/${q}.jpeg`)
gambar.push(q)
fs.writeFileSync('./database/storage/image.json', JSON.stringify(gambar))
var imgnye = [
			{ quickReplyButton: { displayText: `Melihat Gambar 🔎`, id: `${prefix}listimg` } }, { urlButton: { displayText: `Instagram`, url : `https://instagram.com/arsrfii` } },]
		conn.sendMessage(from, {text: `Menambahkan Gambar *${q.toUpperCase()}*\nCek Gambar Pencet Dibawah`, templateButtons: imgnye, footer: `💾`, mentions: [sender]} )
} else {
  reply(`Reply Gambarnya Dengan Caption ${command} Text`)
}
  break
case prefix+'getimage':
  case prefix+'getimg':
  try {
  conn.sendMessage(from, {image: fs.readFileSync(`./database/storage/Image/${q + ".jpeg"}`), caption: q + ".jpeg"}, {quoted: msg})
  } catch {
    reply(`Image ${q + ".jpeg"} Gada di database`)
  }
  break
case prefix+'listimg':
  case prefix+'listimage':
    var list = JSON.parse(fs.readFileSync('./database/storage/image.json'))
    var teks = `*⟨ LIST IMAGE ⟩*\nTotal Image:` + monospace(list.length + `\n\n`)
      for (let i of list) {
        teks += monospace(`» ${i.toUpperCase()}\n`)
      }
      reply(teks)
    break
case prefix+'delimg':
  case prefix+'delimage':
  if (!isPremium)return reply(mess.OnlyPrem)
  try {
  var list = JSON.parse(fs.readFileSync('./database/storage/image.json'))
  var anu = list.indexOf(q)
list.splice(anu, 1)
fs.writeFileSync('./database/storage/image.json', JSON.stringify(list))
reply(`Sukses Menghapus Gambar ${q.toUpperCase()}`)
fs.unlinkSync(`./database/storage/Image/${q}.jpeg`)
  } catch {
  reply(`Image ${q} Gada Di Database`)
}
  break
	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': case prefix+'stikergif': case prefix+'stikgif':
			  addCountCmd('#sticker', sender, _cmd)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			case prefix+'toimg': case prefix+'toimage':
			case prefix+'tovid': case prefix+'tovideo':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.jpg')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      
			      if (err) return reply(mess.error.api)
			      conn.sendMessage(from, {caption: `Sukses Convert Sticer To Image`, image: { url: `./${rand2}` }}, { quoted: msg })
			      limitAdd(sender, limit)
				  
			    })
			    } else {
			    reply(mess.wait)
		          webp2mp4File(`./${rand1}`).then( data => {
			       fs.unlinkSync(`./${rand1}`)
			       conn.sendMessage(from, { video: { url: data.result }}, { quoted: msg })
			       limitAdd(sender, limit)
				  })
			    }
			    break

//downloader
			case prefix+'tiktoknowm':
			  case prefix+'tiktok':
				  case prefix+'tt':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
				xfar.downloader.tiktok(q).then( data => {
					var tidtod = [
						{ urlButton: { displayText: `Link`, url : `${q}` } },
			{ quickReplyButton: { displayText: `Ubah Ke Audio`, id: `${prefix}tiktokaudio ${q}` } },
				]
				reply(mess.wait)
				conn.sendMessage(from, {video: {url: data.media[1].url}}, {quoted: msg})
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
			    break
			case prefix+'tiktokaudio':
				case prefix+'ttaudio':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.downloader.tiktok(args[1]).then( data => {
			      conn.sendMessage(from, { audio: { url: data.media[1].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
				case prefix+'mediafire':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('mediafire')) return reply(mess.error.Iv)
					 w5botapi.mediafire(args[1]).then ( data => {
					   var text = monospace(`Name File : ${data[0].name}\nFormat File : ${data[0].mime}\nSize : ${data[0].size}\n\nTunggu Sebentar File Akan Segera Dikirim!`)
					   reply(text)
					   conn.sendMessage(from, {document: {url: data[0].link}, fileName: data[0].name, mimetype: `${data[0].mime}`}, {quoted: msg})
					 })
					limitAdd(sender, limit)
					break
            case prefix+'play':
				
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                reply(mess.wait)
                await sendPlay(from, q)
				limitAdd(sender, limit)
                break
case prefix+'ytmp4': case prefix+'mp4':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    addCountCmd('#ytmp4', sender, _cmd)
			    reply(mess.wait)
			    y2mateV(args[1]).then ( data => {
			      conn.sendMessage(from, {caption: monospace(data[0].judul), video: {url: data[0].link}}, {quoted: msg})
			    }).catch(() => xfar.downloader.youtube(args[1]).then ( data => {
					    conn.sendMessage(from, {caption: monospace(data.title), video: {url: data.download_url}}, {quoted: msg})
					  }))
			    break
				///SCRAPER YTMP3 BY ARASYA RAFI	
case prefix+'ytmp3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var pasu = `ptt`
  if (q.includes('--')) pasu = q.split('--')[1]
			    y2mateA(q.replace('--'+pasu, '')).then(async(data) => {
				  if (q.includes('--')) {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg})
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
				  } else {
				    
  addCountCmd('#ytmp3', sender, _cmd)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)

			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
				y2mateA(args[1]).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg})
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4'}, {quoted: msg})
					  }).catch(() => xfar.downloader.youtube(args[1]).then ( data => {
					    var capt = `📛 *Title :* ${data.title}\n🔰 *Size Audio :* ${data.size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data.thumbnail}}, {quoted: msg})
					    conn.sendMessage(from, {audio: {url: data.download_url}, mimetype: 'audio/mp4'}, {quoted: msg})
					  }))}})
limitAdd(sender, limit)
              break
case prefix+'ytplay':
  if (!isGroup) {
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  addCountCmd('#ytmp3', sender, _cmd)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link\n\n` + monospace(`Example : ${command} https://youtu.be/FB1YNEOspyA\n\n( tambahkan --ptt jika ingin di ubah ke vn \nExample : ${command} https://youtu.be/FB1YNEOspyA --ptt )`))
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
				y2mateA(args[1]).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg})
					conn.sendMessage(sender, { document: { url: data[0].link }, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
					
					  }).catch(() => xfar.downloader.youtube(args[1]).then ( data => {
					    var capt = `📛 *Title :* ${data.title}\n🔰 *Size Audio :* ${data.size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data.thumbnail}}, {quoted: msg})
					    conn.sendMessage(from, {document: {url: data.download_url}, fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, {quoted: msg})
					  }))
limitAdd(sender, limit)
} else if (isGroup) {
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply(mess.error.Iv)
	if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
	y2mateA(args[1]).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg})
					conn.sendMessage(sender, { document: { url: data[0].link }, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
					  }).catch(() => xfar.downloader.youtube(args[1]).then ( data => {
					    var capt = `📛 *Title :* ${data.title}\n🔰 *Size Audio :* ${data.size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data.thumbnail}}, {quoted: msg})
					    conn.sendMessage(from, {document: {url: data.download_url}, fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, {quoted: msg})
					  }))
limitAdd(sender, limit)
}
              break
			  case prefix+'ytmp3vn':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
				y2mateA(args[1]).then( data => {
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: fvideo})
					  }
					  )
				limitAdd(sender, limit)
				  break
				  
			case prefix+'getvideo': case prefix+'getvidio':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateV(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var capt = monospace(`Judul : ${data[0].judul}`)
			      conn.sendMessage(from, { video: { url: data[0].link }, caption: capt }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
			case prefix+'getmusik': case prefix+'getmusic':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateA(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: msg})
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
case prefix+'igstalk':
  case prefix+'stalkig':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q)return reply(`Kirim Perintah ${command} Username mu`)
reply(`Mencari ${q} 🔎`)
SyaApi.insta_profile(args[1]).then ( data => {
var caption = `*_INSTAGRAM STALKER_*\n\n➠ *Username :* @${q}\n➠ *Postingan :* ${data.post_count}\n➠ *Followers :* ${data.followers}\n➠ *Following :* ${data.following}\n➠ *Bio :* ${data.bio}\n➠ *Terakhir Posting :* ${data.avarage_post_time} Ago\nLink : https://instagram.com/${args[1]}`
conn.sendMessage(from, {caption: caption, image: {url: data.profile_pic}}, {quoted: msg})}).catch(() => reply(`Akun Tersebut Di Privat Atau Username Gak Valid!`))
limitAdd(sender, limit)
  break
case prefix+'githubstalk':
case prefix+'ghstalk':
case prefix+'stalkgithub':
case prefix+'stalkgh':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q)return reply(`Kirim Perintah ${command} Username mu`)
reply(`Mencari ${q} 🔎`)
SyaApi.github_user(args[1]).then ( data => {
var capt = `_*GITHUB STALKER*_\n\n➠ Username : ${data.user.username}\n➠ Nama : ${data.user.name}\n➠ Url : ${data.user.github_url}\n➠ Bio : ${data.user.bio}\n➠ Dibuat Pada : ${data.user.creation_date}\n➠ Followers : ${data.user.followers}\n➠ Following : ${data.user.following}\n➠ Repositori : ${data.user.repositories}\n➠ Forked : ${data.user.forkers}\n➠ Commit : ${data.activity.commits}`
conn.sendMessage(from, {caption: capt, image: {url: data.user.avatar}}, {quoted: msg})}).catch(() => reply(`Pengguna ${q} Tidak Ditemukan`))
limitAdd(sender, limit)
break
case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    let insgram = [
						{ urlButton: { displayText: `Link`, url : `${q}` } },
			{ quickReplyButton: { displayText: `Ubah Ke Audio`, id: `${prefix}igmp3 ${q}` } },
				]
			    SyaApi.insta_post(args[1]).then( data => {
			     for ( let i of data.post1 ) {
				  if (i.type === "mp4") {
				conn.sendMessage(from, {video: {url: i.url}}, {quoted: msg})
				  } else if (i.type === "jpg") {
				   conn.sendMessage(from, { caption: `Succes Download Gambar Instagram, Thanks For Using ${botName}`, image: { url: i.url }}, {quoted: msg})
			      }
			     }
				 limitAdd(sender, limit)
			    }).catch(() => reply(mess.error.api))
			    break
case prefix+'igdlaudio':
  case prefix+'igmp3':
    case prefix+'igdlmp3':
      case prefix+'igaudio':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
        w5botapi.instagram(args[1]).then( data => {
          conn.sendMessage(from, {audio: {url: data[0].url}, mimetype: 'audio/mp4'}, {quoted: msg})
        }).catch(() => reply(mess.error.api))
        limitAdd(sender, limit)
        break
			case prefix+'facebook': case prefix+'fbdl':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('facebook.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hikki.downloader.facebookDownload(args[1]).then ( data => { conn.sendMessage(from, {video: {url: data.result.hd}})}).catch(() => reply(mess.error.api))
			    limitAdd(sender, limit)
			    break
			// Owner Menu
case prefix+'setthumb':
if (!isOwner)return reply(mess.OnlyOwner)
if (!isImage && !isQuotedImage)return reply(`Reply Gambar atau kirim gambar dengan caption ${prefix}setthumb`)
if (isImage || isQuotedImage) {
  var media = downloadAndSaveMediaMessage('image', 'pp.jpg')
  reply(`Sukses Mengganti Gambar Bot..`)
}
  break
			case prefix+'exif':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
			case prefix+'masuk':
			  if (!isOwner)return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
case prefix+'dashboard':
	case 'dashboard':
	  if (!isOwner)return reply(mess.OnlyOwner)
	  addCountCmd('#dashboard', sender, _cmd)
		var posi = await getPosiCmdUser(sender, _cmdUser)
		_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
		_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
		var posi = await getPosiCmdUser(sender, _cmdUser)
		var jumlah = _cmdUser[posi].db.length
		if (jumlah > 5) jumlah = 5
		var totalUser = 0
		for (let x of _cmdUser[posi].db) {
			totalUser = total + x.count
		}
		var total = 0
		for (let o of _cmd) {
			total = total + o.count
		}
  var teks = `*[ ${botName} ]*\n\n`
	teks += `*Seluruh Command*\n`
		for (let o = 0; o < 10; o ++) {
			teks += `*=>* ${_cmd[o].nama} : ${_cmd[o].count}\n`
		}
		teks += `\n*Hanya Command Pengguna*\n`
		for (let x = 0; x < jumlah; x ++) {
			teks += `*-* ${_cmdUser[posi].db[x].nama} : ${_cmdUser[posi].db[x].count}\n`
		}
		fakemsg(teks)
		break
case prefix+'bc': case prefix+'broadast':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q && !isImage && !isQuotedImage && !isQuotedAudio) return reply(`Kirim Gambar Dengan Caption ${command} text atau Kirim text dengan text ${command} textnya\nExample : ${command} Hallo`)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `brotkes.jpeg`)
var data = await store.chats.all()
for (let i of data) {
var depak = [{buttonId: `#menu`, buttonText: { displayText: `Menu📋` }, type: 1 }, {buttonId: `#owner`, buttonText: { displayText: `Owner👤` }, type: 2 }]
conn.sendMessage(i.id, { caption: `_*BROADCAST ${botName.toUpperCase()}*_\n\n${q}`, image: fs.readFileSync(`brotkes.jpeg`), buttons: depak, footer: botName, mentions: [sender]})
}
} else 
 if ( isQuotedAudio ) {
   var media = await downloadAndSaveMediaMessage("audio", `./database/audio.mp3`)
   var data = await store.chats.all()
   for (let i of data) {
   conn.sendMessage(i.id, {audio: fs.readFileSync('./database/audio.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
}} else {
var data = await store.chats.all()
for (let i of data) {
conn.sendMessage(i.id, {text: `_*BROASCAST ${botName.toUpperCase()}*_\n\n${q}`})
await sleep(1000)}
}
break
case prefix+'bcprem':
				if (!isOwner) return reply(mess.OnlyOwner)
				if ( isImage || isQuotedImage ) {
					var media = await downloadAndSaveMediaMessage("image", `brotkes.jpeg`)
					for (let i of premium) {
					var depak = [{buttonId: `#menu`, buttonText: { displayText: `Menu📋` }, type: 1 }, {buttonId: `#owner`, buttonText: { displayText: `Owner👤` }, type: 2 }]
					await sleep(5000)
					conn.sendMessage(i.id, { caption: `BROADCAST ${botName.toUpperCase()}\n\n${q}`, image: fs.readFileSync(`brotkes.jpeg`), buttons: depak, footer: botName, mentions: [sender]})
					}
					}
					await sleep(60000)
					fs.unlinkSync('brotkes.jpeg')
				break
			case prefix+'setpp': case prefix+'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
			case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
			// Random Menu
  case prefix+'katagalau':
    case prefix+'galau':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes = JSON.parse(fs.readFileSync('./fitur/katagalau.json'))
var hasil = pickRandom(kotes)
var quot = [
			{ quickReplyButton: { displayText: `Next Kata Galau ➡️`, id: `${prefix}katagalau` } }
		]
		conn.sendMessage(from, {text: hasil, templateButtons: quot, footer: 'Galau Mulu', mentions: [sender]} )
		limitAdd(sender, limit)
break
				case prefix+'jodohku':
if (!isGroup) return reply(`Perintah Ini Hanya Bisa DiGunakan Di Grup!!, masuk grup Jojo Bot Untuk Mendapatkan Jodoh kamu`)
var memeg = groupMembers
var anu = pickRandom(memeg)
var l = await reply(`Mencari Jodoh.....`)
await sleep(2000)
var t = await reply(`Menemukan Jodoh kamu!!\nSilahkan Tunggu Pesan Bot Di Private Message!!`)
var but = [{buttonId: `/jdhcnfrm ${sender.split("@")[0]}`, buttonText: { displayText: 'Aku Suka Dia' }, type: 1 }, {buttonId: `/jdhtolak ${sender.split("@")[0]}`, buttonText: { displayText: 'Gak Suka Dia' }, type: 1 }]
var n = await conn.sendMessage(sender, {text : `Kami Sudah Menemukan Jodoh Kamu, Tunggu dia membalasnya:>`}, {quoted: msg})
var k = await conn.sendMessage(anu.id, { text: `Hallo kak saya Jojo - Bot, Kamu mendapatkan Jodoh nih dari Grup ${groupName}, apakah kamu menerima nyaa??`, buttons: but, footer: `Who?`})
await sleep(20000)
await conn.sendMessage(from, { delete: k.key })
await conn.sendMessage(from, { delete: n.key })
await conn.sendMessage(from, { delete: t.key })
await conn.sendMessage(from, { delete: l.key })
conn.sendMessage(sender, { text: `Menghapus Message`})
  break
case prefix+'jdhcnfrm':
var but = [{buttonId: `/sendkont ${q}`, buttonText: { displayText: 'Kirim Kontak Dia' }, type: 1 }]
conn.sendMessage(sender, { text: `Kamu Menerima Jodohmu, semoga langgeng :>`, buttons: but, footer: `Who?`})
var butt = [{buttonId: `/sendkontk ${sender.split("@")[0]}`, buttonText: { displayText: 'Kirim Kontak Dia' }, type: 1 }]
conn.sendMessage(`${q}@s.whatsapp.net`, { text: `Kamu Diterima Oleh Jodoh Kamu, semoga kamu langgeng :>`, buttons: butt, footer: `Who?`})
break
case prefix+'jdhtolak':
  conn.sendMessage(sender, {text: `ok`})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: `Kamu Di Tolak Oleh Jodoh Kamu Hahahaa`})
  break
case prefix+'sendkont':
sendContact(`${q}@s.whatsapp.net`, q, `Jodohmu`, msg)
break
case prefix+'sendkontk':
sendContact(sender, q, `Jodohmu`, msg)
break
case prefix+'menfess':
case prefix+'menfes':
if (isGroup)return reply(`Hanya Bisa Di Gunakan Di Private Message!`)
if (args.length < 2) return reply(`Kirim perintah ${command} nomer|pesan\nContoh ${command} 62813199449171|Kamu tu ganteng`)
var nomor = q.split('|')[0] ? q.split('|')[0] : q
var text = q.split('|')[1] ? q.split('|')[1] : ''
var teksnya = `Hai kak ada Menfess nih!!\n${piw}\nDari : -\nPesan : _${text}_`

var but = [{buttonId: `/menfesconfirm ${sender}`, buttonText: { displayText: 'Konfirmasi Menfess Diterima' }, type: 1 }]
					conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: but, footer: `SIAPA YA!!!` })
reply(`Sukses Mengirim Menfess!!`)
break
case prefix+'menfesconfirm':
  conn.sendMessage(q, {text: `Menfess sudah di confirmasi oleh jodoh kamu`})
  reply(`Menfess Telah Diterima.`)
  break
case prefix+'quotes':
  case prefix+'quote':
    case prefix+'katakata':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			 var kotes2 = JSON.parse(fs.readFileSync('./fitur/quotes.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next Quotes ➡️`, id: `${prefix}quote` } }, { urlButton: { displayText: `Salin Quotes`, url : `https://www.whatsapp.com/otp/copy/${hasil.quotes}` } },]
		conn.sendMessage(from, {text: hasil.quotes, templateButtons: quot, footer: `~ ${hasil.author}`, mentions: [sender]} )
		limitAdd(sender, limit)
break
case prefix+'covid': case prefix+'covid19': case prefix+'kopit':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/covidworld?apikey=${jojoapi}`)
  var captnya = `*[ COVID WORLD ]*\n\nTotal Kasus Seluruh Dunia : *${data.result.totalCases}* Jiwa\nTotal Sembuh : *${data.result.recovered}* Jiwa\nMeninggal : *${data.result.deaths}* Jiwa\nKasus Aktif : *${data.result.activeCases}*\nKasus Tertutup : *${data.result.closedCases}*\n\nPembaruan Terakhir Pada : *${data.result.lastUpdate}*`
   conn.sendMessage(from, {caption: captnya, image: { url: `https://telegra.ph/file/86b3b90581f9d31353b62.jpg`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'shortlink':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/short/tiny?url=${args[1]}&apikey=${jojoapi}`)
			    reply(`Link : ${data.result.link}`)
				limitAdd(sender, limit)
				break
case prefix+'repeat':
  if (isNaN(args[1])) return reply(`Nominal harus berupa angka!`)
 if (quotedMsg) {
   var rply = `${quotedMsg.chats}\n`
  reply(rply.repeat(args[1]))
} else {
  reply(`Reply message/Kasih Nomor Untuk Repeat setelah command`)
}
limitAdd(sender, limit)
break
case prefix+'towame':
case prefix+'wame':
var txt1 = q.split('|')[0] ? q.split('|')[0] : q
var txt2 = q.split('|')[1] ? q.split('|')[1] : ''
if (!txt1) return reply(`Masukan Text\nContoh ${command} 6288213292687|Hai`)
if (!txt2) return reply(`Masukan Text 1 Lagi!`)

var cpt = `Sukses Bro @${sender.split("@")[0]}!\n\n*Nomer :* ${txt1}\n*Result :* https://wa.me/${txt1.replace(/[+|-| ]/gi, '')}?text=${txt2.replace(/[ |_|-|+]/gi, "+")}\n*Api :* https://api.whatsapp.com/send?phone=${txt1}`
conn.sendMessage(from, {text: cpt, mentions: [sender]}, {quoted: fake})
break
case prefix+'memeg':
case prefix+'memegen':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedImage && !isImage)return reply(`Reply Imagenya!`)
var sya = q.split('|')[0] ? q.split('|')[0] : q
var rfi = q.split('|')[1] ? q.split('|')[1] : ''
if (!q)return reply( `Mana textnya?\nContoh : ${command} Jojo|Bot`)
reply(mess.wait)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `memegen.jpeg`)
var njay = await imgbb(imgbbapi, media)
var pea = await getBuffer(`https://api.memegen.link/images/custom/${sya}/${rfi}.png?background=${njay.display_url}`)
conn.sendMessage(from, {caption: `Sukses Membuat Fitur Meme Generator!\n@${sender.split("@")[0]} Follow My Instagram : @arsrfii`, image: pea, mentions: [sender]}, {quoted: msg})
  fs.unlinkSync(`memegen.jpeg`)
}
limitAdd(sender, limit)
break
case prefix+'stcmeme':
case prefix+'smeme':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedImage && !isImage)return reply(`Reply Imagenya!`)
var sya = q.split('|')[0] ? q.split('|')[0] : q
var rfi = q.split('|')[1] ? q.split('|')[1] : ''
if (!q)return reply( `Mana textnya?\nContoh : ${command} Jojo|Bot`)
reply(mess.wait)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `memegen.jpeg`)
var njay = await imgbb(imgbbapi, media)
var pea = await getBuffer(`https://api.memegen.link/images/custom/${sya}/${rfi}.webp?background=${njay.display_url}`)
conn.sendMessage(from, {sticker: {url: `https://api.memegen.link/images/custom/${sya}/${rfi}.webp?background=${njay.display_url}.webp`}})
}
limitAdd(sender, limit)
break
case prefix+'bajingan':
case prefix+'bajinganlu':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q)return reply( `Mana textnya?\nContoh : ${command} ${pushname}`)
reply(mess.wait)
var pea = await getBuffer(`https://api.memegen.link/images/custom/Bajingan_Lu/${q}.png?background=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg`)
conn.sendMessage(from, {caption: `Sukses Membuat Fitur Bajingan\n@${sender.split("@")[0]} Follow My Instagram : @arsrfii`, image: pea, mentions: [sender]}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'imgbb':
if (!isQuotedImage && !isImage)return reply(`Reply Imagenya!`)
if ( isQuotedImage || isImage) {
var media = await downloadAndSaveMediaMessage("image", `${pushname}.jpeg`)
var njay = await imgbb(imgbbapi, media)
reply(`_Sukses Membuat Link Image Bb_!\n*Link :* ${njay.display_url}`)}
break
case prefix+'tourl':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if ( isImage || isQuotedImage ) {
var mek = await downloadAndSaveMediaMessage(`image`, 'upload.jpg')
var tot = await upload(fs.readFileSync('upload.jpg'))
conn.sendMessage(from, {text: `Sukses Membuat Link\nLink : ${tot}`}, {quoted: msg})
fs.unlinkSync('upload.jpg')
} else if ( isVideo || isQuotedVideo ) {
reply(mess.wait)
var mek = await downloadAndSaveMediaMessage(`video`, 'upload.mp4')
var tot = await upload(fs.readFileSync('upload.mp4'))
conn.sendMessage(from, {text: `Sukses Membuat Link\nLink : ${tot}`}, {quoted: msg})
fs.unlinkSync('upload.mp4')
} else {
  reply(`Kirim gambar/video dengan caption: ${command}`)
}
limitAdd(sender, limit)
break
case prefix+'tagme':
  case prefix+'tag':
    mentions(`Woy @` + sender.split("@")[0], [sender], msg)
    break
case prefix+'lynx':
  case prefix+'simi':
 var text = `${q}`
var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  conn.sendMessage(from, { text: cimcimi.success}, {quoted: msg})
  break
case prefix+'hitungmundur':
  case prefix+'countdown':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    var tanggal = q.split('/')[0] ? q.split('/')[0] : q
          var bulan = q.split('/')[1] ? q.split('/')[1] : ''
          var tahun = q.split('/')[1] ? q.split('/')[2] : ''
			    if (isNaN(tanggal, bulan, tahun)) return reply(`Harus berupa angka`)
			    if (!q) return reply(`Masukan Tanggal/Bulan/Tahun\nExample : 12/10/2022`)
			    if (!tanggal && !bulan && !tahun)return reply(`Masukan Paramater Tanggal Bulan Tahun`)
				var data = waktu(new Date(tahun, bulan, tanggal)).toString();
				reply(`Exp : ` + data)
				limitAdd(sender, limit)
				break
case prefix+'kbbi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				kbbi(q).then ( data => {
				  var caption = monospace(`Kata : ${q}\nArti : `) + `${data.data.arti !== undefined ? data.data.arti : 'Gak Ada Di Kamus KBBI!'}`
				  conn.sendMessage(from, {caption: caption, image: fs.readFileSync('./media/kbbi.png')}, {quoted: msg})
				})
				limitAdd(sender, limit)
				break
			case prefix+'cecan': case prefix+'cewek':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cecan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
			case prefix+'cogan': case prefix+'cowok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cogan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
				break
case prefix+'naruto':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/naruto`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Naruto", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'yaoi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Yaoi", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'loli':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["loli","loli chan","loli anime","loli hd","loli aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/loli`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Loli Chan", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'waifu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["waifu","waifu aesthetic","waifu hd"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/waifu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Waifu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'husbu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["husbu anime","husbu hd","husbu aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/husbu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Husbu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
			// Search Menu
			case prefix+'grupwa': case prefix+'searchgrup':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				  limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'pinterest':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
				reply(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  conn.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `/pinterest ${q}`, buttonText: { displayText: 'Next Photo ➡️' }, type: 1 }]
					conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
				    limitAdd(sender, limit)
				  }
				})
			    break
		/*	case prefix+'yts': case prefix+'ytsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: msg })
				limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break*/
case prefix+'yts':
case prefix+'ytsearch':
case prefix+'youtubesearch':
case prefix+'search':
case prefix+'yt':
case prefix+'youtube':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	if (args.length < 2) return reply(`Kirim perintah ${command} judul lagunya\nExample : ${command} Dandelion`)
  var teskd = `YOUTUBE SEARCH\n\n`
  yts(q).then ( data => {
  var yte = data.videos
	var jumlah = 15
	var list = []
	for (let i = 0; i < jumlah; i++) {
	list.push({
title: yte[i].title, rowId: `/ytmp3 ${yte[i].url}`, description: `▢ Judul : ${yte[i].title}\n▢ ID : ${yte[i].videoId}\n▢ Channel : ${yte[i].author.name}\n▢ Upload : ${yte[i].ago}\n▢ Ditonton : ${yte[i].views}\n▢ Duration : ${yte[i].timestamp}\n▢ URL : ${yte[i].url}`})
	}
	var sections = [{title: `${ucapanWaktu} ${pushname} 👋`, rows:list}]
  var listms = { text: `*YOUTUBE SEARCH*\n\nBerhasil Menemukan Data\nHasil Pencarian : *${q}*\nSilahkan Pilih`, footer: botName, buttonText: "Click Here", sections }
  conn.sendMessage(from, listms, {quoted:msg})
  }).catch(() => reply(`Maaf Fitur Sedang Di Nonaktifkan Oleh Owner!`))
  limitAdd(sender, limit)
  break
//report
case prefix+'join':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} Link Grup Kamu`)
        reply(`Sukses Kirim Ke Owner, tunggu Laporan 3/4 menitan untuk masukan bot ke grup`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ JOIN GRUP ]*\nLink nya : ${q}`, msg)
        }
        limitAdd(sender, limit)
        break
//game & fun menu
case prefix+'game':
  var sections = [
    {
	title: "GAME BERFIKIR",
	rows: [
	    {title: "Tebak Siapakah Aku? 🎮", rowId: "/siapakahaku", description: "Game Tebak Siapakah Aku, Mainkan Sekarang!!🎮"},
	    {title: "Tebak Gambar 🎮", rowId: "/tebakgambar", description: "Game Tebak Gambar, Tebak Gambarnya Sekarang!!🎮"},
	    {title: "Teka Teki 🎮", rowId: "/tekateki", description: "Game Yang Bikin Kamu Mikir!, Mainkan Sekarang!!🎮"},
	    {title: "Tebak Bendera 🎮", rowId: "/tebakbendera", description: "Siapa Yang Kenal Bendera² Negara Di Dunia?!, Mainkan Sekarang!!🎮"},
	    {title: "Tebak Lagu 🎮", rowId: "/tebaklagu", description: "Siapa Nih Yang Sering Dengar Musik?, Coba Deh Tebak Music Berikut!, Mainkan Sekarang!!🎮"},
	    {title: "Kuis Game 🎮", rowId: "/kuis", description: "Waduhh Ada Kuis Berhadiah Nih!!, Mainkan Sekarang!!🎮"},
	    {title: "Game Susun Kata 🎮", rowId: "/susunkata", description: "Yang Otaknya Nyampe, Coba Dehhh Main Game Ini!, Mainkan Sekarang!!🎮"},
	    {title: "UJIAN!! 🎮", rowId: "/ujian", description: "Soal Ujian Sangat Banyak, Jadilah Pemenangnya!, Mainkan Sekarang!!🎮"},
	    {title: "Game Tebak Kata 🎮", rowId: "/tebakkata", description: "Coba Tebak Kata Berikut, Pasti kamu bingung apa object tersebut!, Mainkan Sekarang!!🎮"},
	]
    },
    {
	title: "GAME TANTANGAN",
	rows: [
	    {title: "TRUTH ❓", rowId: "/truth", description: "Jawab Soal Berikut!"},
	    {title: "DARE ❗", rowId: "/dare", description: "Lakukan Tantangan Berikut"}
	]
    },
]
var listMessage = {
  text: `Game : 13\nAktif Semua ✔️`,
  footer: "Follow My Instagram :\nhttps://instagram.com/arsrfii",
  title: "JOJO - GAME",
  buttonText: "JOJO - GAME",
  sections
}
conn.sendMessage(from, listMessage, {quoted: msg})
  break
//suit menu
case prefix+'suit':
  var but = [{buttonId: `/sbatu`, buttonText: { displayText: "Batu ✊" }, type: 1 }, {buttonId: `/sgunting`, buttonText: { displayText: "Gunting ✌️" }, type: 1 }, {buttonId: `/skertas`, buttonText: { displayText: "Kertas ✋" }, type: 1 }]
  var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS\nJIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS\n*KAMU MENANG!!*`
conn.sendMessage(from, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik /sgunting, /sbatu, /skertas_", templateButtons: but }, {quoted: msg})
break
case prefix+'sbatu':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG:( !!`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!`]
					const batuh = batu[Math.floor(Math.random() * batu.length)]
					var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
					conn.sendMessage(from, { text: batuh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'sgunting':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG :( !!`]
					const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
					var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
					conn.sendMessage(from, { text: guntingh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'skertas':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG :( !!`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH !!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI !!`]
					const kertash = kertas[Math.floor(Math.random() * kertas.length)]
					var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
					conn.sendMessage(from, { text: kertash2 }, { quoted: msg })
gameAdd(sender, glimit)
break
//akher nsfw
case prefix+'slot':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const pepekk = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🥑 : 🥑 : 🥑 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🌶️ : 🌶️ : 🌶️ Win👑',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
  const kalah = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
 const kalah2 = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
        const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
        const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
        const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
        var slotnya = `*[ 🎰 GAME SLOT 🎰 ]*

${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 🔔 : 🔔 : 🔔`
        var but = [{buttonId: `${command}`, buttonText: { displayText: "Kembali Slot" }, type: 1 }]
conn.sendMessage(from, { text: slotnya, buttons: but, footer: "© Slot By Arasya\n@arsrfii", templateButtons: but }, {quoted: msg})
gameAdd(sender, glimit)
        break
case prefix+'cekme':
  case prefix+'me':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					var hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					var bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
					var wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					var baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = pickRandom(sifat)
					var biho = pickRandom(hoby)
					var bhucin = pickRandom(bukcin)
					var senga = pickRandom(arp)
					var chakep = pickRandom(cakep)
					var baik = pickRandom(baikk)
					var burug = pickRandom(bhuruk)
					var cerdas = pickRandom(cerdhas)
					var berani = pickRandom(berhani)
					var watak = pickRandom(wetak)
					var takut = pickRandom(mengheikan)
					var prof = monospace(`==== CEK @${sender.split('@')[0]} ====

Nama : ${pushname}
Sifat : ${sipat}
Hobby : ${biho}
Bucin : ${bhucin}%
Sange : ${senga}%
Cakep : ${chakep}
Watak : ${watak}
Akhlak Baik : ${baik}%
Akhlak Buruk : ${burug}%
Kecerdasan : ${cerdas}%
Keberanian : ${berani}%
Ketakutan : ${takut}%
=================`)
					 conn.profilePictureUrl(sender, 'image').then( res => conn.sendMessage(from, {caption: prof, image: { url: res }, mentions: [sender]}, {quoted: fake})).catch(() => conn.sendMessage(from, {caption: prof, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}, mentions: [sender]}, {quoted: msg}))
				    limitAdd(sender, limit)
				    break
case prefix+'sc':
  reply("https://github.com/GetSya/JOJO-MD")
  break
case prefix+'apakah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iyaa', 'Tidak', 'iya kali','engga']
					const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'bisakah':
  case prefix+'bisa':
    case prefix+'bisagak':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'bagaimanakah':
  case prefix+'gimanakah':
    case prefix+'gimana':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'rate':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					var raa = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = raa[Math.floor(Math.random() * raa.length)]
conn.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'gantengcek':
  case prefix+'cekganteng':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Arasya`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'cantikcek':
  case prefix+'cekcantik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Arasya`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'sangecek':
  case prefix+'ceksange':
    case prefix+'gaycek':
      case prefix+'cekgay':
        case prefix+'lesbicek':
          case prefix+'ceklesbi':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${randomNomor(1, 100)}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'kapankah':
  case prefix+'kapan':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['Kapan yaa','Jam 11 Malam','Lusa','besok','5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'truth':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(`*_TRUTH_* Jawablah Dengan Jujur`)
  var truth = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?','Pernah gak sih ngeliat dia lagi sama yg lain?']
  var caption = pickRandom(truth)
  conn.sendMessage(from, {caption: `[ TRUTH!! ]\n${caption}`, image: fs.readFileSync('media/truthdare.jpg')}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'dare':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(`*_DARE_* Lakukan Tantangan Yang Diberikan Oleh Bot!`)
  var dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
  var caption = pickRandom(dare)
  conn.sendMessage(from, {caption: `[ DARE!! ]\n${caption}`, image: fs.readFileSync('media/truthdare.jpg')}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'mancing':
  case prefix+'mancingikan':
    case prefix+'memancing':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (isPlayGame(from, pancing)) return conn.reply(from, `Ada Yg lagi Mancing!!`, pancing[getGamePosi(from, pancing)].msg)
  var duid = randomNomor(100, 500)
   var fishing = ["Yah Kamu Hanya Mendapatkan 🗑️","Yah Kamu Hanya Mendapatkan 🔌","Yah Kamu Hanya Mendapatkan 🧷","Yah Kamu Hanya Mendapatkan 🧤","Yah Kamu Hanya Mendapatkan 👙","Yah Kamu Hanya Mendapatkan 📯","Yah Kamu Hanya Mendapatkan 💣","Yah Kamu Hanya Mendapatkan 🥄","Yah Kamu Hanya Mendapatkan 🐜","Yah Kamu Hanya Mendapatkan 🦗","Yah Kamu Hanya Mendapatkan 🐌","Yah Kamu Hanya Mendapatkan ⚓","Yah Kamu Hanya Mendapatkan 🚽","Yah Kamu Hanya Mendapatkan 🛁","Yah Kamu Hanya Mendapatkan 🎩","Yah Kamu Hanya Mendapatkan 🏓","Yah Kamu Hanya Mendapatkan 🎲","Yah Kamu Hanya Mendapatkan 🎗️","Yah Kamu Hanya Mendapatkan 🎃","Yey Kamu mendapatkan 🐟","Yey Kamu mendapatkan 🐠","Yey Kamu mendapatkan 🐡","Yey Kamu mendapatkan 🐬","Yey Kamu mendapatkan 🐳","Yey Kamu mendapatkan 🦈","Yey Kamu mendapatkan 🦐","Yey Kamu mendapatkan 🐙","Yey Kamu mendapatkan 🐋","Yey Kamu mendapatkan 🦑","Yey Kamu mendapatkan 💎","Yey Kamu mendapatkan 🏅"]
  var random1 = pickRandom(fishing)
  reply(`_Siap Memancing!_`)
  addBalance(sender, duid, balance)
  setTimeout( () => {
   reply(monospace(random1) + `\nDan Kamu Mendapatkan $${duid} balance`) // ur cods
   }, 18000) // 1000 = 1s,
   setTimeout( () => {
   reply('_Menunggu Ikan Datang..._ 💤') // ur cods
   }, 12000) // 1000 = 1s,
   setTimeout( () => {
   reply('_Melempar Kail_ 🎣') // ur cods
   }, 5000) // 1000 = 1s,
   setTimeout( () => {
   reply('_Memasang Umpan_ 🐛') // ur cods
   }, 2500) // 1000 = 1s,
   addPlayGame(from, 'Mancing Ikan', pancing)
   gameAdd(sender, glimit)
  break
			case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length !== 1) {
				if (mentionByTag[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(500, 550)
				     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
					 gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
			case prefix+'tebakgambar':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
			    addCountCmd('#tebakgambar', sender, _cmd)
				var tg = JSON.parse(fs.readFileSync('./fitur/tebakgambar.json'))
				var data = pickRandom(tg)
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nDeskripsi : ${data.deskripsi}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {caption: teks, image: {url: data.img}}, {quoted: msg})
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'TEBAK KATA', jawab, gamewaktu, res, tebakgambar)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebakkata':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, kuiscuy)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, kuiscuy[getGamePosi(from, kuiscuy)].msg)
			    addCountCmd('#tebakkata', sender, _cmd)
				var kuisnya = JSON.parse(fs.readFileSync('./fitur/tebakkata.json'))
				var kukus = pickRandom(kuisnya)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK KATA*\n\n`+monospace(`Soal : ${kukus.soal}\nPetunjuk : ${kukus.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'TEBAK KATA', jawab, gamewaktu, res, kuiscuy)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'susunkata':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, susun)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, susun[getGamePosi(from, susun)].msg)
			    addCountCmd('#susunkata', sender, _cmd)
				var ngen = JSON.parse(fs.readFileSync('./fitur/susunkata.json'))
				var kukus = pickRandom(ngen)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK KATA*\n\n`+monospace(`Susunlah Kalimat Berikut :\n${kukus.soal}\nPetunjuk : ${kukus.tipe}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'Susun Kalimat', jawab, gamewaktu, res, susun)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebakbendera':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tb)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tb[getGamePosi(from, tb)].msg)
				var teben = JSON.parse(fs.readFileSync('./fitur/tebakbendera.json'))
				addCountCmd('#tebakbendera', sender, _cmd)
				var kukus = pickRandom(teben)
				  kukus.name = kukus.name.split('Jawaban ').join('')
				  var teks = `*TEBAK BENDERA*\n\n`+monospace(`Petunjuk : ${kukus.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nFlag Code : ${kukus.flag}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {caption: teks, image: {url: kukus.img}}, {quoted: msg})
				  .then( res => {
					var jawab = kukus.name.toLowerCase()
					addPlayGame(from, 'TEBAK BENDERA', jawab, gamewaktu, res, tb)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'kuis':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebaktebakan)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebaktebakan[getGamePosi(from, tebaktebakan)].msg)
			    addCountCmd('#kuis', sender, _cmd)
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tebaktebakan.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*KUIS GAME*\n\n`+monospace(`Soal : ${hayo.soal}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'KUIS GAME', jawab, gamewaktu, res, tebaktebakan)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'ujian': case prefix+'asahotak':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, ujian)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, ujian[getGamePosi(from, ujian)].msg)
			    addCountCmd('#ujian', sender, _cmd)
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/asahotak.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*ASAH OTAK 🤯*\n\n`+monospace(`Soal : ${hayo.soal}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'ASAH GAME', jawab, gamewaktu, res, ujian)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tekateki':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tekateki)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tekateki[getGamePosi(from, tekateki)].msg)
			    addCountCmd('#tekateki', sender, _cmd)
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tekateki.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*TEKA TEKI*\n\n`+monospace(`Soal : ${hayo.soal}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'TEKA TEKI', jawab, gamewaktu, res, tekateki)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebaklagu':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebaklagu)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebaklagu[getGamePosi(from, tebaklagu)].msg)
			    addCountCmd('#tebaklagu', sender, _cmd)
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tebaklagu.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.judul = hayo.judul.split('Judul ').join('')
				  var teks = `*TEBAK LAGU*\n\n`+monospace(`Tebak Lagu Berikut\nArtis : ${hayo.penyanyi}\nPetunjuk : ${hayo.judul.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  conn.sendMessage(from, {audio: {url: hayo.link}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.judul.toLowerCase()
					addPlayGame(from, 'TEBAK LAGU', jawab, gamewaktu, res, tebaklagu)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'siapakahaku':
  case prefix+'siapaaku':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, siapaaku)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, siapaaku[getGamePosi(from, siapaaku)].msg)
			    addCountCmd('#siapakahaku', sender, _cmd)
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/siapakahaku.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*Siapa Aku?*\n\n`+monospace(`Soal : ${hayo.soal}\nNomor Soal Ke : ${hayo.index}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'Siapa Aku?', jawab, gamewaktu, res, siapaaku)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebakkimia':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakkimia)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakkimia[getGamePosi(from, tebakkimia)].msg)
			    addCountCmd('#tebakkimia', sender, _cmd)
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tebakkimia.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.unsur = hayo.unsur.split('Jawaban ').join('')
				  var teks = `*TEKA TEKI*\n\n`+monospace(`Soal : Apa Kepanjangan Dari Unsur ${hayo.lambang}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.unsur.toLowerCase()
					addPlayGame(from, 'TEBAK KIMIA', jawab, gamewaktu, res, tebakkimia)
					gameAdd(sender, glimit)
				  })
			    break
			// Group Menu
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(`Link Grup *${groupMetadata.subject}*\n` + url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'group': case prefix+'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				addCountCmd('#hidetag', sender, _cmd)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem }, {quoted: fdoc})
			    break
case prefix+'tovn':
  if (!isQuotedAudio)return reply(`Reply Audionya!`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(mess.wait)
if (isQuotedAudio) {
var media = await downloadAndSaveMediaMessage('audio', 'audio.mp3')
conn.sendMessage(from, {audio: {url: media}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})}
limitAdd(sender, limit)
break
case prefix+'infogc':
  case prefix+'infogrup':
    case prefix+'grupinfo':
      case prefix+'infogroup':
        case prefix+'groupinfo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isGroup)return reply(mess.OnlyGrup)
  var owngc = groupMetadata.owner
  var caption = `*[ ${groupMetadata.subject} ]*\n\n*Nama Grup :* ${groupMetadata.subject}\n*Pemilik Grup :* @${owngc.split("@")[0]}\n*Di Buat Pada :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Jumlah Member :* ${groupMembers.length}\n*Jumlah Admin :* ${groupAdmins.length}\n*Antilink :* ${isAntiLink ? 'Aktif ✔️' : 'Gak Aktif ✖️'}\n*Deskripsi :* ${groupMetadata.desc}`
  conn.profilePictureUrl(from, 'image').then( res => conn.sendMessage(from, {caption: caption, image: { url: res }, mentions: [owngc]}, {quoted: msg})).catch(() => conn.sendMessage(from, {caption: caption, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}, mentions: [owngc]}, {quoted: msg}))
  limitAdd(sender, limit)
  break
case prefix+'antilink':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Antilink grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Antilink grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)
                }
                break
case prefix+'tagall':
      if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
     var mems = []
      var teks = `╔══ *TAG MEMBER*\n╠ Pesan : ${q !== undefined ? q : `Pesan Tidak Ada`}\n║\n`
      for (let i of groupMembers) {
        teks += `╠ ≻ @${i.id.split("@")[0]}\n`
        mems.push(i.id)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: msg })
      break
case prefix+'listadmin':
  if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
   var mems = []
      var teks = `*[ TAG ADMIN ]*\n${q !== undefined ? q : `Pesan Tidak Ada`}\n`
      for (let i of groupAdmins) {
        teks += `≻ @${i.split("@")[0]}\n`
        mems.push(i)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: msg })
      break
case prefix+'promote':
  case prefix+'admin':
    case prefix+'pm':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "promote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "promote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dijadikan admin grup`)
    }
    break

case prefix+'demote':
  case prefix+'unadmin':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "demote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "demote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan admin yang ingin diturunkan menjadi member`)
    }
    break
case prefix+'kick':
  if (!isOwner)return reply('Fitur Dilarang, Menyebabkan Nomer Bot Terblock!')
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break

case prefix+'add':
  if (!isOwner)return reply('Fitur Dilarang, Menyebabkan Nomer Bot Terblock!')
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
			// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 500)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6281319944917 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`, [mentioned[0]])
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			  addCountCmd('#balance', sender, _cmd)
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
case prefix+'judibalance':
  case prefix+'judi':
    case prefix+'duithoki':
    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game Judi Telah Habis, Beli Limit Rp.5.000 Ke owner`)
  var hokinya = ["10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","15","25","35","45","55","65","1000","2000","2000","2000","2000","3000","10000","2000","2000","2000","2000","3000","10000","10000","100000","100000","100000","1000","2000","2000","2000","2000","3000","10000","2000","2000","2000","2000","3000","10000","10000","100000","100000","100000","100000","100000","100000","100000","1000","2000","2000","2000","2000","3000","10000","2000","2000","2000","2000","3000","10000","10000","100000","100000","100000","100000","100000","100000","100000000000000000000","100000000000000000000"]
  var gakhoki = ["10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","10","20","30","40","50","60","10","15","25","35","45","55","65","10","15","25","35","45","55","65","1000","2000","2000","2000","2000","3000","10000","2000","2000","2000","2000","3000","10000","10000","100000","100000","100000","1000","2000","2000","2000","2000","3000","10000","2000","2000","2000","2000","3000","10000","10000","100000","100000","100000","100000","100000","100000","100000","1000","2000","2000","2000","2000","3000","10000","2000","2000","2000","2000","3000","10000","10000","100000","100000","100000","100000","100000","100000","100000000000000000000","100000000000000000000"]
  var data = pickRandom(hokinya)
  var data2 = pickRandom(gakhoki)
  addBalance(sender, parseInt(data), balance)
  kurangBalance(sender, parseInt(data2), balance)
  var cpt = `*[ 🎰 DUIT HOKI 🎰 ]*\n\nHallo *@${sender.split("@")[0]}*\nMendapatkan : *$${data}* Balance\nMengurangi : - *$${data2}* Balance`
  var judi = [{buttonId: `${command}`, buttonText: { displayText: "Next ➡️" }, type: 1 }]
  conn.sendMessage(from, { text: cpt, buttons: judi, footer: `Jangan Judi!, Bakal Suram🗿`, mentions: [sender]})
  gameAdd(sender, glimit)
  break
//nsfw
case prefix+'pussy':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var pussy = JSON.parse(fs.readFileSync('./fitur/nsfw/pussy.json'))
var hasil = pickRandom(pussy)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break
case prefix+'masturbation':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var masturbation = JSON.parse(fs.readFileSync('./fitur/nsfw/masturbation.json'))
var hasil = pickRandom(masturbation)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'hentai':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'blowjob':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var bj = JSON.parse(fs.readFileSync('./fitur/nsfw/blowjob.json'))
var hasil = pickRandom(bj)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'bdsm':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var bdsm = JSON.parse(fs.readFileSync('./fitur/nsfw/bdsm.json'))
var hasil = pickRandom(bdsm)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
if (!isPremium)return reply(mess.OnlyPrem)

  reply(mess.wait)

var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'ass':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var ass = JSON.parse(fs.readFileSync('./fitur/nsfw/ass.json'))
var hasil = pickRandom(ass)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'ahegao':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
var ahegao = JSON.parse(fs.readFileSync('./fitur/nsfw/ahegao.json'))
var hasil = pickRandom(ahegao)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'realistic':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
if (!text1 && !text2) return reply(`Masukan Text, Contoh : ${command} Arasya|Rafi`)
if (!text2) return reply(`Masukan Text Satu Lagi`)
reply(mess.wait)
thiccysapi.textpro(`https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html`, [text1,text2]).then ( data => { conn.sendMessage(from, {caption: `Done @${sender.split("@")[0]}`, image: {url: data}, mentions: [sender]}, {quoted: msg})}).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case prefix+'neondevil':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
if (args.length < 2) return reply(`Masukan Text!\n${command} Arasya`)
thiccysapi.textpro(`https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`, q).then ( data => { conn.sendMessage(from, {caption: `Done @${sender.split("@")[0]}`, image: {url: data}, mentions: [sender]}, {quoted: msg})}).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case prefix+'blackpink':
  case prefix+'bp':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Masukan Text!\n${command} Arasya`)
    reply(mess.wait)
    xfar.maker.textpro(`https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html`, q).then ( data => {
conn.sendMessage(from, {caption : `Done @${sender.split("@")[0]}`, image: {url: data.result}, mentions: [sender]}, {quoted: msg})}).catch(() => reply(mess.error.lv))
limitAdd(sender, limit)
break
case prefix+'glitch':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Masukan Text!\n${command} Arasya`)
    reply(mess.wait)
xfar.maker.ephoto(`https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html`, q).then ( data => {
conn.sendMessage(from, {caption: `Done @${sender.split("@")[0]}`, image: {url: data.result}, mentions: [sender]}, {quoted: msg})}).catch(() => reply(mess.error.lv))
limitAdd(sender, limit)
break
case prefix+'skyshadow':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!q) return reply(`Masukan Text!\n${command} Arasya`)
    reply(mess.wait)
xfar.maker.photooxy(`https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html`, q).then ( data => {
conn.sendMessage(from, {caption: `Done @${sender.split("@")[0]}`, image: {url: data.result}, mentions: [sender]})}).catch(() => reply(mess.error.lv))
limitAdd(sender, limit)
break
case prefix+'ttp':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Masukan Text!\n${command} Arasya`)
    reply(mess.wait)
xfar.maker.ttp(q).then ( data => { 
conn.sendMessage(from, {caption: `Text To Png`, image: {url: data.result}}, {quoted: msg})}).catch(() => reply(mess.error.lv))
limitAdd(sender, limit)
break
/*case prefix+'listquran':
  var listquran = `*[ LIST QURAN ]*

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82.Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)`
  textImg(listquran)*/
  break
case prefix+'darkjokes': case prefix+'dark': case prefix+'darkjoke': case prefix+'meme': case prefix+'memeindo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var darkjoke = JSON.parse(fs.readFileSync('./lib/darkjokes.js')) // posisinya sesuain
var hasil = pickRandom(darkjoke)
conn.sendMessage(from, {caption: 'Ancrit', image: {url: hasil.result}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'readmore':
  case prefix+'more':
    if (args.length < 2) return reply(`Kirim perintah ${command} Text1|Text2`)
    var read = q.split('|')[0] ? q.split('|')[0] : q
                var morr = q.split('|')[1] ? q.split('|')[1] : ''
    var retmor = `${read}${readmore}${morr}`
    conn.sendMessage(from, { text: retmor}, { quoted: msg })
    break
case prefix+'qrcode':
  case prefix+'qr':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} ${botName}`)
    reply(`Membuat Qr Code`)
    conn.sendMessage(from, {caption: `Sukses Membuat *QR CODE* ^_^\n@${sender.split("@")[0]} Jangan Lupa Follow instagram : ${ig}`, image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=790x790&data=${q}`}, mentions: [sender]}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'cersex':
  if (!isPremium)return reply(mess.OnlyPrem)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
  var caption = `*[ CERSEX ]*\n\n*Judul* : ${data.result.judul}\n*Cerita* : ${data.result.cersex}\n${readmore} *JOJOBOT*`
  conn.sendMessage(from, {caption: caption, image: {url: data.result.img}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'cerpen':
  case prefix+'randomcerpen':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  ra.RandomCerpen().then ( data => {
    var capt = `*[ CERPEN ]*\n*Judul :* ` + monospace(data.data.judul) + `\n*Cerita :* ${data.data.cerita}`
reply(capt)}).catch(() => reply(mess.error.api))
  limitAdd(sender, limit)
  break
case prefix+'searchfilm':
  case prefix+'film':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    ra.SearchFilm(q).then ( data => {
      reply(`Mencari Film ${q}`)
      conn.sendMessage(from, {caption: `*[ SEARCH FILM ]*\nNama Film : ${q}\nLink Nonton : ${data[0].link}\nQuality : ${data[0].quality}`, image: {url: data[0].thumb}}, {quoted: msg})
    }).catch(() => reply(`Film ${q} Tidak Ditemukan`))
    limitAdd(sender, limit)
break
case prefix+'faktaunik':
  case prefix+'faktamenarik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`)
var caption = `Tahukah kamu?
${data.result}`
var but = [{buttonId: `${command}`, buttonText: { displayText: "Fakta Unik" }, type: 1 }]
conn.sendMessage(from, { text: caption, buttons: but, footer: botName, templateButtons: but }, {quoted: msg})
limitAdd(sender, limit)
break
/*case prefix+'react':
  case prefix+'reaction':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
 conn.sendMessage(from, { react: { text: `${q}`, key: msg.key }})
 limitAdd(sender, limit)
 break*/
 //BOLEH DI AKTIFIN JIKA MENGGUNAKAN HEROKU
case prefix+'halah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'a'))
  limitAdd(sender, limit)
  break
case prefix+'hilih':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'i'))
  break
case prefix+'huluh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'u'))
  limitAdd(sender, limit)
  break
case prefix+'heleh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'e'))
  limitAdd(sender, limit)
  break
case prefix+'holoh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'o'))
  limitAdd(sender, limit)
  break
  case prefix+'translate':
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	if (!isQuotedMsg) return reply(`Reply Message nya!\nContoh Penggunaan : ${prefix}translate id en`)
	if (!args[1]) return reply(`Dari bahasa apa?`)
	if (!args[2]) return reply(`Mau Di translate ke bahasa apa?`)
	 var quoted = quotedMsg.chats
var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${quoted}&from=${args[1]}&to=${args[2]}`)
conn.sendMessage(from, {text: data.translated_text}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'wiki':
	case prefix+'wikipedia':
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		if (args.length < 2) return reply(`Kirim perintah ${command} Pencarian`)
		reply(`Sedang mencari ${q}`)
		wikiSearch(q).then ( data => {
			var caption = `*JUDUL* : ${q}\n*PENJELASAN* : ${data[0].wiki}`
			conn.sendMessage(from, {caption: caption, image: {url: data[0].thumb}}, {quoted: msg})
		})
		limitAdd(sender, limit)
		break
case prefix+'asupan':
  if (!isPremium)return reply(mess.OnlyPrem)
  reply(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./fitur/asupan.json'))
var hasil = pickRandom(asupan)
conn.sendMessage(from, {video: {url: hasil.url}}, {quoted: msg})
break
case prefix+'dadu':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var dadu = JSON.parse(fs.readFileSync('./fitur/dadu.json'))
var hasil = pickRandom(dadu)
conn.sendMessage(from, {sticker: {url: hasil.url}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'getpp':
case prefix+'getprofile':
  case prefix+'getpic':
if (!isQuotedMsg) return reply(`Reply Message nya!`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
conn.profilePictureUrl(quotedMsg.sender, 'image').then( res => conn.sendMessage(from, {caption: `Done @${sender.split("@")[0]}`, image: { url: res }, mentions: [sender]}, {quoted: msg})).catch(() => conn.sendMessage(from, {caption: `No Pict Profile Or Private.`, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: msg}))
limitAdd(sender, limit)
break
case prefix+'suratto':
  case prefix+'surat':
    case prefix+'menfes':
      case prefix+'menfess':
    if (isGroup)return reply(`Hanya Bisa Di Gunakan Di Private Message!`)
    if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Suratnya\nContoh ${command} 62813199449171|Anjing\n\nAWALI DENGAN 62!`)
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var number = q.split('|')[0] ? q.split('|')[0] : q
                var text = q.split('|')[1] ? q.split('|')[1] : ''
                if (isNaN(number)) return reply(`Nominal harus berupa angka!`)
                mentions(`*Succes Sending Message!*\nInfo Bot Please Contact Owner : @${ownerNumber[0].split("@")[0]}`, [ownerNumber[0]])
                var caption = `*[ FITUR BOT MENFESS/SURAT ]*\nDari : Tidak Diketahui\nUntuk : Kamu\nPesan : *${text}*`
conn.sendMessage(`${number}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/surat.jpeg')})
limitAdd(sender, limit)
break
case prefix+'report':
  case prefix+'lapor':
    case prefix+'chatown':
    if (args.length < 2) return reply(`Silahkan Masukan Laporan nya, Contoh : ${command} Ada Bug Di fitur <fitur>`)
    var salin = [
{ urlButton: { displayText: `SALIN NOMER`, url : `https://www.whatsapp.com/otp/copy/${sender.split("@")[0]}`}},
]
                reply(`Laporan Telah Di Kirimkan Oleh ke Owner, Laporan main² atau palsu akan di banned!`)
conn.sendMessage(ownerNumber[0], {text: `*[ PANGGILAN USER ]*\n\n*Pesan :* ${q}`, templateButtons: salin, footer: botName, mentions: [sender]} )
sendContact(ownerNumber[0], sender.split("@")[0], pushname, msg)
break
case prefix+'gombal':
  case prefix+'gombalan':
    var gombal = JSON.parse(fs.readFileSync('./fitur/gombalan.json'))
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var hasil = pickRandom(gombal)
var gom = [
			{ quickReplyButton: { displayText: `Next Gombalan ➡️`, id: `${command}` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: gom, footer: `Cie Di Gombal Robot\n~ Instagram : @arsrfii`, mentions: [sender]} )
limitAdd(sender, limit)
break
case prefix+'textchat':
  if (!isOwner) return reply(mess.OnlyOwner)
  if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Laporan nya\nContoh ${command} 62813199449171|Anjing\n\nAWALI DENGAN 62!`)
  var nomorcuy = q.split('|')[0] ? q.split('|')[0] : q
                var okecuy = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
conn.sendMessage(`${nomorcuy}@s.whatsapp.net`, {text: `*[ DARI OWNER ]*\nPesan Dari Owner : *${okecuy}*\nThanks For Using ${botName}!`, mentions: [sender]})
break
case prefix+'lirik':
  if (args.length < 2) return reply(`kirim Perintah ${command} Judul Lagu`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(mess.wait)
  lirikLagu(q).then ( data => {
    var caption = `*[ > 🎵 LIRIK LAGU 🎵 < ]*\n\n*Lirik :* ${data[0].result}`
    conn.sendMessage(from, {text: caption}, {quoted: msg})
    limitAdd(sender, limit)
  }).catch(() => reply(`Lagu ${q} Tidak Di Temukan`))
  break
case prefix+'ppcp':
  case prefix+'ppcouple':
    case prefix+'couple':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      var data = JSON.parse(fs.readFileSync('./fitur/couple.json'))
      var data2 = pickRandom(data)
      conn.sendMessage(from, {image: {url: data2.male}, caption: `Cowo`}, {quoted: msg})
      conn.sendMessage(from, {image: {url: data2.female}, caption: `Cewe`}, {quoted: msg})
      limitAdd(sender, limit)
      break
case prefix+'sendvirus':
  case prefix+'sendvirtex':
  case prefix+'sv':
  if (!isOwner)return reply(mess.OnlyOwner)
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/1.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/2.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/3.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/4.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/virtex.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/1.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/2.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/3.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/4.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/virtex.txt')})
  reply(`succes mengirim virus ke nomer ${q}`)
  break
case prefix+'kontak':
  if (args.length < 2) return reply(`kirim Perintah ${command} Nomer Kontak|Nama Kontak\nContoh ${command} 62882938293|${pushname}`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var nom = q.split('|')[0] ? q.split('|')[0] : q
                var or = q.split('|')[1] ? q.split('|')[1] : ''
  sendContact(from, `${nom}@s.whatsapp.net`, or, msg)
  limitAdd(sender, limit)
  break
case prefix+'encode':
if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}ebinary *text*\nContoh: ${prefix}ebinary hello world`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
function encodeBinary(char) {
return char.split("").map(str => {
const converted = str.charCodeAt(0).toString(2);
return converted.padStart(8, "0");
}).join(" ")
}
reply(encodeBinary(q))
break
case prefix+'decode':
if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}debinary *text*\nContoh: ${prefix}debinary 01110100 01100101 01110011`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
function decodebinary(char) {
return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
}
reply(decodebinary(q))
break
default:

		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}
