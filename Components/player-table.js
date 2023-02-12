

export class PlayerTable extends HTMLElement { //defining methods inside a class
    constructor(){
        super();
    }

    connectedCallback(){ //created method inside the class super.
        var playerRows = '';
        var players = epl2018data[this.getAttribute('team')].players;
        Object.keys(players).forEach(function(playerId){ //looping over object
            var player = players[playerId];
            playerRows += `
            <tr>
                <td>${player.full_name}</td>
                <td>${player.position}</td>
                <td>${player.age}</td>
                <td>${player.height}</td>
                <td>${player.weight}</td>
                <td>${player.appearances_overall}</td>
                <td>${player.goals_overall}</td>
                <td>${player.assists_overall}</td>
                <td>${player.yellow_cards_overall}</td>
                <td>${player.red_cards_overall}</td>
            </tr>`
        })
        this.innerHTML = `
        <h2>${epl2018data[this.getAttribute('team')].team.name}</h2>
        <table id="homeTable" class="table">
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Age</th>
                <th>Height</th>
                <th>App(s)</th>
                <th>Sub(s)</th>
                <th>Goal(s)</th>
                <th>Assist(s)</th>
                <th>YC</th>
                <th>YR</th>
            </tr>
            ${playerRows}
        </table>`
        
    }
}


// function parseQueryParameters(queryString){ 
//     var result = {};
//     // if string starts with questionMark then remove ?
//     if(queryString.startsWith('?')){
//         queryString = queryString.slice(1);
//     }
//     //key=stuff&team=Arsenal
//     var splitQuery = queryString.split('&');
//     // ['key=stuff', 'team=Arsenal']
//     splitQuery.forEach(function(keyValueString){
//         var key = keyValueString.split('=')[0]; //getting the key
//         var value = keyValueString.split('=')[1]; // getting the value of key value pair.
//         result[key] = value;
//     })

//     return result;
// }