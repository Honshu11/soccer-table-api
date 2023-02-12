require('isomorphic-fetch');


async function main(){
    var response = await fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=cf894070-4f19-11ed-8408-150412a3010d&country_id=42');
    var data = await response.json();
    teamListApiOne = data;

    response = await fetch('https://api.football-data-api.com/league-teams?key=test85g57&season_id=1625&include=stats');
    data = await response.json();
    playerListApiTwo = data;
    

    response = await fetch('https://api.football-data-api.com/league-players?key=example&season_id=1625');
    data = await response.json();
    var playerList = data.data;
    
    for(var i = 2; i < data.pager.max_page + 1; i++){
        response = await fetch(`https://api.football-data-api.com/league-players?key=example&season_id=1625&page=${i}`);
        nextPageData = await response.json();
        playerList = playerList.concat(nextPageData.data);
    }
    //console.log(playerList);
    //console.log(playerList.length);
    //console.log(data.pager);
    data = mergeData(teamListApiOne.data, playerListApiTwo.data, playerList);
}

function compareByName(a, b){ // compares both teams with different API
    if(a.name > b.name){
        return 1;
    } else if(b.name > a.name){
        return -1;
    } else {
        return 0;
    }
}

// function cleanName(item){
//     var suffixes = [" FC", " AFC", " SC"];
//     suffixes.forEach(function(suffix){
//         if(item.name.endsWith(suffix)){
//             item.name = item.name.slice(0, -suffix.length);
//         }  
//     })   
// }

function mergeData(teamList, teamListTwo, playerList){ 
    teamList.sort(compareByName);
    //console.log(teamList);
    teamListTwo.sort(compareByName);
    //var teamName = teamList[0].name; //teamList first element in array and getting the name attribute of said array.
    //var teamNameTwo = teamListTwo[0].name;
    //console.log(teamName);
    //console.log(teamNameTwo);
    var list;
    if(teamList.length > teamListTwo.length){
        list = teamList;
    } else {
        list = teamListTwo;
    }
    var premierLeagueTeams = {};
    teamListTwo.forEach(function(team){
        delete team.additional_info;
        delete team.stats;
        premierLeagueTeams[team.name] = {
            team: team,
            players: {},
        };
        //console.log(Object.keys(item2));
        var found = false;
        playerList.forEach(function(player){
            if(team.id == player.club_team_id){
                found = true;
                premierLeagueTeams[team.name].players[player.id] = player;
            }
            //console.log(item.name);
        })
       // console.log(found, item2.name);
    })
    //console.log(JSON.stringify(premierLeagueTeams)); // make object "prettier"
    //console.log(Object.keys(premierLeagueTeams).length); //converts object into array
    console.log('var epl2018data = ' + JSON.stringify(premierLeagueTeams));
}

main();