# API-RIOT-NODEJS

A code in nodejs!

It allows you to display nicks, current leagues, stats, wins or losses.

Just go to API RIOT

https://developer.riotgames.com/

Take your key, insert it in const key = '';

To get the player id no big deal, just go to api riot docs.

https://developer.riotgames.com/apis

click on summoner-v4, go to the bottom and insert in the box 'summonerName'. required' your friend's nickname (identical to the one on league of legends'.

This will give you an api json.

example: {

{"id": "ZHd2VXBU5vuGumSIty1WXq5OqWu0XpAfXG8TyjIgDSwAGlU", "accountId": "anqDJObR-FBip3fknhF1CzTMhKZLUuy6t4Gn5SS2PQgiE6I", "puuid":"e8cRkCQwOufJo8iZHzhpsLWKtexH8Y1H8kPc7yN52nDoozXBNG5jX7IihrByGbuiGu4b-K4KAYzfgA", "name": "Nogoretas", "profileIconId":13, "revisionDate":1578344772000, "summonerLevel":90}

Take the first ID =>

ZHd2VXBU5vuGumSIty1WXq5OqWu0XpAfXG8TyjIgDSwAGlU

Add to your player base

const PLAYERNAME = 'ZHd2VXBU5vuGumSIty1WXq5OqWu0XpAfXG8TyjIgDSwAGlU';

}