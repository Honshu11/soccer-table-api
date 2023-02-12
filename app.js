// SOCCER API 
import {PlayerTable} from './Components/player-table.js'


var teamList;
var teamListApiOne;



async function main2(){
    customElements.define('player-table', PlayerTable);

    console.log(epl2018data);
    //var response = await fetch('arsenal.js', {
     //   headers: {
        //    'content-type': 'application/json'
       // }
    //});
    // console.log(response.status);
    // var data = await response.json();
    // console.log(data);
    // teamListApiOne = data;
    teamList = Object.values(epl2018data);
    console.log(teamList);

    var awayDropdown = TeamSelect('Away');
    awayDropdown.classList.add('away');
    document.querySelector('.team-selection-container').appendChild(awayDropdown); 

    var homeDropdown = TeamSelect('Home');
    homeDropdown.classList.add('home');
    document.querySelector('.team-selection-container').appendChild(homeDropdown);

    // let awayDropdown = teamSelectTwo('Away');
    // awayDropdown.classList.add('away');
    // document.querySelector('.team-selection-container').appendChild(awayDropdown);

    // let homeDropdown = teamSelectTwo('Home');
    // homeDropdown.classList.add('home');
    // document.querySelector('.team-selection-container').appendChild(homeDropdown);
}

function main(){
    init(); 

    main2();
}

function init(){
    // parse URL to get basic ROUTE
    parseQueryParameters(location.search);
    // IF team detail page then parse team.name, call main2() to fetch.
        // using DOM manipulation add team name to team detail page
    // in ALL cases, switch pages calling the ROUTE function()
    
}



function TeamSelect(team){
    var dropdown = document.createElement('div'); // creates div element
    dropdown.classList.add('dropdown'); // adds dropdown to the div element.
    dropdown.innerHTML = `<h2>Select ${team} team</h2> <ul></ul>`; // selects teams from list provided. 
    teamList.forEach(function(entry){
        //console.log(entry.team.name);
        var option = document.createElement('li'); // creates a p element
        var image = document.createElement('img'); // creates an img element
        image.setAttribute('src', entry.team.image); // sets attribute inside the provided element.
        //image.classList.add('logo');
        option.appendChild(image);
        var teamName = document.createElement('span');
        teamName.textContent = entry.team.name;
        option.appendChild(teamName);
        var list = dropdown.querySelector('ul');
        list.appendChild(option);
        option.addEventListener('click', function(event){ // event handler
            option.style.backgroundColor = '#aaf';
            //dropdown.remove();
            createTeamTable(entry.team.name, dropdown);
             // removed newly created table
        });
    })
    return dropdown;
}

//practice with arrow function.

// const teamSelectTwo = (team) => {
//     let dropdown = document.createElement('div');
//     dropdown.classList.add('dropdown');
//     dropdown.innerHTML = `Select ${team} team`;
//     teamList.forEach(entry => {
//         let option = document.createElement('option');
//         let image = document.createElement('img');
//         image.setAttribute('src', entry.team.image);
//         option.appendChild(image);
//         let teamName = document.createElement('span');
//         teamName.textContent = entry.team.name;
//         option.appendChild(teamName);
//         dropdown.appendChild(option);
//         option.addEventListener('click', (event) => {
//             option.style.backgroundColor = '#aaf';
//             createTeamTable(entry.team.name);
//             dropdown.remove();
//         })
//     })
//     return dropdown;
// }


function createTeamTable(team, dropdown){
    //console.log(team);
    var playerTable = document.createElement('player-table');
    playerTable.setAttribute('team', team);
    var container = document.querySelector('.team-selection-container');
    container.appendChild(playerTable);
    container.replaceChild(playerTable, dropdown);
    
}

main();