function colCreator(id, text, date) {

    if (id.endsWith('.gif')) {fileType = 'gif'; lowresFileType = 'gif'; id = id.slice(0, -4);}
    else if (id.endsWith('.webm')) {fileType = 'webm'; lowresFileType = 'webm'; id = id.slice(0, -5);}
    else {fileType = 'png'; lowresFileType = 'webp'}
    

    var idDiv = document.getElementById(id);
    if (date == null) {date = ''; var pathToFile = 'images/yosho/'}
    else if (date === 'bedroom') {date = ''; var pathToFile = 'images/renders/bedroomIsometric/';}
    else {var pathToFile = 'images/renders/'}


    if (fileType === 'webm') {idDiv.innerHTML = `
    <div class="col">
        ${date}<br>
        <video controls width="160px">
            <source src="${pathToFile}lowres/${id}.webm" type="video/webm">
            Your browser does not support the video tag.
        </video><br>
        ${text}
        
    </div>`}

    else {idDiv.innerHTML = `
    <div class="col">
        ${date}
        <a target="_blank" href="${pathToFile}${id}.${fileType}"><img src="${pathToFile}lowres/${id}.${lowresFileType}"></a>
        ${text}
    </div>`}

}


if (document.getElementById('mySonaPage')) {
colCreator('falke1',`
    This is my pfp by <a href="https://www.twitter.com/hyenapaine" target="_blank">@hyenapaine</a> on Twitter1
    `);




colCreator('stickers', `
    <a href="https://t.me/addstickers/yoshomay" target="_blank">Telegram ych stickerpack</a> by PulexArt 
    <a href="https://www.pulexart.com/store/p80/Pride_Stickers_2023.html" target="_blank">(1)</a> 
    <a href="https://www.pulexart.com/store/p97/Pride_Stickers_2024.html" target="_blank">(2)</a>
    <a href="https://www.pulexart.com/store/p26/australian-shepherd.html" target="_blank">(3)</a>
    `);


//  falke 1-4

colCreator('falke2',`
    This is a bday present by Falke uwu
    `);


colCreator('falke3',`
    Sketch by Falke
    `);



colCreator('falke4',`
	Yosho hugging Samyo (by falke)
    `);


// sin 1-4

colCreator('sin1',`
	Gift art by <a href="https://twitter.com/Sinotus13" target="_blank">@Sinotus</a> on Twitter
    `);


colCreator('sin2',`
	Shrug Yosho by Sin
    `);
    

colCreator('sin3',`
	Maid Yosho owo, by Sin
    `);


colCreator('sin4',`
	Bday art by Sin
    `);


//  all of snowy (oh god)


colCreator('snow1',`
    Me chasing Snowy (artist) who's holding <a href="https://instagram.com/oh_mr.worm" target="_blank">Worm</a>.
	No I'm not giving context.
    `);


colCreator('snow2',`
    no cute  by snowy
    `);


colCreator('snow3',`
    Yosho wearing thigh highs &#128563; by Snowy
    `);


colCreator('snow4',`
    Yosho telling <a href="https://ninjago.fandom.com/wiki/Chompy" target="_blank">Chompy</a> to stand down also by snowy
    `);


colCreator('snow5.gif',`
    Yosho mad at Snowy for mewoing also by snowy
    `);


colCreator('snow6', `
    Yosho hugging zer also by snowy
    `);


colCreator('snow7',`
    Yosho bein a cute lil femboy also by snowy
    `);


colCreator('snow8',`
    Yosho stuck in the backrooms, drawn by <a href="https://snowy.epizy.com/" target="_blank">Snowy</a>
    `);


colCreator('snow9',`
    Christmas art of me and <a href="https://snowy.epizy.com/" target="_blank">Snowy</a>
    `);


colCreator('snow10',`
    Bday art by <a href="https://snowy.epizy.com/" target="_blank">Snowy</a>
    `);


colCreator('snow11',`
    Me getting 2<b>69</b> Twitter followers, by <a href="https://snowy.epizy.com/" target="_blank">Snowy</a>
    `);


colCreator('snow12',`
    King Yosho,  by <a href="https://snowy.epizy.com/" target="_blank">Snowy</a>
    `);


colCreator('snow13',`
    Maid Yosho and <a href="https://snowy.epizy.com/" target="_blank">Snowy</a> &#128563;
    `);


colCreator('snow13_5',`
    Yosho and Snowy outrunning the cops in gta
    `);


colCreator('snow14',`
    Hug
    `);


colCreator('snow15',`
    <br>Yosho doing the <a href="https://combineoverwiki.net/wiki/Category:Half-Life_promotional_artwork#/media/File:Gordon_HL1_promo.jpg" target="_blank">
        Half Life 1 promotional artwork</a> pose<br>
    `);


colCreator('snowReal16',`
    No thoughts canines
    `);
    

colCreator('snow16',`
    Snowy (rudely) booping Yosho
    `);


colCreator('snow17',`
    Sunset art
    `);


colCreator('snow18',`
    Drawover of a Minecraft screenshot
    `);


colCreator('snow19',`
    Redraw of the socks
    `);


colCreator('snow20',`
    He's secretly scared
    `);


colCreator('snow21',`
    Drawover of a Twitter thing from January
    `);


colCreator('snow22',`
    Cuddles
    `);


colCreator('holdingHands',`
    The two gay's being gay
    `);    


colCreator('snow23',`
    Beam struggle from Dragon Ball Z
    `);

    
colCreator('snow24',`
    Jujutsu Kaisen drawover
    `);


colCreator('snow25',`
    owo
    `);


colCreator('snowyRacism.gif',`
    Yosho version of <a href="https://tenor.com/view/racism-gif-25147153" target="_blank">this meme</a>
    `);



colCreator('snow26',`
    Redraw of a previous piece
    `);


colCreator('snow27',`
    Redraw of a previous piece again
    `);


colCreator('snowyPooter',`
    The two gays playing games together
    `);


colCreator('snowyStrangle',`
    Snowy getting what he deserves
    `);


colCreator('snow28',`
    Redraw of the christmas piece
    `);


colCreator('snow29',`
    Nom qwq
    `);


colCreator('snowyCrack',`
    Yosho died qwq
    `);


colCreator('snowyValentines',`
    Valentines gift <3
    `);


colCreator('snowyKitchenLick',`
    Snowy lickin me :angi:
    `);


colCreator('owo2',`
    owo (part 2)
    `);


colCreator('snowi',`
    The two gay's on a date,<br>
    drawn by a <a target="_blank" href="https://bsky.app/profile/snowiwakgoreng.bsky.social">different snowi lol</a>
    `);


//  v1rtualtrapp1

colCreator('V1RTUALTRAPP1',`
    Commission by <a href="https://www.etsy.com/listing/1627367588" target="_blank">V1RTUALTRAPP</a>
    `);


colCreator('V1RTUALTRAPP2',`
     Commission by <a href="https://www.etsy.com/listing/1585723012" target="_blank">V1RTUALTRAPP</a>, paid by Snowy
    `);


colCreator('V1RTUALTRAPP3',`
    Commission by <a href="https://www.etsy.com/listing/1588749552" target="_blank">V1RTUALTRAPP</a> #3
    `);


colCreator('V1RTUALTRAPP4',`
    Commission by <a href="https://www.etsy.com/listing/1627367588" target="_blank">V1RTUALTRAPP</a> #4
    `);


colCreator('nyxie',`
    Ych by <a href="https://www.etsy.com/listing/1778678177/sweet-treat-ych" target="_blank">Nyxie</a> paid by snowy again lol.
    `); 


colCreator('nyxie2',`
    Snowy (rudely) grabbin yosho's cheecks, ych by <a target="_blank" href="https://www.etsy.com/listing/1724299481/squishy-cheekies-ych">Nyxie</a>
    `); 


colCreator('HanutedHarvest',`
    Cuddle commission by  <a href="https://www.etsy.com/shop/HanutedHarvest" target="_blank">HanutedHarvest</a> paid by snowy.
    `); 


colCreator('sirsquidbee',`
    Divorce selfie!! o(≧∇≦o)<br>by <a target="_blank" href="https://ko-fi.com/sirsquidbee">sirsquidbee</a>  
    `); 


colCreator('kyat',`
    Commission (paid by snowy) by <a href="https://twitter.com/Kyat_Nguyen" target="_blank">Kyat</a>
    `)


colCreator('kyat2',`
    Fish eye lens flushed yosho by <a href="https://twitter.com/kyat2_Nguyen" target="_blank">kyat</a>
    `)

//  others

colCreator('fbatcat',`
    Art by <a href="https://twitter.com/fbatcat" target="_blank">@FBatcat</a> on Twitter
    `)


colCreator('grapviee',`
    Art by <a href="https://twitter.com/grapviee" target="_blank">@Grapviee</a> on Twitter
    `)


colCreator('vird',`
     Birthday art by <a href="https://twitter.com/virdthebird" target="_blank">@Virdthebird</a> on Twitter
    `)


colCreator('sori',`
     Raffle art by <a href="https://twitter.com/SoriFurry" target="_blank">@SoriFurry</a> on Twitter
    `)


colCreator('noah',`
    This was a joke by 
	<a href="https://twitter.com/NoahFluffyFolf" target="_blank">@NoahFluffyFolf</a><s> though he got
	yosho's body color wrong smh</s>
    `)


colCreator('wyvro',`
     Fan art by <a href="https://twitter.com/wyvro/status/1308214372997554176" target="_blank">@Wyvro</a> on Twitter
    `)


colCreator('fluffyworks',`
     This was also a joke by <a href="https://www.twitter.com/fluffyworks" target="_blank">@fluffyworks</a> on Twitter
    `)


colCreator('frigid',`
    Secret sona art by <a href="https://www.reddit.com/user/Frigid_NotJustCold1" target="_blank">Fridgid Not Just Cold</a><br>
	<s>But he wrote Yoshimay not Yoshomay big smh</s>
    `)


colCreator('gin',`
    Art by <a href="https://www.instagram.com/sleepiegin/" target="_blank">Gin</a><br>
	<s><a title="dw im not actually mad">he also got Yosho's colors wrong smh</a></s>
    `)


colCreator('peeps1',`
Yosho in the mouth of the gun uh oh, by <a href="https://bunnxiibunpuns.carrd.co/" target="_blank">Peeps</a>
    `)


colCreator('peeps2',`
Yosho nsfw owo, by Peeps again
    `)


colCreator('toxinHyena',`
Free commission by <a href="https://www.reddit.com/user/Toxin-Hyena/comments/p1m4mr/free_commission_for_utestsubject5kk/" target="_blank">u/Toxin-Hyena</a> on Reddit
    `)


colCreator('worm',`
 I was <s>Objectified</s> turned into a 2 headed worm by 
		<a href="https://instagram.com/oh_mr.worm" target="_blank">Mr. Worm</a>
    `)


colCreator('unnamed',`
    Me and a friend, created by said friend. 
    `)
}


/*     art page     */


if (document.getElementById('isArtPage')) {

    
colCreator('juevesDeRacismo.gif', `
    Jueves De Racismo Zeraora. Zeraroa version <a href="https://tenor.com/view/racism-gif-25147153" target="_blank">this meme</a>
    `, '8/11/24');

colCreator('wendellCloseUp', `
    Close up render of <a href="https://fortnite.fandom.com/wiki/Wendell" target="_blank">Wendell</a>'s nose
    `, '10/7/23');

colCreator('worm.webm', `
    <a href="https://instagram.com/oh_mr.worm" target="_blank">Mr. Worm</a><br>
    `, '1/16/22');



//   scenes


colCreator('steve.webm', `
    Cursed Steve animation, inspired by a lot of similar renders on <a href="https://www.reddit.com/r/PhoenixSC/" target="_blank">r/PhoenixSC</a>
    `, '7/31/23');

colCreator('upstairs', `
    2nd floor from Mario 64 (Rendered with Cycles)
    `, '7/8/23');

colCreator('library', `
    Isometric library following <a href="https://www.youtube.com/watch?v=yCHT23A6aJA" target="_blank">3DGreenhorn's isometric bedroom tutorial</a> (Rendered with Cycles)
    `, '2/19/23');

colCreator('peachsCastleBackrooms', `
    Mario 64 backrooms, inspired by <a href="https://www.youtube.com/watch?v=s5H0KHM2mTw" target="_blank">Breaking the Barrier</a> (rendered in Cycles)
    `, '11/5/22');

colCreator('interior1', `
    My first attempt of making a<br>
    photorealistic render on my own.<br>(rendered with Cycles)
    `, '4/2/22');

colCreator('switch', `
    It's a switch. (rendered with Eevee)
    `, '3/3/22');

colCreator('yoshoWorm', `
    YoshoWorm (rendered with Eevee)
    `, '2/8/22');

colCreator('doughnut.webm', `
    Of course it started with a doughnut, tutorial by <a href="https://www.youtube.com/watch?v=nIoXOplUvAw" target="_blank">
    Blender Guru</a>.(rendered with Cycles)
    `, '2/8/22');


//    others


colCreator('ytthumb', `
    Someone on r/blender made a node 3d, so I made one of my <a href="https://www.youtube.com/watch?v=tcvFbYEDL_s" target="_blank">
    Youtube Videos</a> 3d. (Cycles)
    `, '<pre style="margin: 0; padding: 0;">4/17/23  |  <a target="_blank" href="credits/ytthumb.txt"><u>Credits</u></a></pre>');

colCreator('earth', `
    Low poly Earth, following <a href="https://www.youtube.com/watch?v=8FXJJDFAL6o" target="_blank">Polygon<br>
    Runaway's tutorial.</a><br>
    `, '6/3/22');

colCreator('discord', `
    (new) Discord logo
    `, '2/28/22');

colCreator('anvil', `
    Anvil following <a href="https://www.youtube.com/watch?v=yi87Dap_WOc&t" target="_blank">Blender Guru's</a> tutorial<br>
    `, '3/29/22');

colCreator('chess', `
    I modeled all the chess pieces and a
    board. The render it's self I got bored
    of half way in ¯\\_(ツ)_/¯
    `, '<pre style="margin: 0; padding: 0;">2/19/22  |  <a target="_blank" href="credits/none.txt"><u>Credits</u></a></pre>');


//     samyo popup


colCreator('samyoBlep', `
    Blep
    `, '6/9/23');

colCreator('samyoWendellHug', `
    Samyo hugging <a href="https://fortnite.fandom.com/wiki/Wendell" target="_blank">Wendell</a>
    `, '5/23/23');

colCreator('samyoField', `
    <a href="images/renders/ogsamyo.png" target="_blank">Remastering</a> of a render by Samyo of Samyo laying in a field. 
    <a href="https://download.blender.org/demo/geometry-nodes/fields/flower_scattering.blend" target="_blank">(Based on "Flowers Scattering"</a> by Blender Studio.) (Rendered with Cycles)
    `, '5/23/23');


//     bedroom isometric

colCreator('night_1x1', `
    1x1
    `, 'bedroom');

colCreator('night_16x9', `
    16x9 wallpaper version
    `, 'bedroom');

colCreator('night_9x16', `
    9x16 wallpaper version
    `, 'bedroom');

colCreator('day_1x1', `
    1x1 alternate daytime version
    `, 'bedroom');

colCreator('day_16x9', `
    16x9 wallpaper day
    `, 'bedroom');

colCreator('day_9x16', `
    9x16 wallpaper day
    `, 'bedroom');
}