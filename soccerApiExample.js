async function main(){
    require('isomorphic-fetch');
    var response = await fetch("https://app.sportdataapi.com/api/v1/status?apikey=cf894070-4f19-11ed-8408-150412a3010d");
    var data = await response.json();
    console.log(data);
    response = await fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=cf894070-4f19-11ed-8408-150412a3010d&country_id=42');
    data = await response.json();
    console.log(data);
}


main();