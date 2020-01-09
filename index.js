var https = require('https');
var http = require('http');

let output = ['']

    const key = 'RGAPI-f5c263a7-1137-4c1c-b9a7-4cdef0738fcd';
    const URLKEY = '?api_key=';
    const port = '8080';

    
    const EU = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/';
    const NA1 = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/';

    // <= PRO =>
    const TFBLADE = 'KL0E7Za3_sU4sz0wnrAULo1nmn1bGrglKauxXzQJDGRYf7g';
    // <= IRL =>
    const Thomas = 'ZHd2VXBU5vuGumSIty1WXq5OqWu0XpAfXG8TyjIgDSwAGlU';

    // Doesn't work when you put multiple players :(
    const PLAYERID = [Thomas,TFBLADE];
    PLAYERID.forEach(id => {
        // console.log('Here the different id');
        // console.log(id);
        // console.log('continuation');
        const responses = []
        https.get(EU + id + URLKEY + key, (rr) => {
            rr.on('data', (chunk) => {
                responses.push(JSON.parse(chunk));
            });
            rr.on('end', () => {
                responses.forEach((item) => {
                    for (let i = 0; i < item.length; i++) {
                        output += "Name : " + item[i].summonerName + " League : " + item[i].queueType + "\n\tRank : " + item[i].tier + " " + item[i].rank + " " + item[i].leaguePoints + " LP Nombre de victoires : " + item[i].wins + " Nombre de defaites : " + item[i].losses + " \n\n";
                        // console.log(output);
                        
                    }
                })
            });
        });
    });
    
 
     var server = http.createServer(function (req, res) {

        res.write(output); //write a response to the client
        res.end(); //end the response

    }).listen(port, () => {console.log('Server started on port '+ port);});

    