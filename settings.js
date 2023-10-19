const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6281351692548'] //ur owner number
global.ownernomer = "6281351692548" //ur owner number2
global.ownername = "Kyuu444" //ur owner name
global.ytname = "YT: Kyuu444" //ur yt chanel name
global.socialm = "GitHub: Kyyyxd" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "-"
global.botname = "Created By Kyuu"
global.ownerNumber = ["254740279985"]
global.ownerweb = "https://youtube.com/@YTKyuuTense"
global.themeemoji = '🪀'
global.wm = "kyuu.my.id"
global.packname = "Sticker By"
global.author = "Kyuu444\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = '' // id location

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/c2e84a4776ee6c47aa3a5.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
