exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sɪsᴀ ʟɪᴍɪᴛ ᴀɴᴅᴀ : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`ᴍᴀᴀғ ${pushname} ʟɪᴍɪᴛ ʜᴀʀɪ ɪɴɪ ᴛᴇʟᴀʜ ʜᴀʙɪs\nʟɪᴍɪᴛ ᴅɪ ʀᴇsᴇᴛ sᴇᴛɪᴀᴘ ᴊᴀᴍ 𝟸𝟺:𝟶𝟶`
}
exports.noregis = (pushname) =>{
	return`ʜᴀʟᴏ ${pushname} ᴀɴᴅᴀ ʙʟᴜᴍ ᴠᴇʀɪғʏ ᴅɪ ʟᴇᴏɴ sɪʟᴀᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ ᴜɴᴛᴜᴋ ᴅᴀғᴛᴀʀ ᴀɴᴅᴀ`
	}
exports.regis = () =>{
	return`ᴀɴᴅᴀ sᴜᴅᴀʜ ᴠᴇʀɪғʏ ᴊᴀᴅɪ ᴊᴀɴɢᴀɴ ᴠᴇʀɪғʏ ʟᴀɢɪ 😊`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *𝘗𝘌𝘕𝘋𝘈𝘍𝘛𝘈𝘙𝘈𝘕 𝘉𝘌𝘙𝘏𝘈𝘚𝘐𝘓*

◪ ɴᴀᴍᴀ : ${pushname}
◪ ɴᴏᴍᴏʀ : ${sender.split("@")[0]}
◪ ᴡᴀᴋᴛᴜ : ${time}
◪ sᴇʀɪᴀʟ : ${serialUser}

ᴛᴇʀɪᴍᴀᴋᴀsɪʜ sᴜᴅᴀʜ ᴅᴀғᴛᴀʀ ʟᴇᴏɴʙᴏᴛ sɪʟᴀᴋᴀɴ ᴋᴇᴛɪᴋ .ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ʟɪʜᴀᴛ ғɪᴛᴜʀ
`
	}
exports.owner = (botname) =>{
	return`「✖️」 ᴄᴏᴍᴍᴀɴᴅ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ${botname}`
	}
exports.admin = (groupName) =>{
	return`「✖️」 ᴄᴏᴍᴍᴀɴᴅ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ${groupName}`
	}
exports.adminB = () =>{
	return`「⚠️」  ʟᴇᴏɴ sᴜᴢᴜᴋɪ ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ`
	}
exports.err = () =>{
	return`「⚠️」 ᴍᴀᴀғ ғɪᴛᴜʀ sᴇᴅᴀɴɢ ᴇʀʀᴏʀ`
	}
exports.group = () =>{
	return`「✖」 ᴄᴏᴍᴍᴀɴᴅ ᴋʜᴜsᴜs ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ`
	}

exports.wait = () =>{
	return`「⏱」ʟᴇᴏɴʙᴏᴛ sᴇᴅᴀɴɢ ᴘʀᴏsᴇs ʜᴀʀᴀᴘ sᴀʙᴀʀ ᴋᴀʟᴏ ɢᴀᴋ ᴍᴜɴᴄᴜʟ ᴍᴜɴɢᴋɪɴ ᴇʀʀᴏʀ`
	}
exports.ok = () =>{
	return` 「✔」 sᴜᴋsᴇs`
	}
exports.welcome = () =>{
	return`ᴍᴇᴍʙᴇʀ ʙᴀʀᴜ ᴡᴀᴊɪʙ ɪsɪ ɪɴᴛʀᴏ 👇
├ ɴᴀᴍᴀ : 
├ ᴜᴍᴜʀ :
├ ᴋᴇʟᴀs :
├ ᴀsᴋᴏᴛ :
├ ɢᴇɴᴅᴇʀ :
└─ sᴇᴍᴏɢᴀ ʙᴇᴛᴀʜ ʏᴀᴋ >.<`
      }
exports.leave = () =>{
	return`
├
└─ ᴊᴀɴɢᴀɴ ʙᴀʟɪᴋ ʟᴀɢɪ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`ʜɪ ${pushname}, sᴇʟᴀᴍᴀᴛ ${salam}

  • ɴᴀᴍᴀ sᴀʏᴀ ʟᴇᴏɴ sᴜᴢᴜᴋɪ ʙᴏᴛ ᴅɪ ᴘᴀɴɢɢɪʟ ʟᴇᴏɴ / ʟᴇᴏ   
  • ᴍᴇɴᴜ ɪɴɪ ᴇᴍɢ ᴅɪᴋɪᴛ ᴊᴀᴅɪ ʏɢ ᴀᴅᴀ ᴀᴊᴀ ʏᴀ ᴍᴇɴᴜ ɴʏᴀ >.<   
  • ғᴏʟʟᴏᴡ ɢɪᴛʜᴜʙ : 「github.com/LyliaSasha」


╭─⬣ *𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮*
│ • ${prefix}ᴍᴇɴᴜ
│ • ${prefix}ʜᴇʟᴘ
│ • ${prefix}ʟᴇᴏɴ
│
├ *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
│ • ${prefix}ᴘʟᴀʏ 「ǫᴜᴇʀʏ」
│ • ${prefix}sᴏɴɢ 「ᴊᴜᴅᴜʟ ʟᴀɢᴜ」
│ • ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ 「ǫᴜᴇʀʏ」
│ • ${prefix}ʏᴛᴍᴘ𝟹 「ᴜʀʟ」
│ • ${prefix}ʏᴛᴍᴘ𝟺 「ᴜʀʟ」
│ • ${prefix}ᴛɪᴋᴛᴏᴋ 「ᴜʀʟ」
│ • ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴡᴍ 「ᴜʀʟ」
│ • ${prefix}ᴛɪᴋᴛᴏᴋᴡᴍ「ᴜʀʟ」
│ • ${prefix}ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ 「ᴜʀʟ」
│ • ${prefix}sᴏᴜɴᴅᴄʟᴏᴜᴅ 「ᴜʀʟ」
│ • ${prefix}ᴛᴇʟᴇsᴛɪᴄᴋᴇʀ 「ᴜʀʟ」
│ • ${prefix}sᴘᴏᴛɪғʏ 「ᴜʀʟ」
│ • ${prefix}sᴘᴏᴛɪғʏsᴇᴀʀᴄʜ 「ǫᴜᴇʀʏ」
│ • ${prefix}ɴʜᴇɴᴛᴀɪ 「ᴄᴏᴅᴇ」
│ • ${prefix}ɴʜᴇɴᴛᴀɪᴘᴅғ 「ᴄᴏᴅᴇ」
│ • ${prefix}ɴʜᴇɴᴛᴀɪsᴇᴀʀᴄʜ 「ǫᴜᴇʀʏ」
│
├ *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
│ • ${prefix}sᴛɪᴋᴇʀ 「ᴠɪᴅᴇᴏ/ɪᴍᴀɢᴇ」
│ • ${prefix}sᴇᴍᴏᴊɪ 「😎」
│ • ${prefix}sᴍᴇᴍᴇ 「ᴛᴇxᴛ」
│ • ${prefix}ᴍᴇᴍᴇɢᴇɴ 「ᴛᴇxᴛ|ᴛᴇxᴛ」
│ • ${prefix}ғᴀsᴛ 「ᴠɪᴅᴇᴏ/ᴠɴ」
│ • ${prefix}ᴛᴜᴘᴀɪ 「ᴠɪᴅᴇᴏ/ᴠɴ」
│ • ${prefix}ᴠɪʙʀᴀ 「ᴠɪᴅᴇᴏ/ᴠɴ」
│ • ${prefix}ʀᴏʙᴏᴛ「ᴠɪᴅᴇᴏ/ᴠɴ」
│ • ${prefix}sʟᴏᴡ 「ᴠɪᴅᴇᴏ/ᴠɴ」
│ • ${prefix}ʙᴀss 「ᴠɪᴅᴇᴏ/ᴠɴ」
│ • ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ 「ᴠɪᴅᴇᴏ/ᴠɴ」
│
├ *𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 𝐌𝐞𝐧𝐮*
│ • ${prefix}ɴᴜʟɪsᴋɪʀɪ  「ᴛᴇxᴛ」
│ • ${prefix}ɴᴜʟɪsᴋᴀɴᴀɴ「ᴛᴇxᴛ」
│ • ${prefix}ғᴏʟɪᴏᴋɪʀɪ  「ᴛᴇxᴛ」
│ • ${prefix}ғᴏʟɪᴏᴋᴀɴᴀɴ 「ᴛᴇxᴛ」
│
├ *𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐌𝐞𝐧𝐮*
│ • ${prefix}ʟɪsᴛsᴜʀᴀʜ 
│ • ${prefix}ᴀʟǫᴜʀᴀɴ 
│ • ${prefix}ᴀsᴍᴀᴜʟʜᴜsɴᴀ 
│ • ${prefix}ᴋɪsᴀʜɴᴀʙɪ 
│ • ${prefix}ᴀʟǫᴜʀᴀɴᴀᴜᴅɪᴏ
│ • ${prefix}ᴊᴀᴅᴡᴀʟsʜᴏʟᴀᴛ
│
├ *𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮*
│ • ${prefix}ɴᴀᴍɪ
│ • ${prefix}ᴄᴏᴘᴘᴇʀ
│ • ${prefix}ɴᴀʀᴜᴛᴏ 
│ • ${prefix}ᴢᴏʀᴏ 
│ • ${prefix}ᴜssᴏᴘ  
│ • ${prefix}ᴍɪɴᴀᴛᴏ  
│ • ${prefix}sᴀsᴜᴋᴇ 
│ • ${prefix}sᴀᴋᴜʀᴀ 
│ • ${prefix}ʟᴜғғʏ  
│ • ${prefix}sᴀɴᴊɪ  
│ • ${prefix}ʙᴏʀᴜᴛᴏ 
│ • ${prefix}sᴀʀᴀᴅᴀ  
│ • ${prefix}ᴍɪᴛsᴜᴋɪ 
│ • ${prefix}ᴏʀᴏᴄʜɪᴍᴀʀᴜ 
│ • ${prefix}ᴛsᴜɴᴀᴅᴇ 
│ • ${prefix}ᴋᴀᴋᴀsʜɪ 
│ • ${prefix}ᴋɪʟʟᴜᴀ 
│ • ${prefix}ɢᴏɴ 
│ • ${prefix}ʀɪᴍᴜʀᴜ 
│ • ${prefix}sᴀɢɪʀɪ 
│ • ${prefix}ɴᴀᴛsᴜ 
│ • ${prefix}ᴛᴀɴᴊɪʀᴏᴜ 
│ • ${prefix}ɴᴇᴢᴜᴋᴏ 
│ • ${prefix}sᴇɴᴋᴜ
│
├ *𝐌𝐚𝐤𝐞𝐫 𝐄𝐩𝐡𝐨𝐭𝐨𝟑𝟔𝟎*
│ • ${prefix}ᴡᴇᴛɢʟᴀss
│ • ${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ𝟹ᴅ
│ • ${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ
│ • ${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ
│ • ${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
│ • ${prefix}ʟɪɢʜᴛᴛᴇxᴛ
│ • ${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ
│ • ${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ
│ • ${prefix}ʀᴏʏᴀʟᴛᴇxᴛ
│ • ${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ
│ • ${prefix}ʙɪʀᴛʜᴅᴀʏᴄᴀᴋᴇ
│ • ${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ
│ • ${prefix}ʜᴏʟᴏɢʀᴀᴍ𝟹ᴅ
│ • ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ
│ • ${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ
│ • ${prefix}ɢʀᴇᴇɴʙᴜsʜ
│ • ${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ
│ • ${prefix}ɴᴏᴇʟᴛᴇxᴛ
│ • ${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ
│ • ${prefix}ᴛᴇxᴛᴄᴀᴋᴇ
│ • ${prefix}sᴛᴀʀsɴɪɢʜᴛ
│ • ${prefix}ᴡᴏᴏᴅᴇɴ𝟹ᴅ
│ • ${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ
│ • ${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ
│ • ${prefix}ɢᴀʟᴀxʏʙᴀᴛ
│ • ${prefix}sɴᴏᴡ𝟹ᴅ
│ • ${prefix}ʙɪʀᴛʜᴅᴀʏᴅᴀʏ
│ • ${prefix}ɢᴏʟᴅᴘʟᴀʏʙᴜᴛᴛᴏɴ
│ • ${prefix}sɪʟᴠᴇʀᴘʟᴀʏʙᴜᴛᴛᴏɴ
│ • ${prefix}ғʀᴇᴇғɪʀᴇ
│
├ *𝐌𝐚𝐤𝐞𝐫 𝐓𝐞𝐱𝐭𝐏𝐫𝐨*
│ • ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
│ • ${prefix}ɴᴇᴏɴ
│ • ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ
│ • ${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ
│ • ${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ
│ • ${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ
│ • ${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ
│ • ${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ
│ • ${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ
│ • ${prefix}ɴᴇᴏɴʟɪɢʜᴛ
│ • ${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ
│ • ${prefix}ᴛᴇxᴛ𝟷𝟿𝟷𝟽
│ • ${prefix}ᴍɪɴɪᴏɴ
│ • ${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ
│ • ${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ
│ • ${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ
│ • ${prefix}ʜᴀʟʟᴏᴡᴇᴇɴ
│ • ${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ
│ • ${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ
│ • ${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs
│ • ${prefix}ʙᴏᴋᴇʜ
│ • ${prefix}ᴛᴏxɪᴄ
│ • ${prefix}sᴛʀᴀᴡʙᴇʀʀʏ
│ • ${prefix}ʙᴏx𝟹ᴅ
│ • ${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ
│ • ${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ
│ • ${prefix}ɪᴄᴇᴄᴏʟᴅ
│ • ${prefix}ʟᴜxᴜʀʏ
│ • ${prefix}ᴄʟᴏᴜᴅ
│ • ${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ
│ • ${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ
│ • ${prefix}ᴛʜᴜɴᴅᴇʀ
│
├ *𝐆𝐚𝐦𝐞 𝐌𝐞𝐧𝐮*
│ • ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ 
│
├ *𝐀𝐧𝐢𝐦𝐞 𝐬𝐞𝐚𝐫𝐜𝐡*
│ • ${prefix}ᴄʜᴀʀᴀᴄᴛᴇʀ 「ᴀɴɪᴍᴇ」
│ • ${prefix}ᴀɴɪᴍᴇ 「ǫᴜᴇʀʏ」
│ • ${prefix}ᴍᴀɴɢᴀ 「ǫᴜᴇʀʏ」
│ • ${prefix}ᴋᴜsᴏɴɪᴍᴇ 「ǫᴜᴇʀʏ」
│ • ${prefix}ᴋᴜsᴏɴɪᴍᴇsᴇᴀʀᴄʜ 「ǫᴜᴇʀʏ」
│ • ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ 「ǫᴜᴇʀʏ」
│ • ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜsᴇᴀʀᴄʜ 「ǫᴜᴇʀʏ」 
│
├ *𝐑𝐚𝐧𝐝𝐨𝐦 𝐭𝐞𝐱𝐭*
│ • ${prefix}ᴘᴀɴᴛᴜɴ 
│ • ${prefix}ᴘᴜɪsɪ 
│ • ${prefix}ʙᴜᴄɪɴǫᴜᴏᴛᴇ 
│ • ${prefix}ᴅɪʟᴀɴǫᴜᴏᴛᴇ 
│ • ${prefix}ᴋᴀᴛᴀsᴇɴᴊᴀ 
│ • ${prefix}ᴍᴏᴛɪᴠᴀsɪ
│ • ${prefix}ʀᴀɴᴅᴏᴍǫᴜᴏᴛᴇ
│ • ${prefix}ǫᴜᴏᴛᴇᴍᴜsʟɪᴍ
│ • ${prefix}ǫᴜᴏᴛᴇsɢᴀʟᴀᴜ
│ • ${prefix}ᴄʀᴇᴇᴘʏғᴀᴄᴛ
│ • ${prefix}ᴄᴇʀᴘᴇɴ
│ • ${prefix}ᴄᴇʀsᴇx
│ • ${prefix}ᴄᴇʀsᴇx𝟸
│ • ${prefix}ʜᴜʟᴜʜ 「ᴛᴇxᴛ」
│ • ${prefix}ʜɪʟɪʜ 「ᴛᴇxᴛ」
│ • ${prefix}ʜᴇʟᴇʜ 「ᴛᴇxᴛ」
│ • ${prefix}ʜᴀʟᴀʜ 「ᴛᴇxᴛ」
│ • ${prefix}ʀᴇᴠᴇʀsᴇᴛᴇxᴛ 「ᴛᴇxᴛ」
│ • ${prefix}ᴄᴇʀᴄʀᴇᴇᴘʏ
│ • ${prefix}ғᴀᴋᴛᴀᴜɴɪᴋ
│ • ${prefix}ǫᴜᴏᴛᴇᴛʀᴜᴍᴘ
│ • ${prefix}ᴀɴɪᴍᴇǫᴜᴏᴛᴇ
│ • ${prefix}ᴀɴɪᴍᴇǫᴜᴏᴛᴇ𝟸
│ • ${prefix}ᴛʀᴜᴍᴘᴛʜɪɴᴋ
│
├ *𝐈𝐧𝐟𝐨 𝐋𝐞𝐨𝐧𝐁𝐨𝐭𝐳*
│ • ${prefix}ᴏᴡɴᴇʀ
│ • ${prefix}ᴅᴀғᴛᴀʀ
│
├ *𝐎𝐰𝐧𝐞𝐫 𝐋𝐞𝐨𝐧𝐁𝐨𝐭𝐳*
│ • ${prefix}ʙʀᴏᴀᴅᴄᴀsᴛ 「ᴛᴇxᴛ」
│ • ${prefix}ʟᴇᴀᴠᴇ
│ • ${prefix}ᴀɴᴛɪᴅᴇʟᴇᴛᴇ 「ᴏɴ/ᴏғғ」
│ • ${prefix}ᴀɴᴛɪᴄᴀʟʟ 「ᴏɴ/ᴏғғ」
│ • >
│ • $
│ •  => 
│
├ *𝐆𝐫𝐮𝐩 𝐌𝐞𝐧𝐮*
│ • ${prefix}sɪᴅᴇʀ 「ʀᴇᴘʟʏ ᴘᴇsᴀɴ ʙᴏᴛ」
│ • ${prefix}ʟɪsᴛᴏɴʟɪɴᴇ
│ • ${prefix}ᴅᴇʟᴇᴛᴇ 「ʀᴇᴘʟʏ ᴘᴇsᴀɴ ʙᴏᴛ」
│ • ${prefix}ᴀɴᴛɪʟɪɴᴋ 𝟷/𝟶 
│ • ${prefix}ʜɪᴅᴇᴛᴀɢ 「ᴛᴇxᴛ」
│ • ${prefix}ʟɪɴᴋɢʀᴜᴘ
│ • ${prefix}ᴛᴀɢᴀʟʟ
│ • ${prefix}ᴋɪᴄᴋ @ᴛᴀɢ
│ • ${prefix}sᴇᴛᴅᴇsᴄ 「ᴛᴇxᴛ」 
│ • ${prefix}sᴇᴛɴᴀᴍᴇ 「ᴛᴇxᴛ」 
╰─⬣
`
	}